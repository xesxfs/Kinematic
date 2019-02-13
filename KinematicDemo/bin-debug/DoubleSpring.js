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
var DoubleSpring = (function (_super) {
    __extends(DoubleSpring, _super);
    function DoubleSpring() {
        var _this = _super.call(this) || this;
        _this.spring = 0.1;
        _this.friction = 0.95;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.springLength = 100;
        return _this;
    }
    DoubleSpring.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.ball0 = new Ball();
        this.randDisplay(this.ball0);
        this.addChild(this.ball0);
        this.ball1 = new Ball();
        this.randDisplay(this.ball1);
        this.addChild(this.ball1);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    DoubleSpring.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    DoubleSpring.prototype.onEnterFrame = function () {
        this.springTo(this.ball0, this.ball1);
        this.springTo(this.ball1, this.ball0);
        this.graphics.clear();
        this.graphics.lineStyle(1);
        this.graphics.moveTo(this.ball0.x, this.ball0.y);
        this.graphics.lineTo(this.ball1.x, this.ball1.y);
    };
    DoubleSpring.prototype.springTo = function (ballA, ballB) {
        var dx = ballB.x - ballA.x;
        var dy = ballB.y - ballA.y;
        var angle = Math.atan2(dy, dx);
        var targetX = ballB.x - Math.cos(angle) * this.springLength;
        var targetY = ballB.y - Math.sin(angle) * this.springLength;
        ballA.vx += (targetX - ballA.x) * this.spring;
        ballA.vy += (targetY - ballA.y) * this.spring;
        ballA.vx *= this.friction;
        ballA.vy *= this.friction;
        ballA.x += ballA.vx;
        ballA.y += ballA.vy;
    };
    return DoubleSpring;
}(BaseSprite));
__reflect(DoubleSpring.prototype, "DoubleSpring");
//# sourceMappingURL=DoubleSpring.js.map