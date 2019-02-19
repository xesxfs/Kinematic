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
var TwoSegment = (function (_super) {
    __extends(TwoSegment, _super);
    function TwoSegment() {
        return _super.call(this) || this;
    }
    TwoSegment.prototype.init = function () {
        this.segment0 = new Segment(100, 20);
        this.addChild(this.segment0);
        this.segment0.x = 100;
        this.segment0.y = 200;
        this.segment1 = new Segment(100, 20);
        this.addChild(this.segment1);
        this.segment1.x = this.segment0.getPin().x;
        this.segment1.y = this.segment0.getPin().y;
        this.slider0 = new eui.VSlider();
        this.slider0.height = 120;
        this.slider0.width = 20;
        this.slider0.minimum = -90;
        this.slider0.maximum = 90;
        this.addChild(this.slider0);
        this.slider0.x = 320;
        this.slider0.y = 20;
        this.slider1 = new eui.VSlider();
        this.slider1.height = 120;
        this.slider1.width = 20;
        this.slider1.minimum = -90;
        this.slider1.maximum = 90;
        this.addChild(this.slider1);
        this.slider1.x = 360;
        this.slider1.y = 20;
        this.slider0.addEventListener(egret.Event.CHANGE, this.onChange, this);
        this.slider1.addEventListener(egret.Event.CHANGE, this.onChange, this);
    };
    TwoSegment.prototype.onChange = function (even) {
        this.segment0.rotation = this.slider0.value;
        this.segment1.rotation = this.segment0.rotation + this.slider1.value;
        // this.segment1.rotation = this.slider1.value;
        this.segment1.x = this.segment0.getPin().x;
        this.segment1.y = this.segment0.getPin().y;
    };
    return TwoSegment;
}(BaseSprite));
__reflect(TwoSegment.prototype, "TwoSegment");
//# sourceMappingURL=TwoSegment.js.map