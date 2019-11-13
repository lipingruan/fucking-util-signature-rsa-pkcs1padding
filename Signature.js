
const util = require ( 'fucking-util' );

const RSA = require ( './rsa' );

module.exports = class Signature extends util.Signature {

	static get RSA ( ) { return RSA }

  rsa ( data, output ) {

    return this.builder ( new RSA ( ), { data, output } );
  }
}