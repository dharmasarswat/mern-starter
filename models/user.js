const mongoose = require('mongoose');

//create user schema 
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        // required: true
    },
    password:{
        type: String,
        // required: true
    },
    contact_no:{
        type: String,
        // required: true
    },
    address:[
        currentCity = {
            type: String,
            // required: true
        },
        secoandryCity = {
            type: String
        }
    ],
    education:[
        completed = { type: Boolean },
        collage = { type: String },
        degree = { type: String },
        startYear = { type: Number },
        endYear = { type: Number },
        stream = { type: String },
        performancrScale = { type: String },
        performance = { type: Number }
    ],
    jobs:[
        profile = { type: String },
        organisation = { type: String },
        location = { type: String },
        isWFH = { type: Boolean },
        startDate = { type: Date },
        endDate = { type: Date },
        currentlyWorking = { type: Boolean },
        description = { type: String }
    ],
    internship:[
        profile = { type: String },
        organisation = { type: String },
        location = { type: String },
        isWFH = { type: Boolean },
        startDate = { type: Date },
        endDate = { type: Date },
        currentlyWorking = { type: Boolean },
        description = { type: String }
    ],
    positionOfResponsibility:{
        type: String
    },
    traning:[
        profile = { type: String },
        organisation = { type: String },
        location = { type: String },
        isWFH = { type: Boolean },
        startDate = { type: Date },
        endDate = { type: Date },
        currentlyWorking = { type: Boolean },
        description = { type: String }
    ],
    projects:[
        title = { type: String },
        startDate = { type: Date },
        endDate = { type: Date },
        currentlyOngoing = { type: Boolean },
        description = { type: String },
        links = { type: String }
    ],
    skills:[
        name = { type: String },
        level = { type: String }
    ],
    projects:[
        BlogLink = { type: String },
        Github = { type: Date },
        PlayStore = { type: Date },
        Behance = { type: Boolean },
        Other = { type: String }
    ],
    additionalDetails:{
        type: String
    }
})

module.exports = User = mongoose.model('User' , UserSchema)