// Generated by ReScript, PLEASE EDIT WITH CARE


function element(value) {
  return {
          value: value,
          type: "element"
        };
}

function variable(value) {
  return {
          value: value,
          type: "variable"
        };
}

function literal(value) {
  return {
          value: value,
          type: "literal"
        };
}

function network(value) {
  return {
          value: value,
          type: "network"
        };
}

var emptyNetwork = network([]);

export {
  element ,
  variable ,
  literal ,
  network ,
  emptyNetwork ,
}
/* emptyNetwork Not a pure module */
