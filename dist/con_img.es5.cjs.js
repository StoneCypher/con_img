require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"con_img":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// https://codepen.io/tigt/post/optimizing-svgs-in-data-uris

function svg_to_data_uri(svgString) {

  var uriPayload = encodeURIComponent(svgString.replace(/\n+/g, '')) // remove newlines // encode URL-unsafe characters
  .replace(/%20/g, ' ') // put spaces back in
  .replace(/%3D/g, '=') // ditto equals signs
  .replace(/%3A/g, ':') // ditto colons
  .replace(/%2F/g, '/'); // ditto slashes

  return 'data:image/svg+xml,' + uriPayload;
}

function image(url) {
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


  var image = new Image();

  image.onload = function () {
    console.log("%c+", 'font-size: 1px; padding: ' + Math.floor(image.height * scale / 2) + 'px ' + Math.floor(image.width * scale / 2) + 'px; line-height: ' + image.height * scale + 'px; background: url(' + url + '); background-size: ' + image.width * scale + 'px ' + image.height * scale + 'px; color: transparent;');
  };

  image.src = url;
}

exports.image = image;
exports.svg_to_data_uri = svg_to_data_uri;

},{}]},{},[]);
