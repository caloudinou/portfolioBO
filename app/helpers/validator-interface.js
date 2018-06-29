/**
 * JSON of all regex to check all typeof custom (example : email)
 */
const regex = require('./regex')

/**
 * Validation all interface and model
 * @class
 */
class ValidatorInterface {
  constructor () {
    this._regex = regex
  }

  /**
   * verify if schema of interface match to Object data
   * @param data
   * @param schema
   * @returns {boolean}
   */
  checkSchema (data, schema) {
    return Object
      .keys(schema)
      .reduce((final, current) => {
        if (!final) return final
        final = this.checkModel(data[current], schema[current].toString())
        return final
      }, true)
  }

  /**
   * check if model typeof match to value
   * @param value
   * @param instance
   * @returns {*}
   */
  checkModel (value, instance) {
    if (instance === 'any') return true
    if (instance === 'email') return this.checkEmail(value)
    if (instance === 'Array') return value instanceof eval(instance)
    return typeof value === instance
  }

  /**
   * check if email is valid
   * @param email
   * @returns {boolean}
   */
  checkEmail (email) {
    return new RegExp(this._regex.email).test(email.toString())
  }
}

module.exports = new ValidatorInterface()
