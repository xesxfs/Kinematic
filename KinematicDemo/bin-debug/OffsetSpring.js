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
var OffsetSpring = (function (_super) {
    __extends(OffsetSpring, _super);
    function OffsetSpring() {
        var _this = _super.call(this) || this;
        _this.spring = 0.1;
        _this.friction = 0.8;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.springLength = 100;
        return _this;
    }
    OffsetSpring.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.ball = new Ball();
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    OffsetSpring.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    OffsetSpring.prototype.onEnterFrame = function () {
        var dx = this.ball.x - this.mouseX;
        var dy = this.ball.y - this.mouseY;
        var angle = Math.atan2(dy, dx);
        var targetX = this.mouseX + Math.cos(angle) * this.springLength;
        var targetY = this.mouseY + Math.sin(angle) * this.springLength;
        this.ball.vx += (targetX - this.ball.x) * this.spring;
        this.ball.vy += (targetY - this.ball.y) * this.spring;
        this.ball.vx *= this.friction;
        this.ball.vy *= this.friction;
        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;
        this.graphics.clear();
        this.graphics.lineStyle(1);
        this.graphics.moveTo(this.ball.x, this.ball.y);
        this.graphics.lineTo(this.mouseX, this.mouseY);
    };
    return OffsetSpring;
}(BaseSprite));
__reflect(OffsetSpring.prototype, "OffsetSpring");
//# sourceMappingURL=OffsetSpring.js.map