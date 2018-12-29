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
var Wave1 = (function (_super) {
    __extends(Wave1, _super);
    function Wave1() {
        var _this = _super.call(this) || this;
        _this.angle = 0;
        _this.range = 150;
        _this.centerY = 200;
        _this.xSpeed = 1;
        _this.ySpeed = .1;
        return _this;
    }
    Wave1.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Wave1.prototype.onEnterFrame = function () {
        this.ball.x += this.xSpeed;
        this.ball.y = this.centerY + Math.sin(this.angle) * this.range;
        this.angle += this.ySpeed;
    };
    return Wave1;
}(BaseSprite));
__reflect(Wave1.prototype, "Wave1");
//# sourceMappingURL=Wave1.js.map