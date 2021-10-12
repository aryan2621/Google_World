import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCCV5kqBCm2aCQ7tkL4AQjMWTkWWnxrcZ0",
    authDomain: "drive-clone-6d50a.firebaseapp.com",
    projectId: "drive-clone-6d50a",
    storageBucket: "drive-clone-6d50a.appspot.com",
    messagingSenderId: "18113601585",
    appId: "1:18113601585:web:41a28f76d1fc6548ed3510"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const auth =new firebase.auth()
 
  const provider =new firebase.auth.GoogleAuthProvider()
  const storage =firebase.storage()
  const db =firebaseApp.firestore()

  export {auth,provider,db,storage}