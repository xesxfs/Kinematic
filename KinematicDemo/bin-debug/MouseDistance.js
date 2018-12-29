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
var MouseDistance = (function (_super) {
    __extends(MouseDistance, _super);
    function MouseDistance() {
        return _super.call(this) || this;
    }
    MouseDistance.prototype.init = function () {
        this.sprite1 = new egret.Sprite();
        this.addChild(this.sprite1);
        this.sprite1.graphics.beginFill(0x0);
        this.sprite1.graphics.drawRect(-2, -2, 4, 4);
        this.sprite1.graphics.endFill();
        this.setDisplayCenter(this.sprite1);
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
    };
    MouseDistance.prototype.onMouseMove = function (e) {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0, 1);
        this.graphics.moveTo(this.sprite1.x, this.sprite1.y);
        this.graphics.lineTo(e.localX, e.localY);
    };
    return MouseDistance;
}(BaseSprite));
__reflect(MouseDistance.prototype, "MouseDistance");
//# sourceMappingURL=MouseDistance.js.map