import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
} from "firebase/firestore";

import { db } from "./fire";

const collectionName = "toys";
const collectionRef = collection(db, collectionName);

export async function getToys() {
  const toySnapshot = await getDocs(collectionRef);

  const toyList = toySnapshot.docs.map((doc) => withKey(doc));
  return toyList;
}

export async function addToys(newToy) {
  await addDoc(collectionRef, newToy);
}

export async function deleteToy(toyId) {
  try {
    await deleteDoc(doc(collectionRef, toyId));
    console.log("Toy deleted successfully");
  } catch (error) {
    console.error("Error deleting toy: ", error);
    throw error;
  }
}

function withKey(doc) {
  let o = doc.data();
  o.key = doc.id; // "id" is the document reference
  return o;
}
