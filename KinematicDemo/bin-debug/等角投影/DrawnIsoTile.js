var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var DrawnIsoTile = (function (_super) {
    __extends(DrawnIsoTile, _super);
    function DrawnIsoTile(size, color, height) {
        if (height === void 0) { height = 0; }
        var _this = _super.call(this, size) || this;
        _this._color = color;
        _this._height = height;
        _this.draw();
        return _this;
    }
    DrawnIsoTile.prototype.draw = function () {
        this.graphics.clear();
        this.graphics.beginFill(this._color);
        this.graphics.lineStyle(0, 0, .5);
        this.graphics.moveTo(-this.size, 0);
        this.graphics.lineTo(0, -this.size * .5);
        this.graphics.lineTo(this.size, 0);
        this.graphics.lineTo(0, this.size * .5);
        this.graphics.lineTo(-this.size, 0);
    };
    Object.defineProperty(DrawnIsoTile.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawnIsoTile.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    return DrawnIsoTile;
}(IsoObject));
__reflect(DrawnIsoTile.prototype, "DrawnIsoTile");
//# sourceMappingURL=DrawnIsoTile.js.map