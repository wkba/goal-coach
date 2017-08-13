import * as firebase from 'firebase';

//firebaseの設定から持ってきた。
const config = {
    apiKey: "AIzaSyAwIVuAfNABKKOiF4t7tFHRQPOBEJZG38k",
    authDomain: "goal-coach-a3ec7.firebaseapp.com",
    databaseURL: "https://goal-coach-a3ec7.firebaseio.com",
    projectId: "goal-coach-a3ec7",
    storageBucket: "goal-coach-a3ec7.appspot.com",
    messagingSenderId: "777593707970"
};

//初期化して返している
export const firebaseApp = firebase.initializeApp(config);
