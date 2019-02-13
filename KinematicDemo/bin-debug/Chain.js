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
var Chain = (function (_super) {
    __extends(Chain, _super);
    function Chain() {
        var _this = _super.call(this) || this;
        _this.balls = [];
        _this.spring = 0.1;
        _this.friction = 0.8;
        _this.gravity = 5;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.numBall = 8;
        return _this;
    }
    Chain.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        for (var i = 0; i < this.numBall; i++) {
            var ball = new Ball();
            this.addChild(ball);
            this.balls.push(ball);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Chain.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Chain.prototype.onEnterFrame = function () {
        this.graphics.clear();
        this.graphics.lineStyle(1);
        this.graphics.moveTo(this.mouseX, this.mouseY);
        this.moveBall(this.balls[0], this.mouseX, this.mouseY);
        this.graphics.lineTo(this.balls[0].x, this.balls[0].y);
        for (var i = 1; i < this.balls.length; i++) {
            var ballA = this.balls[i - 1];
            var ballB = this.balls[i];
            this.moveBall(ballB, ballA.x, ballA.y);
            this.graphics.lineTo(ballB.x, ballB.y);
        }
    };
    Chain.prototype.moveBall = function (ball, targetX, targetY) {
        ball.vx += (targetX - ball.x) * this.spring;
        ball.vy += (targetY - ball.y) * this.spring;
        ball.vy += this.gravity;
        ball.vx *= this.friction;
        ball.vy *= this.friction;
        ball.x += ball.vx;
        ball.y += ball.vy;
    };
    return Chain;
}(BaseSprite));
__reflect(Chain.prototype, "Chain");
//# sourceMappingURL=Chain.js.map