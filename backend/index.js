const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const actions = require('./back/action')
const validate = require('./back/validate')
const http = require('http');
const server = http.createServer(app)
const session = require('express-session')
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    cookie:
    {
        maxAge: 1000 * 100,
        httpOnly: true,
    },
    resave: false,
    name: "siid",
    credentials: true,
}));

app.post('/register', (req, res) => {
    const { firstname, lastname, password, email } = req.body
    actions.register({ firstname, lastname, password, email })
    res.json("Added")
})
app.get('/main',validate.checkAuth,(req,res) =>{
    res.json(req.session)
})
app.post('/login', validate.check, (req, res) => {
    res.json("logged in successfully")
})

server.listen(5000, () => console.log(`Server Running at port 5000 `));