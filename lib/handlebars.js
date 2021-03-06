import Handlebars from "./handlebars.runtime";

// Compiler imports
module AST from "./handlebars/compiler/ast";
import { parser as Parser, parse } from "./handlebars/compiler/base";
import { Compiler, compile, precompile } from "./handlebars/compiler/compiler";
import JavaScriptCompiler from "./handlebars/compiler/javascript-compiler";

var _create = Handlebars.create;
var create = function() {
  var hb = _create();

  hb.compile = function(input, options) {
    return compile(input, options, hb);
  };
  hb.precompile = precompile;

  hb.AST = AST;
  hb.Compiler = Compiler;
  hb.JavaScriptCompiler = JavaScriptCompiler;
  hb.Parser = Parser;
  hb.parse = parse;

  return hb;
};

Handlebars = create();
Handlebars.create = create;

export default Handlebars;
