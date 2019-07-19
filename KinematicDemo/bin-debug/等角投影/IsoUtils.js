var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var IsoUtils = (function () {
    function IsoUtils() {
    }
    /**
    * 把等角空间中的一个 3D 坐标点转换成屏幕上的 2D 坐标点
    * @参数 pos 是一个 3D 坐标点
    */
    IsoUtils.isoToScreen = function (pos) {
        var screenX = pos.x - pos.z;
        var screenY = pos.y * this.Y_CORRECT + (pos.x + pos.z) * .5;
        return new egret.Point(screenX, screenY);
    };
    /**
    * 把屏幕上的 2D 坐标点转换成等角空间中的一个 3D 坐标点，设 y=0
    * @参数 pos 是一个 2D 坐标点
    */
    IsoUtils.screenToIso = function (point) {
        var xpos = point.y + point.x * .5;
        var ypos = 0;
        var zpos = point.y - point.x * .5;
        return new Point3D(xpos, ypos, zpos);
    };
    // 1.2247 的精确计算版本
    IsoUtils.Y_CORRECT = Math.cos(-Math.PI / 6) * Math.SQRT2;
    return IsoUtils;
}());
__reflect(IsoUtils.prototype, "IsoUtils");
//# sourceMappingURL=IsoUtils.js.map