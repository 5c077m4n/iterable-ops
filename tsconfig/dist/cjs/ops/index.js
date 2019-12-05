"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
function map(fn) {
    return function (iter) {
        var iter_1, iter_1_1, item, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    iter_1 = __values(iter), iter_1_1 = iter_1.next();
                    _b.label = 1;
                case 1:
                    if (!!iter_1_1.done) return [3 /*break*/, 4];
                    item = iter_1_1.value;
                    return [4 /*yield*/, fn(item)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    iter_1_1 = iter_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (iter_1_1 && !iter_1_1.done && (_a = iter_1.return)) _a.call(iter_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
}
exports.map = map;
function skim(fn) {
    return function (iter) {
        var iter_2, iter_2_1, item, e_2_1;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    iter_2 = __values(iter), iter_2_1 = iter_2.next();
                    _b.label = 1;
                case 1:
                    if (!!iter_2_1.done) return [3 /*break*/, 4];
                    item = iter_2_1.value;
                    fn(item);
                    return [4 /*yield*/, item];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    iter_2_1 = iter_2.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (iter_2_1 && !iter_2_1.done && (_a = iter_2.return)) _a.call(iter_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
}
exports.skim = skim;
function filter(fn) {
    return function (iter) {
        var iter_3, iter_3_1, item, e_3_1;
        var e_3, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    iter_3 = __values(iter), iter_3_1 = iter_3.next();
                    _b.label = 1;
                case 1:
                    if (!!iter_3_1.done) return [3 /*break*/, 4];
                    item = iter_3_1.value;
                    if (!fn(item)) return [3 /*break*/, 3];
                    return [4 /*yield*/, item];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    iter_3_1 = iter_3.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_3_1 = _b.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (iter_3_1 && !iter_3_1.done && (_a = iter_3.return)) _a.call(iter_3);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
}
exports.filter = filter;
function find(fn) {
    return function (iter) {
        var iter_4, iter_4_1, item, e_4_1;
        var e_4, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    iter_4 = __values(iter), iter_4_1 = iter_4.next();
                    _b.label = 1;
                case 1:
                    if (!!iter_4_1.done) return [3 /*break*/, 4];
                    item = iter_4_1.value;
                    if (!fn(item)) return [3 /*break*/, 3];
                    return [4 /*yield*/, item];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
                case 3:
                    iter_4_1 = iter_4.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_4_1 = _b.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (iter_4_1 && !iter_4_1.done && (_a = iter_4.return)) _a.call(iter_4);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
}
exports.find = find;
function concat(iter2) {
    return function (iter) {
        var iter_5, iter_5_1, item, e_5_1, iter2_1, iter2_1_1, item, e_6_1;
        var e_5, _a, e_6, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 5, 6, 7]);
                    iter_5 = __values(iter), iter_5_1 = iter_5.next();
                    _c.label = 1;
                case 1:
                    if (!!iter_5_1.done) return [3 /*break*/, 4];
                    item = iter_5_1.value;
                    return [4 /*yield*/, item];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    iter_5_1 = iter_5.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_5_1 = _c.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (iter_5_1 && !iter_5_1.done && (_a = iter_5.return)) _a.call(iter_5);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 7:
                    _c.trys.push([7, 12, 13, 14]);
                    iter2_1 = __values(iter2), iter2_1_1 = iter2_1.next();
                    _c.label = 8;
                case 8:
                    if (!!iter2_1_1.done) return [3 /*break*/, 11];
                    item = iter2_1_1.value;
                    return [4 /*yield*/, item];
                case 9:
                    _c.sent();
                    _c.label = 10;
                case 10:
                    iter2_1_1 = iter2_1.next();
                    return [3 /*break*/, 8];
                case 11: return [3 /*break*/, 14];
                case 12:
                    e_6_1 = _c.sent();
                    e_6 = { error: e_6_1 };
                    return [3 /*break*/, 14];
                case 13:
                    try {
                        if (iter2_1_1 && !iter2_1_1.done && (_b = iter2_1.return)) _b.call(iter2_1);
                    }
                    finally { if (e_6) throw e_6.error; }
                    return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    };
}
exports.concat = concat;
function unique() {
    return function (iter) {
        var set, iter_6, iter_6_1, item, e_7_1;
        var e_7, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    set = new Set();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    iter_6 = __values(iter), iter_6_1 = iter_6.next();
                    _b.label = 2;
                case 2:
                    if (!!iter_6_1.done) return [3 /*break*/, 5];
                    item = iter_6_1.value;
                    if (!!set.has(item)) return [3 /*break*/, 4];
                    set.add(item);
                    return [4 /*yield*/, item];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    iter_6_1 = iter_6.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_7_1 = _b.sent();
                    e_7 = { error: e_7_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (iter_6_1 && !iter_6_1.done && (_a = iter_6.return)) _a.call(iter_6);
                    }
                    finally { if (e_7) throw e_7.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
}
exports.unique = unique;
function slice(first, last) {
    if (first === void 0) { first = 0; }
    if (last === void 0) { last = Infinity; }
    return function (iter) {
        var i, iter_7, iter_7_1, item, e_8_1;
        var e_8, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    i = 0;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    iter_7 = __values(iter), iter_7_1 = iter_7.next();
                    _b.label = 2;
                case 2:
                    if (!!iter_7_1.done) return [3 /*break*/, 5];
                    item = iter_7_1.value;
                    if (i >= first)
                        return [3 /*break*/, 4];
                    if (i >= last)
                        return [2 /*return*/];
                    return [4 /*yield*/, item];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    iter_7_1 = iter_7.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_8_1 = _b.sent();
                    e_8 = { error: e_8_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (iter_7_1 && !iter_7_1.done && (_a = iter_7.return)) _a.call(iter_7);
                    }
                    finally { if (e_8) throw e_8.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
}
exports.slice = slice;
function take(n) {
    if (n === void 0) { n = Infinity; }
    return function (iter) {
        var i, iter_8, iter_8_1, item, e_9_1;
        var e_9, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    i = 0;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    iter_8 = __values(iter), iter_8_1 = iter_8.next();
                    _b.label = 2;
                case 2:
                    if (!!iter_8_1.done) return [3 /*break*/, 5];
                    item = iter_8_1.value;
                    if (i > n)
                        return [2 /*return*/];
                    return [4 /*yield*/, item];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    iter_8_1 = iter_8.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_9_1 = _b.sent();
                    e_9 = { error: e_9_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (iter_8_1 && !iter_8_1.done && (_a = iter_8.return)) _a.call(iter_8);
                    }
                    finally { if (e_9) throw e_9.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
}
exports.take = take;
function first() {
    return function (iter) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, iter.next().value];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
}
exports.first = first;
