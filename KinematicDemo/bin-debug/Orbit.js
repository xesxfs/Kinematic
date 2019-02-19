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
var Orbit = (function (_super) {
    __extends(Orbit, _super);
    function Orbit() {
        var _this = _super.call(this) || this;
        _this.numParticles = 2;
        return _this;
    }
    Orbit.prototype.init = function () {
        this.particles = [];
        for (var i = 0; i < this.numParticles; i++) {
            var size = Math.random() * 25 + 5;
            var particle = new Ball(size);
            this.randDisplay(particle);
            // particle.mass = size;
            particle.vx = Math.random() * 6 - 3;
            particle.vy = Math.random() * 6 - 3;
            this.addChild(particle);
            this.particles.push(particle);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Orbit.prototype.onEnterFrame = function () {
        for (var i = 0; i < this.numParticles; i++) {
            var particle = this.particles[i];
            particle.x += particle.vx;
            particle.y += particle.vy;
        }
        for (var i = 0; i < this.numParticles - 1; i++) {
            var partA = this.particles[i];
            for (var j = i + 1; j < this.numParticles; j++) {
                var partB = this.particles[j];
            }
        }
    };
    return Orbit;
}(BaseSprite));
__reflect(Orbit.prototype, "Orbit");
//# sourceMappingURL=Orbit.js.map