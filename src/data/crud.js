import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import { db } from "./fire";

//collection ref
const collectionName = "toys";
const toyCollectionRef = collection(db, collectionName);

// queries
const q = query(toyCollectionRef, where());

export async function getToys() {
  const toySnapshot = await getDocs(toyCollectionRef);

  const toyList = toySnapshot.docs.map((doc) => withKey(doc));
  return toyList;
}

export async function addToys(newToy) {
  await addDoc(toyCollectionRef, newToy);
}

export async function deleteToy(toyId) {
  try {
    await deleteDoc(doc(toyCollectionRef, toyId));
    console.log("Toy deleted successfully");
  } catch (error) {
    console.error("Error deleting toy: ", error);
    throw error;
  }
}

export async function updateToy(selectedToyId, updatedToy) {
  const toyDocRef = doc(toyCollectionRef, selectedToyId);

  await updateDoc(toyDocRef, updatedToy);
}

function withKey(doc) {
  let o = doc.data();
  o.key = doc.id; // "id" is the document reference
  return o;
}
