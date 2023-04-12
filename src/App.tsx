import { FirebaseCMSApp } from "firecms";
import { useState } from "react";
import "./App.css";
import { packageCollection } from "./collections/packages";
import { playlistCollection } from "./collections/playlist";
import { usersCollection } from "./collections/users";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlLNSrWDF5NFj-G7Dosx7MjEGiMUsTF_k",
  authDomain: "music-box-aa4ef.firebaseapp.com",
  projectId: "music-box-aa4ef",
  storageBucket: "music-box-aa4ef.appspot.com",
  messagingSenderId: "459359176503",
  appId: "1:459359176503:web:1f95d9d242ef4700413cb2",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <FirebaseCMSApp
      name="Music control"
      collections={[packageCollection, playlistCollection, usersCollection]}
      firebaseConfig={firebaseConfig}
    />
  );
}

export default App;
