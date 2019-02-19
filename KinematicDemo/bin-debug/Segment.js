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
var Segment = (function (_super) {
    __extends(Segment, _super);
    function Segment(segmentWidth, segmentHeight, color) {
        if (color === void 0) { color = 0xffffff; }
        var _this = _super.call(this) || this;
        _this.vx = 0;
        _this.vy = 0;
        _this.segmentWidth = segmentWidth;
        _this.segmentHeight = segmentHeight;
        _this.color = color;
        return _this;
    }
    Segment.prototype.init = function () {
        // 绘制关节 
        this.graphics.lineStyle(0);
        this.graphics.beginFill(this.color);
        this.graphics.drawRoundRect(-this.segmentHeight / 2, -this.segmentHeight / 2, this.segmentWidth + this.segmentHeight, this.segmentHeight, this.segmentHeight, this.segmentHeight);
        this.graphics.endFill();
        // 绘制两个“枢轴” 
        this.graphics.drawCircle(0, 0, 2);
        this.graphics.drawCircle(this.segmentWidth, 0, 2);
    };
    Segment.prototype.getPin = function () {
        var angle = this.rotation * Math.PI / 180;
        var xPos = this.x + Math.cos(angle) * this.segmentWidth;
        var yPos = this.y + Math.sin(angle) * this.segmentWidth;
        return new egret.Point(xPos, yPos);
    };
    return Segment;
}(BaseSprite));
__reflect(Segment.prototype, "Segment");
//# sourceMappingURL=Segment.js.map