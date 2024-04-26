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

export async function deleteToy(name) {
  const q = query(collectionRef, where("name", "==", name));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((d) => {
    const ref = doc(db, "toys", d.ref.id);
    deleteDoc(ref);
  });
}

function withKey(doc) {
  let o = doc.data();
  o.key = doc.id; // "id" is the document reference
  return o;
}
