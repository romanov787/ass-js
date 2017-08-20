"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var o = require("../../x86/operand");
var code_1 = require("../../x86/x64/code");
var _ = new code_1.Code;
_._('inc', [o.rax]).lock();
_._('divsd', [o.xmm(1), o.xmm(2)]);
_._('vdivsd', [o.xmm(1), o.xmm(2), o.xmm(3)]);
_._('vdivsd', [o.xmm(1), o.xmm(2), o.xmm(3)], { mask: o.k(1), z: 1 });
_._('vdivsd', [o.xmm(13), o.xmm(14), o.xmm(15)], { mask: o.k(7) });
_._('mov', [o.rax, o.rbx]);
console.log(_.toString());
var bin = _.compile();
console.log(new Buffer(bin));
