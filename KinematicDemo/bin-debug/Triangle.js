var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Triangle = (function () {
    function Triangle(a, b, c, color) {
        this.pointA = a;
        this.pointB = b;
        this.pointC = c;
        this.color = color;
    }
    Triangle.prototype.draw = function (g) {
        g.beginFill(this.color, .5);
        g.moveTo(this.pointA.screenX, this.pointA.screenY);
        g.lineTo(this.pointB.screenX, this.pointB.screenY);
        g.lineTo(this.pointC.screenX, this.pointC.screenY);
        g.lineTo(this.pointA.screenX, this.pointA.screenY);
        g.endFill();
    };
    return Triangle;
}());
__reflect(Triangle.prototype, "Triangle");
//# sourceMappingURL=Triangle.js.map