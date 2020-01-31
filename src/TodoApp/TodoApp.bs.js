'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var TodoList$ReasonReactExamples = require("./TodoList.bs.js");
var AddTodoInput$ReasonReactExamples = require("./AddTodoInput.bs.js");

function TodoApp(Props) {
  var match = React.useState((function () {
          return 0;
        }));
  var setNextId = match[1];
  var nextId = match[0];
  var match$1 = React.useState((function () {
          return /* [] */0;
        }));
  var setItems = match$1[1];
  var addItem = React.useCallback((function (description) {
          var item = {
            id: nextId,
            description: description,
            complete: false
          };
          Curry._1(setItems, (function (current) {
                  return /* :: */[
                          item,
                          current
                        ];
                }));
          return Curry._1(setNextId, (function (id) {
                        return id + 1 | 0;
                      }));
        }));
  var onAdd = React.useCallback(Curry.__1(addItem));
  var onDone = React.useCallback((function (id) {
          return Curry._1(setItems, (function (current) {
                        return List.map((function (item) {
                                      if (item.id === id) {
                                        return {
                                                id: item.id,
                                                description: item.description,
                                                complete: true
                                              };
                                      } else {
                                        return item;
                                      }
                                    }), current);
                      }));
        }));
  return React.createElement(React.Fragment, undefined, React.createElement(AddTodoInput$ReasonReactExamples.make, {
                  onAdd: onAdd
                }), React.createElement(TodoList$ReasonReactExamples.make, {
                  items: match$1[0],
                  onDone: onDone
                }));
}

var make = TodoApp;

exports.make = make;
/* react Not a pure module */
