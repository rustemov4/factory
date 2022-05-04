const db = require('./db')
const bcrypt = require('bcrypt')
module.exports.register = async function register(user) {
  const data = await this.getUser(user)
  if (data.rows.length > 0) {
    console.log("user exists")
    return false
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
module.exports.registerTeacher = async function registerTeacher(teacher) {
  const data = await this.getTeacher(teacher)
  if (data.rows.length > 0) {
    console.log("teacher exists")
  }
  else {
    const text = `
    INSERT INTO teacher (firstname,lastname,password,email,description)
    VALUES ($1, $2, $3, $4, $5)
  `;
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(teacher.password, salt)
    const values = [teacher.firstname, teacher.lastname, hashed, teacher.email, teacher.description];
    return db.pool.query(text, values);
  }
}
module.exports.getTeacher = async function getTeacher(teacher) {
  const text = `SELECT * FROM teacher WHERE email = $1`;
  const values = [teacher.email];
  return db.pool.query(text, values);
}
module.exports.createCourse = function createCourse(teacher, subject) {
  const text = 'INSERT INTO course (teacherid,subjectid) VALUES ($1, $2)'
  const values = [teacher.id, subject.id]
  return db.pool.query(text, values);
}

module.exports.getAllCourses = function getAllCourses() {
  const text = 'SELECT * FROM course'
  return db.pool.query(text)
}