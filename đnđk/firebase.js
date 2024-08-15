// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

export class Firebase {
  constructor() {
    this.firebaseConfig = {
        apiKey: "AIzaSyAWHVihPLlzap06sftUGDWqB-Ycdwiz1A4",
        authDomain: "spck-hnam.firebaseapp.com",
        databaseURL: "https://spck-hnam-default-rtdb.firebaseio.com",
        projectId: "spck-hnam",
        storageBucket: "spck-hnam.appspot.com",
        messagingSenderId: "80045022187",
         appId: "1:80045022187:web:e293801849944d68ca97ae",
        measurementId: "G-6LZ1Q26ND8"
    };

    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
    console.log("Firebase initialized");
  }

  async register(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  }

  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }
}
