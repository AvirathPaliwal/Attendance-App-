import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBmX-8iQMomnxHNMr225KEapdeEln4Nx8k",
  authDomain: "c-60-school-attendence-app.firebaseapp.com",
  databaseURL: "https://c-60-school-attendence-app-default-rtdb.firebaseio.com",
  projectId: "c-60-school-attendence-app",
  storageBucket: "c-60-school-attendence-app.appspot.com",
  messagingSenderId: "278977980280",
  appId: "1:278977980280:web:069c6e1f694e4b96dcca8d"
};

//if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
//}

export default firebase.database()