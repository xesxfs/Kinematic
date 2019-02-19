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
var Walking3 = (function (_super) {
    __extends(Walking3, _super);
    function Walking3() {
        var _this = _super.call(this) || this;
        _this.cycle = 0;
        _this.offset = -Math.PI / 2;
        return _this;
    }
    Walking3.prototype.init = function () {
        this.segment0 = new Segment(100, 20);
        this.addChild(this.segment0);
        this.segment0.x = 300;
        this.segment0.y = 200;
        this.segment1 = new Segment(100, 20);
        this.addChild(this.segment1);
        this.segment1.x = this.segment0.getPin().x;
        this.segment1.y = this.segment0.getPin().y;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Walking3.prototype.onEnterFrame = function (even) {
        this.cycle += .05;
        var angle0 = Math.sin(this.cycle) * 45 + 90;
        var angle1 = Math.sin(this.cycle + this.offset) * 45 + 45;
        this.segment0.rotation = angle0;
        this.segment1.rotation = this.segment0.rotation + angle1;
        this.segment1.x = this.segment0.getPin().x;
        this.segment1.y = this.segment0.getPin().y;
    };
    return Walking3;
}(BaseSprite));
__reflect(Walking3.prototype, "Walking3");
//# sourceMappingURL=Walking3.js.map