// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	doc,
	getDoc,
	collection,
	getDocs,
	query,
	where,
	addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: "AIzaSyDuJhpaFZ5gX3cMz86F1Ex7RO95idF449w",
	authDomain: "tienda-rollers.firebaseapp.com",
	projectId: "tienda-rollers",
	storageBucket: "tienda-rollers.appspot.com",
	messagingSenderId: "1030100899540",
	appId: "1:1030100899540:web:5581c703a120e2d784cd41"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getSingleItem(id) {
	const serviceRef = doc(db, "services", id);

	const docSnapshot = await getDoc(serviceRef);
	const item = docSnapshot.data();
	item.id = docSnapshot.id;

	return item;
}

export async function getItems() {
	const servicesRef = collection(db, "services");

	const docsSnapshot = await getDocs(servicesRef);
	const docsArray = docsSnapshot.docs;

	const dataDocs = docsArray.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});

	return dataDocs;
}

export async function getItemsCategory(categoryID) {
	const servicesRef = collection(db, "services");

	const queryCategorySnapshot = query(
		servicesRef,
		where("categoria", "==", categoryID)
	);

	const docsSnapshot = await getDocs(queryCategorySnapshot);
	const docsArray = docsSnapshot.docs;

	const dataDocs = docsArray.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
	return dataDocs;
}

export async function sendPurchaseOrder(order) {
	const ordersRef = collection(db, "orders");

	let newPurchaseOrder = await addDoc(ordersRef, order);

	return newPurchaseOrder.id;
}
