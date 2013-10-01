HTML Prefixer
==========

Prefix URLs in &lt;script>/&lt;link>/&lt;img> with a cdn URL

[![Build Status](https://travis-ci.org/tivac/node-html-prefix.png?branch=master)](https://travis-ci.org/tivac/node-html-prefix)
[![NPM version](https://badge.fury.io/js/node-html-prefix.png)](http://badge.fury.io/js/node-html-prefix)
[![Dependency Status](https://gemnasium.com/tivac/node-html-prefix.png)](https://gemnasium.com/tivac/node-html-prefix)

## Usage ##

```javascript
var inliner = require("js-inliner");

prefix(stream, { prefix : "//abcdefg123.cloudfront.net" }, function(err, text) {
    if(err) {
        throw new Error(err);
    }
    
    console.log(text.toString("utf8"));
});
```

## API ##

### prefix(stream, [options], cb)

* `stream` {Stream} Readable stream to parse
* `options` {Object}
* `cb` {Function}
  * `err` {Error | null}
  * `text` {Buffer} Rewritten text

#### Options

* `prefix` {String} URL used to prefix elements.
