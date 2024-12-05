# Firebase Authentication App
 
Welcome to the Firebase Authentication App! This application is built using React, Firebase Authentication, and Tailwind CSS. It provides a platform for users to register, log in, and manage their accounts securely. The app also includes features like light/dark mode, toaster notifications, and a simple dashboard.

## Features
### User Registration and Login
Users can create an account (sign up) and log in securely using Firebase Authentication. After successful registration, users are redirected to the login page.

### Dashboard
Upon successful login, users are redirected to a dashboard page where they can see a simple interface and a logout button. The page is a placeholder for future user-specific features.

### Logout Functionality
 Users can securely log out from the dashboard.

### Toaster Notifications
Notifications appear as toasts when certain actions are performed (e.g., successful registration, login, etc.). They are displayed for 5 seconds and are centered on the screen for better visibility.

## Prerequisites
To run this app locally, make sure you have the following installed on your machine:

- Node.js
- Firebase Account

## Installation
Follow these steps to install and run the Firebase Authentication App:

### 1. Clone the repository:
```
git clone https://github.com/Sandip1902/React-Firebase-Auth-App
```
### 2. Change into the project directory:
```
cd firebase-auth-app
```

### 3. Install the dependencies:
```
npm install
```
### 4. Configure Firebase:
- Go to the Firebase Console.

- Create a new project or select an existing project.
- Navigate to Authentication > Get Started and enable Email/Password Authentication.
- Go to Project Settings > General > Your apps and register a new Web app.
- Copy the Firebase configuration and add it to the src/firebase.js file.
#### javascript
 ```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```
### App is ready