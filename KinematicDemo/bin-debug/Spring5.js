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
var Spring5 = (function (_super) {
    __extends(Spring5, _super);
    function Spring5() {
        var _this = _super.call(this) || this;
        _this.spring = .1;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.vx = 0;
        _this.vy = 0;
        _this.friction = 0.95;
        _this.gravity = 5;
        return _this;
    }
    Spring5.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.ball = new Ball();
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Spring5.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Spring5.prototype.onEnterFrame = function () {
        var dx = this.mouseX - this.ball.x;
        var dy = this.mouseY - this.ball.y;
        var ax = dx * this.spring;
        var ay = dy * this.spring;
        this.vx += ax;
        this.vy += ay;
        /**重力速度**/
        this.vy += this.gravity;
        //由于小球每次摇摆时的距离相同，所以速度向量也相同，这样它就会以同样的速度来回摆动；引入摩擦力，衰减速度，摇摆时的距离也就衰减，最终停止
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.ball.x += this.vx;
        this.ball.y += this.vy;
        this.graphics.clear();
        this.graphics.lineStyle(1);
        this.graphics.moveTo(this.ball.x, this.ball.y);
        this.graphics.lineTo(this.mouseX, this.mouseY);
    };
    return Spring5;
}(BaseSprite));
__reflect(Spring5.prototype, "Spring5");
//# sourceMappingURL=Spring5.js.map