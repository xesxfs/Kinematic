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
var Lines3D1 = (function (_super) {
    __extends(Lines3D1, _super);
    function Lines3D1() {
        var _this = _super.call(this) || this;
        _this.numBalls = 50;
        _this.easing = .1;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    Lines3D1.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.balls = [];
        for (var i = 0; i < this.numBalls; i++) {
            var ball = new Ball3D(0, 0);
            this.balls.push(ball);
            ball.xpos = Math.random() * 200 - 100;
            ball.ypos = Math.random() * 200 - 100;
            ball.zpos = Math.random() * 200 - 100;
            this.addChild(ball);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Lines3D1.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Lines3D1.prototype.onEnterFrame = function () {
        var angleY = (this.mouseX - this.vpX) * .001;
        var angleX = (this.mouseY - this.vpY) * .001;
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            this.rotateY(ball, angleY);
            this.rotateX(ball, angleX);
            this.doPerspective(ball);
        }
        this.graphics.clear();
        this.graphics.lineStyle(1);
        this.graphics.moveTo(this.balls[0].x, this.balls[0].y);
        for (var i_1 = 1; i_1 < this.numBalls; i_1++) {
            this.graphics.lineTo(this.balls[i_1].x, this.balls[i_1].y);
        }
    };
    Lines3D1.prototype.rotateY = function (ball, angleY) {
        var cosY = Math.cos(angleY);
        var sinY = Math.sin(angleY);
        var x1 = ball.xpos * cosY - ball.zpos * sinY;
        var z1 = ball.zpos * cosY + ball.xpos * sinY;
        ball.xpos = x1;
        ball.zpos = z1;
    };
    Lines3D1.prototype.rotateX = function (ball, angleX) {
        var cosX = Math.cos(angleX);
        var sinX = Math.sin(angleX);
        var y1 = ball.ypos * cosX - ball.zpos * sinX;
        var z1 = ball.zpos * cosX + ball.ypos * sinX;
        ball.ypos = y1;
        ball.zpos = z1;
    };
    Lines3D1.prototype.doPerspective = function (ball) {
        if (ball.zpos > -this.fl) {
            var scale = this.fl / (this.fl + ball.zpos);
            ball.scaleX = ball.scaleY = scale;
            ball.x = this.vpX + ball.xpos * scale;
            ball.y = this.vpY + ball.ypos * scale;
            ball.visible = true;
        }
        else {
            ball.visible = false;
        }
    };
    Lines3D1.prototype.sortZ = function () {
        this.balls.sort(function (a, b) { return b.zpos - a.zpos; });
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            this.setChildIndex(ball, i);
        }
    };
    return Lines3D1;
}(BaseSprite));
__reflect(Lines3D1.prototype, "Lines3D1");
//# sourceMappingURL=Lines3D1.js.map