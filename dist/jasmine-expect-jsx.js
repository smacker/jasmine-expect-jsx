"use strict";var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;})({1:[function(require,module,exports){var reactElementToJSXString=require('react-element-to-jsx-string').default;var jsdiff=require('diff');var collapse=require('collapse-white-space');function formatPart(value,prefix){return value.split('\n').map(function(line){if(!line){return line;}return prefix+' '+line;}).join('\n');}function getJSXDiffMessage(actualJSX,expectedJSX){var message=[];var diff=jsdiff.diffLines(actualJSX,expectedJSX,{ignoreWhitespace:false,newlineIsToken:false});diff.forEach(function(part){if(part.added){message.push(formatPart(part.value,'+'));}else if(part.removed){message.push(formatPart(part.value,'-'));}else{message.push(part.value);}});return message.join('\n');}function _compare(actual,expected,comparator,passedMessage){var actualJSX=reactElementToJSXString(actual);var expectedJSX=reactElementToJSXString(expected);var result={pass:comparator(collapse(actualJSX),collapse(expectedJSX))};if(!result.pass){result.message=getJSXDiffMessage(actualJSX,expectedJSX);}else{result.message=passedMessage;}return result;}function toIncludeJSX(){return{compare:function compare(actual,expected){var comparator=function comparator(actual,expected){return!!actual&&actual.indexOf(expected)>=0;};return _compare(actual,expected,comparator,'Actual JSX includes expected JSX');}};}function toEqualJSX(){return{compare:function compare(actual,expected){var comparator=function comparator(actual,expected){return actual==expected;};return _compare(actual,expected,comparator,'JSX strings are equal');}};}beforeEach(function(){jasmine.addMatchers({toEqualJSX:toEqualJSX,toIncludeJSX:toIncludeJSX});});if(module&&module.exports){module.exports={toEqualJSX:toEqualJSX,toIncludeJSX:toIncludeJSX};}},{"collapse-white-space":2,"diff":3,"react-element-to-jsx-string":26}],2:[function(require,module,exports){'use strict';module.exports=collapse;/* collapse(' \t\nbar \nbaz\t'); // ' bar baz ' */function collapse(value){return String(value).replace(/\s+/g,' ');}},{}],3:[function(require,module,exports){/*!

 diff v3.4.0

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/(function webpackUniversalModuleDefinition(root,factory){if((typeof exports==="undefined"?"undefined":_typeof2(exports))==='object'&&(typeof module==="undefined"?"undefined":_typeof2(module))==='object')module.exports=factory();else if(typeof define==='function'&&define.amd)define([],factory);else if((typeof exports==="undefined"?"undefined":_typeof2(exports))==='object')exports["JsDiff"]=factory();else root["JsDiff"]=factory();})(this,function(){return(/******/function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******/// The require function
/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
/******/module.loaded=true;/******/// Return the exports of the module
/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
/******/__webpack_require__.p="";/******/// Load entry module and return exports
/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports.canonicalize=exports.convertChangesToXML=exports.convertChangesToDMP=exports.merge=exports.parsePatch=exports.applyPatches=exports.applyPatch=exports.createPatch=exports.createTwoFilesPatch=exports.structuredPatch=exports.diffArrays=exports.diffJson=exports.diffCss=exports.diffSentences=exports.diffTrimmedLines=exports.diffLines=exports.diffWordsWithSpace=exports.diffWords=exports.diffChars=exports.Diff=undefined;/*istanbul ignore end*/var/*istanbul ignore start*/_base=__webpack_require__(1)/*istanbul ignore end*/;/*istanbul ignore start*/var _base2=_interopRequireDefault(_base);/*istanbul ignore end*/var/*istanbul ignore start*/_character=__webpack_require__(2)/*istanbul ignore end*/;var/*istanbul ignore start*/_word=__webpack_require__(3)/*istanbul ignore end*/;var/*istanbul ignore start*/_line=__webpack_require__(5)/*istanbul ignore end*/;var/*istanbul ignore start*/_sentence=__webpack_require__(6)/*istanbul ignore end*/;var/*istanbul ignore start*/_css=__webpack_require__(7)/*istanbul ignore end*/;var/*istanbul ignore start*/_json=__webpack_require__(8)/*istanbul ignore end*/;var/*istanbul ignore start*/_array=__webpack_require__(9)/*istanbul ignore end*/;var/*istanbul ignore start*/_apply=__webpack_require__(10)/*istanbul ignore end*/;var/*istanbul ignore start*/_parse=__webpack_require__(11)/*istanbul ignore end*/;var/*istanbul ignore start*/_merge=__webpack_require__(13)/*istanbul ignore end*/;var/*istanbul ignore start*/_create=__webpack_require__(14)/*istanbul ignore end*/;var/*istanbul ignore start*/_dmp=__webpack_require__(16)/*istanbul ignore end*/;var/*istanbul ignore start*/_xml=__webpack_require__(17)/*istanbul ignore end*/;/*istanbul ignore start*/function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/* See LICENSE file for terms of use *//*
	 * Text diff implementation.
	 *
	 * This library supports the following APIS:
	 * JsDiff.diffChars: Character by character diff
	 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
	 * JsDiff.diffLines: Line based diff
	 *
	 * JsDiff.diffCss: Diff targeted at CSS content
	 *
	 * These methods are based on the implementation proposed in
	 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
	 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
	 */exports./*istanbul ignore end*/Diff=_base2['default'];/*istanbul ignore start*/exports./*istanbul ignore end*/diffChars=_character.diffChars;/*istanbul ignore start*/exports./*istanbul ignore end*/diffWords=_word.diffWords;/*istanbul ignore start*/exports./*istanbul ignore end*/diffWordsWithSpace=_word.diffWordsWithSpace;/*istanbul ignore start*/exports./*istanbul ignore end*/diffLines=_line.diffLines;/*istanbul ignore start*/exports./*istanbul ignore end*/diffTrimmedLines=_line.diffTrimmedLines;/*istanbul ignore start*/exports./*istanbul ignore end*/diffSentences=_sentence.diffSentences;/*istanbul ignore start*/exports./*istanbul ignore end*/diffCss=_css.diffCss;/*istanbul ignore start*/exports./*istanbul ignore end*/diffJson=_json.diffJson;/*istanbul ignore start*/exports./*istanbul ignore end*/diffArrays=_array.diffArrays;/*istanbul ignore start*/exports./*istanbul ignore end*/structuredPatch=_create.structuredPatch;/*istanbul ignore start*/exports./*istanbul ignore end*/createTwoFilesPatch=_create.createTwoFilesPatch;/*istanbul ignore start*/exports./*istanbul ignore end*/createPatch=_create.createPatch;/*istanbul ignore start*/exports./*istanbul ignore end*/applyPatch=_apply.applyPatch;/*istanbul ignore start*/exports./*istanbul ignore end*/applyPatches=_apply.applyPatches;/*istanbul ignore start*/exports./*istanbul ignore end*/parsePatch=_parse.parsePatch;/*istanbul ignore start*/exports./*istanbul ignore end*/merge=_merge.merge;/*istanbul ignore start*/exports./*istanbul ignore end*/convertChangesToDMP=_dmp.convertChangesToDMP;/*istanbul ignore start*/exports./*istanbul ignore end*/convertChangesToXML=_xml.convertChangesToXML;/*istanbul ignore start*/exports./*istanbul ignore end*/canonicalize=_json.canonicalize;/***/},/* 1 *//***/function(module,exports){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports['default']=/*istanbul ignore end*/Diff;function Diff(){}Diff.prototype={/*istanbul ignore start*//*istanbul ignore end*/diff:function diff(oldString,newString){/*istanbul ignore start*/var/*istanbul ignore end*/options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var callback=options.callback;if(typeof options==='function'){callback=options;options={};}this.options=options;var self=this;function done(value){if(callback){setTimeout(function(){callback(undefined,value);},0);return true;}else{return value;}}// Allow subclasses to massage the input prior to running
oldString=this.castInput(oldString);newString=this.castInput(newString);oldString=this.removeEmpty(this.tokenize(oldString));newString=this.removeEmpty(this.tokenize(newString));var newLen=newString.length,oldLen=oldString.length;var editLength=1;var maxEditLength=newLen+oldLen;var bestPath=[{newPos:-1,components:[]}];// Seed editLength = 0, i.e. the content starts with the same values
var oldPos=this.extractCommon(bestPath[0],newString,oldString,0);if(bestPath[0].newPos+1>=newLen&&oldPos+1>=oldLen){// Identity per the equality and tokenizer
return done([{value:this.join(newString),count:newString.length}]);}// Main worker method. checks all permutations of a given edit length for acceptance.
function execEditLength(){for(var diagonalPath=-1*editLength;diagonalPath<=editLength;diagonalPath+=2){var basePath=/*istanbul ignore start*/void 0/*istanbul ignore end*/;var addPath=bestPath[diagonalPath-1],removePath=bestPath[diagonalPath+1],_oldPos=(removePath?removePath.newPos:0)-diagonalPath;if(addPath){// No one else is going to attempt to use this value, clear it
bestPath[diagonalPath-1]=undefined;}var canAdd=addPath&&addPath.newPos+1<newLen,canRemove=removePath&&0<=_oldPos&&_oldPos<oldLen;if(!canAdd&&!canRemove){// If this path is a terminal then prune
bestPath[diagonalPath]=undefined;continue;}// Select the diagonal that we want to branch from. We select the prior
// path whose position in the new string is the farthest from the origin
// and does not pass the bounds of the diff graph
if(!canAdd||canRemove&&addPath.newPos<removePath.newPos){basePath=clonePath(removePath);self.pushComponent(basePath.components,undefined,true);}else{basePath=addPath;// No need to clone, we've pulled it from the list
basePath.newPos++;self.pushComponent(basePath.components,true,undefined);}_oldPos=self.extractCommon(basePath,newString,oldString,diagonalPath);// If we have hit the end of both strings, then we are done
if(basePath.newPos+1>=newLen&&_oldPos+1>=oldLen){return done(buildValues(self,basePath.components,newString,oldString,self.useLongestToken));}else{// Otherwise track this path as a potential candidate and continue.
bestPath[diagonalPath]=basePath;}}editLength++;}// Performs the length of edit iteration. Is a bit fugly as this has to support the
// sync and async mode which is never fun. Loops over execEditLength until a value
// is produced.
if(callback){(function exec(){setTimeout(function(){// This should not happen, but we want to be safe.
/* istanbul ignore next */if(editLength>maxEditLength){return callback();}if(!execEditLength()){exec();}},0);})();}else{while(editLength<=maxEditLength){var ret=execEditLength();if(ret){return ret;}}}},/*istanbul ignore start*//*istanbul ignore end*/pushComponent:function pushComponent(components,added,removed){var last=components[components.length-1];if(last&&last.added===added&&last.removed===removed){// We need to clone here as the component clone operation is just
// as shallow array clone
components[components.length-1]={count:last.count+1,added:added,removed:removed};}else{components.push({count:1,added:added,removed:removed});}},/*istanbul ignore start*//*istanbul ignore end*/extractCommon:function extractCommon(basePath,newString,oldString,diagonalPath){var newLen=newString.length,oldLen=oldString.length,newPos=basePath.newPos,oldPos=newPos-diagonalPath,commonCount=0;while(newPos+1<newLen&&oldPos+1<oldLen&&this.equals(newString[newPos+1],oldString[oldPos+1])){newPos++;oldPos++;commonCount++;}if(commonCount){basePath.components.push({count:commonCount});}basePath.newPos=newPos;return oldPos;},/*istanbul ignore start*//*istanbul ignore end*/equals:function equals(left,right){if(this.options.comparator){return this.options.comparator(left,right);}else{return left===right||this.options.ignoreCase&&left.toLowerCase()===right.toLowerCase();}},/*istanbul ignore start*//*istanbul ignore end*/removeEmpty:function removeEmpty(array){var ret=[];for(var i=0;i<array.length;i++){if(array[i]){ret.push(array[i]);}}return ret;},/*istanbul ignore start*//*istanbul ignore end*/castInput:function castInput(value){return value;},/*istanbul ignore start*//*istanbul ignore end*/tokenize:function tokenize(value){return value.split('');},/*istanbul ignore start*//*istanbul ignore end*/join:function join(chars){return chars.join('');}};function buildValues(diff,components,newString,oldString,useLongestToken){var componentPos=0,componentLen=components.length,newPos=0,oldPos=0;for(;componentPos<componentLen;componentPos++){var component=components[componentPos];if(!component.removed){if(!component.added&&useLongestToken){var value=newString.slice(newPos,newPos+component.count);value=value.map(function(value,i){var oldValue=oldString[oldPos+i];return oldValue.length>value.length?oldValue:value;});component.value=diff.join(value);}else{component.value=diff.join(newString.slice(newPos,newPos+component.count));}newPos+=component.count;// Common case
if(!component.added){oldPos+=component.count;}}else{component.value=diff.join(oldString.slice(oldPos,oldPos+component.count));oldPos+=component.count;// Reverse add and remove so removes are output first to match common convention
// The diffing algorithm is tied to add then remove output and this is the simplest
// route to get the desired output with minimal overhead.
if(componentPos&&components[componentPos-1].added){var tmp=components[componentPos-1];components[componentPos-1]=components[componentPos];components[componentPos]=tmp;}}}// Special case handle for when one terminal is ignored (i.e. whitespace).
// For this case we merge the terminal into the prior string and drop the change.
// This is only available for string mode.
var lastComponent=components[componentLen-1];if(componentLen>1&&typeof lastComponent.value==='string'&&(lastComponent.added||lastComponent.removed)&&diff.equals('',lastComponent.value)){components[componentLen-2].value+=lastComponent.value;components.pop();}return components;}function clonePath(path){return{newPos:path.newPos,components:path.components.slice(0)};}/***/},/* 2 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports.characterDiff=undefined;exports./*istanbul ignore end*/diffChars=diffChars;var/*istanbul ignore start*/_base=__webpack_require__(1)/*istanbul ignore end*/;/*istanbul ignore start*/var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/*istanbul ignore end*/var characterDiff=/*istanbul ignore start*/exports./*istanbul ignore end*/characterDiff=new/*istanbul ignore start*/_base2['default']/*istanbul ignore end*/();function diffChars(oldStr,newStr,options){return characterDiff.diff(oldStr,newStr,options);}/***/},/* 3 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports.wordDiff=undefined;exports./*istanbul ignore end*/diffWords=diffWords;/*istanbul ignore start*/exports./*istanbul ignore end*/diffWordsWithSpace=diffWordsWithSpace;var/*istanbul ignore start*/_base=__webpack_require__(1)/*istanbul ignore end*/;/*istanbul ignore start*/var _base2=_interopRequireDefault(_base);/*istanbul ignore end*/var/*istanbul ignore start*/_params=__webpack_require__(4)/*istanbul ignore end*/;/*istanbul ignore start*/function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/*istanbul ignore end*/// Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF
var extendedWordChars=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;var reWhitespace=/\S/;var wordDiff=/*istanbul ignore start*/exports./*istanbul ignore end*/wordDiff=new/*istanbul ignore start*/_base2['default']/*istanbul ignore end*/();wordDiff.equals=function(left,right){if(this.options.ignoreCase){left=left.toLowerCase();right=right.toLowerCase();}return left===right||this.options.ignoreWhitespace&&!reWhitespace.test(left)&&!reWhitespace.test(right);};wordDiff.tokenize=function(value){var tokens=value.split(/(\s+|\b)/);// Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.
for(var i=0;i<tokens.length-1;i++){// If we have an empty string in the next field and we have only word chars before and after, merge
if(!tokens[i+1]&&tokens[i+2]&&extendedWordChars.test(tokens[i])&&extendedWordChars.test(tokens[i+2])){tokens[i]+=tokens[i+2];tokens.splice(i+1,2);i--;}}return tokens;};function diffWords(oldStr,newStr,options){options=/*istanbul ignore start*/(0,_params.generateOptions/*istanbul ignore end*/)(options,{ignoreWhitespace:true});return wordDiff.diff(oldStr,newStr,options);}function diffWordsWithSpace(oldStr,newStr,options){return wordDiff.diff(oldStr,newStr,options);}/***/},/* 4 *//***/function(module,exports){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports./*istanbul ignore end*/generateOptions=generateOptions;function generateOptions(options,defaults){if(typeof options==='function'){defaults.callback=options;}else if(options){for(var name in options){/* istanbul ignore else */if(options.hasOwnProperty(name)){defaults[name]=options[name];}}}return defaults;}/***/},/* 5 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports.lineDiff=undefined;exports./*istanbul ignore end*/diffLines=diffLines;/*istanbul ignore start*/exports./*istanbul ignore end*/diffTrimmedLines=diffTrimmedLines;var/*istanbul ignore start*/_base=__webpack_require__(1)/*istanbul ignore end*/;/*istanbul ignore start*/var _base2=_interopRequireDefault(_base);/*istanbul ignore end*/var/*istanbul ignore start*/_params=__webpack_require__(4)/*istanbul ignore end*/;/*istanbul ignore start*/function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/*istanbul ignore end*/var lineDiff=/*istanbul ignore start*/exports./*istanbul ignore end*/lineDiff=new/*istanbul ignore start*/_base2['default']/*istanbul ignore end*/();lineDiff.tokenize=function(value){var retLines=[],linesAndNewlines=value.split(/(\n|\r\n)/);// Ignore the final empty token that occurs if the string ends with a new line
if(!linesAndNewlines[linesAndNewlines.length-1]){linesAndNewlines.pop();}// Merge the content and line separators into single tokens
for(var i=0;i<linesAndNewlines.length;i++){var line=linesAndNewlines[i];if(i%2&&!this.options.newlineIsToken){retLines[retLines.length-1]+=line;}else{if(this.options.ignoreWhitespace){line=line.trim();}retLines.push(line);}}return retLines;};function diffLines(oldStr,newStr,callback){return lineDiff.diff(oldStr,newStr,callback);}function diffTrimmedLines(oldStr,newStr,callback){var options=/*istanbul ignore start*/(0,_params.generateOptions/*istanbul ignore end*/)(callback,{ignoreWhitespace:true});return lineDiff.diff(oldStr,newStr,options);}/***/},/* 6 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports.sentenceDiff=undefined;exports./*istanbul ignore end*/diffSentences=diffSentences;var/*istanbul ignore start*/_base=__webpack_require__(1)/*istanbul ignore end*/;/*istanbul ignore start*/var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/*istanbul ignore end*/var sentenceDiff=/*istanbul ignore start*/exports./*istanbul ignore end*/sentenceDiff=new/*istanbul ignore start*/_base2['default']/*istanbul ignore end*/();sentenceDiff.tokenize=function(value){return value.split(/(\S.+?[.!?])(?=\s+|$)/);};function diffSentences(oldStr,newStr,callback){return sentenceDiff.diff(oldStr,newStr,callback);}/***/},/* 7 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports.cssDiff=undefined;exports./*istanbul ignore end*/diffCss=diffCss;var/*istanbul ignore start*/_base=__webpack_require__(1)/*istanbul ignore end*/;/*istanbul ignore start*/var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/*istanbul ignore end*/var cssDiff=/*istanbul ignore start*/exports./*istanbul ignore end*/cssDiff=new/*istanbul ignore start*/_base2['default']/*istanbul ignore end*/();cssDiff.tokenize=function(value){return value.split(/([{}:;,]|\s+)/);};function diffCss(oldStr,newStr,callback){return cssDiff.diff(oldStr,newStr,callback);}/***/},/* 8 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports.jsonDiff=undefined;var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};exports./*istanbul ignore end*/diffJson=diffJson;/*istanbul ignore start*/exports./*istanbul ignore end*/canonicalize=canonicalize;var/*istanbul ignore start*/_base=__webpack_require__(1)/*istanbul ignore end*/;/*istanbul ignore start*/var _base2=_interopRequireDefault(_base);/*istanbul ignore end*/var/*istanbul ignore start*/_line=__webpack_require__(5)/*istanbul ignore end*/;/*istanbul ignore start*/function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/*istanbul ignore end*/var objectPrototypeToString=Object.prototype.toString;var jsonDiff=/*istanbul ignore start*/exports./*istanbul ignore end*/jsonDiff=new/*istanbul ignore start*/_base2['default']/*istanbul ignore end*/();// Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
jsonDiff.useLongestToken=true;jsonDiff.tokenize=/*istanbul ignore start*/_line.lineDiff/*istanbul ignore end*/.tokenize;jsonDiff.castInput=function(value){/*istanbul ignore start*/var/*istanbul ignore end*/undefinedReplacement=this.options.undefinedReplacement;return typeof value==='string'?value:JSON.stringify(canonicalize(value),function(k,v){if(typeof v==='undefined'){return undefinedReplacement;}return v;},'  ');};jsonDiff.equals=function(left,right){return(/*istanbul ignore start*/_base2['default']/*istanbul ignore end*/.prototype.equals.call(jsonDiff,left.replace(/,([\r\n])/g,'$1'),right.replace(/,([\r\n])/g,'$1')));};function diffJson(oldObj,newObj,options){return jsonDiff.diff(oldObj,newObj,options);}// This function handles the presence of circular references by bailing out when encountering an
// object that is already on the "stack" of items being processed.
function canonicalize(obj,stack,replacementStack){stack=stack||[];replacementStack=replacementStack||[];var i=/*istanbul ignore start*/void 0/*istanbul ignore end*/;for(i=0;i<stack.length;i+=1){if(stack[i]===obj){return replacementStack[i];}}var canonicalizedObj=/*istanbul ignore start*/void 0/*istanbul ignore end*/;if('[object Array]'===objectPrototypeToString.call(obj)){stack.push(obj);canonicalizedObj=new Array(obj.length);replacementStack.push(canonicalizedObj);for(i=0;i<obj.length;i+=1){canonicalizedObj[i]=canonicalize(obj[i],stack,replacementStack);}stack.pop();replacementStack.pop();return canonicalizedObj;}if(obj&&obj.toJSON){obj=obj.toJSON();}if(/*istanbul ignore start*/(typeof/*istanbul ignore end*/obj==='undefined'?'undefined':_typeof(obj))==='object'&&obj!==null){stack.push(obj);canonicalizedObj={};replacementStack.push(canonicalizedObj);var sortedKeys=[],key=/*istanbul ignore start*/void 0/*istanbul ignore end*/;for(key in obj){/* istanbul ignore else */if(obj.hasOwnProperty(key)){sortedKeys.push(key);}}sortedKeys.sort();for(i=0;i<sortedKeys.length;i+=1){key=sortedKeys[i];canonicalizedObj[key]=canonicalize(obj[key],stack,replacementStack);}stack.pop();replacementStack.pop();}else{canonicalizedObj=obj;}return canonicalizedObj;}/***/},/* 9 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports.arrayDiff=undefined;exports./*istanbul ignore end*/diffArrays=diffArrays;var/*istanbul ignore start*/_base=__webpack_require__(1)/*istanbul ignore end*/;/*istanbul ignore start*/var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/*istanbul ignore end*/var arrayDiff=/*istanbul ignore start*/exports./*istanbul ignore end*/arrayDiff=new/*istanbul ignore start*/_base2['default']/*istanbul ignore end*/();arrayDiff.tokenize=arrayDiff.join=function(value){return value.slice();};arrayDiff.removeEmpty=function(value){return value;};function diffArrays(oldArr,newArr,callback){return arrayDiff.diff(oldArr,newArr,callback);}/***/},/* 10 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports./*istanbul ignore end*/applyPatch=applyPatch;/*istanbul ignore start*/exports./*istanbul ignore end*/applyPatches=applyPatches;var/*istanbul ignore start*/_parse=__webpack_require__(11)/*istanbul ignore end*/;var/*istanbul ignore start*/_distanceIterator=__webpack_require__(12)/*istanbul ignore end*/;/*istanbul ignore start*/var _distanceIterator2=_interopRequireDefault(_distanceIterator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/*istanbul ignore end*/function applyPatch(source,uniDiff){/*istanbul ignore start*/var/*istanbul ignore end*/options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(typeof uniDiff==='string'){uniDiff=/*istanbul ignore start*/(0,_parse.parsePatch/*istanbul ignore end*/)(uniDiff);}if(Array.isArray(uniDiff)){if(uniDiff.length>1){throw new Error('applyPatch only works with a single input.');}uniDiff=uniDiff[0];}// Apply the diff to the input
var lines=source.split(/\r\n|[\n\v\f\r\x85]/),delimiters=source.match(/\r\n|[\n\v\f\r\x85]/g)||[],hunks=uniDiff.hunks,compareLine=options.compareLine||function(lineNumber,line,operation,patchContent)/*istanbul ignore start*/{return(/*istanbul ignore end*/line===patchContent);},errorCount=0,fuzzFactor=options.fuzzFactor||0,minLine=0,offset=0,removeEOFNL=/*istanbul ignore start*/void 0/*istanbul ignore end*/,addEOFNL=/*istanbul ignore start*/void 0/*istanbul ignore end*/;/**
	   * Checks if the hunk exactly fits on the provided location
	   */function hunkFits(hunk,toPos){for(var j=0;j<hunk.lines.length;j++){var line=hunk.lines[j],operation=line[0],content=line.substr(1);if(operation===' '||operation==='-'){// Context sanity check
if(!compareLine(toPos+1,lines[toPos],operation,content)){errorCount++;if(errorCount>fuzzFactor){return false;}}toPos++;}}return true;}// Search best fit offsets for each hunk based on the previous ones
for(var i=0;i<hunks.length;i++){var hunk=hunks[i],maxLine=lines.length-hunk.oldLines,localOffset=0,toPos=offset+hunk.oldStart-1;var iterator=/*istanbul ignore start*/(0,_distanceIterator2['default']/*istanbul ignore end*/)(toPos,minLine,maxLine);for(;localOffset!==undefined;localOffset=iterator()){if(hunkFits(hunk,toPos+localOffset)){hunk.offset=offset+=localOffset;break;}}if(localOffset===undefined){return false;}// Set lower text limit to end of the current hunk, so next ones don't try
// to fit over already patched text
minLine=hunk.offset+hunk.oldStart+hunk.oldLines;}// Apply patch hunks
var diffOffset=0;for(var _i=0;_i<hunks.length;_i++){var _hunk=hunks[_i],_toPos=_hunk.oldStart+_hunk.offset+diffOffset-1;diffOffset+=_hunk.newLines-_hunk.oldLines;if(_toPos<0){// Creating a new file
_toPos=0;}for(var j=0;j<_hunk.lines.length;j++){var line=_hunk.lines[j],operation=line[0],content=line.substr(1),delimiter=_hunk.linedelimiters[j];if(operation===' '){_toPos++;}else if(operation==='-'){lines.splice(_toPos,1);delimiters.splice(_toPos,1);/* istanbul ignore else */}else if(operation==='+'){lines.splice(_toPos,0,content);delimiters.splice(_toPos,0,delimiter);_toPos++;}else if(operation==='\\'){var previousOperation=_hunk.lines[j-1]?_hunk.lines[j-1][0]:null;if(previousOperation==='+'){removeEOFNL=true;}else if(previousOperation==='-'){addEOFNL=true;}}}}// Handle EOFNL insertion/removal
if(removeEOFNL){while(!lines[lines.length-1]){lines.pop();delimiters.pop();}}else if(addEOFNL){lines.push('');delimiters.push('\n');}for(var _k=0;_k<lines.length-1;_k++){lines[_k]=lines[_k]+delimiters[_k];}return lines.join('');}// Wrapper that supports multiple file patches via callbacks.
function applyPatches(uniDiff,options){if(typeof uniDiff==='string'){uniDiff=/*istanbul ignore start*/(0,_parse.parsePatch/*istanbul ignore end*/)(uniDiff);}var currentIndex=0;function processIndex(){var index=uniDiff[currentIndex++];if(!index){return options.complete();}options.loadFile(index,function(err,data){if(err){return options.complete(err);}var updatedContent=applyPatch(data,index,options);options.patched(index,updatedContent,function(err){if(err){return options.complete(err);}processIndex();});});}processIndex();}/***/},/* 11 *//***/function(module,exports){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports./*istanbul ignore end*/parsePatch=parsePatch;function parsePatch(uniDiff){/*istanbul ignore start*/var/*istanbul ignore end*/options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var diffstr=uniDiff.split(/\r\n|[\n\v\f\r\x85]/),delimiters=uniDiff.match(/\r\n|[\n\v\f\r\x85]/g)||[],list=[],i=0;function parseIndex(){var index={};list.push(index);// Parse diff metadata
while(i<diffstr.length){var line=diffstr[i];// File header found, end parsing diff metadata
if(/^(\-\-\-|\+\+\+|@@)\s/.test(line)){break;}// Diff index
var header=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);if(header){index.index=header[1];}i++;}// Parse file headers if they are defined. Unified diff requires them, but
// there's no technical issues to have an isolated hunk without file header
parseFileHeader(index);parseFileHeader(index);// Parse hunks
index.hunks=[];while(i<diffstr.length){var _line=diffstr[i];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)){break;}else if(/^@@/.test(_line)){index.hunks.push(parseHunk());}else if(_line&&options.strict){// Ignore unexpected content unless in strict mode
throw new Error('Unknown line '+(i+1)+' '+JSON.stringify(_line));}else{i++;}}}// Parses the --- and +++ headers, if none are found, no lines
// are consumed.
function parseFileHeader(index){var headerPattern=/^(---|\+\+\+)\s+([\S ]*)(?:\t(.*?)\s*)?$/;var fileHeader=headerPattern.exec(diffstr[i]);if(fileHeader){var keyPrefix=fileHeader[1]==='---'?'old':'new';var fileName=fileHeader[2].replace(/\\\\/g,'\\');if(/^".*"$/.test(fileName)){fileName=fileName.substr(1,fileName.length-2);}index[keyPrefix+'FileName']=fileName;index[keyPrefix+'Header']=fileHeader[3];i++;}}// Parses a hunk
// This assumes that we are at the start of a hunk.
function parseHunk(){var chunkHeaderIndex=i,chunkHeaderLine=diffstr[i++],chunkHeader=chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);var hunk={oldStart:+chunkHeader[1],oldLines:+chunkHeader[2]||1,newStart:+chunkHeader[3],newLines:+chunkHeader[4]||1,lines:[],linedelimiters:[]};var addCount=0,removeCount=0;for(;i<diffstr.length;i++){// Lines starting with '---' could be mistaken for the "remove line" operation
// But they could be the header for the next file. Therefore prune such cases out.
if(diffstr[i].indexOf('--- ')===0&&i+2<diffstr.length&&diffstr[i+1].indexOf('+++ ')===0&&diffstr[i+2].indexOf('@@')===0){break;}var operation=diffstr[i][0];if(operation==='+'||operation==='-'||operation===' '||operation==='\\'){hunk.lines.push(diffstr[i]);hunk.linedelimiters.push(delimiters[i]||'\n');if(operation==='+'){addCount++;}else if(operation==='-'){removeCount++;}else if(operation===' '){addCount++;removeCount++;}}else{break;}}// Handle the empty block count case
if(!addCount&&hunk.newLines===1){hunk.newLines=0;}if(!removeCount&&hunk.oldLines===1){hunk.oldLines=0;}// Perform optional sanity checking
if(options.strict){if(addCount!==hunk.newLines){throw new Error('Added line count did not match for hunk at line '+(chunkHeaderIndex+1));}if(removeCount!==hunk.oldLines){throw new Error('Removed line count did not match for hunk at line '+(chunkHeaderIndex+1));}}return hunk;}while(i<diffstr.length){parseIndex();}return list;}/***/},/* 12 *//***/function(module,exports){/*istanbul ignore start*/"use strict";exports.__esModule=true;exports["default"]=/*istanbul ignore end*/function(start,minLine,maxLine){var wantForward=true,backwardExhausted=false,forwardExhausted=false,localOffset=1;return function iterator(){if(wantForward&&!forwardExhausted){if(backwardExhausted){localOffset++;}else{wantForward=false;}// Check if trying to fit beyond text length, and if not, check it fits
// after offset location (or desired location on first iteration)
if(start+localOffset<=maxLine){return localOffset;}forwardExhausted=true;}if(!backwardExhausted){if(!forwardExhausted){wantForward=true;}// Check if trying to fit before text beginning, and if not, check it fits
// before offset location
if(minLine<=start-localOffset){return-localOffset++;}backwardExhausted=true;return iterator();}// We tried to fit hunk before text beginning and beyond text length, then
// hunk can't fit on the text. Return undefined
};};/***/},/* 13 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports./*istanbul ignore end*/calcLineCount=calcLineCount;/*istanbul ignore start*/exports./*istanbul ignore end*/merge=merge;var/*istanbul ignore start*/_create=__webpack_require__(14)/*istanbul ignore end*/;var/*istanbul ignore start*/_parse=__webpack_require__(11)/*istanbul ignore end*/;var/*istanbul ignore start*/_array=__webpack_require__(15)/*istanbul ignore end*/;/*istanbul ignore start*/function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}/*istanbul ignore end*/function calcLineCount(hunk){/*istanbul ignore start*/var _calcOldNewLineCount=/*istanbul ignore end*/calcOldNewLineCount(hunk.lines),oldLines=_calcOldNewLineCount.oldLines,newLines=_calcOldNewLineCount.newLines;if(oldLines!==undefined){hunk.oldLines=oldLines;}else{delete hunk.oldLines;}if(newLines!==undefined){hunk.newLines=newLines;}else{delete hunk.newLines;}}function merge(mine,theirs,base){mine=loadPatch(mine,base);theirs=loadPatch(theirs,base);var ret={};// For index we just let it pass through as it doesn't have any necessary meaning.
// Leaving sanity checks on this to the API consumer that may know more about the
// meaning in their own context.
if(mine.index||theirs.index){ret.index=mine.index||theirs.index;}if(mine.newFileName||theirs.newFileName){if(!fileNameChanged(mine)){// No header or no change in ours, use theirs (and ours if theirs does not exist)
ret.oldFileName=theirs.oldFileName||mine.oldFileName;ret.newFileName=theirs.newFileName||mine.newFileName;ret.oldHeader=theirs.oldHeader||mine.oldHeader;ret.newHeader=theirs.newHeader||mine.newHeader;}else if(!fileNameChanged(theirs)){// No header or no change in theirs, use ours
ret.oldFileName=mine.oldFileName;ret.newFileName=mine.newFileName;ret.oldHeader=mine.oldHeader;ret.newHeader=mine.newHeader;}else{// Both changed... figure it out
ret.oldFileName=selectField(ret,mine.oldFileName,theirs.oldFileName);ret.newFileName=selectField(ret,mine.newFileName,theirs.newFileName);ret.oldHeader=selectField(ret,mine.oldHeader,theirs.oldHeader);ret.newHeader=selectField(ret,mine.newHeader,theirs.newHeader);}}ret.hunks=[];var mineIndex=0,theirsIndex=0,mineOffset=0,theirsOffset=0;while(mineIndex<mine.hunks.length||theirsIndex<theirs.hunks.length){var mineCurrent=mine.hunks[mineIndex]||{oldStart:Infinity},theirsCurrent=theirs.hunks[theirsIndex]||{oldStart:Infinity};if(hunkBefore(mineCurrent,theirsCurrent)){// This patch does not overlap with any of the others, yay.
ret.hunks.push(cloneHunk(mineCurrent,mineOffset));mineIndex++;theirsOffset+=mineCurrent.newLines-mineCurrent.oldLines;}else if(hunkBefore(theirsCurrent,mineCurrent)){// This patch does not overlap with any of the others, yay.
ret.hunks.push(cloneHunk(theirsCurrent,theirsOffset));theirsIndex++;mineOffset+=theirsCurrent.newLines-theirsCurrent.oldLines;}else{// Overlap, merge as best we can
var mergedHunk={oldStart:Math.min(mineCurrent.oldStart,theirsCurrent.oldStart),oldLines:0,newStart:Math.min(mineCurrent.newStart+mineOffset,theirsCurrent.oldStart+theirsOffset),newLines:0,lines:[]};mergeLines(mergedHunk,mineCurrent.oldStart,mineCurrent.lines,theirsCurrent.oldStart,theirsCurrent.lines);theirsIndex++;mineIndex++;ret.hunks.push(mergedHunk);}}return ret;}function loadPatch(param,base){if(typeof param==='string'){if(/^@@/m.test(param)||/^Index:/m.test(param)){return(/*istanbul ignore start*/(0,_parse.parsePatch/*istanbul ignore end*/)(param)[0]);}if(!base){throw new Error('Must provide a base reference or pass in a patch');}return(/*istanbul ignore start*/(0,_create.structuredPatch/*istanbul ignore end*/)(undefined,undefined,base,param));}return param;}function fileNameChanged(patch){return patch.newFileName&&patch.newFileName!==patch.oldFileName;}function selectField(index,mine,theirs){if(mine===theirs){return mine;}else{index.conflict=true;return{mine:mine,theirs:theirs};}}function hunkBefore(test,check){return test.oldStart<check.oldStart&&test.oldStart+test.oldLines<check.oldStart;}function cloneHunk(hunk,offset){return{oldStart:hunk.oldStart,oldLines:hunk.oldLines,newStart:hunk.newStart+offset,newLines:hunk.newLines,lines:hunk.lines};}function mergeLines(hunk,mineOffset,mineLines,theirOffset,theirLines){// This will generally result in a conflicted hunk, but there are cases where the context
// is the only overlap where we can successfully merge the content here.
var mine={offset:mineOffset,lines:mineLines,index:0},their={offset:theirOffset,lines:theirLines,index:0};// Handle any leading content
insertLeading(hunk,mine,their);insertLeading(hunk,their,mine);// Now in the overlap content. Scan through and select the best changes from each.
while(mine.index<mine.lines.length&&their.index<their.lines.length){var mineCurrent=mine.lines[mine.index],theirCurrent=their.lines[their.index];if((mineCurrent[0]==='-'||mineCurrent[0]==='+')&&(theirCurrent[0]==='-'||theirCurrent[0]==='+')){// Both modified ...
mutualChange(hunk,mine,their);}else if(mineCurrent[0]==='+'&&theirCurrent[0]===' '){/*istanbul ignore start*/var _hunk$lines;/*istanbul ignore end*/// Mine inserted
/*istanbul ignore start*/(_hunk$lines=/*istanbul ignore end*/hunk.lines).push./*istanbul ignore start*/apply/*istanbul ignore end*/(/*istanbul ignore start*/_hunk$lines/*istanbul ignore end*/,/*istanbul ignore start*/_toConsumableArray(/*istanbul ignore end*/collectChange(mine)));}else if(theirCurrent[0]==='+'&&mineCurrent[0]===' '){/*istanbul ignore start*/var _hunk$lines2;/*istanbul ignore end*/// Theirs inserted
/*istanbul ignore start*/(_hunk$lines2=/*istanbul ignore end*/hunk.lines).push./*istanbul ignore start*/apply/*istanbul ignore end*/(/*istanbul ignore start*/_hunk$lines2/*istanbul ignore end*/,/*istanbul ignore start*/_toConsumableArray(/*istanbul ignore end*/collectChange(their)));}else if(mineCurrent[0]==='-'&&theirCurrent[0]===' '){// Mine removed or edited
removal(hunk,mine,their);}else if(theirCurrent[0]==='-'&&mineCurrent[0]===' '){// Their removed or edited
removal(hunk,their,mine,true);}else if(mineCurrent===theirCurrent){// Context identity
hunk.lines.push(mineCurrent);mine.index++;their.index++;}else{// Context mismatch
conflict(hunk,collectChange(mine),collectChange(their));}}// Now push anything that may be remaining
insertTrailing(hunk,mine);insertTrailing(hunk,their);calcLineCount(hunk);}function mutualChange(hunk,mine,their){var myChanges=collectChange(mine),theirChanges=collectChange(their);if(allRemoves(myChanges)&&allRemoves(theirChanges)){// Special case for remove changes that are supersets of one another
if(/*istanbul ignore start*/(0,_array.arrayStartsWith/*istanbul ignore end*/)(myChanges,theirChanges)&&skipRemoveSuperset(their,myChanges,myChanges.length-theirChanges.length)){/*istanbul ignore start*/var _hunk$lines3;/*istanbul ignore end*//*istanbul ignore start*/(_hunk$lines3=/*istanbul ignore end*/hunk.lines).push./*istanbul ignore start*/apply/*istanbul ignore end*/(/*istanbul ignore start*/_hunk$lines3/*istanbul ignore end*/,/*istanbul ignore start*/_toConsumableArray(/*istanbul ignore end*/myChanges));return;}else if(/*istanbul ignore start*/(0,_array.arrayStartsWith/*istanbul ignore end*/)(theirChanges,myChanges)&&skipRemoveSuperset(mine,theirChanges,theirChanges.length-myChanges.length)){/*istanbul ignore start*/var _hunk$lines4;/*istanbul ignore end*//*istanbul ignore start*/(_hunk$lines4=/*istanbul ignore end*/hunk.lines).push./*istanbul ignore start*/apply/*istanbul ignore end*/(/*istanbul ignore start*/_hunk$lines4/*istanbul ignore end*/,/*istanbul ignore start*/_toConsumableArray(/*istanbul ignore end*/theirChanges));return;}}else if(/*istanbul ignore start*/(0,_array.arrayEqual/*istanbul ignore end*/)(myChanges,theirChanges)){/*istanbul ignore start*/var _hunk$lines5;/*istanbul ignore end*//*istanbul ignore start*/(_hunk$lines5=/*istanbul ignore end*/hunk.lines).push./*istanbul ignore start*/apply/*istanbul ignore end*/(/*istanbul ignore start*/_hunk$lines5/*istanbul ignore end*/,/*istanbul ignore start*/_toConsumableArray(/*istanbul ignore end*/myChanges));return;}conflict(hunk,myChanges,theirChanges);}function removal(hunk,mine,their,swap){var myChanges=collectChange(mine),theirChanges=collectContext(their,myChanges);if(theirChanges.merged){/*istanbul ignore start*/var _hunk$lines6;/*istanbul ignore end*//*istanbul ignore start*/(_hunk$lines6=/*istanbul ignore end*/hunk.lines).push./*istanbul ignore start*/apply/*istanbul ignore end*/(/*istanbul ignore start*/_hunk$lines6/*istanbul ignore end*/,/*istanbul ignore start*/_toConsumableArray(/*istanbul ignore end*/theirChanges.merged));}else{conflict(hunk,swap?theirChanges:myChanges,swap?myChanges:theirChanges);}}function conflict(hunk,mine,their){hunk.conflict=true;hunk.lines.push({conflict:true,mine:mine,theirs:their});}function insertLeading(hunk,insert,their){while(insert.offset<their.offset&&insert.index<insert.lines.length){var line=insert.lines[insert.index++];hunk.lines.push(line);insert.offset++;}}function insertTrailing(hunk,insert){while(insert.index<insert.lines.length){var line=insert.lines[insert.index++];hunk.lines.push(line);}}function collectChange(state){var ret=[],operation=state.lines[state.index][0];while(state.index<state.lines.length){var line=state.lines[state.index];// Group additions that are immediately after subtractions and treat them as one "atomic" modify change.
if(operation==='-'&&line[0]==='+'){operation='+';}if(operation===line[0]){ret.push(line);state.index++;}else{break;}}return ret;}function collectContext(state,matchChanges){var changes=[],merged=[],matchIndex=0,contextChanges=false,conflicted=false;while(matchIndex<matchChanges.length&&state.index<state.lines.length){var change=state.lines[state.index],match=matchChanges[matchIndex];// Once we've hit our add, then we are done
if(match[0]==='+'){break;}contextChanges=contextChanges||change[0]!==' ';merged.push(match);matchIndex++;// Consume any additions in the other block as a conflict to attempt
// to pull in the remaining context after this
if(change[0]==='+'){conflicted=true;while(change[0]==='+'){changes.push(change);change=state.lines[++state.index];}}if(match.substr(1)===change.substr(1)){changes.push(change);state.index++;}else{conflicted=true;}}if((matchChanges[matchIndex]||'')[0]==='+'&&contextChanges){conflicted=true;}if(conflicted){return changes;}while(matchIndex<matchChanges.length){merged.push(matchChanges[matchIndex++]);}return{merged:merged,changes:changes};}function allRemoves(changes){return changes.reduce(function(prev,change){return prev&&change[0]==='-';},true);}function skipRemoveSuperset(state,removeChanges,delta){for(var i=0;i<delta;i++){var changeContent=removeChanges[removeChanges.length-delta+i].substr(1);if(state.lines[state.index+i]!==' '+changeContent){return false;}}state.index+=delta;return true;}function calcOldNewLineCount(lines){var oldLines=0;var newLines=0;lines.forEach(function(line){if(typeof line!=='string'){var myCount=calcOldNewLineCount(line.mine);var theirCount=calcOldNewLineCount(line.theirs);if(oldLines!==undefined){if(myCount.oldLines===theirCount.oldLines){oldLines+=myCount.oldLines;}else{oldLines=undefined;}}if(newLines!==undefined){if(myCount.newLines===theirCount.newLines){newLines+=myCount.newLines;}else{newLines=undefined;}}}else{if(newLines!==undefined&&(line[0]==='+'||line[0]===' ')){newLines++;}if(oldLines!==undefined&&(line[0]==='-'||line[0]===' ')){oldLines++;}}});return{oldLines:oldLines,newLines:newLines};}/***/},/* 14 *//***/function(module,exports,__webpack_require__){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports./*istanbul ignore end*/structuredPatch=structuredPatch;/*istanbul ignore start*/exports./*istanbul ignore end*/createTwoFilesPatch=createTwoFilesPatch;/*istanbul ignore start*/exports./*istanbul ignore end*/createPatch=createPatch;var/*istanbul ignore start*/_line=__webpack_require__(5)/*istanbul ignore end*/;/*istanbul ignore start*/function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}/*istanbul ignore end*/function structuredPatch(oldFileName,newFileName,oldStr,newStr,oldHeader,newHeader,options){if(!options){options={};}if(typeof options.context==='undefined'){options.context=4;}var diff=/*istanbul ignore start*/(0,_line.diffLines/*istanbul ignore end*/)(oldStr,newStr,options);diff.push({value:'',lines:[]});// Append an empty value to make cleanup easier
function contextLines(lines){return lines.map(function(entry){return' '+entry;});}var hunks=[];var oldRangeStart=0,newRangeStart=0,curRange=[],oldLine=1,newLine=1;/*istanbul ignore start*/var _loop=function _loop(/*istanbul ignore end*/i){var current=diff[i],lines=current.lines||current.value.replace(/\n$/,'').split('\n');current.lines=lines;if(current.added||current.removed){/*istanbul ignore start*/var _curRange;/*istanbul ignore end*/// If we have previous context, start with that
if(!oldRangeStart){var prev=diff[i-1];oldRangeStart=oldLine;newRangeStart=newLine;if(prev){curRange=options.context>0?contextLines(prev.lines.slice(-options.context)):[];oldRangeStart-=curRange.length;newRangeStart-=curRange.length;}}// Output our changes
/*istanbul ignore start*/(_curRange=/*istanbul ignore end*/curRange).push./*istanbul ignore start*/apply/*istanbul ignore end*/(/*istanbul ignore start*/_curRange/*istanbul ignore end*/,/*istanbul ignore start*/_toConsumableArray(/*istanbul ignore end*/lines.map(function(entry){return(current.added?'+':'-')+entry;})));// Track the updated file position
if(current.added){newLine+=lines.length;}else{oldLine+=lines.length;}}else{// Identical context lines. Track line changes
if(oldRangeStart){// Close out any changes that have been output (or join overlapping)
if(lines.length<=options.context*2&&i<diff.length-2){/*istanbul ignore start*/var _curRange2;/*istanbul ignore end*/// Overlapping
/*istanbul ignore start*/(_curRange2=/*istanbul ignore end*/curRange).push./*istanbul ignore start*/apply/*istanbul ignore end*/(/*istanbul ignore start*/_curRange2/*istanbul ignore end*/,/*istanbul ignore start*/_toConsumableArray(/*istanbul ignore end*/contextLines(lines)));}else{/*istanbul ignore start*/var _curRange3;/*istanbul ignore end*/// end the range and output
var contextSize=Math.min(lines.length,options.context);/*istanbul ignore start*/(_curRange3=/*istanbul ignore end*/curRange).push./*istanbul ignore start*/apply/*istanbul ignore end*/(/*istanbul ignore start*/_curRange3/*istanbul ignore end*/,/*istanbul ignore start*/_toConsumableArray(/*istanbul ignore end*/contextLines(lines.slice(0,contextSize))));var hunk={oldStart:oldRangeStart,oldLines:oldLine-oldRangeStart+contextSize,newStart:newRangeStart,newLines:newLine-newRangeStart+contextSize,lines:curRange};if(i>=diff.length-2&&lines.length<=options.context){// EOF is inside this hunk
var oldEOFNewline=/\n$/.test(oldStr);var newEOFNewline=/\n$/.test(newStr);if(lines.length==0&&!oldEOFNewline){// special case: old has no eol and no trailing context; no-nl can end up before adds
curRange.splice(hunk.oldLines,0,'\\ No newline at end of file');}else if(!oldEOFNewline||!newEOFNewline){curRange.push('\\ No newline at end of file');}}hunks.push(hunk);oldRangeStart=0;newRangeStart=0;curRange=[];}}oldLine+=lines.length;newLine+=lines.length;}};for(var i=0;i<diff.length;i++){/*istanbul ignore start*/_loop(/*istanbul ignore end*/i);}return{oldFileName:oldFileName,newFileName:newFileName,oldHeader:oldHeader,newHeader:newHeader,hunks:hunks};}function createTwoFilesPatch(oldFileName,newFileName,oldStr,newStr,oldHeader,newHeader,options){var diff=structuredPatch(oldFileName,newFileName,oldStr,newStr,oldHeader,newHeader,options);var ret=[];if(oldFileName==newFileName){ret.push('Index: '+oldFileName);}ret.push('===================================================================');ret.push('--- '+diff.oldFileName+(typeof diff.oldHeader==='undefined'?'':'\t'+diff.oldHeader));ret.push('+++ '+diff.newFileName+(typeof diff.newHeader==='undefined'?'':'\t'+diff.newHeader));for(var i=0;i<diff.hunks.length;i++){var hunk=diff.hunks[i];ret.push('@@ -'+hunk.oldStart+','+hunk.oldLines+' +'+hunk.newStart+','+hunk.newLines+' @@');ret.push.apply(ret,hunk.lines);}return ret.join('\n')+'\n';}function createPatch(fileName,oldStr,newStr,oldHeader,newHeader,options){return createTwoFilesPatch(fileName,fileName,oldStr,newStr,oldHeader,newHeader,options);}/***/},/* 15 *//***/function(module,exports){/*istanbul ignore start*/"use strict";exports.__esModule=true;exports./*istanbul ignore end*/arrayEqual=arrayEqual;/*istanbul ignore start*/exports./*istanbul ignore end*/arrayStartsWith=arrayStartsWith;function arrayEqual(a,b){if(a.length!==b.length){return false;}return arrayStartsWith(a,b);}function arrayStartsWith(array,start){if(start.length>array.length){return false;}for(var i=0;i<start.length;i++){if(start[i]!==array[i]){return false;}}return true;}/***/},/* 16 *//***/function(module,exports){/*istanbul ignore start*/"use strict";exports.__esModule=true;exports./*istanbul ignore end*/convertChangesToDMP=convertChangesToDMP;// See: http://code.google.com/p/google-diff-match-patch/wiki/API
function convertChangesToDMP(changes){var ret=[],change=/*istanbul ignore start*/void 0/*istanbul ignore end*/,operation=/*istanbul ignore start*/void 0/*istanbul ignore end*/;for(var i=0;i<changes.length;i++){change=changes[i];if(change.added){operation=1;}else if(change.removed){operation=-1;}else{operation=0;}ret.push([operation,change.value]);}return ret;}/***/},/* 17 *//***/function(module,exports){/*istanbul ignore start*/'use strict';exports.__esModule=true;exports./*istanbul ignore end*/convertChangesToXML=convertChangesToXML;function convertChangesToXML(changes){var ret=[];for(var i=0;i<changes.length;i++){var change=changes[i];if(change.added){ret.push('<ins>');}else if(change.removed){ret.push('<del>');}ret.push(escapeHTML(change.value));if(change.added){ret.push('</ins>');}else if(change.removed){ret.push('</del>');}}return ret.join('');}function escapeHTML(s){var n=s;n=n.replace(/&/g,'&amp;');n=n.replace(/</g,'&lt;');n=n.replace(/>/g,'&gt;');n=n.replace(/"/g,'&quot;');return n;}/***/}]/******/));});;},{}],4:[function(require,module,exports){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function makeEmptyFunction(arg){return function(){return arg;};}/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */var emptyFunction=function emptyFunction(){};emptyFunction.thatReturns=makeEmptyFunction;emptyFunction.thatReturnsFalse=makeEmptyFunction(false);emptyFunction.thatReturnsTrue=makeEmptyFunction(true);emptyFunction.thatReturnsNull=makeEmptyFunction(null);emptyFunction.thatReturnsThis=function(){return this;};emptyFunction.thatReturnsArgument=function(arg){return arg;};module.exports=emptyFunction;},{}],5:[function(require,module,exports){(function(process){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */'use strict';var emptyObject={};if(process.env.NODE_ENV!=='production'){Object.freeze(emptyObject);}module.exports=emptyObject;}).call(this,require('_process'));},{"_process":14}],6:[function(require,module,exports){(function(process){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */'use strict';/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */var validateFormat=function validateFormat(format){};if(process.env.NODE_ENV!=='production'){validateFormat=function validateFormat(format){if(format===undefined){throw new Error('invariant requires an error message argument');}};}function invariant(condition,format,a,b,c,d,e,f){validateFormat(format);if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var args=[a,b,c,d,e,f];var argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name='Invariant Violation';}error.framesToPop=1;// we don't care about invariant's own frame
throw error;}}module.exports=invariant;}).call(this,require('_process'));},{"_process":14}],7:[function(require,module,exports){(function(process){/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */'use strict';var emptyFunction=require('./emptyFunction');/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warning=emptyFunction;if(process.env.NODE_ENV!=='production'){var printWarning=function printWarning(format){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.error(message);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}};warning=function warning(condition,format){if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(format.indexOf('Failed Composite propType: ')===0){return;// Ignore CompositeComponent proptype check.
}if(!condition){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}printWarning.apply(undefined,[format].concat(args));}};}module.exports=warning;}).call(this,require('_process'));},{"./emptyFunction":4,"_process":14}],8:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(object){return Object.getOwnPropertySymbols(object).filter(function(keySymbol){return object.propertyIsEnumerable(keySymbol);});};},{}],9:[function(require,module,exports){'use strict';module.exports=function(x){var type=typeof x==="undefined"?"undefined":_typeof2(x);return x!==null&&(type==='object'||type==='function');};},{}],10:[function(require,module,exports){/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */'use strict';var isObject=require('isobject');function isObjectObject(o){return isObject(o)===true&&Object.prototype.toString.call(o)==='[object Object]';}module.exports=function isPlainObject(o){var ctor,prot;if(isObjectObject(o)===false)return false;// If has modified constructor
ctor=o.constructor;if(typeof ctor!=='function')return false;// If has modified prototype
prot=ctor.prototype;if(isObjectObject(prot)===false)return false;// If constructor does not have an Object-specific method
if(prot.hasOwnProperty('isPrototypeOf')===false){return false;}// Most likely a plain Object
return true;};},{"isobject":12}],11:[function(require,module,exports){'use strict';module.exports=function(re){return Object.prototype.toString.call(re)==='[object RegExp]';};},{}],12:[function(require,module,exports){/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */'use strict';module.exports=function isObject(val){return val!=null&&(typeof val==="undefined"?"undefined":_typeof2(val))==='object'&&Array.isArray(val)===false;};},{}],13:[function(require,module,exports){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/'use strict';/* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String('abc');// eslint-disable-line no-new-wrappers
test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){// We don't expect any of the above to throw, but better to be safe.
return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};},{}],14:[function(require,module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],15:[function(require,module,exports){(function(process){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */'use strict';if(process.env.NODE_ENV!=='production'){var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var ReactPropTypesSecret=require('./lib/ReactPropTypesSecret');var loggedTypeFailures={};}/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(process.env.NODE_ENV!=='production'){for(var typeSpecName in typeSpecs){if(typeSpecs.hasOwnProperty(typeSpecName)){var error;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
invariant(typeof typeSpecs[typeSpecName]==='function','%s: %s type `%s` is invalid; it must be a function, usually from '+'the `prop-types` package, but received `%s`.',componentName||'React class',location,typeSpecName,_typeof2(typeSpecs[typeSpecName]));error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',location,typeSpecName,typeof error==="undefined"?"undefined":_typeof2(error));if(error instanceof Error&&!(error.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var stack=getStack?getStack():'';warning(false,'Failed %s type: %s%s',location,error.message,stack!=null?stack:'');}}}}}module.exports=checkPropTypes;}).call(this,require('_process'));},{"./lib/ReactPropTypesSecret":16,"_process":14,"fbjs/lib/invariant":6,"fbjs/lib/warning":7}],16:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */'use strict';var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;},{}],17:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _collapseWhiteSpace=require('collapse-white-space');var _collapseWhiteSpace2=_interopRequireDefault(_collapseWhiteSpace);var _react=require('react');var _stringifyObject=require('stringify-object');var _stringifyObject2=_interopRequireDefault(_stringifyObject);var _sortobject=require('sortobject');var _sortobject2=_interopRequireDefault(_sortobject);var _parseReactElement=require('./../parser/parseReactElement');var _parseReactElement2=_interopRequireDefault(_parseReactElement);var _formatTreeNode=require('./formatTreeNode');var _formatTreeNode2=_interopRequireDefault(_formatTreeNode);var _spacer=require('./spacer');var _spacer2=_interopRequireDefault(_spacer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function noRefCheck(){}exports.default=function(value,inline,lvl,options){var normalizedValue=(0,_sortobject2.default)(value);var stringifiedValue=(0,_stringifyObject2.default)(normalizedValue,{transform:function transform(currentObj,prop,originalResult){var currentValue=currentObj[prop];if(currentValue&&(0,_react.isValidElement)(currentValue)){return(0,_formatTreeNode2.default)((0,_parseReactElement2.default)(currentValue,options),true,lvl,options);}if(typeof currentValue==='function'){return noRefCheck;}return originalResult;}});if(inline){return(0,_collapseWhiteSpace2.default)(stringifiedValue).replace(/{ /g,'{').replace(/ }/g,'}').replace(/\[ /g,'[').replace(/ ]/g,']');}// Replace tabs with spaces, and add necessary indentation in front of each new line
return stringifiedValue.replace(/\t/g,(0,_spacer2.default)(1,options.tabStop)).replace(/\n([^$])/g,'\n'+(0,_spacer2.default)(lvl+1,options.tabStop)+'$1');};},{"./../parser/parseReactElement":27,"./formatTreeNode":22,"./spacer":25,"collapse-white-space":2,"react":31,"sortobject":32,"stringify-object":33}],18:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _spacer=require('./spacer');var _spacer2=_interopRequireDefault(_spacer);var _formatPropValue=require('./formatPropValue');var _formatPropValue2=_interopRequireDefault(_formatPropValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(name,hasValue,value,hasDefaultValue,defaultValue,inline,lvl,options){if(!hasValue&&!hasDefaultValue){throw new Error('The prop "'+name+'" has no value and no default: could not be formatted');}var usedValue=hasValue?value:defaultValue;var useBooleanShorthandSyntax=options.useBooleanShorthandSyntax,tabStop=options.tabStop;var formattedPropValue=(0,_formatPropValue2.default)(usedValue,inline,lvl,options);var attributeFormattedInline=' ';var attributeFormattedMultiline='\n'+(0,_spacer2.default)(lvl+1,tabStop);var isMultilineAttribute=formattedPropValue.includes('\n');if(useBooleanShorthandSyntax&&formattedPropValue==='{false}'&&!hasDefaultValue){// If a boolean is false and not different from it's default, we do not render the attribute
attributeFormattedInline='';attributeFormattedMultiline='';}else if(useBooleanShorthandSyntax&&formattedPropValue==='{true}'){attributeFormattedInline+=''+name;attributeFormattedMultiline+=''+name;}else{attributeFormattedInline+=name+'='+formattedPropValue;attributeFormattedMultiline+=name+'='+formattedPropValue;}return{attributeFormattedInline:attributeFormattedInline,attributeFormattedMultiline:attributeFormattedMultiline,isMultilineAttribute:isMultilineAttribute};};},{"./formatPropValue":19,"./spacer":25}],19:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};var _isPlainObject=require('is-plain-object');var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _react=require('react');var _formatComplexDataStructure=require('./formatComplexDataStructure');var _formatComplexDataStructure2=_interopRequireDefault(_formatComplexDataStructure);var _formatTreeNode=require('./formatTreeNode');var _formatTreeNode2=_interopRequireDefault(_formatTreeNode);var _parseReactElement=require('./../parser/parseReactElement');var _parseReactElement2=_interopRequireDefault(_parseReactElement);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var noRefCheck=function noRefCheck(){};var escape=function escape(s){return s.replace(/"/g,'&quot;');};var defaultFunctionValue=function defaultFunctionValue(fn){return fn;};var formatPropValue=function formatPropValue(propValue,inline,lvl,options){if(typeof propValue==='number'){return'{'+String(propValue)+'}';}if(typeof propValue==='string'){return'"'+escape(propValue)+'"';}// > "Symbols (new in ECMAScript 2015, not yet supported in Flow)"
// @see: https://flow.org/en/docs/types/primitives/
// $FlowFixMe: Flow does not support Symbol
if((typeof propValue==='undefined'?'undefined':_typeof(propValue))==='symbol'){var symbolDescription=propValue.valueOf().toString().replace(/Symbol\((.*)\)/,'$1');if(!symbolDescription){return'{Symbol()}';}return'{Symbol(\''+symbolDescription+'\')}';}if(typeof propValue==='function'){var _options$functionValu=options.functionValue,functionValue=_options$functionValu===undefined?defaultFunctionValue:_options$functionValu,showFunctions=options.showFunctions;if(!showFunctions&&functionValue===defaultFunctionValue){return'{'+functionValue(noRefCheck)+'}';}return'{'+functionValue(propValue)+'}';}if((0,_react.isValidElement)(propValue)){return'{'+(0,_formatTreeNode2.default)((0,_parseReactElement2.default)(propValue,options),true,lvl,options)+'}';}if(propValue instanceof Date){return'{new Date("'+propValue.toISOString()+'")}';}if((0,_isPlainObject2.default)(propValue)||Array.isArray(propValue)){return'{'+(0,_formatComplexDataStructure2.default)(propValue,inline,lvl,options)+'}';}return'{'+String(propValue)+'}';};exports.default=formatPropValue;},{"./../parser/parseReactElement":27,"./formatComplexDataStructure":17,"./formatTreeNode":22,"is-plain-object":10,"react":31}],20:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _spacer=require('./spacer');var _spacer2=_interopRequireDefault(_spacer);var _formatTreeNode=require('./formatTreeNode');var _formatTreeNode2=_interopRequireDefault(_formatTreeNode);var _formatProp2=require('./formatProp');var _formatProp3=_interopRequireDefault(_formatProp2);var _mergeSiblingPlainStringChildrenReducer=require('./mergeSiblingPlainStringChildrenReducer');var _mergeSiblingPlainStringChildrenReducer2=_interopRequireDefault(_mergeSiblingPlainStringChildrenReducer);var _propNameSorter=require('./propNameSorter');var _propNameSorter2=_interopRequireDefault(_propNameSorter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var compensateMultilineStringElementIndentation=function compensateMultilineStringElementIndentation(element,formattedElement,inline,lvl,options){var tabStop=options.tabStop;if(element.type==='string'){return formattedElement.split('\n').map(function(line,offset){if(offset===0){return line;}return''+(0,_spacer2.default)(lvl,tabStop)+line;}).join('\n');}return formattedElement;};var formatOneChildren=function formatOneChildren(inline,lvl,options){return function(element){return compensateMultilineStringElementIndentation(element,(0,_formatTreeNode2.default)(element,inline,lvl,options),inline,lvl,options);};};var onlyPropsWithOriginalValue=function onlyPropsWithOriginalValue(defaultProps,props){return function(propName){var haveDefaultValue=Object.keys(defaultProps).includes(propName);return!haveDefaultValue||haveDefaultValue&&defaultProps[propName]!==props[propName];};};var isInlineAttributeTooLong=function isInlineAttributeTooLong(attributes,inlineAttributeString,lvl,tabStop,maxInlineAttributesLineLength){if(!maxInlineAttributesLineLength){return attributes.length>1;}return(0,_spacer2.default)(lvl,tabStop).length+inlineAttributeString.length>maxInlineAttributesLineLength;};var shouldRenderMultilineAttr=function shouldRenderMultilineAttr(attributes,inlineAttributeString,containsMultilineAttr,inline,lvl,tabStop,maxInlineAttributesLineLength){return(isInlineAttributeTooLong(attributes,inlineAttributeString,lvl,tabStop,maxInlineAttributesLineLength)||containsMultilineAttr)&&!inline;};exports.default=function(node,inline,lvl,options){var type=node.type,_node$displayName=node.displayName,displayName=_node$displayName===undefined?'':_node$displayName,childrens=node.childrens,_node$props=node.props,props=_node$props===undefined?{}:_node$props,_node$defaultProps=node.defaultProps,defaultProps=_node$defaultProps===undefined?{}:_node$defaultProps;if(type!=='ReactElement'){throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '+type);}var filterProps=options.filterProps,maxInlineAttributesLineLength=options.maxInlineAttributesLineLength,showDefaultProps=options.showDefaultProps,sortProps=options.sortProps,tabStop=options.tabStop;var out='<'+displayName;var outInlineAttr=out;var outMultilineAttr=out;var containsMultilineAttr=false;var visibleAttributeNames=[];Object.keys(props).filter(function(propName){return filterProps.indexOf(propName)===-1;}).filter(onlyPropsWithOriginalValue(defaultProps,props)).forEach(function(propName){return visibleAttributeNames.push(propName);});Object.keys(defaultProps).filter(function(defaultPropName){return filterProps.indexOf(defaultPropName)===-1;}).filter(function(){return showDefaultProps;}).filter(function(defaultPropName){return!visibleAttributeNames.includes(defaultPropName);}).forEach(function(defaultPropName){return visibleAttributeNames.push(defaultPropName);});var attributes=visibleAttributeNames.sort((0,_propNameSorter2.default)(sortProps));attributes.forEach(function(attributeName){var _formatProp=(0,_formatProp3.default)(attributeName,Object.keys(props).includes(attributeName),props[attributeName],Object.keys(defaultProps).includes(attributeName),defaultProps[attributeName],inline,lvl,options),attributeFormattedInline=_formatProp.attributeFormattedInline,attributeFormattedMultiline=_formatProp.attributeFormattedMultiline,isMultilineAttribute=_formatProp.isMultilineAttribute;if(isMultilineAttribute){containsMultilineAttr=true;}outInlineAttr+=attributeFormattedInline;outMultilineAttr+=attributeFormattedMultiline;});outMultilineAttr+='\n'+(0,_spacer2.default)(lvl,tabStop);if(shouldRenderMultilineAttr(attributes,outInlineAttr,containsMultilineAttr,inline,lvl,tabStop,maxInlineAttributesLineLength)){out=outMultilineAttr;}else{out=outInlineAttr;}if(childrens&&childrens.length>0){var newLvl=lvl+1;out+='>';if(!inline){out+='\n';out+=(0,_spacer2.default)(newLvl,tabStop);}out+=childrens.reduce(_mergeSiblingPlainStringChildrenReducer2.default,[]).map(formatOneChildren(inline,newLvl,options)).join('\n'+(0,_spacer2.default)(newLvl,tabStop));if(!inline){out+='\n';out+=(0,_spacer2.default)(newLvl-1,tabStop);}out+='</'+displayName+'>';}else{if(!isInlineAttributeTooLong(attributes,outInlineAttr,lvl,tabStop,maxInlineAttributesLineLength)){out+=' ';}out+='/>';}return out;};},{"./formatProp":18,"./formatTreeNode":22,"./mergeSiblingPlainStringChildrenReducer":23,"./propNameSorter":24,"./spacer":25}],21:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _formatTreeNode=require('./formatTreeNode');var _formatTreeNode2=_interopRequireDefault(_formatTreeNode);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(node,options){return(0,_formatTreeNode2.default)(node,false,0,options);};},{"./formatTreeNode":22}],22:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _formatReactElementNode=require('./formatReactElementNode');var _formatReactElementNode2=_interopRequireDefault(_formatReactElementNode);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var jsxStopChars=['<','>','{','}'];var shouldBeEscaped=function shouldBeEscaped(s){return jsxStopChars.some(function(jsxStopChar){return s.includes(jsxStopChar);});};var escape=function escape(s){if(!shouldBeEscaped(s)){return s;}return'{`'+s+'`}';};var preserveTrailingSpace=function preserveTrailingSpace(s){var result=s;if(result.endsWith(' ')){result=result.replace(/^(\S*)(\s*)$/,"$1{'$2'}");}if(result.startsWith(' ')){result=result.replace(/^(\s*)(\S*)$/,"{'$1'}$2");}return result;};exports.default=function(node,inline,lvl,options){if(node.type==='number'){return String(node.value);}if(node.type==='string'){return node.value?''+preserveTrailingSpace(escape(String(node.value))):'';}if(node.type==='ReactElement'){return(0,_formatReactElementNode2.default)(node,inline,lvl,options);}throw new TypeError('Unknow format type "'+node.type+'"');};},{"./formatReactElementNode":20}],23:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _tree=require('./../tree');exports.default=function(previousNodes,currentNode){var nodes=previousNodes.slice(0,previousNodes.length>0?previousNodes.length-1:0);var previousNode=previousNodes[previousNodes.length-1];if(previousNode&&(currentNode.type==='string'||currentNode.type==='number')&&(previousNode.type==='string'||previousNode.type==='number')){nodes.push((0,_tree.createStringTreeNode)(String(previousNode.value)+String(currentNode.value)));}else{if(previousNode){nodes.push(previousNode);}nodes.push(currentNode);}return nodes;};},{"./../tree":28}],24:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(sortProps){return function(a,b){if(a===b){return 0;}if(['key','ref'].includes(a)){return-1;}else if(['key','ref'].includes(b)){return 1;}if(!sortProps){return 0;}return a<b?-1:1;};};},{}],25:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(times,tabStop){if(times===0){return'';}return new Array(times*tabStop).fill(' ').join('');};},{}],26:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var React=_interopRequireWildcard(_react);var _formatTree=require('./formatter/formatTree');var _formatTree2=_interopRequireDefault(_formatTree);var _parseReactElement=require('./parser/parseReactElement');var _parseReactElement2=_interopRequireDefault(_parseReactElement);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var reactElementToJsxString=function reactElementToJsxString(element){var _ref=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},_ref$filterProps=_ref.filterProps,filterProps=_ref$filterProps===undefined?[]:_ref$filterProps,_ref$showDefaultProps=_ref.showDefaultProps,showDefaultProps=_ref$showDefaultProps===undefined?true:_ref$showDefaultProps,_ref$showFunctions=_ref.showFunctions,showFunctions=_ref$showFunctions===undefined?false:_ref$showFunctions,functionValue=_ref.functionValue,_ref$tabStop=_ref.tabStop,tabStop=_ref$tabStop===undefined?2:_ref$tabStop,_ref$useBooleanShorth=_ref.useBooleanShorthandSyntax,useBooleanShorthandSyntax=_ref$useBooleanShorth===undefined?true:_ref$useBooleanShorth,_ref$sortProps=_ref.sortProps,sortProps=_ref$sortProps===undefined?true:_ref$sortProps,maxInlineAttributesLineLength=_ref.maxInlineAttributesLineLength,displayName=_ref.displayName;if(!element){throw new Error('react-element-to-jsx-string: Expected a ReactElement');}var options={filterProps:filterProps,showDefaultProps:showDefaultProps,showFunctions:showFunctions,functionValue:functionValue,tabStop:tabStop,useBooleanShorthandSyntax:useBooleanShorthandSyntax,sortProps:sortProps,maxInlineAttributesLineLength:maxInlineAttributesLineLength,displayName:displayName};return(0,_formatTree2.default)((0,_parseReactElement2.default)(element,options),options);};exports.default=reactElementToJsxString;},{"./formatter/formatTree":21,"./parser/parseReactElement":27,"react":31}],27:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};var _react=require('react');var React=_interopRequireWildcard(_react);var _tree=require('./../tree');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var getReactElementDisplayName=function getReactElementDisplayName(element){return element.type.displayName||element.type.name||(// function name
typeof element.type==='function'// function without a name, you should provide one
?'No Display Name':element.type);};var noChildren=function noChildren(propsValue,propName){return propName!=='children';};var onlyMeaningfulChildren=function onlyMeaningfulChildren(children){return children!==true&&children!==false&&children!==null&&children!=='';};var filterProps=function filterProps(originalProps,cb){var filteredProps={};Object.keys(originalProps).filter(function(key){return cb(originalProps[key],key);}).forEach(function(key){return filteredProps[key]=originalProps[key];});return filteredProps;};var parseReactElement=function parseReactElement(element,options){var _options$displayName=options.displayName,displayNameFn=_options$displayName===undefined?getReactElementDisplayName:_options$displayName;if(typeof element==='string'){return(0,_tree.createStringTreeNode)(element);}else if(typeof element==='number'){return(0,_tree.createNumberTreeNode)(element);}else if(!React.isValidElement(element)){throw new Error('react-element-to-jsx-string: Expected a React.Element, got `'+(typeof element==='undefined'?'undefined':_typeof(element))+'`');}var displayName=displayNameFn(element);var props=filterProps(element.props,noChildren);if(element.ref!==null){props.ref=element.ref;}var key=element.key;if(typeof key==='string'&&key.search(/^\./)){// React automatically add key=".X" when there are some children
props.key=key;}var defaultProps=filterProps(element.type.defaultProps||{},noChildren);var childrens=React.Children.toArray(element.props.children).filter(onlyMeaningfulChildren).map(function(child){return parseReactElement(child,options);});return(0,_tree.createReactElementTreeNode)(displayName,props,defaultProps,childrens);};exports.default=parseReactElement;},{"./../tree":28,"react":31}],28:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});/* eslint-disable no-use-before-define */var createStringTreeNode=exports.createStringTreeNode=function createStringTreeNode(value){return{type:'string',value:value};};var createNumberTreeNode=exports.createNumberTreeNode=function createNumberTreeNode(value){return{type:'number',value:value};};var createReactElementTreeNode=exports.createReactElementTreeNode=function createReactElementTreeNode(displayName,props,defaultProps,childrens){return{type:'ReactElement',displayName:displayName,props:props,defaultProps:defaultProps,childrens:childrens};};},{}],29:[function(require,module,exports){(function(process){/** @license React v16.0.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */'use strict';if(process.env.NODE_ENV!=="production"){(function(){'use strict';var objectAssign$1=require('object-assign');var require$$0=require('fbjs/lib/warning');var emptyObject=require('fbjs/lib/emptyObject');var invariant=require('fbjs/lib/invariant');var emptyFunction=require('fbjs/lib/emptyFunction');var checkPropTypes=require('prop-types/checkPropTypes');/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule reactProdInvariant
 * 
 */{var warning=require$$0;}function warnNoop(publicInstance,callerName){{var constructor=publicInstance.constructor;warning(false,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op.\n\nPlease check the code for the %s component.',callerName,callerName,constructor&&(constructor.displayName||constructor.name)||'ReactClass');}}/**
 * This is the abstract API for an update queue.
 */var ReactNoopUpdateQueue={/**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function isMounted(publicInstance){return false;},/**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */enqueueForceUpdate:function enqueueForceUpdate(publicInstance,callback,callerName){warnNoop(publicInstance,'forceUpdate');},/**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState,callback,callerName){warnNoop(publicInstance,'replaceState');},/**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */enqueueSetState:function enqueueSetState(publicInstance,partialState,callback,callerName){warnNoop(publicInstance,'setState');}};var ReactNoopUpdateQueue_1=ReactNoopUpdateQueue;/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule lowPriorityWarning
 *//**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var lowPriorityWarning=function lowPriorityWarning(){};{var printWarning=function printWarning(format){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.warn(message);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}};lowPriorityWarning=function lowPriorityWarning(condition,format){if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(!condition){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}printWarning.apply(undefined,[format].concat(args));}};}var lowPriorityWarning_1=lowPriorityWarning;/**
 * Base class helpers for the updating state of a component.
 */function ReactComponent(props,context,updater){this.props=props;this.context=context;this.refs=emptyObject;// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=updater||ReactNoopUpdateQueue_1;}ReactComponent.prototype.isReactComponent={};/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ReactComponent.prototype.setState=function(partialState,callback){!((typeof partialState==="undefined"?"undefined":_typeof2(partialState))==='object'||typeof partialState==='function'||partialState==null)?invariant(false,'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'):void 0;this.updater.enqueueSetState(this,partialState,callback,'setState');};/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ReactComponent.prototype.forceUpdate=function(callback){this.updater.enqueueForceUpdate(this,callback,'forceUpdate');};/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */{var deprecatedAPIs={isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in '+'componentWillUnmount to prevent memory leaks.'],replaceState:['replaceState','Refactor your code to use setState instead (see '+'https://github.com/facebook/react/issues/3236).']};var defineDeprecationWarning=function defineDeprecationWarning(methodName,info){Object.defineProperty(ReactComponent.prototype,methodName,{get:function get(){lowPriorityWarning_1(false,'%s(...) is deprecated in plain JavaScript React classes. %s',info[0],info[1]);return undefined;}});};for(var fnName in deprecatedAPIs){if(deprecatedAPIs.hasOwnProperty(fnName)){defineDeprecationWarning(fnName,deprecatedAPIs[fnName]);}}}/**
 * Base class helpers for the updating state of a component.
 */function ReactPureComponent(props,context,updater){// Duplicated from ReactComponent.
this.props=props;this.context=context;this.refs=emptyObject;// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=updater||ReactNoopUpdateQueue_1;}function ComponentDummy(){}ComponentDummy.prototype=ReactComponent.prototype;var pureComponentPrototype=ReactPureComponent.prototype=new ComponentDummy();pureComponentPrototype.constructor=ReactPureComponent;// Avoid an extra prototype jump for these methods.
objectAssign$1(pureComponentPrototype,ReactComponent.prototype);pureComponentPrototype.isPureReactComponent=true;function ReactAsyncComponent(props,context,updater){// Duplicated from ReactComponent.
this.props=props;this.context=context;this.refs=emptyObject;// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=updater||ReactNoopUpdateQueue_1;}var asyncComponentPrototype=ReactAsyncComponent.prototype=new ComponentDummy();asyncComponentPrototype.constructor=ReactAsyncComponent;// Avoid an extra prototype jump for these methods.
objectAssign$1(asyncComponentPrototype,ReactComponent.prototype);asyncComponentPrototype.unstable_isAsyncReactComponent=true;asyncComponentPrototype.render=function(){return this.props.children;};var ReactBaseClasses={Component:ReactComponent,PureComponent:ReactPureComponent,AsyncComponent:ReactAsyncComponent};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactCurrentOwner
 * 
 *//**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */var ReactCurrentOwner={/**
   * @internal
   * @type {ReactComponent}
   */current:null};var ReactCurrentOwner_1=ReactCurrentOwner;var hasOwnProperty=Object.prototype.hasOwnProperty;{var warning$2=require$$0;}// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE$1=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;var RESERVED_PROPS={key:true,ref:true,__self:true,__source:true};var specialPropKeyWarningShown;var specialPropRefWarningShown;function hasValidRef(config){{if(hasOwnProperty.call(config,'ref')){var getter=Object.getOwnPropertyDescriptor(config,'ref').get;if(getter&&getter.isReactWarning){return false;}}}return config.ref!==undefined;}function hasValidKey(config){{if(hasOwnProperty.call(config,'key')){var getter=Object.getOwnPropertyDescriptor(config,'key').get;if(getter&&getter.isReactWarning){return false;}}}return config.key!==undefined;}function defineKeyPropWarningGetter(props,displayName){var warnAboutAccessingKey=function warnAboutAccessingKey(){if(!specialPropKeyWarningShown){specialPropKeyWarningShown=true;warning$2(false,'%s: `key` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName);}};warnAboutAccessingKey.isReactWarning=true;Object.defineProperty(props,'key',{get:warnAboutAccessingKey,configurable:true});}function defineRefPropWarningGetter(props,displayName){var warnAboutAccessingRef=function warnAboutAccessingRef(){if(!specialPropRefWarningShown){specialPropRefWarningShown=true;warning$2(false,'%s: `ref` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName);}};warnAboutAccessingRef.isReactWarning=true;Object.defineProperty(props,'ref',{get:warnAboutAccessingRef,configurable:true});}/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */var ReactElement=function ReactElement(type,key,ref,self,source,owner,props){var element={// This tag allow us to uniquely identify this as a React Element
$$typeof:REACT_ELEMENT_TYPE$1,// Built-in properties that belong on the element
type:type,key:key,ref:ref,props:props,// Record the component responsible for creating this element.
_owner:owner};{// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
element._store={};// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
Object.defineProperty(element._store,'validated',{configurable:false,enumerable:false,writable:true,value:false});// self and source are DEV only properties.
Object.defineProperty(element,'_self',{configurable:false,enumerable:false,writable:false,value:self});// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(element,'_source',{configurable:false,enumerable:false,writable:false,value:source});if(Object.freeze){Object.freeze(element.props);Object.freeze(element);}}return element;};/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/react-api.html#createelement
 */ReactElement.createElement=function(type,config,children){var propName;// Reserved names are extracted
var props={};var key=null;var ref=null;var self=null;var source=null;if(config!=null){if(hasValidRef(config)){ref=config.ref;}if(hasValidKey(config)){key=''+config.key;}self=config.__self===undefined?null:config.__self;source=config.__source===undefined?null:config.__source;// Remaining properties are added to a new props object
for(propName in config){if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){props[propName]=config[propName];}}}// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}{if(Object.freeze){Object.freeze(childArray);}}props.children=childArray;}// Resolve default props
if(type&&type.defaultProps){var defaultProps=type.defaultProps;for(propName in defaultProps){if(props[propName]===undefined){props[propName]=defaultProps[propName];}}}{if(key||ref){if(typeof props.$$typeof==='undefined'||props.$$typeof!==REACT_ELEMENT_TYPE$1){var displayName=typeof type==='function'?type.displayName||type.name||'Unknown':type;if(key){defineKeyPropWarningGetter(props,displayName);}if(ref){defineRefPropWarningGetter(props,displayName);}}}}return ReactElement(type,key,ref,self,source,ReactCurrentOwner_1.current,props);};/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/react-api.html#createfactory
 */ReactElement.createFactory=function(type){var factory=ReactElement.createElement.bind(null,type);// Expose the type on the factory and the prototype so that it can be
// easily accessed on elements. E.g. `<Foo />.type === Foo`.
// This should not be named `constructor` since this may not be the function
// that created the element, and it may not even be a constructor.
// Legacy hook TODO: Warn if this is accessed
factory.type=type;return factory;};ReactElement.cloneAndReplaceKey=function(oldElement,newKey){var newElement=ReactElement(oldElement.type,newKey,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,oldElement.props);return newElement;};/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/react-api.html#cloneelement
 */ReactElement.cloneElement=function(element,config,children){var propName;// Original props are copied
var props=objectAssign$1({},element.props);// Reserved names are extracted
var key=element.key;var ref=element.ref;// Self is preserved since the owner is preserved.
var self=element._self;// Source is preserved since cloneElement is unlikely to be targeted by a
// transpiler, and the original source is probably a better indicator of the
// true owner.
var source=element._source;// Owner will be preserved, unless ref is overridden
var owner=element._owner;if(config!=null){if(hasValidRef(config)){// Silently steal the ref from the parent.
ref=config.ref;owner=ReactCurrentOwner_1.current;}if(hasValidKey(config)){key=''+config.key;}// Remaining properties override existing props
var defaultProps;if(element.type&&element.type.defaultProps){defaultProps=element.type.defaultProps;}for(propName in config){if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){if(config[propName]===undefined&&defaultProps!==undefined){// Resolve default props
props[propName]=defaultProps[propName];}else{props[propName]=config[propName];}}}}// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;}return ReactElement(element.type,key,ref,self,source,owner,props);};/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */ReactElement.isValidElement=function(object){return(typeof object==="undefined"?"undefined":_typeof2(object))==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE$1;};var ReactElement_1=ReactElement;/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactDebugCurrentFrame
 * 
 */var ReactDebugCurrentFrame={};{// Component that is being worked on
ReactDebugCurrentFrame.getCurrentStack=null;ReactDebugCurrentFrame.getStackAddendum=function(){var impl=ReactDebugCurrentFrame.getCurrentStack;if(impl){return impl();}return null;};}var ReactDebugCurrentFrame_1=ReactDebugCurrentFrame;{var warning$1=require$$0;var _require=ReactDebugCurrentFrame_1,getStackAddendum=_require.getStackAddendum;}var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';// Before Symbol spec.
// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;var SEPARATOR='.';var SUBSEPARATOR=':';/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */function escape(key){var escapeRegex=/[=:]/g;var escaperLookup={'=':'=0',':':'=2'};var escapedString=(''+key).replace(escapeRegex,function(match){return escaperLookup[match];});return'$'+escapedString;}/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */var didWarnAboutMaps=false;var userProvidedKeyEscapeRegex=/\/+/g;function escapeUserProvidedKey(text){return(''+text).replace(userProvidedKeyEscapeRegex,'$&/');}var POOL_SIZE=10;var traverseContextPool=[];function getPooledTraverseContext(mapResult,keyPrefix,mapFunction,mapContext){if(traverseContextPool.length){var traverseContext=traverseContextPool.pop();traverseContext.result=mapResult;traverseContext.keyPrefix=keyPrefix;traverseContext.func=mapFunction;traverseContext.context=mapContext;traverseContext.count=0;return traverseContext;}else{return{result:mapResult,keyPrefix:keyPrefix,func:mapFunction,context:mapContext,count:0};}}function releaseTraverseContext(traverseContext){traverseContext.result=null;traverseContext.keyPrefix=null;traverseContext.func=null;traverseContext.context=null;traverseContext.count=0;if(traverseContextPool.length<POOL_SIZE){traverseContextPool.push(traverseContext);}}/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildrenImpl(children,nameSoFar,callback,traverseContext){var type=typeof children==="undefined"?"undefined":_typeof2(children);if(type==='undefined'||type==='boolean'){// All of the above are perceived as null.
children=null;}if(children===null||type==='string'||type==='number'||// The following is inlined from ReactElement. This means we can optimize
// some checks. React Fiber also inlines this logic for similar purposes.
type==='object'&&children.$$typeof===REACT_ELEMENT_TYPE){callback(traverseContext,children,// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
nameSoFar===''?SEPARATOR+getComponentKey(children,0):nameSoFar);return 1;}var child;var nextName;var subtreeCount=0;// Count of children found in the current subtree.
var nextNamePrefix=nameSoFar===''?SEPARATOR:nameSoFar+SUBSEPARATOR;if(Array.isArray(children)){for(var i=0;i<children.length;i++){child=children[i];nextName=nextNamePrefix+getComponentKey(child,i);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else{var iteratorFn=ITERATOR_SYMBOL&&children[ITERATOR_SYMBOL]||children[FAUX_ITERATOR_SYMBOL];if(typeof iteratorFn==='function'){{// Warn about using Maps as children
if(iteratorFn===children.entries){warning$1(didWarnAboutMaps,'Using Maps as children is unsupported and will likely yield '+'unexpected results. Convert it to a sequence/iterable of keyed '+'ReactElements instead.%s',getStackAddendum());didWarnAboutMaps=true;}}var iterator=iteratorFn.call(children);var step;var ii=0;while(!(step=iterator.next()).done){child=step.value;nextName=nextNamePrefix+getComponentKey(child,ii++);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else if(type==='object'){var addendum='';{addendum=' If you meant to render a collection of children, use an array '+'instead.'+getStackAddendum();}var childrenString=''+children;invariant(false,'Objects are not valid as a React child (found: %s).%s',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum);}}return subtreeCount;}/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildren(children,callback,traverseContext){if(children==null){return 0;}return traverseAllChildrenImpl(children,'',callback,traverseContext);}/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */function getComponentKey(component,index){// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
if((typeof component==="undefined"?"undefined":_typeof2(component))==='object'&&component!==null&&component.key!=null){// Explicit key
return escape(component.key);}// Implicit key determined by the index in the set
return index.toString(36);}function forEachSingleChild(bookKeeping,child,name){var func=bookKeeping.func,context=bookKeeping.context;func.call(context,child,bookKeeping.count++);}/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */function forEachChildren(children,forEachFunc,forEachContext){if(children==null){return children;}var traverseContext=getPooledTraverseContext(null,null,forEachFunc,forEachContext);traverseAllChildren(children,forEachSingleChild,traverseContext);releaseTraverseContext(traverseContext);}function mapSingleChildIntoContext(bookKeeping,child,childKey){var result=bookKeeping.result,keyPrefix=bookKeeping.keyPrefix,func=bookKeeping.func,context=bookKeeping.context;var mappedChild=func.call(context,child,bookKeeping.count++);if(Array.isArray(mappedChild)){mapIntoWithKeyPrefixInternal(mappedChild,result,childKey,emptyFunction.thatReturnsArgument);}else if(mappedChild!=null){if(ReactElement_1.isValidElement(mappedChild)){mappedChild=ReactElement_1.cloneAndReplaceKey(mappedChild,// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
keyPrefix+(mappedChild.key&&(!child||child.key!==mappedChild.key)?escapeUserProvidedKey(mappedChild.key)+'/':'')+childKey);}result.push(mappedChild);}}function mapIntoWithKeyPrefixInternal(children,array,prefix,func,context){var escapedPrefix='';if(prefix!=null){escapedPrefix=escapeUserProvidedKey(prefix)+'/';}var traverseContext=getPooledTraverseContext(array,escapedPrefix,func,context);traverseAllChildren(children,mapSingleChildIntoContext,traverseContext);releaseTraverseContext(traverseContext);}/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */function mapChildren(children,func,context){if(children==null){return children;}var result=[];mapIntoWithKeyPrefixInternal(children,result,null,func,context);return result;}/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */function countChildren(children,context){return traverseAllChildren(children,emptyFunction.thatReturnsNull,null);}/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.toarray
 */function toArray(children){var result=[];mapIntoWithKeyPrefixInternal(children,result,null,emptyFunction.thatReturnsArgument);return result;}var ReactChildren={forEach:forEachChildren,map:mapChildren,count:countChildren,toArray:toArray};var ReactChildren_1=ReactChildren;/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactVersion
 */var ReactVersion='16.0.0';/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */function onlyChild(children){!ReactElement_1.isValidElement(children)?invariant(false,'React.Children.only expected to receive a single React element child.'):void 0;return children;}var onlyChild_1=onlyChild;/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @providesModule describeComponentFrame
 */var describeComponentFrame$1=function describeComponentFrame$1(name,source,ownerName){return'\n    in '+(name||'Unknown')+(source?' (at '+source.fileName.replace(/^.*[\\\/]/,'')+':'+source.lineNumber+')':ownerName?' (created by '+ownerName+')':'');};/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule getComponentName
 * 
 */function getComponentName$1(instanceOrFiber){if(typeof instanceOrFiber.getName==='function'){// Stack reconciler
var instance=instanceOrFiber;return instance.getName();}if(typeof instanceOrFiber.tag==='number'){// Fiber reconciler
var fiber=instanceOrFiber;var type=fiber.type;if(typeof type==='string'){return type;}if(typeof type==='function'){return type.displayName||type.name;}}return null;}var getComponentName_1=getComponentName$1;{var checkPropTypes$1=checkPropTypes;var lowPriorityWarning$1=lowPriorityWarning_1;var ReactDebugCurrentFrame$1=ReactDebugCurrentFrame_1;var warning$3=require$$0;var describeComponentFrame=describeComponentFrame$1;var getComponentName=getComponentName_1;var currentlyValidatingElement=null;var getDisplayName=function getDisplayName(element){if(element==null){return'#empty';}else if(typeof element==='string'||typeof element==='number'){return'#text';}else if(typeof element.type==='string'){return element.type;}else{return element.type.displayName||element.type.name||'Unknown';}};var getStackAddendum$1=function getStackAddendum$1(){var stack='';if(currentlyValidatingElement){var name=getDisplayName(currentlyValidatingElement);var owner=currentlyValidatingElement._owner;stack+=describeComponentFrame(name,currentlyValidatingElement._source,owner&&getComponentName(owner));}stack+=ReactDebugCurrentFrame$1.getStackAddendum()||'';return stack;};}var ITERATOR_SYMBOL$1=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL$1='@@iterator';// Before Symbol spec.
function getDeclarationErrorAddendum(){if(ReactCurrentOwner_1.current){var name=getComponentName(ReactCurrentOwner_1.current);if(name){return'\n\nCheck the render method of `'+name+'`.';}}return'';}function getSourceInfoErrorAddendum(elementProps){if(elementProps!==null&&elementProps!==undefined&&elementProps.__source!==undefined){var source=elementProps.__source;var fileName=source.fileName.replace(/^.*[\\\/]/,'');var lineNumber=source.lineNumber;return'\n\nCheck your code at '+fileName+':'+lineNumber+'.';}return'';}/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */var ownerHasKeyUseWarning={};function getCurrentComponentErrorInfo(parentType){var info=getDeclarationErrorAddendum();if(!info){var parentName=typeof parentType==='string'?parentType:parentType.displayName||parentType.name;if(parentName){info='\n\nCheck the top-level render call using <'+parentName+'>.';}}return info;}/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */function validateExplicitKey(element,parentType){if(!element._store||element._store.validated||element.key!=null){return;}element._store.validated=true;var currentComponentErrorInfo=getCurrentComponentErrorInfo(parentType);if(ownerHasKeyUseWarning[currentComponentErrorInfo]){return;}ownerHasKeyUseWarning[currentComponentErrorInfo]=true;// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var childOwner='';if(element&&element._owner&&element._owner!==ReactCurrentOwner_1.current){// Give the component that originally created this child.
childOwner=' It was passed a child from '+getComponentName(element._owner)+'.';}currentlyValidatingElement=element;{warning$3(false,'Each child in an array or iterator should have a unique "key" prop.'+'%s%s See https://fb.me/react-warning-keys for more information.%s',currentComponentErrorInfo,childOwner,getStackAddendum$1());}currentlyValidatingElement=null;}/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function validateChildKeys(node,parentType){if((typeof node==="undefined"?"undefined":_typeof2(node))!=='object'){return;}if(Array.isArray(node)){for(var i=0;i<node.length;i++){var child=node[i];if(ReactElement_1.isValidElement(child)){validateExplicitKey(child,parentType);}}}else if(ReactElement_1.isValidElement(node)){// This element was passed in a valid location.
if(node._store){node._store.validated=true;}}else if(node){var iteratorFn=ITERATOR_SYMBOL$1&&node[ITERATOR_SYMBOL$1]||node[FAUX_ITERATOR_SYMBOL$1];if(typeof iteratorFn==='function'){// Entry iterators used to provide implicit keys,
// but now we print a separate warning for them later.
if(iteratorFn!==node.entries){var iterator=iteratorFn.call(node);var step;while(!(step=iterator.next()).done){if(ReactElement_1.isValidElement(step.value)){validateExplicitKey(step.value,parentType);}}}}}}/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function validatePropTypes(element){var componentClass=element.type;if(typeof componentClass!=='function'){return;}var name=componentClass.displayName||componentClass.name;var propTypes=componentClass.propTypes;if(propTypes){currentlyValidatingElement=element;checkPropTypes$1(propTypes,element.props,'prop',name,getStackAddendum$1);currentlyValidatingElement=null;}if(typeof componentClass.getDefaultProps==='function'){warning$3(componentClass.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass '+'definitions. Use a static property named `defaultProps` instead.');}}var ReactElementValidator$1={createElement:function createElement(type,props,children){var validType=typeof type==='string'||typeof type==='function';// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!validType){var info='';if(type===undefined||(typeof type==="undefined"?"undefined":_typeof2(type))==='object'&&type!==null&&Object.keys(type).length===0){info+=' You likely forgot to export your component from the file '+"it's defined in.";}var sourceInfo=getSourceInfoErrorAddendum(props);if(sourceInfo){info+=sourceInfo;}else{info+=getDeclarationErrorAddendum();}info+=ReactDebugCurrentFrame$1.getStackAddendum()||'';warning$3(false,'React.createElement: type is invalid -- expected a string (for '+'built-in components) or a class/function (for composite '+'components) but got: %s.%s',type==null?type:typeof type==="undefined"?"undefined":_typeof2(type),info);}var element=ReactElement_1.createElement.apply(this,arguments);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(element==null){return element;}// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(validType){for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],type);}}validatePropTypes(element);return element;},createFactory:function createFactory(type){var validatedFactory=ReactElementValidator$1.createElement.bind(null,type);// Legacy hook TODO: Warn if this is accessed
validatedFactory.type=type;{Object.defineProperty(validatedFactory,'type',{enumerable:false,get:function get(){lowPriorityWarning$1(false,'Factory.type is deprecated. Access the class directly '+'before passing it to createFactory.');Object.defineProperty(this,'type',{value:type});return type;}});}return validatedFactory;},cloneElement:function cloneElement(element,props,children){var newElement=ReactElement_1.cloneElement.apply(this,arguments);for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],newElement.type);}validatePropTypes(newElement);return newElement;}};var ReactElementValidator_1=ReactElementValidator$1;{var warning$4=require$$0;}function isNative(fn){// Based on isNative() from Lodash
var funcToString=Function.prototype.toString;var reIsNative=RegExp('^'+funcToString// Take an example native function source for comparison
.call(Object.prototype.hasOwnProperty)// Strip regex characters so we can use it for regex
.replace(/[\\^$.*+?()[\]{}|]/g,'\\$&')// Remove hasOwnProperty from the template to make it generic
.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');try{var source=funcToString.call(fn);return reIsNative.test(source);}catch(err){return false;}}var canUseCollections=// Array.from
typeof Array.from==='function'&&// Map
typeof Map==='function'&&isNative(Map)&&// Map.prototype.keys
Map.prototype!=null&&typeof Map.prototype.keys==='function'&&isNative(Map.prototype.keys)&&// Set
typeof Set==='function'&&isNative(Set)&&// Set.prototype.keys
Set.prototype!=null&&typeof Set.prototype.keys==='function'&&isNative(Set.prototype.keys);var setItem;var getItem;var removeItem;var getItemIDs;var addRoot;var removeRoot;var getRootIDs;if(canUseCollections){var itemMap=new Map();var rootIDSet=new Set();setItem=function setItem(id,item){itemMap.set(id,item);};getItem=function getItem(id){return itemMap.get(id);};removeItem=function removeItem(id){itemMap['delete'](id);};getItemIDs=function getItemIDs(){return Array.from(itemMap.keys());};addRoot=function addRoot(id){rootIDSet.add(id);};removeRoot=function removeRoot(id){rootIDSet['delete'](id);};getRootIDs=function getRootIDs(){return Array.from(rootIDSet.keys());};}else{var itemByKey={};var rootByKey={};// Use non-numeric keys to prevent V8 performance issues:
// https://github.com/facebook/react/pull/7232
var getKeyFromID=function getKeyFromID(id){return'.'+id;};var getIDFromKey=function getIDFromKey(key){return parseInt(key.substr(1),10);};setItem=function setItem(id,item){var key=getKeyFromID(id);itemByKey[key]=item;};getItem=function getItem(id){var key=getKeyFromID(id);return itemByKey[key];};removeItem=function removeItem(id){var key=getKeyFromID(id);delete itemByKey[key];};getItemIDs=function getItemIDs(){return Object.keys(itemByKey).map(getIDFromKey);};addRoot=function addRoot(id){var key=getKeyFromID(id);rootByKey[key]=true;};removeRoot=function removeRoot(id){var key=getKeyFromID(id);delete rootByKey[key];};getRootIDs=function getRootIDs(){return Object.keys(rootByKey).map(getIDFromKey);};}var unmountedIDs=[];function purgeDeep(id){var item=getItem(id);if(item){var childIDs=item.childIDs;removeItem(id);childIDs.forEach(purgeDeep);}}function getDisplayName$1(element){if(element==null){return'#empty';}else if(typeof element==='string'||typeof element==='number'){return'#text';}else if(typeof element.type==='string'){return element.type;}else{return element.type.displayName||element.type.name||'Unknown';}}function describeID(id){var name=ReactComponentTreeHook.getDisplayName(id);var element=ReactComponentTreeHook.getElement(id);var ownerID=ReactComponentTreeHook.getOwnerID(id);var ownerName=void 0;if(ownerID){ownerName=ReactComponentTreeHook.getDisplayName(ownerID);}warning$4(element,'ReactComponentTreeHook: Missing React element for debugID %s when '+'building stack',id);return describeComponentFrame$1(name||'',element&&element._source,ownerName||'');}var ReactComponentTreeHook={onSetChildren:function onSetChildren(id,nextChildIDs){var item=getItem(id);!item?invariant(false,'Item must have been set'):void 0;item.childIDs=nextChildIDs;for(var i=0;i<nextChildIDs.length;i++){var nextChildID=nextChildIDs[i];var nextChild=getItem(nextChildID);!nextChild?invariant(false,'Expected hook events to fire for the child before its parent includes it in onSetChildren().'):void 0;!(nextChild.childIDs!=null||_typeof2(nextChild.element)!=='object'||nextChild.element==null)?invariant(false,'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().'):void 0;!nextChild.isMounted?invariant(false,'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().'):void 0;if(nextChild.parentID==null){nextChild.parentID=id;// TODO: This shouldn't be necessary but mounting a new root during in
// componentWillMount currently causes not-yet-mounted components to
// be purged from our tree data so their parent id is missing.
}!(nextChild.parentID===id)?invariant(false,'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).',nextChildID,nextChild.parentID,id):void 0;}},onBeforeMountComponent:function onBeforeMountComponent(id,element,parentID){var item={element:element,parentID:parentID,text:null,childIDs:[],isMounted:false,updateCount:0};setItem(id,item);},onBeforeUpdateComponent:function onBeforeUpdateComponent(id,element){var item=getItem(id);if(!item||!item.isMounted){// We may end up here as a result of setState() in componentWillUnmount().
// In this case, ignore the element.
return;}item.element=element;},onMountComponent:function onMountComponent(id){var item=getItem(id);!item?invariant(false,'Item must have been set'):void 0;item.isMounted=true;var isRoot=item.parentID===0;if(isRoot){addRoot(id);}},onUpdateComponent:function onUpdateComponent(id){var item=getItem(id);if(!item||!item.isMounted){// We may end up here as a result of setState() in componentWillUnmount().
// In this case, ignore the element.
return;}item.updateCount++;},onUnmountComponent:function onUnmountComponent(id){var item=getItem(id);if(item){// We need to check if it exists.
// `item` might not exist if it is inside an error boundary, and a sibling
// error boundary child threw while mounting. Then this instance never
// got a chance to mount, but it still gets an unmounting event during
// the error boundary cleanup.
item.isMounted=false;var isRoot=item.parentID===0;if(isRoot){removeRoot(id);}}unmountedIDs.push(id);},purgeUnmountedComponents:function purgeUnmountedComponents(){if(ReactComponentTreeHook._preventPurging){// Should only be used for testing.
return;}for(var i=0;i<unmountedIDs.length;i++){var id=unmountedIDs[i];purgeDeep(id);}unmountedIDs.length=0;},isMounted:function isMounted(id){var item=getItem(id);return item?item.isMounted:false;},getCurrentStackAddendum:function getCurrentStackAddendum(){var info='';var currentOwner=ReactCurrentOwner_1.current;if(currentOwner){!(typeof currentOwner.tag!=='number')?invariant(false,'Fiber owners should not show up in Stack stack traces.'):void 0;if(typeof currentOwner._debugID==='number'){info+=ReactComponentTreeHook.getStackAddendumByID(currentOwner._debugID);}}return info;},getStackAddendumByID:function getStackAddendumByID(id){var info='';while(id){info+=describeID(id);id=ReactComponentTreeHook.getParentID(id);}return info;},getChildIDs:function getChildIDs(id){var item=getItem(id);return item?item.childIDs:[];},getDisplayName:function getDisplayName(id){var element=ReactComponentTreeHook.getElement(id);if(!element){return null;}return getDisplayName$1(element);},getElement:function getElement(id){var item=getItem(id);return item?item.element:null;},getOwnerID:function getOwnerID(id){var element=ReactComponentTreeHook.getElement(id);if(!element||!element._owner){return null;}return element._owner._debugID;},getParentID:function getParentID(id){var item=getItem(id);return item?item.parentID:null;},getSource:function getSource(id){var item=getItem(id);var element=item?item.element:null;var source=element!=null?element._source:null;return source;},getText:function getText(id){var element=ReactComponentTreeHook.getElement(id);if(typeof element==='string'){return element;}else if(typeof element==='number'){return''+element;}else{return null;}},getUpdateCount:function getUpdateCount(id){var item=getItem(id);return item?item.updateCount:0;},getRootIDs:getRootIDs,getRegisteredIDs:getItemIDs};var ReactComponentTreeHook_1=ReactComponentTreeHook;var createElement=ReactElement_1.createElement;var createFactory=ReactElement_1.createFactory;var cloneElement=ReactElement_1.cloneElement;{var ReactElementValidator=ReactElementValidator_1;createElement=ReactElementValidator.createElement;createFactory=ReactElementValidator.createFactory;cloneElement=ReactElementValidator.cloneElement;}var React={Children:{map:ReactChildren_1.map,forEach:ReactChildren_1.forEach,count:ReactChildren_1.count,toArray:ReactChildren_1.toArray,only:onlyChild_1},Component:ReactBaseClasses.Component,PureComponent:ReactBaseClasses.PureComponent,unstable_AsyncComponent:ReactBaseClasses.AsyncComponent,createElement:createElement,cloneElement:cloneElement,isValidElement:ReactElement_1.isValidElement,createFactory:createFactory,version:ReactVersion,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:ReactCurrentOwner_1,// Used by renderers to avoid bundling object-assign twice in UMD bundles:
assign:objectAssign$1}};{objectAssign$1(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,{// These should not be included in production.
ReactComponentTreeHook:ReactComponentTreeHook_1,ReactDebugCurrentFrame:ReactDebugCurrentFrame_1});}var ReactEntry=React;module.exports=ReactEntry;})();}}).call(this,require('_process'));},{"_process":14,"fbjs/lib/emptyFunction":4,"fbjs/lib/emptyObject":5,"fbjs/lib/invariant":6,"fbjs/lib/warning":7,"object-assign":13,"prop-types/checkPropTypes":15}],30:[function(require,module,exports){/*
 React v16.0.0
 react.production.min.js

 Copyright (c) 2013-present, Facebook, Inc.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/'use strict';var f=require("object-assign"),p=require("fbjs/lib/emptyObject");require("fbjs/lib/invariant");var r=require("fbjs/lib/emptyFunction");function t(a){for(var b=arguments.length-1,d="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,e=0;e<b;e++){d+="\x26args[]\x3d"+encodeURIComponent(arguments[e+1]);}b=Error(d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}var u={isMounted:function isMounted(){return!1;},enqueueForceUpdate:function enqueueForceUpdate(){},enqueueReplaceState:function enqueueReplaceState(){},enqueueSetState:function enqueueSetState(){}};function v(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u;}v.prototype.isReactComponent={};v.prototype.setState=function(a,b){"object"!==(typeof a==="undefined"?"undefined":_typeof2(a))&&"function"!==typeof a&&null!=a?t("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};v.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function w(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u;}function x(){}x.prototype=v.prototype;var y=w.prototype=new x();y.constructor=w;f(y,v.prototype);y.isPureReactComponent=!0;function z(a,b,d){this.props=a;this.context=b;this.refs=p;this.updater=d||u;}var A=z.prototype=new x();A.constructor=z;f(A,v.prototype);A.unstable_isAsyncReactComponent=!0;A.render=function(){return this.props.children;};var B={Component:v,PureComponent:w,AsyncComponent:z},C={current:null},D=Object.prototype.hasOwnProperty,E="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,F={key:!0,ref:!0,__self:!0,__source:!0};function G(a,b,d,e,c,g,k){return{$$typeof:E,type:a,key:b,ref:d,props:k,_owner:g};}G.createElement=function(a,b,d){var e,c={},g=null,k=null,m=null,q=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),m=void 0===b.__self?null:b.__self,q=void 0===b.__source?null:b.__source,b){D.call(b,e)&&!F.hasOwnProperty(e)&&(c[e]=b[e]);}var l=arguments.length-2;if(1===l)c.children=d;else if(1<l){for(var h=Array(l),n=0;n<l;n++){h[n]=arguments[n+2];}c.children=h;}if(a&&a.defaultProps)for(e in l=a.defaultProps,l){void 0===c[e]&&(c[e]=l[e]);}return G(a,g,k,m,q,C.current,c);};G.createFactory=function(a){var b=G.createElement.bind(null,a);b.type=a;return b;};G.cloneAndReplaceKey=function(a,b){return G(a.type,b,a.ref,a._self,a._source,a._owner,a.props);};G.cloneElement=function(a,b,d){var e=f({},a.props),c=a.key,g=a.ref,k=a._self,m=a._source,q=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,q=C.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(h in b){D.call(b,h)&&!F.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==l?l[h]:b[h]);}}var h=arguments.length-2;if(1===h)e.children=d;else if(1<h){l=Array(h);for(var n=0;n<h;n++){l[n]=arguments[n+2];}e.children=l;}return G(a.type,c,g,k,m,q,e);};G.isValidElement=function(a){return"object"===(typeof a==="undefined"?"undefined":_typeof2(a))&&null!==a&&a.$$typeof===E;};var H="function"===typeof Symbol&&Symbol.iterator,I="function"===typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a];});}var J=/\/+/g,K=[];function L(a,b,d,e){if(K.length){var c=K.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=e;c.count=0;return c;}return{result:a,keyPrefix:b,func:d,context:e,count:0};}function M(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>K.length&&K.push(a);}function N(a,b,d,e){var c=typeof a==="undefined"?"undefined":_typeof2(a);if("undefined"===c||"boolean"===c)a=null;if(null===a||"string"===c||"number"===c||"object"===c&&a.$$typeof===I)return d(e,a,""===b?"."+O(a,0):b),1;var g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){c=a[k];var m=b+O(c,k);g+=N(c,m,d,e);}else if(m=H&&a[H]||a["@@iterator"],"function"===typeof m)for(a=m.call(a),k=0;!(c=a.next()).done;){c=c.value,m=b+O(c,k++),g+=N(c,m,d,e);}else"object"===c&&(d=""+a,t("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g;}function O(a,b){return"object"===(typeof a==="undefined"?"undefined":_typeof2(a))&&null!==a&&null!=a.key?escape(a.key):b.toString(36);}function P(a,b){a.func.call(a.context,b,a.count++);}function Q(a,b,d){var e=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,e,d,r.thatReturnsArgument):null!=a&&(G.isValidElement(a)&&(a=G.cloneAndReplaceKey(a,c+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(J,"$\x26/")+"/")+d)),e.push(a));}function R(a,b,d,e,c){var g="";null!=d&&(g=(""+d).replace(J,"$\x26/")+"/");b=L(b,g,e,c);null==a||N(a,"",Q,b);M(b);}var S={forEach:function forEach(a,b,d){if(null==a)return a;b=L(null,null,b,d);null==a||N(a,"",P,b);M(b);},map:function map(a,b,d){if(null==a)return a;var e=[];R(a,e,null,b,d);return e;},count:function count(a){return null==a?0:N(a,"",r.thatReturnsNull,null);},toArray:function toArray(a){var b=[];R(a,b,null,r.thatReturnsArgument);return b;}};module.exports={Children:{map:S.map,forEach:S.forEach,count:S.count,toArray:S.toArray,only:function only(a){G.isValidElement(a)?void 0:t("143");return a;}},Component:B.Component,PureComponent:B.PureComponent,unstable_AsyncComponent:B.AsyncComponent,createElement:G.createElement,cloneElement:G.cloneElement,isValidElement:G.isValidElement,createFactory:G.createFactory,version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:C,assign:f}};},{"fbjs/lib/emptyFunction":4,"fbjs/lib/emptyObject":5,"fbjs/lib/invariant":6,"object-assign":13}],31:[function(require,module,exports){(function(process){'use strict';if(process.env.NODE_ENV==='production'){module.exports=require('./cjs/react.production.min.js');}else{module.exports=require('./cjs/react.development.js');}}).call(this,require('_process'));},{"./cjs/react.development.js":29,"./cjs/react.production.min.js":30,"_process":14}],32:[function(require,module,exports){'use strict';var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};module.exports=function sortObject(obj,comparator){// Arrays
if(Array.isArray(obj)){var result=[];for(var i=0;i<obj.length;++i){// Fetch
var value=obj[i];// Recurse if object or array
if(value!=null&&(typeof value==='undefined'?'undefined':_typeof(value))==='object'){value=sortObject(value,comparator);}// Push
result.push(value);}return result;}// Objects
else{var _result={};var sortedKeys=Object.keys(obj).sort(comparator);for(var _i=0;_i<sortedKeys.length;++_i){// Fetch
var key=sortedKeys[_i];var _value=obj[key];// Recurse if object or array
if(_value!=null&&(typeof _value==='undefined'?'undefined':_typeof(_value))==='object'){_value=sortObject(_value,comparator);}// Push
_result[key]=_value;}return _result;}};},{}],33:[function(require,module,exports){'use strict';var isRegexp=require('is-regexp');var isObj=require('is-obj');var getOwnEnumPropSymbols=require('get-own-enumerable-property-symbols').default;module.exports=function(val,opts,pad){var seen=[];return function stringify(val,opts,pad){opts=opts||{};opts.indent=opts.indent||'\t';pad=pad||'';var tokens=void 0;if(opts.inlineCharacterLimit===undefined){tokens={newLine:'\n',newLineOrSpace:'\n',pad:pad,indent:pad+opts.indent};}else{tokens={newLine:'@@__STRINGIFY_OBJECT_NEW_LINE__@@',newLineOrSpace:'@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@',pad:'@@__STRINGIFY_OBJECT_PAD__@@',indent:'@@__STRINGIFY_OBJECT_INDENT__@@'};}var expandWhiteSpace=function expandWhiteSpace(string){if(opts.inlineCharacterLimit===undefined){return string;}var oneLined=string.replace(new RegExp(tokens.newLine,'g'),'').replace(new RegExp(tokens.newLineOrSpace,'g'),' ').replace(new RegExp(tokens.pad+'|'+tokens.indent,'g'),'');if(oneLined.length<=opts.inlineCharacterLimit){return oneLined;}return string.replace(new RegExp(tokens.newLine+'|'+tokens.newLineOrSpace,'g'),'\n').replace(new RegExp(tokens.pad,'g'),pad).replace(new RegExp(tokens.indent,'g'),pad+opts.indent);};if(seen.indexOf(val)!==-1){return'"[Circular]"';}if(val===null||val===undefined||typeof val==='number'||typeof val==='boolean'||typeof val==='function'||(typeof val==="undefined"?"undefined":_typeof2(val))==='symbol'||isRegexp(val)){return String(val);}if(val instanceof Date){return"new Date('"+val.toISOString()+"')";}if(Array.isArray(val)){if(val.length===0){return'[]';}seen.push(val);var ret='['+tokens.newLine+val.map(function(el,i){var eol=val.length-1===i?tokens.newLine:','+tokens.newLineOrSpace;var value=stringify(el,opts,pad+opts.indent);if(opts.transform){value=opts.transform(val,i,value);}return tokens.indent+value+eol;}).join('')+tokens.pad+']';seen.pop(val);return expandWhiteSpace(ret);}if(isObj(val)){var objKeys=Object.keys(val).concat(getOwnEnumPropSymbols(val));if(objKeys.length===0){return'{}';}seen.push(val);var _ret='{'+tokens.newLine+objKeys.map(function(el,i){if(opts.filter&&!opts.filter(val,el)){return'';}var eol=objKeys.length-1===i?tokens.newLine:','+tokens.newLineOrSpace;var isSymbol=(typeof el==="undefined"?"undefined":_typeof2(el))==='symbol';var isClassic=!isSymbol&&/^[a-z$_][a-z$_0-9]*$/i.test(el);var key=isSymbol||isClassic?el:stringify(el,opts);var value=stringify(val[el],opts,pad+opts.indent);if(opts.transform){value=opts.transform(val,el,value);}return tokens.indent+String(key)+': '+value+eol;}).join('')+tokens.pad+'}';seen.pop(val);return expandWhiteSpace(_ret);}val=String(val).replace(/[\r\n]/g,function(x){return x==='\n'?'\\n':'\\r';});if(opts.singleQuotes===false){val=val.replace(/"/g,'\\"');return"\""+val+"\"";}val=val.replace(/\\?'/g,'\\\'');return"'"+val+"'";}(val,opts,pad);};},{"get-own-enumerable-property-symbols":8,"is-obj":9,"is-regexp":11}]},{},[1]);
