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
var DrawnIsoBox = (function (_super) {
    __extends(DrawnIsoBox, _super);
    function DrawnIsoBox(size, color, height) {
        return _super.call(this, size, color, height) || this;
    }
    DrawnIsoBox.prototype.draw = function () {
        this.graphics.clear();
        var red = this._color >> 16;
        var green = this._color >> 8 & 0xff;
        var blue = this._color & 0xff;
        var leftShadow = (red * .5) << 16 | (green * .5) << 8 | (blue * .5);
        var rightShadow = (red * .75) << 16 | (green * .75) << 8 | (blue * .75);
        var h = this._height * IsoObject.Y_CORRECT;
        // draw top 
        this.graphics.beginFill(this._color);
        this.graphics.lineStyle(0, 0, .5);
        this.graphics.moveTo(-this._size, -h);
        this.graphics.lineTo(0, -this._size * .5 - h);
        this.graphics.lineTo(this._size, -h);
        this.graphics.lineTo(0, this._size * .5 - h);
        this.graphics.lineTo(-this._size, -h);
        this.graphics.endFill();
        // draw left 
        this.graphics.beginFill(leftShadow);
        this.graphics.lineStyle(0, 0, .5);
        this.graphics.moveTo(-this._size, -h);
        this.graphics.lineTo(0, this._size * .5 - h);
        this.graphics.lineTo(0, this._size * .5);
        this.graphics.lineTo(-this._size, 0);
        this.graphics.lineTo(-this._size, -h);
        this.graphics.endFill();
        // draw right 
        this.graphics.beginFill(rightShadow);
        this.graphics.lineStyle(0, 0, .5);
        this.graphics.moveTo(this._size, -h);
        this.graphics.lineTo(0, this._size * .5 - h);
        this.graphics.lineTo(0, this._size * .5);
        this.graphics.lineTo(this._size, 0);
        this.graphics.lineTo(this._size, -h);
        this.graphics.endFill();
    };
    return DrawnIsoBox;
}(DrawnIsoTile));
__reflect(DrawnIsoBox.prototype, "DrawnIsoBox");
//# sourceMappingURL=DrawnIsoBox.js.map