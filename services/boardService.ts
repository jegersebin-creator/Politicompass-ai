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
const LOCAL_STORAGE_KEY = "politicompass_posts";

// --- Local Storage Fallback Helpers ---
const getLocalPosts = (): Post[] => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Local storage error:", e);
    return [];
  }
};

const setLocalPosts = (posts: Post[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  } catch (e) {
    console.error("Local storage error:", e);
  }
};
// --------------------------------------

export const getPosts = async (): Promise<Post[]> => {
  // If Firebase is not initialized, use Local Storage
  if (!db) {
    return getLocalPosts();
  }

  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Post));
  } catch (e) {
    console.warn("Error fetching posts from Firebase (using fallback): ", e);
    return getLocalPosts();
  }
};

export const savePost = async (post: Post): Promise<void> => {
  // Fallback
  if (!db) {
    const posts = getLocalPosts();
    // Create a pseudo-ID for local posts
    const newPost = { ...post, id: `local-${Date.now()}` };
    posts.unshift(newPost); // Add to top
    setLocalPosts(posts);
    return;
  }

  try {
    const { id, ...postData } = post;
    await addDoc(collection(db, COLLECTION_NAME), {
        ...postData,
        date: new Date().toISOString()
    });
  } catch (e) {
    console.error("Error adding post: ", e);
  }
};

export const saveComment = async (postId: string, comment: Comment): Promise<void> => {
  // Fallback
  if (!db) {
    const posts = getLocalPosts();
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      const updatedPost = { ...posts[postIndex] };
      updatedPost.comments = [...(updatedPost.comments || []), comment];
      posts[postIndex] = updatedPost;
      setLocalPosts(posts);
    }
    return;
  }

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
  // Fallback
  if (!db) {
    const posts = getLocalPosts();
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      posts[postIndex].likes = (posts[postIndex].likes || 0) + 1;
      setLocalPosts(posts);
    }
    return;
  }

  try {
    const postRef = doc(db, COLLECTION_NAME, postId);
    await updateDoc(postRef, {
      likes: increment(1)
    });
  } catch (e) {
    console.error("Error liking post: ", e);
  }
};