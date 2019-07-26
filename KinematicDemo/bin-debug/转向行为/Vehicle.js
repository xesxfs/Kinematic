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
var Vehicle = (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        var _this = _super.call(this) || this;
        _this._edgeBehavior = Vehicle.BOUNCE;
        _this._mass = 1.0;
        _this._maxSpeed = 10;
        _this._position = new Vector2D();
        _this._velocity = new Vector2D();
        return _this;
    }
    Vehicle.prototype.init = function () {
        this.draw();
    };
    Vehicle.prototype.draw = function () {
        var graphics = this.graphics;
        graphics.clear();
        graphics.lineStyle(1, 0xffffff);
        graphics.moveTo(10, 0);
        graphics.lineTo(-10, 5);
        graphics.lineTo(-10, -5);
        graphics.lineTo(10, 0);
    };
    /**
     * * Handles all basic motion. Should be called on each frame / timer interval.
     */
    Vehicle.prototype.update = function () {
        // make sure velocity stays within max speed.            
        this._velocity.truncate(this._maxSpeed);
        // add velocity to position             
        this._position = this._position.add(this._velocity);
        // handle any edge behavior             
        if (this._edgeBehavior == Vehicle.WRAP) {
            this.wrap();
        }
        else if (this._edgeBehavior == Vehicle.BOUNCE) {
            this.bounce();
        }
        // update position of sprite     
        this.x = this.position.x;
        this.y = this.position.y;
        // rotate heading to match velocity    
        this.rotation = this._velocity.angle * 180 / Math.PI;
    };
    /**
     * * Causes character to bounce off edge if edge is hit.
     */
    Vehicle.prototype.bounce = function () {
        if (this.stage != null) {
            if (this.position.x > this.stage.stageWidth) {
                this.position.x = this.stage.stageWidth;
                this.velocity.x *= -1;
            }
            else if (this.position.x < 0) {
                this.position.x = 0;
                this.velocity.x *= -1;
            }
            if (this.position.y > this.stage.stageHeight) {
                this.position.y = this.stage.stageHeight;
                this.velocity.y *= -1;
            }
            else if (this.position.y < 0) {
                this.position.y = 0;
                this.velocity.y *= -1;
            }
        }
    };
    /**
     * * Causes character to wrap around to opposite edge if edge is hit.
     * */
    Vehicle.prototype.wrap = function () {
        if (this.stage != null) {
            if (this.position.x > this.stage.stageWidth)
                this.position.x = 0;
            if (this.position.x < 0)
                this.position.x = this.stage.stageWidth;
            if (this.position.y > this.stage.stageHeight)
                this.position.y = 0;
            if (this.position.y < 0)
                this.position.y = this.stage.stageHeight;
        }
    };
    Object.defineProperty(Vehicle.prototype, "edgeBehavior", {
        get: function () {
            return this._edgeBehavior;
        },
        /**
         * * Sets / gets what will happen if character hits edge.
         * */
        set: function (value) {
            this._edgeBehavior = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "mass", {
        get: function () {
            return this._mass;
        },
        /**
         * * Sets / gets mass of character.
         * */
        set: function (value) {
            this._mass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "maxSpeed", {
        get: function () {
            return this._maxSpeed;
        },
        /**
         * * Sets / gets maximum speed of character.
         * */
        set: function (value) {
            this._maxSpeed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "position", {
        get: function () {
            return this._position;
        },
        /**
         * * Sets / gets position of character as a Vector2D.
         * */
        set: function (value) {
            this._position = value;
            this.x = this._position.x;
            this.y = this._position.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "velocity", {
        get: function () {
            return this._velocity;
        },
        /**
         * * Sets / gets velocity of character as a Vector2D.
         */
        set: function (value) {
            this._velocity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "x", {
        /**
         * * Sets x position of character. Overrides Sprite.x to set internal Vector2D position as well.
         * */
        set: function (value) {
            _super.prototype.$setX.call(this, value);
            this._position.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "y", {
        set: function (value) {
            _super.prototype.$setY.call(this, value);
            this._position.y = value;
        },
        enumerable: true,
        configurable: true
    });
    // potential edge behaviors         
    Vehicle.WRAP = "wrap";
    Vehicle.BOUNCE = "bounce";
    return Vehicle;
}(BaseSprite));
__reflect(Vehicle.prototype, "Vehicle");
//# sourceMappingURL=Vehicle.js.map