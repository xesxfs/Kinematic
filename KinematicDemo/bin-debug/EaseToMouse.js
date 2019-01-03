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
var EaseToMouse = (function (_super) {
    __extends(EaseToMouse, _super);
    function EaseToMouse() {
        var _this = _super.call(this) || this;
        _this.easing = .2;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    EaseToMouse.prototype.init = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        mouse.setMouseMoveEnabled(true);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    EaseToMouse.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    EaseToMouse.prototype.onEnterFrame = function () {
        var vx = (this.mouseX - this.ball.x) * this.easing;
        var vy = (this.mouseY - this.ball.y) * this.easing;
        this.ball.x += vx;
        this.ball.y += vy;
    };
    return EaseToMouse;
}(BaseSprite));
__reflect(EaseToMouse.prototype, "EaseToMouse");
//# sourceMappingURL=EaseToMouse.js.map