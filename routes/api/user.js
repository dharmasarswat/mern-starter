const router = require('express').Router();

//User Model
const User = require('../../models/user');

//@route    GET api/user
//@desc     Get User
//@access   Public
router.get('/' , (req,res)=>{
    User
        .find()
        .then(user => res.json(user))
        .catch(err=> res.json({success: false , message: `${err}`}))
})

//@route    POST api/user
//@desc     Add User
//@access   Public
router.post('/' , (req,res)=>{
    const newUser = new User({
        name: req.body.name
    });

    newUser
    .save()
    .then(user=> res.json(user))
    .catch(err=> res.json({success: false , message: `${err}`}))
})

//@route    POST api/user/:id
//@desc     Delete User details
//@access   Public
router.delete('/:id' , (req,res)=>{
    User.findById(req.params.id)
        .then(user=>{
            user.remove()
            res.json({success: true , message: 'User Has Been Deleted'})
        })
        .catch(err=> res.json({success: false , message: `${err}`}))
})


module.exports = router
