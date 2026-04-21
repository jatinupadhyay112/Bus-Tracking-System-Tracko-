# 🚌 Tracko
### Real-time School Bus Tracking App

> A mobile application that helps parents track their child's school bus in real-time — eliminating unnecessary wait times at bus stops.

---

## 📱 About Tracko

Tracko is a **React Native** mobile application built for schools and colleges to provide real-time bus tracking to parents. The app supports three types of users — **Drivers**, **Parents**, and **Admins** — each with a dedicated experience.

---

## 👥 Team

| Member | Role | Technology |
|--------|------|-----------|
| Jatin | API Integration & Database | Firebase, MongoDB, OSRM |
| Diya | Frontend Development | React Native, Expo |
| Preeti | Backend Development | Node.js,socket.IO,express-backend framework |
| Hummer | Database & Schema | MongoDB, Firebase Realtime DB |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Mobile App | React Native + Expo |
| Language | TypeScript |
| UI Library | React Native Paper |
| Navigation | React Navigation |
| Maps | OpenStreetMap + Leaflet |
| Backend | Node.js + Express |
| Real-time Sync | Firebase Realtime Database |
| Authentication | Firebase Auth |
| Push Notifications | Firebase Cloud Messaging (FCM) |
| Database | MongoDB Atlas |
| ETA Calculation | OSRM (Open Source) |

---

## 📲 App Features

### 🚗 Driver
- One-tap Route Start / Stop
- Auto background GPS sharing
- Today's route view

### 👨‍👩‍👧 Parent
- Live bus location on map
- Real-time ETA ("Bus 8 min mein aayegi")
- Push notifications
- Route history

### 👨‍💼 Admin
- Dashboard — all buses overview
- Manage drivers & parents
- Manage routes
- Live tracking of all active buses

---

## 📁 Project Structure

```
Tracko/
├── app/                  # React Native (Diya)
│   ├── screens/
│   │   ├── driver/
│   │   ├── parent/
│   │   └── admin/
│   ├── components/
│   ├── navigation/
│   └── firebase.js
│
├── backend/               #socket.io real-time GPS(Preeti)
│   ├── node_modules/
├── package.json
├── server.js
├── models/
│   └── Bus.js
├── .env
├── database/             # MongoDB Schema (Hummer + Jatin)
│   ├── schemas/
│   │   ├── user.js
│   │   ├── bus.js
│   │   ├── route.js
│   │   └── session.js
│   └── firebase/
│       └── structure.json
│
├── docs/                 # Documentation
│   ├── API_Doc.docx
│   └── DB_Schema.md
│
├── .env.example          # Environment variables template
├── .gitignore
└── README.md
```

---

## 🔗 API Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/login | User login |
| POST | /api/auth/register | User register |
| POST | /api/driver/route/start | Start bus route |
| POST | /api/driver/location | Send live GPS location |
| GET | /api/parent/bus/live | Get live bus location + ETA |
| GET | /api/admin/dashboard | Admin dashboard stats |
| GET | /api/admin/live | All active buses |

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- Express- server framework, socket.IO
- Expo Go (on your phone)
- MongoDB Atlas account
- Firebase account

### Frontend Setup
```bash
cd app
npm install
npx expo start
```

### Backend Setup
```bash
cd backend
install Node.js
npm init -y
package.json
project structure
server.js
```

---

## 🔐 Environment Variables

Create a `.env` file in root (never push to GitHub!):

```
FIREBASE_API_KEY=your_key_here
FIREBASE_AUTH_DOMAIN=your_domain_here
FIREBASE_DATABASE_URL=your_db_url_here
FIREBASE_PROJECT_ID=your_project_id
MONGODB_URI=your_mongodb_uri
```

---

## 📊 Current Status

- [x] Project Planning
- [x] Tech Stack Finalized
- [x] API Documentation
- [x] Database Schema Design
- [x] Firebase Project Setup
- [ ] Frontend Development (In Progress)
- [ ] Backend Development (In Progress)
- [ ] Integration & Testing
- [ ] Final Demo

---

## 🏫 Project Info

**Course:** B.Tech CSE (2023-2027)

**Subject:** Mern based project

---

> Built with ❤️ by Team POINT BLANK
