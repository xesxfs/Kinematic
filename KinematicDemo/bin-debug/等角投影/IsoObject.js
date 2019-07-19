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
var IsoObject = (function (_super) {
    __extends(IsoObject, _super);
    function IsoObject(size) {
        var _this = _super.call(this) || this;
        _this._walkable = false;
        _this._vx = 0;
        _this._vy = 0;
        _this._vz = 0;
        _this._size = size;
        _this._position = new Point3D();
        _this.updateScreenPosition();
        return _this;
    }
    /**
    * 把当前时刻的一个 3D 坐标点转换成屏幕上的 2D 坐标点
    * 并将自己安置于该点 */
    IsoObject.prototype.updateScreenPosition = function () {
        var screenPos = IsoUtils.isoToScreen(this._position);
        _super.prototype.$setX.call(this, screenPos.x);
        _super.prototype.$setY.call(this, screenPos.y);
    };
    /**
    * 自身的具体描述方式
    */
    IsoObject.prototype.toString = function () {
        return "[IsoObject (x:" + this._position.x + ", y:" + this._position.y + ", z:" + this._position.z + ")]";
    };
    Object.defineProperty(IsoObject.prototype, "x", {
        get: function () {
            return this._position.x;
        },
        /**
        * 设置/读取3D空间中的x坐标 */
        set: function (value) {
            this._position.x = value;
            this.updateScreenPosition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "y", {
        get: function () {
            return this._position.y;
        },
        /**
        * 设置/读取3D空间中的y坐标 */
        set: function (value) {
            this._position.y = value;
            this.updateScreenPosition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "z", {
        get: function () {
            return this._position.z;
        },
        /**
        * 设置/读取3D空间中的z坐标 */
        set: function (value) {
            this._position.z = value;
            this.updateScreenPosition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "position", {
        get: function () {
            return this._position;
        },
        /**
        * 设置/读取 3D 空间中的坐标点 */
        set: function (value) {
            this._position = value;
            this.updateScreenPosition();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "depth", {
        /**
        * 返回形变后的层深 */
        get: function () {
            return (this._position.x + this._position.z) * .866 - this._position.y * .707;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "walkable", {
        get: function () {
            return this._walkable;
        },
        /**
        * 指定其它对象是否可以经过所占的位置 */
        set: function (value) {
            this._walkable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "size", {
        /**
    * 返回尺寸 */
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "rect", {
        /**
        * 返回占用着的矩形 */
        get: function () {
            return new egret.Rectangle(this.x - this.size / 2, this.z - this.size / 2, this.size, this.size);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "vx", {
        get: function () {
            return this._vx;
        },
        /**
        * 设置和读取 x 轴方向上的速度
        */
        set: function (value) {
            this._vx = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "vy", {
        get: function () {
            return this._vy;
        },
        /**
    * 设置和读取 y 轴方向上的速度 */
        set: function (value) {
            this._vy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoObject.prototype, "vz", {
        get: function () {
            return this._vz;
        },
        /**
    * 设置和读取 z 轴方向上的速度 */
        set: function (value) {
            this._vz = value;
        },
        enumerable: true,
        configurable: true
    });
    // 1.2247 的精确计算版本
    IsoObject.Y_CORRECT = Math.cos(-Math.PI / 6) * Math.SQRT2;
    return IsoObject;
}(egret.Sprite));
__reflect(IsoObject.prototype, "IsoObject");
//# sourceMappingURL=IsoObject.js.map