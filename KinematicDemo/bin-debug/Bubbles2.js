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
var Bubbles2 = (function (_super) {
    __extends(Bubbles2, _super);
    function Bubbles2() {
        var _this = _super.call(this) || this;
        _this.balls = [];
        _this.numBalls = 30;
        _this.spring = 0.1;
        _this.bounce = -0.5;
        _this.gravity = 0.1;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    Bubbles2.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        for (var i = 0; i < this.numBalls; i++) {
            var ball = new Ball(Math.random() * 30 + 20, Math.random() * 0xffffff);
            this.randDisplay(ball);
            ball.vx = Math.random() * 6 - 3;
            ball.vy = Math.random() * 6 - 3;
            this.addChild(ball);
            this.balls.push(ball);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Bubbles2.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Bubbles2.prototype.onEnterFrame = function () {
        for (var i = 0; i < this.numBalls - 1; i++) {
            var ball0 = this.balls[i];
            for (var j = 1; j < this.numBalls; j++) {
                var ball1 = this.balls[j];
                var dx = ball1.x - ball0.x;
                var dy = ball1.y - ball0.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                var minDist = ball0.radius + ball1.radius;
                if (dist < minDist) {
                    var angle = Math.atan2(dy, dx);
                    var tx = ball0.x + Math.cos(angle) * minDist;
                    var ty = ball0.y + Math.sin(angle) * minDist;
                    var ax = (tx - ball1.x) * this.spring;
                    var ay = (ty - ball1.y) * this.spring;
                    ball0.vx -= ax;
                    ball0.vy -= ay;
                    ball1.vx += ax;
                    ball1.vy += ay;
                }
            }
        }
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            this.move(ball);
        }
    };
    Bubbles2.prototype.move = function (ball) {
        // ball.vy += this.gravity;
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
    return Bubbles2;
}(BaseSprite));
__reflect(Bubbles2.prototype, "Bubbles2");
//# sourceMappingURL=Bubbles2.js.map