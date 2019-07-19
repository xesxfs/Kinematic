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
var IsoTransformTest = (function (_super) {
    __extends(IsoTransformTest, _super);
    function IsoTransformTest() {
        var _this = _super.call(this) || this;
        var p0 = new Point3D(0, 0, 0);
        var p1 = new Point3D(100, 0, 0);
        var p2 = new Point3D(100, 0, 100);
        var p3 = new Point3D(0, 0, 100);
        var sp0 = IsoUtils.isoToScreen(p0);
        var sp1 = IsoUtils.isoToScreen(p1);
        var sp2 = IsoUtils.isoToScreen(p2);
        var sp3 = IsoUtils.isoToScreen(p3);
        var tile = new egret.Sprite();
        tile.x = 200;
        tile.y = 200;
        _this.addChild(tile);
        tile.graphics.lineStyle(2);
        tile.graphics.moveTo(sp0.x, sp0.y);
        tile.graphics.lineTo(sp1.x, sp1.y);
        tile.graphics.lineTo(sp2.x, sp2.y);
        tile.graphics.lineTo(sp3.x, sp3.y);
        tile.graphics.lineTo(sp0.x, sp0.y);
        return _this;
    }
    return IsoTransformTest;
}(egret.Sprite));
__reflect(IsoTransformTest.prototype, "IsoTransformTest");
//# sourceMappingURL=IsoTransformTest.js.map