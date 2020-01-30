"use strict";function t(t){var n;return Array.isArray(t)||"function"==typeof(null===(n=t)||void 0===n?void 0:n[Symbol.iterator])}Object.defineProperty(exports,"__esModule",{value:!0});class n{constructor(n,o={}){if(this._callbackList=[],!t(n))throw new TypeError("The given input is not a valid iterable.");this._iter=n}*_calc(){let t=this._iter;for(const n of this._callbackList){const o=n(t),r=[];for(const n of t)r.push(yield*o);t=r.values()}return t}pipe(...t){return this._callbackList=null!=t?t:[],this}get(t){const n=Array.from(this._calc());return"function"==typeof t?t(n):n}}exports.LazyPiping=n,exports.concat=function(t){return function*(n){for(const t of n)yield t;for(const n of t)yield n}},exports.filter=function(t){return function*(n){for(const o of n)t(o)&&(yield o)}},exports.find=function(t){return function*(n){for(const o of n)if(t(o))return void(yield o)}},exports.first=function(){return function*(t){yield t.next().value}},exports.from=function(t,o){return new n(t,o)},exports.isAsyncIterable=function(t){var n;return"function"==typeof(null===(n=t)||void 0===n?void 0:n[Symbol.asyncIterator])},exports.isIterable=t,exports.map=function(t){return function*(n){for(const o of n)yield t(o)}},exports.range=function*(t=0,n=1/0,o=1){let r=t,e=n;for(;e>0;)yield r,r+=o,e-=o},exports.skim=function(t){return function*(n){for(const o of n)t(o),yield o}},exports.slice=function(t=0,n=1/0){return function*(o){for(const r of o)if(!(0>t)){if(0>=n)return;yield r}}},exports.take=function(t=1/0){return function*(n){for(const o of n){if(0>t)return;yield o}}},exports.unique=function(){return function*(t){const n=new Set;for(const o of t)n.has(o)||(n.add(o),yield o);n.clear()}};
