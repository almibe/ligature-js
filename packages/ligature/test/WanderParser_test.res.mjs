// Generated by ReScript, PLEASE EDIT WITH CARE

import Ava from "ava";
import * as Ligature from "../src/Ligature.res.mjs";
import * as WanderParser from "../src/WanderParser.res.mjs";

Ava("parse empty string", (function (t) {
        t.deepEqual(WanderParser.parse(""), []);
      }));

Ava("basic parsing", (function (t) {
        t.deepEqual(WanderParser.parse("test"), [{
                TAG: "Element",
                _0: Ligature.element("test")
              }]);
        t.deepEqual(WanderParser.parse("?hello"), [{
                TAG: "Variable",
                _0: Ligature.variable("?hello")
              }]);
        t.deepEqual(WanderParser.parse("\"hello literal\""), [{
                TAG: "Literal",
                _0: Ligature.literal("\"hello literal\"")
              }]);
        t.deepEqual(WanderParser.parse("|"), ["Pipe"]);
        t.deepEqual(WanderParser.parse(","), ["Comma"]);
      }));

export {
  
}
/*  Not a pure module */
