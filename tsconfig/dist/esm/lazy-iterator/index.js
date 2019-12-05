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
import { isIterable } from '../helpers/index';
var LazyIterable = /** @class */ (function () {
    function LazyIterable(iter, options) {
        if (options === void 0) { options = {}; }
        this._callbackList = [];
        if (!isIterable(iter)) {
            throw new TypeError('The given input is not a valid iterable.');
        }
        this._iter = iter;
    }
    LazyIterable.prototype._calc = function () {
        var _a, _b, operation, currentOp, tmpResult, _c, _d, _, _e, _f, e_1_1, e_2_1;
        var e_2, _g, e_1, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    _j.trys.push([0, 12, 13, 14]);
                    _a = __values(this._callbackList), _b = _a.next();
                    _j.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 11];
                    operation = _b.value;
                    currentOp = operation(this._iter);
                    tmpResult = [];
                    _j.label = 2;
                case 2:
                    _j.trys.push([2, 7, 8, 9]);
                    _c = (e_1 = void 0, __values(this._iter)), _d = _c.next();
                    _j.label = 3;
                case 3:
                    if (!!_d.done) return [3 /*break*/, 6];
                    _ = _d.value;
                    _f = (_e = tmpResult).push;
                    return [5 /*yield**/, __values(currentOp)];
                case 4:
                    _f.apply(_e, [_j.sent()]);
                    _j.label = 5;
                case 5:
                    _d = _c.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_1_1 = _j.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 9:
                    this._iter = tmpResult.values();
                    _j.label = 10;
                case 10:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 11: return [3 /*break*/, 14];
                case 12:
                    e_2_1 = _j.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 14];
                case 13:
                    try {
                        if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 14: return [2 /*return*/, this._iter];
            }
        });
    };
    LazyIterable.prototype.pipe = function () {
        var ops = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ops[_i] = arguments[_i];
        }
        this._callbackList = ops;
        return this;
    };
    LazyIterable.prototype.get = function (cb) {
        var result = Array.from(this._calc());
        if (typeof cb === 'function')
            return cb(result);
        return Array.from(result);
    };
    return LazyIterable;
}());
export { LazyIterable };
export function from(iter, options) {
    return new LazyIterable(iter, options);
}
