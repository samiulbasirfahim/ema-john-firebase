// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDHe9uT-tZWNYA24eUuGXQ4wk49La230N8",
	authDomain: "ema-john-268e2.firebaseapp.com",
	projectId: "ema-john-268e2",
	storageBucket: "ema-john-268e2.appspot.com",
	messagingSenderId: "499670089411",
	appId: "1:499670089411:web:1efaf32dd57675ccadec76",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
