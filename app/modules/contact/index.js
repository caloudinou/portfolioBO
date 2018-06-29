
/**
 * Module Index
 *
 * @file : /app/modules/contact/index.js 
 * @date : 2018-6-25
 */

$GzModule({
	name: 'contact',
	mode: 'hybrid-mvc',
	router: [
		'contact', 
		'contacts'
	]
});

class ContactModule {
	constructor(){}
}

module.exports = ContactModule;
