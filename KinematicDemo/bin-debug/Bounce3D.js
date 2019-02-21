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
var Bounce3D = (function (_super) {
    __extends(Bounce3D, _super);
    function Bounce3D() {
        var _this = _super.call(this) || this;
        _this.xpos = 0;
        _this.ypos = 0;
        _this.zpos = 0;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.vx = Math.random() * 10 - 5;
        _this.vy = Math.random() * 10 - 5;
        _this.vz = Math.random() * 10 - 5;
        _this.friction = .98;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.top = -100;
        _this.bottom = 100;
        _this.left = -100;
        _this.right = 100;
        _this.front = 100;
        _this.back = -100;
        return _this;
    }
    Bounce3D.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        mouse.setMouseMoveEnabled(true);
        // document.onkeydown = this.onkeyDown.bind(this);
        // document.onkeyup = this.onkeyUp.bind(this);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.ball = new Ball(15);
        this.addChild(this.ball);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Bounce3D.prototype.onEnterFrame = function () {
        this.xpos += this.vx;
        this.ypos += this.vy;
        this.zpos += this.vz;
        var radius = this.ball.radius;
        if (this.xpos + radius > this.right) {
            this.xpos = this.right - radius;
            this.vx *= -1;
        }
        else if (this.xpos - radius < this.left) {
            this.xpos = this.left + radius;
            this.vx *= -1;
        }
        if (this.ypos + radius > this.bottom) {
            this.ypos = this.bottom - radius;
            this.vy *= -1;
        }
        else if (this.ypos - radius < this.top) {
            this.ypos = this.top + radius;
            this.vy *= -1;
        }
        if (this.zpos + radius > this.front) {
            this.zpos = this.front - radius;
            this.vz *= -1;
        }
        else if (this.zpos - radius < this.back) {
            this.zpos = this.back + radius;
            this.vz *= -1;
        }
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
    Bounce3D.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    return Bounce3D;
}(BaseSprite));
__reflect(Bounce3D.prototype, "Bounce3D");
//# sourceMappingURL=Bounce3D.js.map