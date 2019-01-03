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
var RotateToMouse = (function (_super) {
    __extends(RotateToMouse, _super);
    function RotateToMouse() {
        var _this = _super.call(this) || this;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    RotateToMouse.prototype.init = function () {
        this.arrow = new Arrow();
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.addChild(this.arrow);
        this.arrow.x = this.stage.stageWidth / 2;
        this.arrow.y = this.stage.stageHeight / 2;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    RotateToMouse.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    RotateToMouse.prototype.onEnterFrame = function (e) {
        var dx = this.mouseX - this.arrow.x;
        var dy = this.mouseY - this.arrow.y;
        var radians = Math.atan2(dy, dx);
        var rotation = radians * 180 / Math.PI;
        this.arrow.rotation = rotation;
    };
    return RotateToMouse;
}(BaseSprite));
__reflect(RotateToMouse.prototype, "RotateToMouse");
//# sourceMappingURL=RotateToMouse.js.map