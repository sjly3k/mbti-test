import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDDjx7bEjaocF1Lt3jhFNdg5C6CnCS6C9Y",
    authDomain: "mbti-test-73e67.firebaseapp.com",
    databaseURL: "https://mbti-test-73e67.firebaseio.com",
    projectId: "mbti-test-73e67",
    storageBucket: "mbti-test-73e67.appspot.com",
    messagingSenderId: "156186646770",
    appId: "1:156186646770:web:cd30b59c3807c48f04d86b",
    measurementId: "G-C57WR86S43"
};

export default firebase.initializeApp(firebaseConfig);