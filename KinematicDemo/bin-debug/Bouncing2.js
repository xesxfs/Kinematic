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
var Bouncing2 = (function (_super) {
    __extends(Bouncing2, _super);
    function Bouncing2() {
        var _this = _super.call(this) || this;
        /**弹力系数**/
        _this.bounce = -0.7;
        return _this;
    }
    Bouncing2.prototype.init = function () {
        this.ball = new Ball();
        this.setDisplayCenter(this.ball);
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Bouncing2.prototype.onEnterFrame = function () {
        var ball = this.ball;
        this.ball.x += this.vx;
        this.ball.y += this.vy;
        var left = 0;
        var right = this.stage.stageWidth;
        var top = 0;
        var bottom = this.stage.stageHeight;
        this.graphics.clear();
        this.graphics.beginFill(0);
        this.graphics.drawRect(left, left, right, bottom);
        this.graphics.endFill();
        if (ball.x + ball.radius > right) {
            ball.x = right - ball.radius;
            this.vx *= this.bounce;
        }
        else if (ball.x - ball.radius < left) {
            ball.x = left + ball.radius;
            this.vx *= this.bounce;
        }
        if (ball.y + ball.radius > bottom) {
            ball.y = bottom - ball.radius;
            this.vy *= this.bounce;
        }
        else if (ball.y - ball.radius < top) {
            ball.y = top + ball.radius;
            this.vy *= this.bounce;
        }
    };
    return Bouncing2;
}(BaseSprite));
__reflect(Bouncing2.prototype, "Bouncing2");
//# sourceMappingURL=Bouncing2.js.map