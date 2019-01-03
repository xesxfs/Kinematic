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
var ShipSimFriction = (function (_super) {
    __extends(ShipSimFriction, _super);
    function ShipSimFriction() {
        var _this = _super.call(this) || this;
        _this.vr = 0;
        /***推力**/
        _this.thrust = 0;
        /**摩擦力系数**/
        _this.friction = 0.97;
        _this.vx = 0;
        _this.vy = 0;
        return _this;
    }
    ShipSimFriction.prototype.init = function () {
        this.ship = new Ship();
        this.ship.draw(false);
        this.setDisplayCenter(this.ship);
        this.addChild(this.ship);
        this.setDisplayCenter(this.ship);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        document.onkeydown = this.onkeyDown.bind(this);
        document.onkeyup = this.onkeyUp.bind(this);
    };
    ShipSimFriction.prototype.onEnterFrame = function () {
        this.ship.rotation += this.vr;
        var angle = this.ship.rotation * Math.PI / 180;
        var ax = Math.cos(angle) * this.thrust;
        var ay = Math.sin(angle) * this.thrust;
        this.vx += ax;
        this.vy += ay;
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.ship.x += this.vx;
        this.ship.y += this.vy;
        var left = 0;
        var right = this.stage.stageWidth;
        var top = 0;
        var bottom = this.stage.stageHeight;
        if (this.ship.x - this.ship.width / 2 > right) {
            this.ship.x = left - this.ship.width / 2;
        }
        else if (this.ship.x + this.ship.width / 2 < left) {
            this.ship.x = right + this.ship.width / 2;
        }
        if (this.ship.y - this.ship.height / 2 > bottom) {
            this.ship.y = top - this.ship.height / 2;
        }
        else if (this.ship.y < top - this.ship.height / 2) {
            this.ship.y = bottom + this.ship.height / 2;
        }
    };
    ShipSimFriction.prototype.onkeyDown = function (event) {
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
    ShipSimFriction.prototype.onkeyUp = function (event) {
        this.vr = 0;
        this.thrust = 0;
        this.ship.draw(false);
    };
    return ShipSimFriction;
}(BaseSprite));
__reflect(ShipSimFriction.prototype, "ShipSimFriction");
//# sourceMappingURL=ShipSimFriction.js.map