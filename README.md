# A starter project for React/Redux

> A minimalistic React/Redux starter project

To use:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-org]/[your-app].git
cd [your-app] && npm install
```

To start the Webpack dev server, run `npm start`, and go to [http://localhost:8080](http://localhost:8080).

This is the structure of this boilerplate:

```
.
├── client
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── AddWord.jsx
│   │   ├── App.jsx
│   │   ├── Word.jsx
│   │   └── Words.jsx
│   ├── containers
│   │   └── WordsContainer.js
│   ├── reducers
│   │   ├── index.js
│   │   └── words.js
│   └── index.js
├── .gitignore
├── index.html
├── main.css
├── package.json
├── README.md
└── webpack.config.js
```
