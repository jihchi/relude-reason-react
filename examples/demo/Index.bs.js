// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Component1 = require("./Component1.bs.js");
var Component2 = require("./Component2.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");

ReactDOMRe.renderToElementWithId(React.createElement(Component1.make, {
          message: "Hello! Click this text."
        }), "index1");

ReactDOMRe.renderToElementWithId(React.createElement(Component2.make, {
          greeting: "Hello!"
        }), "index2");

/*  Not a pure module */
