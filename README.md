# fucking-util-signature-rsa-pkcs1padding
 js rsa with java pkcs1padding
 可直接与java端加解密使用的模块, 无需多余设置, 直接引入模块即可

# 注意事项
本模块引入之后全局使用`util.Signature`都生效, 都是`pkcs1padding`

# 使用方法

## 首次使用
```javascript
let util = require( 'fucking-util' );

// 三选一
// require ( 'fucking-util-signature' );
// require ( 'fucking-util-signature-uni' );
require ( 'fucking-util-signature-all' );

// 覆盖Signature对象
require ( 'fucking-util-signature-rsa-pkcs1padding' );

let Signature = util.Signature;

// ...
```

## 后续使用
```javascript
let util = require( 'fucking-util' );

let Signature = util.Signature;
```