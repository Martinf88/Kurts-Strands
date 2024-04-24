import { collection, getDocs } from "firebase/firestore";

import { db } from "./fire";

const collectionName = "toys";
const collectionRef = collection(db, collectionName);

export async function getToys() {
  const toySnapshot = await getDocs(collectionRef);

  const toyList = toySnapshot.docs.map((doc) => withKey(doc));
  return toyList;
}

function withKey(doc) {
  let o = doc.data();
  o.key = doc.id; // "id" is the document reference
  return o;
}
