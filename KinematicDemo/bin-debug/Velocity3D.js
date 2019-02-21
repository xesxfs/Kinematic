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
var Velocity3D = (function (_super) {
    __extends(Velocity3D, _super);
    function Velocity3D() {
        var _this = _super.call(this) || this;
        _this.xpos = 0;
        _this.ypos = 0;
        _this.zpos = 0;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.vx = 0;
        _this.vy = 0;
        _this.vz = 0;
        _this.friction = .98;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    Velocity3D.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        mouse.setMouseMoveEnabled(true);
        document.onkeydown = this.onkeyDown.bind(this);
        document.onkeyup = this.onkeyUp.bind(this);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.ball = new Ball();
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Velocity3D.prototype.onEnterFrame = function () {
        this.xpos += this.vx;
        this.ypos += this.vy;
        this.zpos += this.vz;
        if (this.zpos > -this.fl) {
            // this.xpos = this.mouseX - this.vpX;
            // this.ypos = this.mouseY - this.vpY;
            var scale = this.fl / (this.fl + this.zpos);
            this.ball.scaleX = this.ball.scaleY = scale;
            this.ball.x = this.vpX + this.xpos * scale;
            this.ball.y = this.vpY + this.ypos * scale;
            this.ball.visible = true;
        }
        else {
            this.ball.visible = false;
        }
    };
    Velocity3D.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Velocity3D.prototype.onkeyDown = function (event) {
        switch (event.keyCode) {
            case 37:
                this.vx -= 1;
                break;
            case 38:
                this.vy -= 1;
                break;
            case 39:
                this.vx += 1;
                break;
            case 40:
                this.vy += 1;
                break;
            case 16:
                this.vz += 1;
                break;
            case 17:
                this.vz -= 1;
                break;
        }
        if (event.keyCode == 38) {
            this.zpos += 5;
        }
        if (event.keyCode == 40) {
            this.zpos -= 5;
        }
    };
    Velocity3D.prototype.onkeyUp = function (event) {
    };
    return Velocity3D;
}(BaseSprite));
__reflect(Velocity3D.prototype, "Velocity3D");
//# sourceMappingURL=Velocity3D.js.map