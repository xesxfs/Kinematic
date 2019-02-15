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
var Rotate1 = (function (_super) {
    __extends(Rotate1, _super);
    function Rotate1() {
        var _this = _super.call(this) || this;
        _this.angle = 0;
        _this.radius = 150;
        _this.vr = .05;
        return _this;
    }
    Rotate1.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Rotate1.prototype.onEnterFrame = function () {
        this.ball.x = this.stage.stageWidth / 2 + Math.cos(this.angle) * this.radius;
        this.ball.y = this.stage.stageHeight / 2 + Math.sin(this.angle) * this.radius;
        this.angle += this.vr;
    };
    return Rotate1;
}(BaseSprite));
__reflect(Rotate1.prototype, "Rotate1");
//# sourceMappingURL=Rotate1.js.map