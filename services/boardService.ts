import { Post, Comment } from "../types";
import { db } from "../firebaseConfig";
import { 
  collection, 
  getDocs, 
  addDoc, 
  doc, 
  updateDoc, 
  arrayUnion, 
  increment,
  query,
  orderBy
} from "firebase/firestore";

const COLLECTION_NAME = "posts";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Post));
  } catch (e) {
    console.error("Error fetching posts: ", e);
    return [];
  }
};

export const savePost = async (post: Post): Promise<void> => {
  try {
    // Remove id from post data as Firestore creates its own or we can use setDoc with custom ID.
    // Here we let Firestore generate the ID, but since our UI expects an ID immediately,
    // usually we'd wait for the response. For compatibility with the interface,
    // we just pass the data sans ID, and rely on the fetch to get the ID back.
    const { id, ...postData } = post;
    await addDoc(collection(db, COLLECTION_NAME), {
        ...postData,
        date: new Date().toISOString() // Use ISO string for better sorting
    });
  } catch (e) {
    console.error("Error adding post: ", e);
  }
};

export const saveComment = async (postId: string, comment: Comment): Promise<void> => {
  try {
    const postRef = doc(db, COLLECTION_NAME, postId);
    await updateDoc(postRef, {
      comments: arrayUnion(comment)
    });
  } catch (e) {
    console.error("Error adding comment: ", e);
  }
};

export const likePost = async (postId: string): Promise<void> => {
  try {
    const postRef = doc(db, COLLECTION_NAME, postId);
    await updateDoc(postRef, {
      likes: increment(1)
    });
  } catch (e) {
    console.error("Error liking post: ", e);
  }
};