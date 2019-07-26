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
var SteeredVehicle = (function (_super) {
    __extends(SteeredVehicle, _super);
    function SteeredVehicle() {
        var _this = _super.call(this) || this;
        _this._maxForce = 1;
        _this._steeringForce = new Vector2D();
        return _this;
    }
    Object.defineProperty(SteeredVehicle.prototype, "maxForce", {
        get: function () {
            return this._maxForce;
        },
        set: function (value) {
            this._maxForce = value;
        },
        enumerable: true,
        configurable: true
    });
    SteeredVehicle.prototype.update = function () {
        this._steeringForce.truncate(this._maxForce);
        this._steeringForce = this._steeringForce.divide(this._mass);
        this._velocity = this._velocity.add(this._steeringForce);
        this._steeringForce = new Vector2D();
        _super.prototype.update.call(this);
    };
    SteeredVehicle.prototype.seek = function (target) {
        var desiredVelocity = target.subtract(this._position);
        desiredVelocity.normalize();
        desiredVelocity = desiredVelocity.multiply(this._maxSpeed);
        var force = desiredVelocity.subtract(this._velocity);
        this._steeringForce = this._steeringForce.add(force);
    };
    return SteeredVehicle;
}(Vehicle));
__reflect(SteeredVehicle.prototype, "SteeredVehicle");
//# sourceMappingURL=SteeredVehicle.js.map