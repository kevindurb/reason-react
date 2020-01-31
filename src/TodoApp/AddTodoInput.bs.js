'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function AddTodoInput(Props) {
  var onAdd = Props.onAdd;
  var match = React.useState((function () {
          return "";
        }));
  var update = match[1];
  var value = match[0];
  var onChange = React.useCallback((function ($$event) {
          return Curry._1(update, $$event.target.value);
        }));
  var onClickAdd = React.useCallback((function (param) {
          Curry._1(onAdd, value);
          return Curry._1(update, (function (param) {
                        return "";
                      }));
        }));
  return React.createElement(React.Fragment, undefined, React.createElement("input", {
                  value: value,
                  onChange: onChange
                }), React.createElement("button", {
                  onClick: onClickAdd
                }, "Add"));
}

var make = AddTodoInput;

exports.make = make;
/* react Not a pure module */
