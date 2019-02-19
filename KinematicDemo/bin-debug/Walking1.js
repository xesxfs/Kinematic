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
var Walking1 = (function (_super) {
    __extends(Walking1, _super);
    function Walking1() {
        var _this = _super.call(this) || this;
        _this.cycle = 0;
        return _this;
    }
    Walking1.prototype.init = function () {
        this.segment0 = new Segment(100, 20);
        this.addChild(this.segment0);
        this.segment0.x = 100;
        this.segment0.y = 200;
        this.segment1 = new Segment(100, 20);
        this.addChild(this.segment1);
        this.segment1.x = this.segment0.getPin().x;
        this.segment1.y = this.segment0.getPin().y;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Walking1.prototype.onEnterFrame = function (even) {
        this.cycle += .05;
        var angle = Math.sin(this.cycle) * 90;
        this.segment0.rotation = angle;
        this.segment1.rotation = this.segment0.rotation + angle;
        this.segment1.x = this.segment0.getPin().x;
        this.segment1.y = this.segment0.getPin().y;
    };
    return Walking1;
}(BaseSprite));
__reflect(Walking1.prototype, "Walking1");
//# sourceMappingURL=Walking1.js.map