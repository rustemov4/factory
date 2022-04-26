const db = require('./db')
const bcrypt = require('bcrypt')
module.exports.register = async function register(user) {
  const data = await this.getUser(user)
  if (data.rows.length > 0) {
    console.log("user exists")
    return
  }
  else {
    const text = `
    INSERT INTO usr (firstname,lastname,password,email)
    VALUES ($1, $2, $3, $4)
  `;
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(user.password, salt)
    const values = [user.firstname, user.lastname, hashed, user.email];
    return db.pool.query(text, values);
  }
}
module.exports.getUser = async function getUser(user) {
  const text = `SELECT * FROM usr WHERE email = $1`;
  const values = [user.email];
  return db.pool.query(text, values);
}