
## 🚀 Getting Started

Open your terminal, and run the following:
```bash
# Clone the repository
$ git clone https://github.com/andresmgomez/daily-tasks-manager

# Move into the repository
$ cd daily-tasks-manager

# Install dependencies and run the page
$ npm install && npm start
```

## ⚙️ Configuration

In order to store your tasks in **firestore database**, you need to add a valid <em>Firebase configuration</em>

```bash
 # Add a folder called "private" inside src directory 
 $ cd src && mkdir private
 # Add a file called firebaseConfig.js
 $ touch firebaseConfig.js
```

1. Visit [firebase console](https://console.firebase.google.com/) website, and select your <u>your firebase project</u>.

2. Then, click on <strong>Project Settings</strong>, and under <em>General</em> tab, copy and paste your configuration

```javascript
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
   apiKey: YOUR_FIREBASE_API_KEY,
   authDomain: YOUR_FIREBASE_DOMAIN_KEY,
   projectId: YOUR_PROJECT_ID,
   storageBucket: YOUR_STORAGE_BUCKET,
   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
   appId: YOUR_APP_ID,
   measurementID: YOUR_MEASUREMENT_ID
}

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
export default app;
```

## 🔓 Authentication

To allow user authentication using <em>Email and password</em>, make sure to <u>enable</u> the status, under <strong>Sign-in Provider</strong>