const nodemailer = require('nodemailer')
const ProfilInterface = require(`${__modules}/user-profile/interfaces/user-profile-interface`)
const MailInterface = require(`${__modules}/contact/interfaces/mail-interface`)

class sendMail {
  constructor () {
    this.smptConfig = null
    this.mailOptions = null
    this._ProfilInterface = ProfilInterface
    this._MailInterface = MailInterface
    this._validatorInterface = ValidatorInterface
    this._userProfil = null
    this._mail = null
  }
  config (userProlife) {
    if (!this._validatorInterface.checkSchema(this._userProfil, this._ProfilInterface)) {
      return Promise.reject(new Error('error type schema user-profile'))
    }
    this.smptConfig = {
      host: 'smtp.gmail.com',
      port: 465,
      secure: false,
      auth: {
        user: userProlife.user,
        pass: userProlife.pass
      }
    }
  }

  setUp (mail) {
    if (!this._validatorInterface.checkSchema(mail, this._MailInterface)) {
      return Promise.reject(new Error('error type schema user-profile'))
    }
    this.mailOptions = {
      from: `"${userProlife.info.firstname} ${userProlife.info.lastname} 👻" <${userProlife.email}>`,
      to: this._mail.contacts,
      subject: this._mail.subject,
      html: this.templateHTML[this._mail.templateName].replace('{{content}}', this._mail.content)
    }
    this.transaction = this.initTransaction()
    return this
  }

  initTransaction () {
    return nodemailer.createTransport(this.smptConfig)
  }
  send () {
    return new Promise((resolve, reject) => {
      this.transaction.sendMail(this.mailOptions, (error, info) => {
        if (error) return reject(error)
        resolve(info.messageId, nodemailer.getTestMessageUrl(info))
      })
    })
  }
}
