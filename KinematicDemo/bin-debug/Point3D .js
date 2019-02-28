var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Point3D = (function () {
    function Point3D(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.fl = 250;
        this.vpX = 0;
        this.vpY = 0;
        this.cX = 0;
        this.cY = 0;
        this.cZ = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Point3D.prototype.setVanishingPoint = function (vpX, vpY) {
        this.vpX = vpX;
        this.vpY = vpY;
    };
    Point3D.prototype.setCenter = function (cX, cY, cZ) {
        if (cZ === void 0) { cZ = 0; }
        this.cX = cX;
        this.cY = cY;
        this.cZ = cZ;
    };
    Object.defineProperty(Point3D.prototype, "screenX", {
        get: function () {
            var scale = this.fl / (this.fl + this.z + this.cZ);
            return this.vpX + this.cX + this.x * scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point3D.prototype, "screenY", {
        get: function () {
            var scale = this.fl / (this.fl + this.z + this.cZ);
            return this.vpY + this.cY + this.y * scale;
        },
        enumerable: true,
        configurable: true
    });
    Point3D.prototype.rotateX = function (angleX) {
        var cosX = Math.cos(angleX);
        var sinX = Math.sin(angleX);
        var y1 = this.y * cosX - this.z * sinX;
        var z1 = this.z * cosX + this.y * sinX;
        this.y = y1;
        this.z = z1;
    };
    Point3D.prototype.rotateY = function (angleY) {
        var cosY = Math.cos(angleY);
        var sinY = Math.sin(angleY);
        var x1 = this.x * cosY - this.z * sinY;
        var z1 = this.z * cosY + this.x * sinY;
        this.x = x1;
        this.z = z1;
    };
    Point3D.prototype.rotateZ = function (angleZ) {
        var cosZ = Math.cos(angleZ);
        var sinZ = Math.sin(angleZ);
        var x1 = this.x * cosZ - this.y * sinZ;
        var y1 = this.y * cosZ + this.x * sinZ;
        this.x = x1;
        this.y = y1;
    };
    return Point3D;
}());
__reflect(Point3D.prototype, "Point3D");
//# sourceMappingURL=Point3D .js.map