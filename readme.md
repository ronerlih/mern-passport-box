# 📦 M-E-R-N + passport box

<!-- ##### :earth_africa: [live]() on heroku -->

## 🍽 Use
-   Fork, or clone and copy what you need

### 🗃️ Folder structure


```
.
├── _assets                <- # project management assets
├── client                 <- # front end react app                        
│   ├── README.md          <- # create react app readme
│   ├── package.json       <- # create react app dev server (hot reloading)
│   ├── public             <- # front end static files 
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── manifest.json
│   └── src                <- # font end source (can also place static files to be packed with webpack)
│       ├── App.js         <- # 🚀 react app entry point 
│       ├── components     <- # reusable components
│       │   ├── Card
│       │   ├── DeleteBtn
│       │   ├── Form
│       │   ├── Grid
│       │   ├── Head
│       │   ├── **ProtectedRoute** <- # protected routes (HOC)
│       │   └── Table
│       ├── index.js
│       ├── pages             <- # page components
│       ├── style.css
│       └── **utils**         <- # front end utils
│           ├── API.js        <- # coments routes front end api
│           ├── useLogPath.js <- # custom hook for development - logs current path
│           └── userAPI.js    <- # user routes front end api
├────────────────────────── **☝️ client 👇 server**
├── controllers               <- # routes function
│   ├── commentsController.js
│   └── userController.js
├── models                    <- # Schemas
│   ├── Comment.js
│   ├── User.js
│   └── index.js
├── routes                    <- # routes (only API routes)
│   ├── api
│   │   ├── comments.js
│   │   ├── index.js
│   │   └── user.js
│   └── index.js
├── utils                     <- # server helper functions 
│   ├── config.js             <- # global config (put anything you like)
│   ├── passport.js           <- # passport setup
│   └── seedDB.js             <- # seed script
├── package.json
├── readme.md
└── server.js                 <- # 🚀 entry point
```