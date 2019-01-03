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
var ShipSim = (function (_super) {
    __extends(ShipSim, _super);
    function ShipSim() {
        var _this = _super.call(this) || this;
        _this.vr = 0;
        /***推力**/
        _this.thrust = 0;
        _this.vx = 0;
        _this.vy = 0;
        return _this;
    }
    ShipSim.prototype.init = function () {
        this.ship = new Ship();
        this.ship.draw(false);
        this.setDisplayCenter(this.ship);
        this.addChild(this.ship);
        this.setDisplayCenter(this.ship);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        document.onkeydown = this.onkeyDown.bind(this);
        document.onkeyup = this.onkeyUp.bind(this);
    };
    ShipSim.prototype.onEnterFrame = function () {
        this.ship.rotation += this.vr;
        var angle = this.ship.rotation * Math.PI / 180;
        var ax = Math.cos(angle) * this.thrust;
        var ay = Math.sin(angle) * this.thrust;
        this.vx += ax;
        this.vy += ay;
        this.ship.x += this.vx;
        this.ship.y += this.vy;
    };
    ShipSim.prototype.onkeyDown = function (event) {
        if (event.keyCode === 37) {
            this.vr = -5;
        }
        if (event.keyCode === 39) {
            this.vr = 5;
        }
        if (event.keyCode === 38) {
            this.thrust = 0.2;
            this.ship.draw(true);
        }
    };
    ShipSim.prototype.onkeyUp = function (event) {
        this.vr = 0;
        this.thrust = 0;
        this.ship.draw(false);
    };
    return ShipSim;
}(BaseSprite));
__reflect(ShipSim.prototype, "ShipSim");
//# sourceMappingURL=ShipSim.js.map