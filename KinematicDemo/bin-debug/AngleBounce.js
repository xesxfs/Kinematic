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
var AngleBounce = (function (_super) {
    __extends(AngleBounce, _super);
    function AngleBounce() {
        var _this = _super.call(this) || this;
        _this.bounce = -0.6;
        _this.gravity = 0.3;
        return _this;
    }
    AngleBounce.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.ball.x = 100;
        this.ball.y = 100;
        this.line = new egret.Sprite();
        this.line.graphics.lineStyle(2, 0xff0000);
        this.line.graphics.moveTo(0, 0);
        this.line.graphics.lineTo(300, 0);
        this.addChild(this.line);
        this.line.x = 50;
        this.line.y = 200;
        this.line.rotation = 30;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    AngleBounce.prototype.onEnterFrame = function () {
        // 普通的运动代码 
        this.ball.vy += this.gravity;
        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;
        // 获得角度及正余弦值 
        var angle = this.line.rotation * Math.PI / 180;
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        // 获得 ball 与 line 的相对位置 
        var x1 = this.ball.x - this.line.x;
        var y1 = this.ball.y - this.line.y;
        // 旋转坐标 
        var y2 = cos * y1 - sin * x1;
        // 实现反弹 
        if (y2 > -this.ball.height / 2) {
            var x2 = cos * x1 + sin * y1;
            // 旋转速度向量 
            var vx1 = cos * this.ball.vx + sin * this.ball.vy;
            var vy1 = cos * this.ball.vy - sin * this.ball.vx;
            y2 = -this.ball.height / 2;
            vy1 *= this.bounce;
            // 将一切旋转回去
            x1 = cos * x2 - sin * y2;
            y1 = cos * y2 + sin * x2;
            this.ball.vx = cos * vx1 - sin * vy1;
            this.ball.vy = cos * vy1 + sin * vx1;
            this.ball.x = this.line.x + x1;
            this.ball.y = this.line.y + y1;
        }
    };
    return AngleBounce;
}(BaseSprite));
__reflect(AngleBounce.prototype, "AngleBounce");
//# sourceMappingURL=AngleBounce.js.map