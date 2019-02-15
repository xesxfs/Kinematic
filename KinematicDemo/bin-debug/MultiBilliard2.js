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
var MultiBilliard2 = (function (_super) {
    __extends(MultiBilliard2, _super);
    function MultiBilliard2() {
        var _this = _super.call(this) || this;
        _this.numBalls = 20;
        _this.bounce = -1;
        return _this;
    }
    MultiBilliard2.prototype.init = function () {
        this.balls = new Array();
        for (var i = 0; i < this.numBalls; i++) {
            var radius = Math.random() * 50 + 20;
            var ball = new Ball(radius);
            ball.mass = radius;
            this.randDisplay(ball);
            ball.vx = Math.random() * 10 - 5;
            ball.vy = Math.random() * 10 - 5;
            this.addChild(ball);
            this.balls.push(ball);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    MultiBilliard2.prototype.onEnterFrame = function () {
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            ball.x += ball.vx;
            ball.y += ball.vy;
            this.checkWalls(ball);
        }
        for (var i = 0; i < this.numBalls - 1; i++) {
            var ballA = this.balls[i];
            for (var j = i + 1; j < this.numBalls; j++) {
                var ballB = this.balls[j];
                this.checkCollision(ballA, ballB);
            }
        }
    };
    MultiBilliard2.prototype.checkWalls = function (ball) {
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
    MultiBilliard2.prototype.checkCollision = function (b0, b1) {
        var dx = b1.x - b0.x;
        var dy = b1.y - b0.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < b0.radius + b1.radius) {
            // 计算角度和正余弦值
            var angle = Math.atan2(dy, dx);
            var sin = Math.sin(angle);
            var cos = Math.cos(angle);
            // 旋转 ball0 的位置
            var pos0 = new egret.Point(0, 0);
            // 旋转 ball1 的位置
            var pos1 = this.rotate(dx, dy, sin, cos, true);
            // 旋转 ball0 的速度
            var vel0 = this.rotate(b0.vx, b0.vy, sin, cos, true);
            // 旋转 ball1 的位置
            var vel1 = this.rotate(b1.vx, b1.vy, sin, cos, true);
            // 碰撞的作用力
            var vxTotal = vel0.x - vel1.x;
            vel0.x = ((b0.mass - b1.mass) * vel0.x + 2 * b1.mass * vel1.x) / (b0.mass + b1.mass);
            vel1.x = vxTotal + vel0.x;
            // 更新位置
            var absV = Math.abs(vel0.x) + Math.abs(vel1.x);
            //小球之间重叠部分的大小
            var overlap = (b0.radius + b1.radius) - Math.abs(pos0.x - pos1.x);
            //根据小球速度与绝对速度的百分比，让小球移动出重叠的那一部分
            pos0.x += vel0.x / absV * overlap;
            pos1.x += vel1.x / absV * overlap;
            // 将位置旋转回来
            var pos0F = this.rotate(pos0.x, pos0.y, sin, cos, false);
            var pos1F = this.rotate(pos1.x, pos1.y, sin, cos, false);
            // 将位置调整为屏幕的实际位置
            b1.x = b0.x + pos1F.x;
            b1.y = b0.y + pos1F.y;
            b0.x = b0.x + pos0F.x;
            b0.y = b0.y + pos0F.y;
            // 将速度旋转回来
            var vel0F = this.rotate(vel0.x, vel0.y, sin, cos, false);
            var vel1F = this.rotate(vel1.x, vel1.y, sin, cos, false);
            b0.vx = vel0F.x;
            b0.vy = vel0F.y;
            b1.vx = vel1F.x;
            b1.vy = vel1F.y;
        }
    };
    MultiBilliard2.prototype.rotate = function (x, y, sin, cos, reverse) {
        var result = new egret.Point();
        if (reverse) {
            result.x = x * cos + y * sin;
            result.y = y * cos - x * sin;
        }
        else {
            result.x = x * cos - y * sin;
            result.y = y * cos + x * sin;
        }
        return result;
    };
    return MultiBilliard2;
}(BaseSprite));
__reflect(MultiBilliard2.prototype, "MultiBilliard2");
//# sourceMappingURL=MultiBilliard2.js.map