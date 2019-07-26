var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Vector2D = (function () {
    function Vector2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = x;
        this._y = y;
    }
    Vector2D.prototype.draw = function (graphics, color) {
        if (color === void 0) { color = 0; }
        graphics.lineStyle(0, color);
        graphics.moveTo(0, 0);
        graphics.lineTo(this._x, this._y);
    };
    /**
     * * Generates a copy of this vector.
     *
     * * @return Vector2D A copy of this vector.
     *
     * */
    Vector2D.prototype.clone = function () {
        return new Vector2D(this._x, this._y);
    };
    /**
     *
     ** Sets this vector's x and y values, and thus length, to zero.
     * @return Vector2D A reference to this vector.
     * */
    Vector2D.prototype.zero = function () {
        this._x = 0;
        this._y = 0;
        return this;
    };
    /**
     *
     * Whether or not this vector is equal to zero, i.e. its x, y, and length are zero.
     * @return Boolean True if vector is zero, otherwise false.
     */
    Vector2D.prototype.isZero = function () {
        return this._x == 0 && this._y == 0;
    };
    Object.defineProperty(Vector2D.prototype, "length", {
        get: function () {
            return Math.sqrt(this.lengthSQ);
        },
        /**
         *
         * * Sets / gets the length or magnitude of this vector. Changing the length will change the x and y
         * but not the angle of this vector.
         * */
        set: function (value) {
            var a = this.angle;
            this._x = Math.cos(a) * value;
            this._y = Math.sin(a) * value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "lengthSQ", {
        /**
         * Gets the length of this vector, squared.
         **/
        get: function () {
            return this._x * this._x + this._y * this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "angle", {
        get: function () {
            return Math.atan2(this._y, this._x);
        },
        /**
         ** Gets / sets the angle of this vector. Changing the angle changes the x and y but retains the same length.
         */
        set: function (value) {
            var len = this.length;
            this._x = Math.cos(value) * len;
            this._y = Math.sin(value) * len;
        },
        enumerable: true,
        configurable: true
    });
    /**
     **单位化此向量。相当于将长度设置为1，但更有用.
     * @return Vector2D A reference to this vector.
     * */
    Vector2D.prototype.normalize = function () {
        if (this.length == 0) {
            this._x = 1;
            return this;
        }
        var len = this.length;
        this._x /= len;
        this._y /= len;
        return this;
    };
    /**
     ** 确保向量的长度不超过给定值.
     ** @param max The maximum value this vector should be. If length is larger than max, it will be truncated to this value.
     ** @return Vector2D A reference to this vector.
     **/
    Vector2D.prototype.truncate = function (max) {
        this.length = Math.min(max, this.length);
        return this;
    };
    /**
     ** 反转此矢量的方向.
     * @return Vector2D A reference to this vector.
     **/
    Vector2D.prototype.reverse = function () {
        this._x = -this._x;
        this._y = -this._y;
        return this;
    };
    /**
     ** Whether or not this vector is normalized, i.e. its length is equal to one.
     * @return Boolean True if length is one, otherwise false.
     **/
    Vector2D.prototype.isNormalized = function () {
        return this.length == 1.0;
    };
    /**
     * * 计算这个向量和另一个给定向量的点积.
     * * @param v2 Another Vector2D instance.
     * * @return Number The dot product of this vector and the one passed in as a parameter.
     * */
    Vector2D.prototype.dotProd = function (v2) {
        return this._x * v2._x + this._y * v2._y;
    };
    /**
     ** 计算这个向量和另一个给定向量的叉积.
     * @param v2 Another Vector2D instance.
     * @return Number The cross product of this vector and the one passed in as a parameter.
     */
    Vector2D.prototype.crossProd = function (v2) {
        return this._x * v2._y - this._y * v2._x;
    };
    /**
      * 计算两个向量之间的角度.
      * @param v1 第一个vector2d实例.
      * @param v2 第二个vector2d实例.
      * @return number 两个给定向量之间的角度.
      */
    Vector2D.angleBetween = function (v1, v2) {
        if (!v1.isNormalized())
            v1 = v1.clone().normalize();
        if (!v2.isNormalized())
            v2 = v2.clone().normalize();
        return Math.acos(v1.dotProd(v2));
    };
    /**
     ** 确定给定向量是该向量的右边还是左边.
     ** @return number If to the left, returns -1. If to the right, +1.
     **/
    Vector2D.prototype.sign = function (v2) {
        return this.perp.dotProd(v2) < 0 ? -1 : 1;
    };
    Object.defineProperty(Vector2D.prototype, "perp", {
        /**
         * 查找垂直于此向量的向量.
         * @return Vector2D A vector that is perpendicular to this vector.
         */
        get: function () {
            return new Vector2D(-this.y, this.x);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * * Calculates the distance from this vector to another given vector.
     * * @param v2 A Vector2D instance.
     * * @return Number The distance from this vector to the vector passed as a parameter.
     * */
    Vector2D.prototype.dist = function (v2) {
        return Math.sqrt(this.distSQ(v2));
    };
    /**
     * * 算从这个向量到另一个给定向量的距离平方.
     * @param v2 A Vector2D instance.
     * @return number The distance squared from this vector to the vector passed as a parameter.
     */
    Vector2D.prototype.distSQ = function (v2) {
        var dx = v2.x - this.x;
        var dy = v2.y - this.y;
        return dx * dx + dy * dy;
    };
    Vector2D.prototype.add = function (v2) {
        return new Vector2D(this._x + v2.x, this._y + v2.y);
    };
    /**
     * * Subtacts a vector to this vector, creating a new Vector2D instance to hold the result.
     * * @param v2 A Vector2D instance.
     * @return Vector2D A new vector containing the results of the subtraction.
     */
    Vector2D.prototype.subtract = function (v2) {
        return new Vector2D(this._x - v2.x, this._y - v2.y);
    };
    /**
     * * Multiplies this vector by a value, creating a new Vector2D instance to hold the result.
     * * @param v2 A Vector2D instance.
     * * @return Vector2D A new vector containing the results of the multiplication.
     * */
    Vector2D.prototype.multiply = function (value) {
        return new Vector2D(this._x * value, this._y * value);
    };
    /**
     ** Divides this vector by a value, creating a new Vector2D instance to hold the result.
     ** @param v2 A Vector2D instance.
     * @return Vector2D A new vector containing the results of the division.
     */
    Vector2D.prototype.divide = function (value) {
        return new Vector2D(this._x / value, this._y / value);
    };
    /**
     * * Indicates whether this vector and another Vector2D instance are equal in value.
     * @param v2 A Vector2D instance.
     * @return Boolean True if the other vector is equal to this one, false if not.
     */
    Vector2D.prototype.equals = function (v2) {
        return this._x == v2.x && this._y == v2.y;
    };
    Object.defineProperty(Vector2D.prototype, "x", {
        get: function () {
            return this._x;
        },
        /**
         * * Sets / gets the x value of this vector.
         * */
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "y", {
        get: function () {
            return this._y;
        },
        /**
         ** Sets / gets the y value of this vector.
         */
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Vector2D.prototype.toString = function () {
        return "[Vector2D (x:" + this._x + ", y:" + this._y + ")]";
    };
    return Vector2D;
}());
__reflect(Vector2D.prototype, "Vector2D");
//# sourceMappingURL=Vector2D.js.map