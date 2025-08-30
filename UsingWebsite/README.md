# FireDetection App

Welcome to the **FireDetection** app! This application leverages Streamlit to provide real-time fire detection capabilities using machine learning and computer vision. The goal is to help prevent fire hazards and assist in timely emergency responses.



## 📋 Features

- **Real-time Fire Detection**: Detect fire using detected images or live video.
- **Fast and Accurate**: Uses machine learning models to identify potential fire hazards.
- **User-friendly Interface**: Intuitive UI to easily detected images and get results.
- **Interactive Results**: View detection outputs with confidence scores and fire zones.

---










# Table of Contents
Introduction

Features

Technologies Used

Setup Instructions

Usage

Error Handling

Future Enhancements

Contact

# Introduction
The Fire Detection Project is designed to detect fires in real-time using a combination of hardware and machine learning. It uses a camera for image-based fire detection, smoke and temperature sensors for environmental monitoring, and an Arduino board to interface with the sensors. The system sends alerts via SMS when a fire is detected.

# Features
Real-time fire detection using image classification with Convolutional Neural Networks (CNN).

Smoke and temperature monitoring using MQ2 and DHT11 sensors.

Automated SMS alerts during fire detection using Twilio.

Data storage and visualization in the web application.

Separate display pages for fire data and sensor data.

Technologies Used
# Hardware:

Arduino Uno Board (with DHT11 Temperature Sensor)

MQ2 Smoke Sensor

DHT11 Temperature Sensor

Camera for Fire Image Detection

# Software:

Backend: DjangoDatabase

Frontend: Using React 

Machine Learning: TensorFlow (CNN for image classification)

SMS Service: Twilio

# 🪑 Furniture Marketplace (Pepperfry-Inspired)

Premium furniture marketplace with role-based dashboards for **Admin, Seller, Buyer, Support, Delivery**. Built using **Next.js, TailwindCSS, Node/Express/Django, MongoDB, NextAuth/JWT, Razorpay, Cloudinary**.

---

## 🚀 Setup Instructions

### 📌 Prerequisites
- Install **Node.js** (v18+)
- Install **Python** (v3.10+)
- Install **npm** or **yarn**
- Install **Django** (or a running MongoDB instance)
- Create accounts for:
  - [Razorpay](https://razorpay.com/) (Test Keys)
  - [Cloudinary](https://cloudinary.com/)
  - [Nodemailer Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- Clone this repository:

```bash
git clone 'https://github.com/DONCHAN70047/FireDetection.git'
cd [repository-name]

To enable SMS alerts:

Create a Twilio Account: Twilio Signup

Get your account_sid, auth_token, and twilio_number.

Update the W.py file:

python
Copy
account_sid = 'YOUR_ACCOUNT_SID'
auth_token = 'YOUR_AUTH_TOKEN'
twilio_number = 'YOUR_TWILIO_NUMBER'
Set recipient numbers:

python
Copy
recipient_number1 = '+917895467834'
recipient_number2 = '+917253715211'
recipient_number3 = '+915646546555'
recipient_number4 = '+914565852425'

The software for the Fire Detection Project is developed to integrate hardware components (camera, smoke sensor, temperature sensor, and Arduino board) with machine learning algorithms for real-time fire detection. The software includes:

Backend Development: Handling data storage, sensor communication, and real-time processing using SQLite.

Frontend Development: A user-friendly web interface built with Streamlit for visualizing fire data and sensor statistics.

Machine Learning Integration: Implementation of Convolutional Neural Networks (CNN) for accurate fire detection through image classification.

Alert System: Automated SMS alerts using Twilio when a fire is detected.

The software is designed to be scalable and can be enhanced with additional features in the future. Future improvements will focus on optimizing performance, adding advanced analytics, and expanding the system’s capabilities for better fire detection and user experience.


For any questions, feedback, or suggestions, feel free to contact me via:
GitHub: https://github.com/DONCHAN70047
```




## 🔗 Live Demo
Fire Detection Website :- https://fire-detection-ashen.vercel.app  

⚠️ **Note:**  
- The backend is hosted on **Render** (free tier), so predictions may take some time to load.  
- Hosting the backend on a **paid server** will significantly improve response time and provide faster predictions.  
- For **better accuracy**, you can integrate the hardware components that we provide. Otherwise, the system will make predictions using your device camera by default.

---

## 🛠 Support
If you encounter any issues or have questions, please **contact our team via GitHub**:  
GitHub : https://github.com/DONCHAN70047

