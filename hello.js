// Compiled using marko@4.1.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out) {
  var data = input;

  out.w("<h1>Hello " +
    marko_escapeXml(input.name) +
    "</h1>");
}

marko_template._ = render;

marko_template.meta = {};
