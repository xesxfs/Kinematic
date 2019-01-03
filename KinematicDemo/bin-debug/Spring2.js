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
var Spring2 = (function (_super) {
    __extends(Spring2, _super);
    function Spring2() {
        var _this = _super.call(this) || this;
        _this.spring = .1;
        _this.vx = 0;
        _this.friction = 0.95;
        return _this;
    }
    Spring2.prototype.init = function () {
        this.targetX = this.stage.stageWidth / 2;
        this.ball = new Ball();
        this.addChild(this.ball);
        this.ball.y = this.stage.stageHeight / 2;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Spring2.prototype.onEnterFrame = function () {
        var dx = this.targetX - this.ball.x;
        var ax = dx * this.spring;
        this.vx += ax;
        //由于小球每次摇摆时的距离相同，所以速度向量也相同，这样它就会以同样的速度来回摆动；引入摩擦力，衰减速度，摇摆时的距离也就衰减，最终停止
        this.vx *= this.friction;
        this.ball.x += this.vx;
    };
    return Spring2;
}(BaseSprite));
__reflect(Spring2.prototype, "Spring2");
//# sourceMappingURL=Spring2.js.map