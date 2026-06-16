# 🚀 HireLoop - AI-Powered Hiring Platform

HireLoop is a modern full-stack recruitment platform designed to connect recruiters and job seekers in one seamless ecosystem. Recruiters can create company profiles, post jobs, and manage applicants, while job seekers can explore opportunities and apply for positions through an intuitive and responsive interface.

---

## 🌐 Live Demo

🔗 **Live Website:** 

---

## 📂 GitHub Repository

🔗 **Client Repository:**  https://github.com/piasmajumdar/final-hireloop/

🔗 **Server Repository:** [Server Repository Link]

---

# 📌 Project Purpose

HireLoop aims to simplify the hiring process by providing a centralized platform where:

* Recruiters can manage companies and job postings
* Job seekers can discover and apply for jobs
* Role-based authentication ensures secure access
* Modern UI and responsive design improve user experience

---

# ✨ Key Features

## 🔐 Authentication & Authorization

* Email & Password Authentication using BetterAuth
* Google Sign-In Integration
* Role-Based Registration (Recruiter / Job Seeker)
* Protected Dashboard Routes
* JWT-Based Authentication
* Secure Session Management

## 🏢 Company Management

* Create and manage company profiles
* Upload company logos
* Associate recruiters with companies
* View and update company information

## 💼 Job Management

* Post new job openings
* View active job listings
* Manage recruiter-specific jobs
* Job details page
* Company-linked job posts
* Application deadline management

## 📊 Recruiter Dashboard

* Dashboard statistics cards
* Total Jobs Posted
* Active Jobs
* Closed Jobs
* Applicant Overview
* Responsive Sidebar Navigation

## 🎨 User Experience

* Responsive design for all devices
* Dark Theme UI
* Modern HeroUI Components
* Interactive Dashboard Layout
* Loading States
* Form Validation
* Toast Notifications

---

# 🛠️ Technologies Used

## Frontend

* Next.js 15
* React.js
* Tailwind CSS
* HeroUI
* Gravity UI Icons
* Motion
* BetterAuth
* React Hook Form

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication
* CORS
* dotenv

## Deployment

* Vercel
* MongoDB Atlas

---

# 📦 NPM Packages

### Frontend

```bash
npm install @heroui/react
npm install better-auth
npm install react-hook-form
npm install motion
npm install mongodb
```

### Backend

```bash
npm install express
npm install mongodb
npm install cors
npm install dotenv
npm install nodemon
```

---

# 📁 Project Structure

```bash
src
│
├── app
│   ├── dashboard
│   ├── auth
│   ├── jobs
│   └── companies
│
├── components
│   ├── shared
│   ├── dashboard
│   └── ui
│
├── lib
│   ├── auth
│   ├── core
│   ├── actions
│   └── services
│
├── providers
├── hooks
└── assets
```

---

# 🔒 Role-Based Access

### Recruiter

* Create Company
* Manage Company Profile
* Post Jobs
* View Posted Jobs
* Access Recruiter Dashboard

### Job Seeker

* Browse Jobs
* View Job Details
* Apply for Jobs
* Manage Applications

---

# ⚙️ Environment Variables

### Frontend (.env.local)

```env
NEXT_PUBLIC_BASE_URL=your_server_url

BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Backend (.env)

```env
PORT=5000

MONGO_DB_URI=your_mongodb_connection_string

CLIENT_URL=http://localhost:3000
```

---

# 🚀 Installation

## Clone Client

```bash
git clone YOUR_CLIENT_REPOSITORY
```

## Clone Server

```bash
git clone YOUR_SERVER_REPOSITORY
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

## Run Backend

```bash
nodemon index.js
```

---

# 📱 Responsive Design

Optimized for:

* 📱 Mobile
* 📟 Tablet
* 💻 Laptop
* 🖥️ Desktop

---

# 🎯 Current Modules

✅ Authentication System

✅ Recruiter Dashboard

✅ Company Management

✅ Job Posting System

✅ MongoDB Integration

✅ JWT Authentication

✅ Responsive Layout

---

# 🔮 Upcoming Features

* Job Applications
* Applicant Tracking System
* Resume Upload
* Admin Dashboard
* Email Notifications
* AI Resume Screening
* Interview Scheduling

---

# 👨‍💻 Developer

**Pias Majumdar**

LinkedIn: https://www.linkedin.com/in/piasmajumdar/

GitHub: https://github.com/piasmajumdar/

---

# 📄 License

This project is created for educational and portfolio purposes.
