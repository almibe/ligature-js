// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Model from "./Model.res.mjs";
import * as Ligature from "./Ligature.res.mjs";
import * as WanderTokenizerJs from "./WanderTokenizer.js";

function reset(prim) {
  WanderTokenizerJs.reset(prim);
}

function next(prim) {
  return WanderTokenizerJs.next();
}

function readIgnoreWS() {
  while(true) {
    var value = WanderTokenizerJs.next();
    if (value === null || value === undefined) {
      return null;
    }
    if (value.type !== "ws") {
      return value;
    }
    continue ;
  };
}

function readElementPattern() {
  var match = readIgnoreWS();
  if (match === null || match === undefined) {
    return null;
  }
  switch (match.type) {
    case "element" :
        return {
                TAG: "Element",
                _0: Ligature.element(match.value)
              };
    case "variable" :
        return {
                TAG: "Variable",
                _0: Ligature.variable(match.value)
              };
    default:
      return null;
  }
}

function readValue() {
  var match = readIgnoreWS();
  if (match === null || match === undefined) {
    return null;
  }
  switch (match.type) {
    case "element" :
        return {
                TAG: "VElement",
                _0: Ligature.element(match.value)
              };
    case "literal" :
        return {
                TAG: "VLiteral",
                _0: Ligature.literal(match.value)
              };
    case "variable" :
        return {
                TAG: "VVariable",
                _0: Ligature.variable(match.value)
              };
    default:
      return null;
  }
}

function readNetwork(triples) {
  while(true) {
    var match = readIgnoreWS();
    if (match === null || match === undefined) {
      return null;
    }
    switch (match.type) {
      case "cbrace" :
          return Ligature.network(triples);
      case "comma" :
          continue ;
      case "element" :
          var match$1 = readElementPattern();
          var match$2 = readValue();
          if (match$1 === null || match$1 === undefined) {
            return null;
          }
          if (match$2 === null || match$2 === undefined) {
            return null;
          }
          triples.push(Ligature.triple({
                    TAG: "Element",
                    _0: Ligature.element(match.value)
                  }, match$1, match$2));
          continue ;
      case "variable" :
          var match$3 = readElementPattern();
          var match$4 = readValue();
          if (match$3 === null || match$3 === undefined) {
            return null;
          }
          if (match$4 === null || match$4 === undefined) {
            return null;
          }
          triples.push(Ligature.triple({
                    TAG: "Variable",
                    _0: Ligature.variable(match.value)
                  }, match$3, match$4));
          continue ;
      default:
        throw {
              RE_EXN_ID: "Match_failure",
              _1: [
                "WanderParser.res",
                44,
                2
              ],
              Error: new Error()
            };
    }
  };
}

function readArguments() {
  var token = readIgnoreWS();
  var args = [];
  var cont = true;
  while(cont) {
    if (token === null || token === undefined) {
      if (token === null) {
        cont = false;
      } else {
        throw {
              RE_EXN_ID: "Match_failure",
              _1: [
                "WanderParser.res",
                76,
                4
              ],
              Error: new Error()
            };
      }
    } else if (token.type === "element") {
      args.push({
            TAG: "Element",
            _0: Ligature.element(token.value)
          });
    } else {
      throw {
            RE_EXN_ID: "Match_failure",
            _1: [
              "WanderParser.res",
              76,
              4
            ],
            Error: new Error()
          };
    }
  };
  return args;
}

function readCall(name) {
  var args = readArguments();
  return Model.call(name, args);
}

function parseScript() {
  var res = [];
  var match = WanderTokenizerJs.next();
  if (match === null || match === undefined) {
    match === null;
  } else {
    switch (match.type) {
      case "element" :
          var c = readCall(match.value);
          if (c === null || c === undefined) {
            if (c !== null) {
              throw {
                    RE_EXN_ID: "Match_failure",
                    _1: [
                      "WanderParser.res",
                      101,
                      4
                    ],
                    Error: new Error()
                  };
            }
            
          } else {
            res.push(c);
          }
          break;
      case "comma" :
      case "variable" :
          break;
      default:
        throw {
              RE_EXN_ID: "Failure",
              _1: "Unexpected value while reading tokens.",
              Error: new Error()
            };
    }
  }
  return res;
}

function parse(script) {
  WanderTokenizerJs.reset(script);
  return parseScript();
}

function readTriple() {
  return null;
}

function readToken() {
  
}

export {
  reset ,
  next ,
  readIgnoreWS ,
  readElementPattern ,
  readValue ,
  readNetwork ,
  readArguments ,
  readCall ,
  parseScript ,
  parse ,
  readTriple ,
  readToken ,
}
/* Ligature Not a pure module */
