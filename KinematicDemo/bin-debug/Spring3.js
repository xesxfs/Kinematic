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
var Spring3 = (function (_super) {
    __extends(Spring3, _super);
    function Spring3() {
        var _this = _super.call(this) || this;
        _this.spring = .1;
        _this.vx = 50;
        _this.vy = 0;
        _this.friction = 0.95;
        return _this;
    }
    Spring3.prototype.init = function () {
        this.targetX = this.stage.stageWidth / 2;
        this.targetY = this.stage.stageHeight / 2;
        this.ball = new Ball();
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Spring3.prototype.onEnterFrame = function () {
        var dx = this.targetX - this.ball.x;
        var dy = this.targetY - this.ball.y;
        var ax = dx * this.spring;
        var ay = dy * this.spring;
        this.vx += ax;
        this.vy += ay;
        //由于小球每次摇摆时的距离相同，所以速度向量也相同，这样它就会以同样的速度来回摆动；引入摩擦力，衰减速度，摇摆时的距离也就衰减，最终停止
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.ball.x += this.vx;
        this.ball.y += this.vy;
    };
    return Spring3;
}(BaseSprite));
__reflect(Spring3.prototype, "Spring3");
//# sourceMappingURL=Spring3.js.map