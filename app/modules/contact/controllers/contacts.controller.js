
/**
 * Controller Contacts
 * 
 * @class Contacts
 * @classdesc : all method for the router contacts
 *
 * @file : /app/modules/contact/controllers/contacts.controller.js
 * 
 * @date : 2018-6-25
 */
	  
const Contacts = require(`${__modules}/contact/models/contacts.model`);
const async = require('async');

class ContactsCtrl {
  constructor(){}

  list(req, res) {
	res.status(501).send({ error : 'NOT IMPLEMENTED: Contacts list'});
  }

  create_many(req, res) {
	res.status(501).send({ error : 'NOT IMPLEMENTED: Contactscreate many'});
  }

  modify_many(req, res) {
	res.status(501).send({ error : 'NOT IMPLEMENTED: Contacts modify many'});
  }

  delete_all(req, res) {
	res.status(501).send({ error : 'NOT IMPLEMENTED: Contacts delete all'});
  }
}

module.exports = new ContactsCtrl();
