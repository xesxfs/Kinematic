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
var Easing1 = (function (_super) {
    __extends(Easing1, _super);
    function Easing1() {
        var _this = _super.call(this) || this;
        _this.easing = .2;
        return _this;
    }
    Easing1.prototype.init = function () {
        this.ball = new Ball();
        this.targetX = this.stage.stageWidth / 2;
        this.targetY = this.stage.stageHeight / 2;
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Easing1.prototype.onEnterFrame = function () {
        var vx = (this.targetX - this.ball.x) * this.easing;
        var vy = (this.targetY - this.ball.y) * this.easing;
        this.ball.x += vx;
        this.ball.y += vy;
    };
    return Easing1;
}(BaseSprite));
__reflect(Easing1.prototype, "Easing1");
//# sourceMappingURL=Easing1.js.map