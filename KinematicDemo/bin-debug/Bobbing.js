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
var Bobbing = (function (_super) {
    __extends(Bobbing, _super);
    function Bobbing() {
        var _this = _super.call(this) || this;
        _this.angle = 0;
        _this.centerY = 600;
        _this.range = 150;
        _this.speed = 0.2;
        return _this;
    }
    Bobbing.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.ball.x = this.stage.stageWidth / 2;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Bobbing.prototype.onEnterFrame = function (e) {
        this.ball.y = this.centerY + Math.sin(this.angle) * this.range;
        this.angle += this.speed;
    };
    return Bobbing;
}(BaseSprite));
__reflect(Bobbing.prototype, "Bobbing");
//# sourceMappingURL=Bobbing.js.map