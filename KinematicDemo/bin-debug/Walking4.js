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
var Walking4 = (function (_super) {
    __extends(Walking4, _super);
    function Walking4() {
        var _this = _super.call(this) || this;
        _this.cycle = 0;
        _this.offset = -Math.PI / 2;
        return _this;
    }
    Walking4.prototype.init = function () {
        this.segment0 = new Segment(100, 20);
        this.addChild(this.segment0);
        this.segment0.x = 300;
        this.segment0.y = 200;
        this.segment1 = new Segment(100, 20);
        this.addChild(this.segment1);
        this.segment1.x = this.segment0.getPin().x;
        this.segment1.y = this.segment0.getPin().y;
        this.segment2 = new Segment(100, 20);
        this.addChild(this.segment2);
        this.segment2.x = 300;
        this.segment2.y = 200;
        this.segment3 = new Segment(100, 20);
        this.addChild(this.segment3);
        this.segment3.x = this.segment3.getPin().x;
        this.segment3.y = this.segment3.getPin().y;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Walking4.prototype.onEnterFrame = function (even) {
        this.walk(this.segment0, this.segment1, this.cycle);
        this.walk(this.segment2, this.segment3, this.cycle + Math.PI);
        this.cycle += .05;
    };
    Walking4.prototype.walk = function (segA, segB, cycle) {
        var angle0 = Math.sin(cycle) * 45 + 90;
        var angle1 = Math.sin(cycle + this.offset) * 45 + 45;
        segA.rotation = angle0;
        segB.rotation = segA.rotation + angle1;
        segB.x = segA.getPin().x;
        segB.y = segA.getPin().y;
    };
    return Walking4;
}(BaseSprite));
__reflect(Walking4.prototype, "Walking4");
//# sourceMappingURL=Walking4.js.map