import './App.css';
import firebase from 'firebase/app';
import firebase from 'firebase/firestore';
import firebase from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCPR923AZavQ2YOIabyVvqRjkb3-OORUiE",
  authDomain: "devtalk-465ae.firebaseapp.com",
  projectId: "devtalk-465ae",
  storageBucket: "devtalk-465ae.appspot.com",
  messagingSenderId: "641454844968",
  appId: "1:641454844968:web:e7652694d668d994e6191d",
  measurementId: "G-1RBDWR7GH0"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
