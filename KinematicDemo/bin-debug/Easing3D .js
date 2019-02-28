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
var Easing3D = (function (_super) {
    __extends(Easing3D, _super);
    function Easing3D() {
        var _this = _super.call(this) || this;
        _this.easing = .1;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        return _this;
    }
    Easing3D.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        this.ball = new Ball3D();
        this.addChild(this.ball);
        this.tx = Math.random() * 500 - 250;
        this.ty = Math.random() * 500 - 250;
        this.tz = Math.random() * 500;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Easing3D.prototype.onEnterFrame = function () {
        var dx = this.tx - this.ball.xpos;
        var dy = this.ty - this.ball.ypos;
        var dz = this.tz - this.ball.zpos;
        this.ball.xpos += dx * this.easing;
        this.ball.ypos += dy * this.easing;
        this.ball.zpos += dz * this.easing;
        var dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1) {
            this.tx = Math.random() * 500 - 250;
            this.ty = Math.random() * 500 - 250;
            this.tz = Math.random() * 500;
        }
        if (this.ball.zpos > -this.fl) {
            var scale = this.fl / (this.fl + this.ball.zpos);
            this.ball.scaleX = this.ball.scaleY = scale;
            this.ball.x = this.vpX + this.ball.xpos * scale;
            this.ball.y = this.vpY + this.ball.ypos * scale;
            this.ball.visible = true;
        }
        else {
            this.ball.visible = false;
        }
    };
    return Easing3D;
}(BaseSprite));
__reflect(Easing3D.prototype, "Easing3D");
//# sourceMappingURL=Easing3D .js.map