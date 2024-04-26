import { collection, getDocs, addDoc } from "firebase/firestore";

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

function withKey(doc) {
  let o = doc.data();
  o.key = doc.id; // "id" is the document reference
  return o;
}
