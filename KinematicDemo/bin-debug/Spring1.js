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
var Spring1 = (function (_super) {
    __extends(Spring1, _super);
    function Spring1() {
        var _this = _super.call(this) || this;
        _this.spring = .1;
        _this.vx = 0;
        return _this;
    }
    Spring1.prototype.init = function () {
        this.targetX = this.stage.stageWidth / 2;
        this.ball = new Ball();
        this.addChild(this.ball);
        this.ball.y = this.stage.stageHeight / 2;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Spring1.prototype.onEnterFrame = function () {
        var dx = this.targetX - this.ball.x;
        var ax = dx * this.spring;
        this.vx += ax;
        this.ball.x += this.vx;
    };
    return Spring1;
}(BaseSprite));
__reflect(Spring1.prototype, "Spring1");
//# sourceMappingURL=Spring1.js.map