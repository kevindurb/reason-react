'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var TodoApp$ReasonReactExamples = require("./TodoApp/TodoApp.bs.js");

var container = document.createElement("div");

document.body.appendChild(container);

ReactDom.render(React.createElement(TodoApp$ReasonReactExamples.make, { }), container);

exports.container = container;
/* container Not a pure module */
