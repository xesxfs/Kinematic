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
var Billiard1 = (function (_super) {
    __extends(Billiard1, _super);
    function Billiard1() {
        return _super.call(this) || this;
    }
    Billiard1.prototype.init = function () {
        this.b0 = new Ball(40);
        this.b0.mass = 2;
        this.b0.x = 50;
        this.b0.y = this.stage.stageHeight / 2;
        this.b0.vx = 2;
        this.addChild(this.b0);
        this.b1 = new Ball(25);
        this.b1.mass = 1;
        this.b1.x = 300;
        this.b1.y = this.stage.stageHeight / 2;
        this.b1.vx = -1;
        this.addChild(this.b1);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Billiard1.prototype.onEnterFrame = function () {
        this.b0.x += this.b0.vx;
        this.b1.x += this.b1.vx;
        var dist = this.b1.x - this.b0.x;
        if (Math.abs(dist) < this.b0.radius + this.b1.radius) {
            var vx0Final = ((this.b0.mass - this.b1.mass) * this.b0.vx + 2 * this.b1.mass * this.b1.vx) / (this.b0.mass + this.b1.mass);
            var vx1Final = ((this.b1.mass - this.b0.mass) * this.b1.vx + 2 * this.b0.mass * this.b0.vx) / (this.b0.mass + this.b1.mass);
            this.b0.vx = vx0Final;
            this.b1.vx = vx1Final;
            this.b0.x += this.b0.vx;
            this.b1.x += this.b1.vx;
        }
    };
    return Billiard1;
}(BaseSprite));
__reflect(Billiard1.prototype, "Billiard1");
//# sourceMappingURL=Billiard1.js.map