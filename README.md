# React Native Health Consultation App
---
## **📹📺 Demo Video**  

[![Watch the video](https://img.youtube.com/vi/avvAfCXUes4/0.jpg)](https://youtu.be/avvAfCXUes4)  
🔗 Watch the demo: [https://youtu.be/avvAfCXUes4](https://youtu.be/avvAfCXUes4)  
---

 
## 🛠️ Dependencies
Below are the dependencies used in this project:

```json
"dependencies": {
    "@react-native-firebase/app": "^21.12.0",
    "@react-native-firebase/auth": "^21.12.0",
    "@react-navigation/bottom-tabs": "^7.2.1",
    "@react-navigation/drawer": "^7.2.0",
    "@react-navigation/native": "^7.0.15",
    "firebase": "^11.5.0",
    "react": "19.0.0",
    "react-devtools-core": "^6.1.1",
    "react-native": "0.78.0",
    "react-native-gesture-handler": "^2.24.0",
    "react-native-linear-gradient": "^2.8.3",
    "react-native-reanimated": "^3.17.1",
    "react-native-safe-area-context": "^5.3.0",
    "react-native-screens": "^4.9.2",
    "react-native-vector-icons": "^10.2.0"
}
```

---

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/arijitdas13105/Ayuryuj-Assignment.git
cd Ayuryuj-Assignment
```

### 2️⃣ **Install Dependencies**
Run the following command to install the required dependencies:
 
 npm:
```sh
npm install
```

### 3️⃣ **Set Up Firebase**
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a project and add a new app (Android/iOS).
3. Download the `google-services.json` file (for Android) 
4. Place the file inside the appropriate directory:
   - **Android:** `android/app/`
 

### 4️⃣ **Run the Project**

#### **For Android**
```sh
npx react-native run-android
```

 


## **Work Completed on the React Native App Assignment**  

I have successfully implemented the following features as per the assignment requirements:  

### ✅ **Firebase Authentication**  
- Implemented phone number OTP verification using **Firebase Authentication**.  
- Users can log in using their mobile number and receive an OTP for verification.  

### ✅ **Screens Developed**  
1. **Login Screen**  
   - Integrated with Firebase for OTP-based authentication.  
   - User-friendly UI with smooth OTP input and verification.  

2. **Home Screen**  
   - Displays a welcoming message along with the app logo.  
   - Includes sections such as **"Consult a Doctor"**, **"Book Tests"**, and more.  
   - Implemented **Bottom Navigation** for seamless navigation.  

3. **Doctor Listing Screen**  
   - Displays a **list of doctors** (currently using mock/static data).  
   - Each doctor card includes a **name, specialty, and an image**.  
 
4. **Side Navigation Drawer**  
   - Implemented a **Drawer Navigation** for accessing different sections:  
     - **Home**  
     - **Doctor Listing**  
     - **Profile/Settings**  
     - **Logout/Help**  
   - Can be accessed via swiping or tapping a button.  

### ✅ **Navigation Implementation**  
- **Bottom Navigation Bar** with tabs for Home, Doctor Listing, and Profile.  
- **Side Navigation Drawer** for quick access to different sections.  
- **Smooth navigation transitions** using React Navigation.  

### ✅ **UI Design & Responsiveness**  
   
- Ensured a **responsive layout**  .  
- Maintained a **consistent design** with proper colors, fonts, and spacing.  

 