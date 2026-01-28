import { GoogleGenAI, Type } from "@google/genai";
import { GeminiAnalysis, LanguageCode, Question } from "../types";
import { QUESTIONS } from "../constants";

const getGeminiAnalysis = async (
  answers: Record<number, number>,
  language: LanguageCode,
  ecoScore: number,
  socScore: number
): Promise<GeminiAnalysis> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error("API Key not found");
    return {
      ideology: "Unknown",
      description: "API Key missing. Cannot generate analysis.",
      keyFactors: []
    };
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });

  // Construct a textual representation of the user's stance
  const userResponses = Object.entries(answers).map(([id, score]) => {
    const q = QUESTIONS.find(q => q.id === Number(id));
    if (!q) return "";
    let agreement = "";
    if (score === 2) agreement = "Strongly Agree";
    if (score === 1) agreement = "Agree";
    if (score === 0) agreement = "Neutral";
    if (score === -1) agreement = "Disagree";
    if (score === -2) agreement = "Strongly Disagree";
    return `- "${q.text['en']}": ${agreement}`;
  }).join("\n");

  const prompt = `
    Analyze the political political ideology of a person based on these survey answers.
    They scored Economic: ${ecoScore} (-10 Left to 10 Right) and Social: ${socScore} (-10 Libertarian to 10 Authoritarian).
    
    Survey Answers:
    ${userResponses}

    Provide the response in the following language: ${language}.
    
    Return a valid JSON object with the schema:
    {
      "ideology": "A short 2-3 word label for their ideology",
      "description": "A 2-3 sentence summary of their worldview in a neutral, political science tone.",
      "keyFactors": ["Factor 1", "Factor 2", "Factor 3"] (3 bullet points explaining why)
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            ideology: { type: Type.STRING },
            description: { type: Type.STRING },
            keyFactors: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["ideology", "description", "keyFactors"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No text returned");
    
    return JSON.parse(text) as GeminiAnalysis;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      ideology: "Error",
      description: "Could not generate analysis at this time.",
      keyFactors: ["Please try again later."]
    };
  }
};

export { getGeminiAnalysis };