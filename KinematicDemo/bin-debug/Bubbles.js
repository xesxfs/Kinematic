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
var Bubbles = (function (_super) {
    __extends(Bubbles, _super);
    function Bubbles() {
        var _this = _super.call(this) || this;
        _this.balls = [];
        _this.numBalls = 10;
        _this.spring = 0.2;
        _this.bounce = -1;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    Bubbles.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.centerBall = new Ball(100, 0xcccccc);
        this.setDisplayCenter(this.centerBall);
        this.addChild(this.centerBall);
        for (var i = 0; i < this.numBalls; i++) {
            var ball = new Ball(Math.random() * 40 + 5, Math.random() * 0xffffff);
            this.randDisplay(ball);
            ball.vx = Math.random() * 60 - 3;
            ball.vy = Math.random() * 60 - 3;
            this.addChild(ball);
            this.balls.push(ball);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Bubbles.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Bubbles.prototype.onEnterFrame = function () {
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            this.move(ball);
            var dx = ball.x - this.centerBall.x;
            var dy = ball.y - this.centerBall.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            var minDist = ball.radius + this.centerBall.radius;
            if (dist < minDist) {
                var angle = Math.atan2(dy, dx);
                var tx = this.centerBall.x + Math.cos(angle) * minDist;
                var ty = this.centerBall.y + Math.sin(angle) * minDist;
                ball.vx = (tx - ball.x) * this.spring;
                ball.vy = (ty - ball.y) * this.spring;
            }
        }
    };
    Bubbles.prototype.move = function (ball) {
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x + ball.radius > this.stage.stageWidth) {
            ball.x = this.stage.stageWidth - ball.radius;
            ball.vx *= this.bounce;
        }
        else if (ball.x - ball.radius < 0) {
            ball.x = ball.radius;
            ball.vx *= this.bounce;
        }
        if (ball.y + ball.radius > this.stage.stageHeight) {
            ball.y = this.stage.stageHeight - ball.radius;
            ball.vy *= this.bounce;
        }
        else if (ball.y - ball.radius < 0) {
            ball.y = ball.radius;
            ball.vy *= this.bounce;
        }
    };
    return Bubbles;
}(BaseSprite));
__reflect(Bubbles.prototype, "Bubbles");
//# sourceMappingURL=Bubbles.js.map