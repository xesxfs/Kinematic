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
var Bouncing = (function (_super) {
    __extends(Bouncing, _super);
    function Bouncing() {
        return _super.call(this) || this;
    }
    Bouncing.prototype.init = function () {
        this.ball = new Ball();
        this.setDisplayCenter(this.ball);
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Bouncing.prototype.onEnterFrame = function () {
        var ball = this.ball;
        this.ball.x += this.vx;
        this.ball.y += this.vy;
        var left = 0;
        var right = this.stage.stageWidth;
        var top = 0;
        var bottom = this.stage.stageHeight;
        if (ball.x + ball.radius > right) {
            ball.x = right - ball.radius;
            this.vx *= -1;
        }
        else if (ball.x - ball.radius < left) {
            ball.x = left + ball.radius;
            this.vx *= -1;
        }
        if (ball.y + ball.radius > bottom) {
            ball.y = bottom - ball.radius;
            this.vy *= -1;
        }
        else if (ball.y - ball.radius < top) {
            ball.y = top + ball.radius;
            this.vy *= -1;
        }
    };
    return Bouncing;
}(BaseSprite));
__reflect(Bouncing.prototype, "Bouncing");
//# sourceMappingURL=Bouncing.js.map