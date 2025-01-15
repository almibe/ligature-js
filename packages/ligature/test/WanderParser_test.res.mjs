// Generated by ReScript, PLEASE EDIT WITH CARE

import Ava from "ava";
import * as Ligature from "../src/Ligature.res.mjs";
import * as WanderParser from "../src/WanderParser.res.mjs";

Ava("empty network", (function (t) {
        t.deepEqual(WanderParser.parse("{}"), {
              TAG: "Ok",
              _0: [Ligature.network([])]
            });
      }));

Ava("network with single triple", (function (t) {
        t.deepEqual(WanderParser.parse("{a b c}"), {
              TAG: "Ok",
              _0: [Ligature.network([Ligature.triple({
                            TAG: "Element",
                            _0: Ligature.$$Element.element("a")
                          }, {
                            TAG: "Element",
                            _0: Ligature.$$Element.element("b")
                          }, {
                            TAG: "VElement",
                            _0: Ligature.$$Element.element("c")
                          })])]
            });
      }));

Ava("network with two triples", (function (t) {
        t.deepEqual(WanderParser.parse("{a b c, d e f}"), {
              TAG: "Ok",
              _0: [Ligature.network([
                      Ligature.triple({
                            TAG: "Element",
                            _0: Ligature.$$Element.element("a")
                          }, {
                            TAG: "Element",
                            _0: Ligature.$$Element.element("b")
                          }, {
                            TAG: "VElement",
                            _0: Ligature.$$Element.element("c")
                          }),
                      Ligature.triple({
                            TAG: "Element",
                            _0: Ligature.$$Element.element("d")
                          }, {
                            TAG: "Element",
                            _0: Ligature.$$Element.element("e")
                          }, {
                            TAG: "VElement",
                            _0: Ligature.$$Element.element("f")
                          })
                    ])]
            });
      }));

export {
  
}
/*  Not a pure module */
