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
var Gravity = (function (_super) {
    __extends(Gravity, _super);
    function Gravity() {
        var _this = _super.call(this) || this;
        _this.numParticles = 30;
        return _this;
    }
    Gravity.prototype.init = function () {
        this.particles = [];
        for (var i = 0; i < this.numParticles; i++) {
            var particle = new Ball(5);
            this.randDisplay(particle);
            particle.mass = 1;
            this.addChild(particle);
            this.particles.push(particle);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Gravity.prototype.onEnterFrame = function () {
        for (var i = 0; i < this.numParticles; i++) {
            var particle = this.particles[i];
            particle.x += particle.vx;
            particle.y += particle.vy;
        }
        for (var i = 0; i < this.numParticles - 1; i++) {
            var partA = this.particles[i];
            for (var j = i + 1; j < this.numParticles; j++) {
                var partB = this.particles[j];
                this.gravitate(partA, partB);
            }
        }
    };
    Gravity.prototype.gravitate = function (partA, partB) {
        var dx = partB.x - partA.x;
        var dy = partB.y - partA.y;
        var distSQ = dx * dx + dy * dy;
        var dist = Math.sqrt(distSQ);
        var force = partA.mass * partB.mass / distSQ;
        var ax = force * dx / dist;
        var ay = force * dy / dist;
        partA.vx += ax / partA.mass;
        partA.vy += ay / partA.mass;
        partB.vx -= ax / partB.mass;
        partB.vy -= ay / partB.mass;
    };
    return Gravity;
}(BaseSprite));
__reflect(Gravity.prototype, "Gravity");
//# sourceMappingURL=Gravity.js.map