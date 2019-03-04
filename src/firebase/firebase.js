import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBLJ6kz6FtjowKdiYzptyYtTYyWSvh68MM",
  authDomain: "todoapp-5923e.firebaseapp.com",
  databaseURL: "https://todoapp-5923e.firebaseio.com",
  projectId: "todoapp-5923e",
  storageBucket: "todoapp-5923e.appspot.com",
  messagingSenderId: "587187425465"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;


// const prodConfig = {
//   apiKey: process.env.REACT_APP_PROD_API_KEY,
//   authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROD_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
// };

// const devConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
// };

// const config =
//   process.env.NODE_ENV === 'production' ? prodConfig : devConfig;