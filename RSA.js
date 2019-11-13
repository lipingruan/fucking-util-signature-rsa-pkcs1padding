
const util = require ( 'fucking-util' );

module.exports = class RSA extends util.Signature.RSA {

	constructor ( ) {

		super ( );

		this.keys.setOptions ( { encryptionScheme: 'pkcs1' } );
	}
}