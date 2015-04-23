/*jshint node:true */
"use strict";

var url = require("url"),

    trumpet = require("trumpet"),
    concat  = require("concat-stream"),
    
    _prefixer;

_prefixer = function(options, attr) {
    return function(node) {
        node.getAttribute(attr, function(uri) {
            var output;

            uri = url.parse(uri);

            // No sense in trying to work with these monsters
            if(uri.host || !uri.path) {
                return;
            }

            node.setAttribute(attr, url.resolve(options.prefix, uri.format()));
        });
    };
};

module.exports = function(stream, options, done) {
    var tr = trumpet();
    
    if(typeof options === "function") {
        done = options;
        options = {};
    }
    
    // No prefix? Nothing to do then
    if(!options.prefix) {
        return stream.pipe(concat(function concatDone(data) {
            done(null, data);
        }));
    }

    tr.selectAll("script[src]", _prefixer(options, "src"));
    tr.selectAll("link[href]",  _prefixer(options, "href"));
    tr.selectAll("img[src]",    _prefixer(options, "src"));
    
    tr.pipe(concat(function concatDone(data) {
        done(null, data);
    }));

    stream.pipe(tr);
};
