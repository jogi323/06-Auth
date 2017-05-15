var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Search = require('../models/search');

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, user) {
        console.log(user);
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        else{
            console.log();
            Search.findById(user.searches[0], function(err, searchs){
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                // If no search new search will be created
                if (!searchs) {
                    console.log(req.body.content.split(" "));
                    var search = new Search({
                        content: req.body.content,
                        contentType: req.body.contentType,
                        user: user
                    });
                    search.save(function (err, result) {
                        if (err) {
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: err
                            });
                        }
                        user.searches.push(result);
                        user.save();
                        
                        // res.status(201).json({
                        //     message: 'Saved message',
                        //     obj: result
                        // });
                    });
                    // Search.count({content: "ok"}, function(err, c){
                    //     console.log(c);
                    // })
                    // Search.find({contentType: req.body.contentType})
                    Search.find({contentType: req.body.contentType})
                        .limit(10)
                        .where('content').in(req.body.content.split(" "))
                        .populate('user', 'firstName')
                        .exec(function (err, searches) {
                            if (err) {
                                return res.status(500).json({
                                    title: 'An error occurred',
                                    error: err
                                });
                            }
                            console.log("get called" + searches);

                            res.status(200).json({
                                message: 'Success',
                                obj: searches
                            });
                    });
                
                }
                // If there is a existing serch it will be updated
                else {
                    console.log(req.body.content.replace(/-/g, ""));
                    console.log(searchs)
                    
                    user.oldSearches.push(searchs);
                    user.save();
                    searchs.content = req.body.content;
                    searchs.contentType = req.body.contentType;
                    searchs.save(function (err, result) {
                        if (err) {
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: err
                            });
                        }
                    });    
                    console.log("searching the search docs");
                  //  Search.index({content:"text"});
                    Search.find({ $text: { $search: req.body.content.replace(/-/g, "") ,$diacriticSensitive: true}},{ score : { $meta: "textScore" } })
                        .limit(10)
                        .sort({ score : { $meta : 'textScore' } })
                        //.where('content').in(req.body.content.split(" "))
                        .populate('user', 'firstName')
                        .exec(function (err, searches) {
                            if (err) {
                                return res.status(500).json({
                                    title: 'An error occurred',
                                    error: err
                                });
                            }
                            if(!searches){
                                return res.status(200).json({
                                    title: 'no collection found',
                                    error: err
                                });
                            }
                            console.log("get called" + searches);
                            res.status(200).json({
                                message: 'Success',
                                obj: searches
                            });
                    });

                }

            });
               
        }
    });
});




router.patch('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;