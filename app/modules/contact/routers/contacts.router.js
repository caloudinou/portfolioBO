
/**
 * Router contacts
 *
 * @description defined the router for the controller
 *
 * @file : /app/modules/contact/routers/contacts.router.js
 * @date : 2018-6-25
 */

const ContactsCtrl = require(`${__modules}/contact/controllers/contacts.controller`);

$GzRouter({
  name:'contacts',
  routes:[
	{
	  path: '/',
	  method: 'post',
	  handler: ContactsCtrl.create_many
	},
	{
	  path: '/',
	  method: 'get',
	  handler: ContactsCtrl.list
	},
	{
	  path: '/',
	  method: 'put',
	  handler: ContactsCtrl.modify_many
	},
	{
	  path: '/',
	  method: 'delete',
	  handler: ContactsCtrl.delete_all
	},
  ]
});
