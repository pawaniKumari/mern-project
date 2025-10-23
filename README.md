# MERN Stack Project

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The project also integrates Firebase for image uploads, React Quill for rich text editing, and Tailwind CSS for styling. It is designed to allow users to create, manage, and view posts with rich content and images.

## Features

- User authentication and authorization.
- Create, read, update, and delete (CRUD) operations for posts.
- Image upload functionality using Firebase Storage.
- Rich text editing with React Quill.
- Responsive design using Tailwind CSS.
- Role-based access control for admin and regular users.

## Project Structure

```
mern-project/
├── api/                # Backend code
│   ├── controllers/    # Route handlers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── utils/          # Utility functions
├── client/             # Frontend code
│   ├── src/            # React application source
│   ├── public/         # Static assets
│   └── ...             # Other frontend files
└── README.md           # Project documentation
```

## Prerequisites

- Node.js and npm installed.
- MongoDB database setup.
- Firebase project configured for storage.

## Setup Instructions

### Backend

1. Navigate to the `api` folder:
   ```bash
   cd api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside api directory and configure the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase in `src/firebase.js` with your Firebase project credentials.
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The Firebase configuration values are stored in a `.env` file in the `client` directory to ensure sensitive information is not exposed in the codebase. The following variables need to be defined in the `.env` file:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

Replace the placeholder values with your actual Firebase credentials. Ensure the `.env` file is added to `.gitignore` to prevent it from being committed to version control.

## Usage

1. Open the frontend in your browser at `http://localhost:3000`.
2. Use the application to create and manage posts.

## Technologies Used

- **Frontend:** React, Tailwind CSS, React Quill
- **Backend:** Node.js, Express.js, MongoDB
- **Other:** Firebase Storage, Flowbite React

## License

This project is licensed under the MIT License.
