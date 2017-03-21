// Compiled using marko@4.1.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag")),
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag"));

function render(input, out) {
  var data = input;

  out.w("<!doctype><html><head><title>Hello world</title></head><body><div>" +
    marko_escapeXml(input.datas.firstname) +
    "</div>");

  await_reorderer_tag({}, out);

  init_components_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/taglibs/async/await-reorderer-tag",
      "marko/components/taglib/init-components-tag"
    ]
  };
