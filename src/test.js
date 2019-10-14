import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("XTkQemgp40qt21N0eF1u")
  .collection("cartItems")
  .doc("5XkO0kMAfdt7ZCdswoio");

firestore.doc("/users/XTkQemgp40qt21N0eF1u/cartItems/5XkO0kMAfdt7ZCdswoio");
firestore.collection("/users/XTkQemgp40qt21N0eF1u/cartItems");
