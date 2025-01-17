const express = require("express");
const router  = express.Router({mergeParams: true});
const Job = require("../models/job");
const Education = require("../models/education");
const Help = require("../models/help");
const BuySale = require("../models/buySale");
const Event = require("../models/event");
const Service = require("../models/service");
const FreeThing = require("../models/freeThing");
const Flag = require("../models/flag");
const Pet = require("../models/pet");
const Internship = require("../models/internship");
const middleware = require("../middleware");

router.post('/jobs/:id/flags', middleware.isLoggedIn, middleware.checkJobRatingExists, function(req, res) {
	Job.findById(req.params.id, function(err, job) {
		if(err) {
		    req.flash('error', err.message);
            res.redirect('back');
		}
		else {
        	Flag.create(req.body.flag, function(err, flag) {
        	    if(err) {
        	        req.flash('error', err.message);
            		return res.redirect('back');
        	    }
            	flag.author.id = req.user._id;
            	flag.author.username = req.user.username;
            	flag.save();
        		job.flags.push(flag);
        		if(job.flags.length >= 5){
        			job.isFlag = true;
        		}
        		job.save();
        	});
		}
		req.flash("success", "Successfully flag this");
		res.redirect('/jobs/' + job._id);
	});
});

router.post('/education/:id/flags', middleware.isLoggedIn, middleware.checkEducationRatingExists, function(req, res) {
	Education.findById(req.params.id, function(err, education) {
		if(err) {
		    req.flash('error', err.message);
            res.redirect('back');
		}
		else {
        	Flag.create(req.body.flag, function(err, flag) {
        	    if(err) {
        	        req.flash('error', err.message);
            		return res.redirect('back');
        	    }
            	flag.author.id = req.user._id;
            	flag.author.username = req.user.username;
            	flag.save();
        		education.flags.push(flag);
        		if(education.flags.length >= 5){
        			education.isFlag = true;
        		}
        		education.save();
        	});
		}
		req.flash("success", "Successfully flag this");
		res.redirect('/education/' + education._id);
	});
});

router.post('/helps/:id/flags', middleware.isLoggedIn, middleware.checkHelpRatingExists, function(req, res) {
	Help.findById(req.params.id, function(err, help) {
		if(err) {
		    req.flash('error', err.message);
            res.redirect('back');
		}
		else {
        	Flag.create(req.body.flag, function(err, flag) {
        	    if(err) {
        	        req.flash('error', err.message);
            		return res.redirect('back');
        	    }
            	flag.author.id = req.user._id;
            	flag.author.username = req.user.username;
            	flag.save();
        		help.flags.push(flag);
        		if(help.flags.length >= 5){
        			help.isFlag = true;
        		}
        		help.save();
        	});
		}
		req.flash("success", "Successfully flag this");
		res.redirect('/helps/' + help._id);
	});
});

router.post('/buySales/:id/flags', middleware.isLoggedIn, middleware.checkBuySaleRatingExists, function(req, res) {
	BuySale.findById(req.params.id, function(err, buySale) {
		if(err) {
		    req.flash('error', err.message);
            res.redirect('back');
		}
		else {
        	Flag.create(req.body.flag, function(err, flag) {
        	    if(err) {
        	        req.flash('error', err.message);
            		return res.redirect('back');
        	    }
            	flag.author.id = req.user._id;
            	flag.author.username = req.user.username;
            	flag.save();
        		buySale.flags.push(flag);
        		if(buySale.flags.length >= 5){
        			buySale.isFlag = true;
        		}
        		buySale.save();
        	});
		}
		req.flash("success", "Successfully flag this");
		res.redirect('/buySales/' + buySale._id);
	});
});

router.post('/events/:id/flags', middleware.isLoggedIn, middleware.checkEventRatingExists, function(req, res) {
	Event.findById(req.params.id, function(err, event) {
		if(err) {
		    req.flash('error', err.message);
            res.redirect('back');
		}
		else {
        	Flag.create(req.body.flag, function(err, flag) {
        	    if(err) {
        	        req.flash('error', err.message);
            		return res.redirect('back');
        	    }
            	flag.author.id = req.user._id;
            	flag.author.username = req.user.username;
            	flag.save();
        		event.flags.push(flag);
        		if(event.flags.length >= 5){
        			event.isFlag = true;
        		}
        		event.save();
        	});
		}
		req.flash("success", "Successfully flag this");
		res.redirect('/events/' + event._id);
	});
});

router.post('/services/:id/flags', middleware.isLoggedIn, middleware.checkServiceRatingExists, function(req, res) {
	Service.findById(req.params.id, function(err, service) {
		if(err) {
		    req.flash('error', err.message);
            res.redirect('back');
		}
		else {
        	Flag.create(req.body.flag, function(err, flag) {
        	    if(err) {
        	        req.flash('error', err.message);
            		return res.redirect('back');
        	    }
            	flag.author.id = req.user._id;
            	flag.author.username = req.user.username;
            	flag.save();
        		service.flags.push(flag);
        		if(service.flags.length >= 5){
        			service.isFlag = true;
        		}
        		service.save();
        	});
		}
		req.flash("success", "Successfully flag this");
		res.redirect('/services/' + service._id);
	});
});

router.post('/freeThings/:id/flags', middleware.isLoggedIn, middleware.checkFreeThingRatingExists, function(req, res) {
	FreeThing.findById(req.params.id, function(err, freeThing) {
		if(err) {
		    req.flash('error', err.message);
            res.redirect('back');
		}
		else {
        	Flag.create(req.body.flag, function(err, flag) {
        	    if(err) {
        	        req.flash('error', err.message);
            		return res.redirect('back');
        	    }
            	flag.author.id = req.user._id;
            	flag.author.username = req.user.username;
            	flag.save();
        		freeThing.flags.push(flag);
        		if(freeThing.flags.length >= 5){
        			freeThing.isFlag = true;
        		}
        		freeThing.save();
        	});
		}
		req.flash("success", "Successfully flag this");
		res.redirect('/freeThings/' + freeThing._id);
	});
});

router.post('/pets/:id/flags', middleware.isLoggedIn, middleware.checkPetRatingExists, function(req, res) {
	Pet.findById(req.params.id, function(err, pet) {
		if(err) {
		    req.flash('error', err.message);
            res.redirect('back');
		}
		else {
        	Flag.create(req.body.flag, function(err, flag) {
        	    if(err) {
        	        req.flash('error', err.message);
            		return res.redirect('back');
        	    }
            	flag.author.id = req.user._id;
            	flag.author.username = req.user.username;
            	flag.save();
        		pet.flags.push(flag);
        		if(pet.flags.length >= 5){
        			pet.isFlag = true;
        		}
        		pet.save();
        	});
		}
		req.flash("success", "Successfully flag this");
		res.redirect('/pets/' + pet._id);
	});
});

router.post('/internships/:id/flags', middleware.isLoggedIn, middleware.checkInternshipRatingExists, function(req, res) {
	Internship.findById(req.params.id, function(err, internship) {
		if(err) {
		    req.flash('error', err.message);
            res.redirect('back');
		}
		else {
        	Flag.create(req.body.flag, function(err, flag) {
        	    if(err) {
        	        req.flash('error', err.message);
            		return res.redirect('back');
        	    }
            	flag.author.id = req.user._id;
            	flag.author.username = req.user.username;
            	flag.save();
        		internship.flags.push(flag);
        		if(internship.flags.length >= 2){
        			internship.isFlag = true;
        		}
        		internship.save();
        	});
		}
		req.flash("success", "Successfully flag this");
		res.redirect('/internships/' + internship._id);
	});
});

module.exports = router;