# CRUD API with MongoDB, ExpressJS, NodeJS & React

## About Project
Simple application using the MERN stack. Also testing the front-end framework React Bootstrap

The App handles the creation, retrieval, updating and deletion of data (*CRUD Operations*) in this case, for Teachers information.


### Folder Structure Overview
```
.
├── config
│   └── db.js
├── controllers
│   └── teachersController.js
├── models
│   └── TeachersModel.js
├── routes
│   └── api
│       └── teachersRoutes.js
├── .env
└── frontend
    ├── src
    │   ├── components
    │   │   └── TeachersTable.jsx
    │   ├── pages
    │   │   └── HomePage.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── .env
```


### Path Overview: 
- *Backend:* ``~/Desktop/project-todo``
- *Frontend:* ``~/Desktop/project-todo/frontend``

## Getting Started

### Installation
1. Clone the repo
```
    git clone https://github.com/mauriciorfdev/project-todo.git
```

2. Install NPM Packages (*On Backend & Frontend*)
```
npm install
```

3. Enter each API KEY (*.env* file) for:

- __BACKEND__:
```
    MONGO_URI = <your string>
```
- __FRONTEND__ ( *TeachersTable Component* ):

```
    VITE_API_URL = http://localhost:5000/api/teachers
```

### Usage
- Navigate to the Root Directory (project-name)
1. Run the Backend Server: ``npm run dev``
```
Server listen on port 5000...
Connected to MongoDB Atlas!
```
2. Change to the Frontend directory: ``cd frontend`` and then:
3. Run the Frontend Server: ``npm run dev`` 
```
VITE v5.4.11  ready in 258 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

#### *Usage Demo*
![DEMO](https://private-user-images.githubusercontent.com/139261114/401317563-70f8c29c-f679-4290-bc6c-38a51cf6e7ec.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzY0MjY4MjIsIm5iZiI6MTczNjQyNjUyMiwicGF0aCI6Ii8xMzkyNjExMTQvNDAxMzE3NTYzLTcwZjhjMjljLWY2NzktNDI5MC1iYzZjLTM4YTUxY2Y2ZTdlYy5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwOVQxMjQyMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hOTI1MTI2N2NkYmFhMGYyM2EwZGZmYjA0MTQ0N2QxNGUzMmFkZmI5M2QwZTdmZTQ5MDc1Nzc2NjA2MDVlODIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.U94K1AP4Zdr8YdWas2OEyZTE5U9SvoSwhe3DrupVkms)
