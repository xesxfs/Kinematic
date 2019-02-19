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
var NodeGarden = (function (_super) {
    __extends(NodeGarden, _super);
    function NodeGarden() {
        var _this = _super.call(this) || this;
        _this.numParticles = 50;
        _this.springAmount = .0025;
        _this.minDist = 100;
        return _this;
    }
    NodeGarden.prototype.init = function () {
        this.particles = [];
        for (var i = 0; i < this.numParticles; i++) {
            var size = Math.random() * 10 + 2;
            var particle = new Ball(size, 0xffffff);
            this.randDisplay(particle);
            particle.vy = Math.random() * 6 - 3;
            particle.vx = Math.random() * 6 - 3;
            particle.mass = size;
            this.addChild(particle);
            this.particles.push(particle);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    NodeGarden.prototype.onEnterFrame = function () {
        this.graphics.clear();
        for (var i = 0; i < this.numParticles; i++) {
            var particle = this.particles[i];
            particle.x += particle.vx;
            particle.y += particle.vy;
            if (particle.x > this.stage.stageWidth) {
                particle.x = 0;
            }
            else if (particle.x < 0) {
                particle.x = this.stage.stageWidth;
            }
            if (particle.y > this.stage.stageHeight) {
                particle.y = 0;
            }
            else if (particle.y < 0) {
                particle.y = this.stage.stageHeight;
            }
        }
        for (var i = 0; i < this.numParticles - 1; i++) {
            var partA = this.particles[i];
            for (var j = i + 1; j < this.numParticles; j++) {
                var partB = this.particles[j];
                this.spring(partA, partB);
            }
        }
    };
    NodeGarden.prototype.spring = function (partA, partB) {
        var dx = partB.x - partA.x;
        var dy = partB.y - partA.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.minDist) {
            this.graphics.lineStyle(1, 0xffffff, 1 - dist / this.minDist);
            this.graphics.moveTo(partA.x, partA.y);
            this.graphics.lineTo(partB.x, partB.y);
            var ax = dx * this.springAmount;
            var ay = dy * this.springAmount;
            partA.vx += ax / partA.mass;
            partA.vy += ay / partA.mass;
            partB.vx -= ax / partB.mass;
            partB.vy -= ay / partB.mass;
        }
    };
    return NodeGarden;
}(BaseSprite));
__reflect(NodeGarden.prototype, "NodeGarden");
//# sourceMappingURL=NodeGarden.js.map