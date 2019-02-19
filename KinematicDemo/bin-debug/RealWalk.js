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
var RealWalk = (function (_super) {
    __extends(RealWalk, _super);
    function RealWalk() {
        var _this = _super.call(this) || this;
        _this.cycle = 0;
        _this.offset = -Math.PI / 2;
        _this.vx = 0;
        _this.vy = 0;
        return _this;
    }
    RealWalk.prototype.init = function () {
        this.segment0 = new Segment(50, 15);
        this.addChild(this.segment0);
        this.segment0.x = 300;
        this.segment0.y = 200;
        this.segment1 = new Segment(50, 15);
        this.addChild(this.segment1);
        this.segment1.x = this.segment0.getPin().x;
        this.segment1.y = this.segment0.getPin().y;
        this.segment2 = new Segment(50, 15);
        this.addChild(this.segment2);
        this.segment2.x = 300;
        this.segment2.y = 200;
        this.segment3 = new Segment(50, 15);
        this.addChild(this.segment3);
        this.segment3.x = this.segment3.getPin().x;
        this.segment3.y = this.segment3.getPin().y;
        this.gravitySlider = new eui.VSlider();
        this.gravitySlider.height = 120;
        this.gravitySlider.minimum = 0;
        this.gravitySlider.maximum = 1;
        this.gravitySlider.value = 0.2;
        this.gravitySlider.snapInterval = .1;
        this.gravitySlider.x = 340;
        this.gravitySlider.y = 200;
        this.addChild(this.gravitySlider);
        this.speedSlider = new eui.VSlider();
        this.speedSlider.height = 120;
        this.speedSlider.minimum = 0;
        this.speedSlider.maximum = 0.3;
        this.speedSlider.value = 0.12;
        this.speedSlider.snapInterval = .03;
        this.speedSlider.x = 380;
        this.speedSlider.y = 200;
        this.addChild(this.speedSlider);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    RealWalk.prototype.onEnterFrame = function (even) {
        this.doVelocity();
        this.walk(this.segment0, this.segment1, this.cycle);
        this.walk(this.segment2, this.segment3, this.cycle + Math.PI);
        this.cycle += this.speedSlider.value;
        this.checkFloor(this.segment1);
        this.checkFloor(this.segment3);
        this.checkWalls();
    };
    RealWalk.prototype.walk = function (segA, segB, cycle) {
        var angle0 = Math.sin(cycle) * 45 + 90;
        var angle1 = Math.sin(cycle + this.offset) * 45 + 45;
        segA.rotation = angle0;
        segB.rotation = segA.rotation + angle1;
        segB.x = segA.getPin().x;
        segB.y = segA.getPin().y;
    };
    RealWalk.prototype.doVelocity = function () {
        this.vy += this.gravitySlider.value;
        this.vx = this.speedSlider.value * 10;
        this.segment0.x += this.vx;
        this.segment0.y += this.vy;
        this.segment2.x += this.vx;
        this.segment2.y += this.vy;
    };
    RealWalk.prototype.checkFloor = function (seg) {
        var yMax = seg.getTransformedBounds(this).bottom;
        if (yMax > this.stage.stageHeight) {
            var dy = yMax - this.stage.stageHeight;
            this.segment0.y -= dy;
            this.segment1.y -= dy;
            this.segment2.y -= dy;
            this.segment3.y -= dy;
            this.vx -= seg.vx;
            this.vy -= seg.vy;
        }
    };
    RealWalk.prototype.checkWalls = function () {
        var w = this.stage.stageWidth + 200;
        if (this.segment0.x > this.stage.stageWidth + 100) {
            this.segment0.x -= w;
            this.segment1.x -= w;
            this.segment2.x -= w;
            this.segment3.x -= w;
        }
        else if (this.segment0.x < -100) {
            this.segment0.x += w;
            this.segment1.x += w;
            this.segment2.x += w;
            this.segment3.x += w;
        }
    };
    return RealWalk;
}(BaseSprite));
__reflect(RealWalk.prototype, "RealWalk");
//# sourceMappingURL=RealWalk.js.map