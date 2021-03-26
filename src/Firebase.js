import firebase from 'firebase';
import store from "./store";
const settings = {timestampsInSnapshots:true};
const config = {
    apiKey: "AIzaSyCyRnai_gzx-vLYwj_rRjbqGqgM_QzWaZQ",
    authDomain: "biblioteka-b7a2c.firebaseapp.com",
    databaseURL: "https://biblioteka-b7a2c-default-rtdb.firebaseio.com",
    projectId: "biblioteka-b7a2c",
    storageBucket: "biblioteka-b7a2c.appspot.com",
    messagingSenderId: "697213948206",
    appId: "1:697213948206:web:dde1377e0ddd1555ffaabf"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });
export default firebase;