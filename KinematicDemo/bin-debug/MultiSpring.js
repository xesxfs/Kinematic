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
var MultiSpring = (function (_super) {
    __extends(MultiSpring, _super);
    function MultiSpring() {
        var _this = _super.call(this) || this;
        _this.handles = [];
        _this.spring = 0.1;
        _this.friction = 0.8;
        _this.gravity = 5;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.numHandles = 4;
        return _this;
    }
    MultiSpring.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.ball = new Ball();
        this.addChild(this.ball);
        for (var i = 0; i < this.numHandles; i++) {
            var handle = new Ball(10, 0x0000fff);
            handle.x = Math.random() * this.stage.stageWidth;
            handle.y = Math.random() * this.stage.stageHeight;
            this.addChild(handle);
            this.handles.push(handle);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    MultiSpring.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    MultiSpring.prototype.onEnterFrame = function () {
        for (var i = 0; i < this.numHandles; i++) {
            this.ball.vx += (this.handles[i].x - this.ball.x) * this.spring;
            this.ball.vy += (this.handles[i].y - this.ball.y) * this.spring;
        }
        // this.ball.vy += this.gravity;
        this.ball.vx *= this.friction;
        this.ball.vx *= this.friction;
        this.ball.x += this.ball.vx;
        this.ball.y += this.ball.vy;
        this.graphics.clear();
        this.graphics.lineStyle(1);
        for (var i = 0; i < this.numHandles; i++) {
            this.graphics.moveTo(this.ball.x, this.ball.y);
            this.graphics.lineTo(this.handles[i].x, this.handles[i].y);
        }
    };
    return MultiSpring;
}(BaseSprite));
__reflect(MultiSpring.prototype, "MultiSpring");
//# sourceMappingURL=MultiSpring.js.map