// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAuth ,
//         createUserWithEmailAndPassword ,
//         signInWithEmailAndPassword,
//         signOut,
//  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
 
//  export class Firebase {
//     constructor() {
//       this.firebaseConfig = {
//           apiKey: "AIzaSyCRWIVlXQnEwuBR67ggUulOZCMPYThZ3nY",
//           authDomain: "hnam-1a67b.firebaseapp.com",
//           databaseURL: "https://hnam-1a67b-default-rtdb.firebaseio.com",
//           projectId: "hnam-1a67b",
//           storageBucket: "hnam-1a67b.appspot.com",
//           messagingSenderId: "1023573683053",
//           appId: "1:1023573683053:web:229a2a9495b4fb25064864",
//           measurementId: "G-5DGX9B37FM"
//       };
//       this.app = initializeApp(this.firebaseConfig);
//       this.auth = getAuth(this.app);
//     }
//   async  resgister(email,pass){
//     return await createUserWithEmailAndPassword(this.auth, email, pass)
//     }

//     async login(email,pass){
//         return await signInWithEmailAndPassword(this.auth, email, pass)  
//     }
//    async logout(){
//         return await signOut(this.auth)
//     }
// }
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

export class Firebase {
  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyCRWIVlXQnEwuBR67ggUulOZCMPYThZ3nY",
      authDomain: "hnam-1a67b.firebaseapp.com",
      projectId: "hnam-1a67b",
      storageBucket: "hnam-1a67b.appspot.com",
      messagingSenderId: "1023573683053",
      appId: "1:1023573683053:web:229a2a9495b4fb25064864",
    };
    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
  }
  

  async register(email, pass) {
    return await createUserWithEmailAndPassword(this.auth, email, pass);
  }

  async login(email, pass) {
    return await signInWithEmailAndPassword(this.auth, email, pass);
  }

  async logout() {
    return await signOut(this.auth);
  }
  
}