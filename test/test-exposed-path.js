'use strict';

var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');
var module = require('../swagger-ui-dist');

describe('swagger-ui-dist.js', function () {
  
  it('should expose dist file path', function(done) {
  	expect(module.dist).to.be.not.empty;
  	done();
  });

  it('should have a Swagger UI distribution folder at the path specified by package.dist', function(done) {
  	fs.stat(module.dist, function(err, stats) {
  		expect(err).to.be.null;
  		expect(stats).to.be.not.null;
  		expect(stats.isDirectory()).to.be.true;
  		done();
  	});
  });

  it('should have a Swagger UI JS file in the static assets path', function(done) {
  	fs.stat(path.resolve(module.dist, 'swagger-ui.js'), function(err, stats) {
  		expect(err).to.be.null;
  		expect(stats).to.be.not.null;
  		expect(stats.isFile()).to.be.true;
  		done();
  	});
  });
});
