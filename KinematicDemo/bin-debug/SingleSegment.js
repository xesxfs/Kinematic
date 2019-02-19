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
var SingleSegment = (function (_super) {
    __extends(SingleSegment, _super);
    function SingleSegment() {
        return _super.call(this) || this;
    }
    SingleSegment.prototype.init = function () {
        this.segment = new Segment(100, 20);
        this.addChild(this.segment);
        this.segment.x = 100;
        this.segment.y = 200;
        this.slider = new eui.HSlider();
        this.slider.height = 10;
        this.slider.width = 100;
        this.slider.minimum = -90;
        this.slider.maximum = 90;
        this.addChild(this.slider);
        this.slider.x = 300;
        this.slider.y = 20;
        this.slider.addEventListener(egret.Event.CHANGE, this.onChange, this);
    };
    SingleSegment.prototype.onChange = function (even) {
        this.segment.rotation = this.slider.value;
    };
    return SingleSegment;
}(BaseSprite));
__reflect(SingleSegment.prototype, "SingleSegment");
//# sourceMappingURL=SingleSegment.js.map