$_mod.def("/isomorphic-ui-benchmarks$1.0.0/benchmarks/color-picker/marko/components/app/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.18.16 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.18.16/dist/vdom'/*"marko/dist/vdom"*/).t(),
    marko_component = {
        onCreate: function() {
          this.state = {
              selectedColorIndex: 0
            };
        },
        onMount: function() {
          window.onMount();
        },
        handleColorClick: function(colorIndex) {
          this.state.selectedColorIndex = colorIndex;
        }
      },
    components_helpers = require('/marko$4.18.16/dist/runtime/components/helpers-browser'/*"marko/dist/runtime/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/isomorphic-ui-benchmarks$1.0.0/benchmarks/color-picker/marko/components/app/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_forEachProp = require('/marko$4.18.16/dist/runtime/helper-forEachProperty'/*"marko/dist/runtime/helper-forEachProperty"*/),
    marko_helpers = require('/marko$4.18.16/dist/runtime/vdom/helpers'/*"marko/dist/runtime/vdom/helpers"*/),
    marko_classAttr = marko_helpers.ca,
    marko_styleAttr = require('/marko$4.18.16/dist/runtime/vdom/helper-styleAttr'/*"marko/dist/runtime/vdom/helper-styleAttr"*/),
    marko_attrs0 = {
        "class": "colors"
      },
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("750d05"),
    marko_node0 = marko_createElement("h1", null, "1", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("Choose your favorite color:"),
    marko_attrs1 = {
        "class": "colors"
      },
    marko_node1 = marko_createElement("div", null, "5", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("No colors!"),
    marko_attrs2 = {
        "class": "chosen-color"
      };

function render(input, out, __component, component, state) {
  var data = input;

  var colors = input.colors;

  var selectedColorIndex = state.selectedColorIndex;

  var selectedColor = colors[selectedColorIndex];

  out.be("div", marko_attrs0, "0", component);

  out.n(marko_node0, component);

  out.be("div", marko_attrs1, "2", component);

  if (colors.length) {
    out.be("ul", null, "3", component);

    var $for$0 = 0;

    marko_forEachProp(colors, function(i, color) {
      var className = "color";
                          if (selectedColorIndex === i) {
                              className += " selected";
                          }

      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.e("li", {
          "class": marko_classAttr(className),
          style: marko_styleAttr("background-color:" + color.hex)
        }, "4" + $keyScope$0, component, 1, 1, {
          onclick: __component.d("click", "handleColorClick", false, [
              i
            ])
        })
        .t(color.name);
    });

    out.ee();
  } else {
    out.n(marko_node1, component);
  }

  out.ee();

  out.e("div", null, "6", component, 2)
    .t("You chose: ")
    .e("div", marko_attrs2, "7", component, 1)
      .t(selectedColor.name);

  out.ee();
}

marko_template._ = marko_renderer(render, {
    f_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});