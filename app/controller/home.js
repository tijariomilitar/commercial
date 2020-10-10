const User = require('../model/user');
const userController = require('./user');

const fetch = require("node-fetch");

const homeController = {
	index: async (req, res) => {
		try{
			if(req.user){
				const productColors = await fetch("http://erpjariomilitar.com/product/colorList");
				return res.render('home', { user: req.user, productColors: productColors });
			};
			const productColors = await fetch("http://erpjariomilitar.com/product/colorList");
			res.render('index', { productColors: productColors });
		} catch (err) {
			console.log(err);
			return res.redirect('/');
		};

	},
	login: (req, res) => {
		if(req.user){
			return res.redirect("/");
		};
		res.render('login', { message: req.flash('loginMessage')});
	},
	successfulLogin: (req, res) => {
		res.redirect('/');
	},
	signup: async (req, res) => {
		// if(!await userController.verifyAccess(req, res, ['adm'])){
		// 	return res.redirect('/');
		// };
		res.render('user/signup', { user: req.user, message: req.flash('signupMessage')});
	},
	successfulSignup: (req, res) => {
		res.redirect('/');
	},
	logout: (req, res) => {
		req.logout();
		res.redirect('/');
	}
};

module.exports = homeController;