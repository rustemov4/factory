const actions = require('./action')
const bcrypt = require('bcrypt')
module.exports.checkAuth = function checkAuth(req, res, next) {
    if (req.session.user) {
        next()
    }
    else {

        res.json({ err: "not logged" })
    }
}
module.exports.check = async function check(req, res, next) {
    const { email, password } = req.body
    actions.getUser({ email, password }).then(data => {
        if (data.rows.length === 0) {
            res.json({ err: "no data" })
        }
        else {
            bcrypt.compare(password, data.rows[0].password).then(valid => {
                if (valid) {
                    sess = req.session
                    sess.user = email
                    next()
                }
                else {
                    res.json({ err: "no data" })
                }
            })
        }
    })
}
module.exports.checkTeacher = async function checkTeacher(req, res, next) {
    const { email, password } = req.body
    actions.getTeacher(({ email })).then(data => {
        if (data.rows.length === 0) {
            res.json({ err: "no data" })
        }
        else {
            bcrypt.compare(password, data.rows[0].password).then(valid => {
                if (valid) {
                    sess = req.session
                    sess.user = email
                    next()
                }
                else {
                    res.json({ err: "no data" })
                }
            })
        }
    })
}