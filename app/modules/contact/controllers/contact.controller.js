/**
 * Controller Contact
 * 
 * @class Contact
 * @classdesc : all method for the router contact
 *
 * @file : /app/modules/contact/controllers/contact.controller.js
 * 
 * @date : 2018-6-25
 */
	  
const Contact = require(`${__modules}/contact/models/contact.model`);

class ContactCtrl {
  constructor(){}

  detail(req, res) {
	res.status(501).send({ error : 'NOT IMPLEMENTED: Contact detail: ' + req.params.id});
  }

  create(req, res) {
	res.status(501).send({ error : 'NOT IMPLEMENTED: Contactcreate: ' + req.params.id});
  }

  modify(req, res) {
	res.status(501).send({ error : 'NOT IMPLEMENTED: Contact modify: ' + req.params.id});
  }

  delete(req, res) {
	res.status(501).send({ error : 'NOT IMPLEMENTED: Contact delete: ' + req.params.id});
  }
}

module.exports = new ContactCtrl();
