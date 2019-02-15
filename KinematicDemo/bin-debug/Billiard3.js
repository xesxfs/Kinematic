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
var Billiard3 = (function (_super) {
    __extends(Billiard3, _super);
    function Billiard3() {
        var _this = _super.call(this) || this;
        _this.bounce = -1;
        return _this;
    }
    Billiard3.prototype.init = function () {
        this.b0 = new Ball(150);
        this.b0.mass = 2;
        this.b0.x = this.stage.stageWidth - 200;
        this.b0.y = this.stage.stageHeight - 200;
        this.b0.vx = Math.random() * 10 - 5;
        this.b0.vy = Math.random() * 10 - 5;
        this.addChild(this.b0);
        this.b1 = new Ball(90);
        this.b1.mass = 1;
        this.b1.x = 100;
        this.b1.y = 100;
        this.b1.vx = Math.random() * 10 - 5;
        this.b1.vy = Math.random() * 10 - 5;
        this.addChild(this.b1);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Billiard3.prototype.onEnterFrame = function () {
        this.b0.x += this.b0.vx;
        this.b0.y += this.b0.vy;
        this.b1.x += this.b1.vx;
        this.b1.y += this.b1.vy;
        this.checkCollision(this.b0, this.b1);
        this.checkWalls(this.b0);
        this.checkWalls(this.b1);
        // let dist = this.b1.x - this.b0.x;
        // if (Math.abs(dist) < this.b0.radius + this.b1.radius) {
        // 	var vxTotal: number = this.b0.vx - this.b1.vx;
        // 	var vx0Final: number = ((this.b0.mass - this.b1.mass) * this.b0.vx + 2 * this.b1.mass * this.b1.vx) / (this.b0.mass + this.b1.mass);
        //var vx1Final: number = ((this.b1.mass - this.b0.mass) * this.b1.vx + 2 * this.b0.mass * this.b0.vx) / (this.b0.mass + this.b1.mass);
        // 	this.b0.vx = vx0Final;
        // 	this.b1.vx = vxTotal + vx0Final;
        // 	this.b0.x += this.b0.vx;
        // 	this.b1.x += this.b1.vx;
        // }
    };
    Billiard3.prototype.checkWalls = function (ball) {
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
    Billiard3.prototype.checkCollision = function (b0, b1) {
        var dx = b1.x - b0.x;
        var dy = b1.y - b0.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < b0.radius + b1.radius) {
            // 计算角度和正余弦值
            var angle = Math.atan2(dy, dx);
            var sin = Math.sin(angle);
            var cos = Math.cos(angle);
            // 旋转 ball0 的位置
            var x0 = 0;
            var y0 = 0;
            // 旋转 ball1 的位置
            var x1 = dx * cos + dy * sin;
            var y1 = dy * cos - dx * sin;
            // 旋转 ball0 的速度
            var vx0 = b0.vx * cos + b0.vy * sin;
            var vy0 = b0.vy * cos - b0.vx * sin;
            // 旋转 ball1 的位置
            var vx1 = b1.vx * cos + b1.vy * sin;
            var vy1 = b1.vy * cos - b1.vy * sin;
            // 碰撞的作用力
            var vxTotal = vx0 - vx1;
            vx0 = ((b0.mass - b1.mass) * vx0 + 2 * b1.mass * vx1) / (b0.mass + b1.mass);
            vx1 = vxTotal + vx0;
            x0 += vx0;
            x1 += vx1;
            // 将位置旋转回来
            var x0Final = x0 * cos - y0 * sin;
            var y0Final = y0 * cos + x0 * sin;
            var x1Final = x1 * cos - y1 * sin;
            var y1Final = y1 * cos + x1 * sin;
            // 将位置调整为屏幕的实际位置
            b1.x = b0.x + x1Final;
            b1.y = b0.y + y1Final;
            b0.x = b0.x + x0Final;
            b0.y = b0.y + y0Final;
            // 将速度旋转回来
            b0.vx = vx0 * cos - vy0 * sin;
            b0.vy = vy0 * cos + vx0 * sin;
            b1.vx = vx1 * cos - vy1 * sin;
            b1.vy = vy1 * cos + vx1 * sin;
        }
    };
    return Billiard3;
}(BaseSprite));
__reflect(Billiard3.prototype, "Billiard3");
//# sourceMappingURL=Billiard3.js.map