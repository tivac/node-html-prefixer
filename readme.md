HTML Prefixer
==========

Prefix URLs in &lt;script>/&lt;link>/&lt;img> with a cdn URL

[![Build Status](https://travis-ci.org/tivac/node-html-prefixer.png?branch=master)](https://travis-ci.org/tivac/node-html-prefixer)
[![NPM version](https://badge.fury.io/js/html-prefixer.png)](http://badge.fury.io/js/html-prefixer)
[![Dependency Status](https://gemnasium.com/tivac/node-html-prefixer.png)](https://gemnasium.com/tivac/node-html-prefixer)

## Usage ##

```javascript
var prefixer = require("html-prefixer");

prefixr(stream, { prefix : "//abcdefg123.cloudfront.net" }, function(err, text) {
    if(err) {
        throw new Error(err);
    }
    
    console.log(text.toString("utf8"));
});
```

## API ##

### prefixer(stream, [options], cb)

* `stream` {Stream} Readable stream to parse
* `options` {Object}
* `cb` {Function}
  * `err` {Error | null}
  * `text` {Buffer} Rewritten text

#### Options

* `prefix` {String} URL used to prefix elements.
