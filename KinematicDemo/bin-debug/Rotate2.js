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
var Rotate2 = (function (_super) {
    __extends(Rotate2, _super);
    function Rotate2() {
        var _this = _super.call(this) || this;
        _this.angle = 0;
        _this.radius = 150;
        _this.vr = .05;
        _this.cos = Math.cos(_this.vr);
        _this.sin = Math.sin(_this.vr);
        return _this;
    }
    Rotate2.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.randDisplay(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Rotate2.prototype.onEnterFrame = function () {
        // this.ball.x = this.stage.stageWidth / 2 + Math.cos(this.angle) * this.radius;
        // this.ball.y = this.stage.stageHeight / 2 + Math.sin(this.angle) * this.radius;
        // this.angle += this.vr;
        var x1 = this.ball.x - this.stage.stageWidth / 2;
        var y1 = this.ball.y - this.stage.stageHeight / 2;
        var x2 = this.cos * x1 - this.sin * y1;
        var y2 = this.cos * y1 + this.sin * x1;
        this.ball.x = this.stage.stageWidth / 2 + x2;
        this.ball.y = this.stage.stageHeight / 2 + y2;
    };
    return Rotate2;
}(BaseSprite));
__reflect(Rotate2.prototype, "Rotate2");
//# sourceMappingURL=Rotate2.js.map