/**
 * Model user-Profile
 *
 * @class UserProfile
 * @classdesc : all method for request user-profile in BDD
 *
 * @file : /app/modules/user-profile/routers/user-profile.router.js
 * @date : 2018-6-22
 */
const ProfilInterface = require(`${__modules}/user-profile/interfaces/user-profile-interface`)
const coreData = require(`${__modules}/user-profile/models/core-data`)
const validatorInterface = require(`${__helpers}/validator-interface`)

class UserProfile {
  /**
   * @constructor
   * set the private variable and launch initialisation method
   */
  constructor () {
    this._ProfilInterface = ProfilInterface
    this._validatorInterface = validatorInterface
    this._coreUser = coreData
    this._nameCollection = 'user-profile'

    this.initizalisation()
  }

  /**
   * initialization of user profile data
   */
  initizalisation () {
    gz.moduleMongoDB.db.subscribe(() => {
      this.findByEmail(this._coreUser.email)
        .then(data => {
          console.log('success::findOne', data)
          /**
           * if the data doesn't exist creation user profile
           */
          if (!data) {
            this.insertUserProfile(this._coreUser)
              .then(console.log)
              .catch(console.log)
          }
        })
        .catch(error => {
          console.log('[error::user-profile::initialisation]', error)
        })
    })
  }

  /**
   * insert user profile
   * @param userObj
   * @returns {*}
   */
  insertUserProfile (userObj) {
    if (!this._validatorInterface.checkSchema(userObj, this._ProfilInterface)) {
      return Promise.reject(new Error('error type schema user-profile'))
    }
    return db.collection(this._nameCollection).insertOne(userObj)
  }

  /**
   * find user profile By Email
   * @param value
   * @param attr
   * @returns {*}
   */
  findByEmail (value, attr = {}) {
    if (!this._validatorInterface.checkModel(value, 'string')) return Promise.reject(new Error('error type string'))
    return db.collection(this._nameCollection).findOne({ email: value }, attr)
  }

  /**
   * update user profile by email
   */
  updateLinkedInByEmail (userObj) {
    return db.collection(this._nameCollection).findAndModify(
      /* query */
      {email: userObj.email},
      /* sort order */
      [['_id', 'asc']],
      /* replacement, replaces only the field "hi" */
      {$set: {linkedIn: userObj.linkedIn}},
      /* options */
      {})
  }

}

module.exports = new UserProfile()
