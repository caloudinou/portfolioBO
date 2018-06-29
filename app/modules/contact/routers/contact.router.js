
/**
 * Router contact
 *
 * @description defined the router for the controller
 *
 * @file : /app/modules/contact/routers/contact.router.js
 * @date : 2018-6-25
 */

const ContactCtrl = require(`${__modules}/contact/controllers/contact.controller`);

$GzRouter({
  name:'contact',
  routes:[
	{
	  path: '/',
	  method: 'post',
	  handler: ContactCtrl.create
	},
	{
	  path: '/',
	  method: 'get',
	  handler: ContactCtrl.detail
	},
	{
	  path: '/',
	  method: 'put',
	  handler: ContactCtrl.modify
	},
	{
	  path: '/',
	  method: 'delete',
	  handler: ContactCtrl.delete
	},
  ]
});
