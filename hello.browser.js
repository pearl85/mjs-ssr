// Compiled using marko@4.1.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/vdom").t();

function render(input, out) {
  var data = input;

  out.e("H1", null, 2)
    .t("Hello ")
    .t(input.name);
}

marko_template._ = render;
