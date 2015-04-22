/*jshint node:true */

"use strict";

var fs      = require("fs"),
    assert  = require("assert"),
    path    = require("path"),

    prefix = require("../lib/prefix");

describe("HTML Prefix", function() {
    describe("Main Module", function() {
        it("should prefix URLs in normal HTML", function(done) {
            var file   = "./test/specimens/test.htm",
                stream = fs.createReadStream(file, { encoding : "utf8" });
            
            prefix(stream, { prefix : "//f.com" }, function(err, results) {
                var js;
                
                assert.ifError(err);
                
                js = results.toString("utf8");
                
                assert(js.indexOf("href=\"//f.com/opensearch.xml\"") > -1);
                assert(js.indexOf("href=\"https://github.com/fluidicon.png\"") > -1);
                assert(js.indexOf("<link href=\"https://github.global.") > -1);
                assert(js.indexOf("<link href=\"//f.com/assets/github2.css\"") > -1);
                assert(js.indexOf("<script src=\"//f.com/looga/hooga/yooga/nooga.js\">") > -1);
                assert(js.indexOf("<script src=\"//fooga.com/wooga.js\">") > -1);
                assert(js.indexOf("<img src=\"//f.com/boogie/woogie.png\">") > -1);
                assert(js.indexOf("<script src=\"//f.com/wooga.js\"></script>") > -1);
                assert(js.indexOf("<script src=\"//f.com/booga/fooga.js\"></script>") > -1);
                
                done();
            });
        });

        it("should prefix URLs in EJS", function(done) {
            var file   = "./test/specimens/test.ejs",
                stream = fs.createReadStream(file, { encoding : "utf8" });
            
            prefix(stream, { prefix : "//f.com" }, function(err, results) {
                var js;
                
                assert.ifError(err);
                
                js = results.toString("utf8");
                
                assert(js.indexOf("href=\"//f.com/opensearch.xml\"") > -1);
                assert(js.indexOf("href=\"https://github.com/fluidicon.png\"") > -1);
                assert(js.indexOf("<link href=\"https://github.global.") > -1);
                assert(js.indexOf("<link href=\"//f.com/assets/github2.css\"") > -1);
                assert(js.indexOf("<script src=\"//f.com/looga/hooga/yooga/nooga.js\">") > -1);
                assert(js.indexOf("<script src=\"//fooga.com/wooga.js\">") > -1);
                assert(js.indexOf("<script src=\"//f.com/wooga.js\"></script>") > -1);
                assert(js.indexOf("<script src=\"//f.com/booga/fooga.js\"></script>") > -1);
                
                done();
            });
        });
    });
});