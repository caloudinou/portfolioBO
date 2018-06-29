/**
 * Router user-profile
 *
 * @description defined the router for the controller
 *
 * @file : /app/modules/user-profile/routers/user-user-profile.router.js
 * @date : 2018-6-22
 */

const UserProfileCtrl = require(`${__modules}/user-profile/controllers/user-profile.controller`)

$GzRouter({
  name: 'user-profile',
  routes: [
    {
	  path: '/',
	  method: 'get',
	  handler: UserProfileCtrl.detail
    },
    {
	  path: '/linkedin',
	  method: 'put',
	  handler: UserProfileCtrl.modify_linkedIn
    },
	{
	  path: '/active',
	  method: 'put',
	  handler: UserProfileCtrl.modify_active
	},
    {
	  path: '/',
	  method: 'delete',
	  handler: UserProfileCtrl.delete
    }
  ]
})
