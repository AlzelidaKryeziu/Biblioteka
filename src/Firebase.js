import firebase from 'firebase';
const settings = {timestampsInSnapshots:true};
const config = {
    apiKey:"AIzaSyCyRnai_gzx-vLYwj_rRjbqGqgM_QzWaZQ",
    databaseURL:"https://biblioteka-b7a2c-default-rtdb.firebaseio.com/",
    projectId:"biblioteka-b7a2c"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;