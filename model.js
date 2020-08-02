const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: String,
    position: String,
    status:String,
    biography: String,
    disciplines:Array

})

const Teacher = mongoose.model("teacher", teacherSchema)

module.exports = Teacher