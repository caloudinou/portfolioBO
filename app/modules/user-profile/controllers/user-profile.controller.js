/**
 * Controller Profil
 *
 * @class Profil
 * @classdesc : all method for the router user-profile
 *
 * @file : /app/modules/user-profile/controllers/user-user-profile.controller.js
 *
 * @date : 2018-6-22
 */

const UserProfile = require(`${__modules}/user-profile/models/user-profile.model`)

class UserProfileCtrl {
  constructor () {}

  /**
   * detail
   * @param req
   * @param res
   */
  detail (req, res) {
    res.status(501).send({ error: 'NOT IMPLEMENTED: Profil detail: ' + req.params.id})
  }

  /**
   * modify linkedIn
   * @param req
   * @param res
   */
  modify_linkedIn (req, res) {
      res.status(501).send({ error: 'NOT IMPLEMENTED: Profil modify: ' + req.params.id})
  }

  /***
   * modify property active
   * @param req
   * @param res
   */
  modify_active (req, res) {
      res.status(501).send({ error: 'NOT IMPLEMENTED: Profil modify: ' + req.params.id})
  }

  /**
   * delete api
   * @param req
   * @param res
   */
  delete (req, res) {
    res.status(501).send({ error: 'NOT IMPLEMENTED: Profil delete: ' + req.params.id})
  }
}

module.exports = new UserProfileCtrl()
