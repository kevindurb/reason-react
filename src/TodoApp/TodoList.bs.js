'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var React = require("react");
var TodoListItem$ReasonReactExamples = require("./TodoListItem.bs.js");

function TodoList(Props) {
  var items = Props.items;
  var onDone = Props.onDone;
  var todoItems = List.map((function (item) {
          return React.createElement(TodoListItem$ReasonReactExamples.make, {
                      item: item,
                      onDone: onDone
                    });
        }), items);
  return React.createElement(React.Fragment, undefined, $$Array.of_list(todoItems));
}

var make = TodoList;

exports.make = make;
/* react Not a pure module */
