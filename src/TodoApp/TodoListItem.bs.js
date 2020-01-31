'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function TodoListItem(Props) {
  var item = Props.item;
  var onDone = Props.onDone;
  var onClickDone = React.useCallback((function (param) {
          return Curry._1(onDone, item.id);
        }));
  return React.createElement("div", undefined, item.description, React.createElement("button", {
                  disabled: item.complete,
                  onClick: onClickDone
                }, "Done"));
}

var make = TodoListItem;

exports.make = make;
/* react Not a pure module */
