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
var Triangles = (function (_super) {
    __extends(Triangles, _super);
    function Triangles() {
        var _this = _super.call(this) || this;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    Triangles.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.points = [];
        this.points[0] = new Point3D(-50, -250, 100);
        this.points[1] = new Point3D(50, -250, 100);
        this.points[2] = new Point3D(200, 250, 100);
        this.points[3] = new Point3D(100, 250, 100);
        this.points[4] = new Point3D(50, 100, 100);
        this.points[5] = new Point3D(-50, 100, 100);
        this.points[6] = new Point3D(-100, 250, 100);
        this.points[7] = new Point3D(-200, 250, 100);
        this.points[8] = new Point3D(0, -150, 100);
        this.points[9] = new Point3D(50, 0, 100);
        this.points[10] = new Point3D(-50, 0, 100);
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            point.setVanishingPoint(this.vpX, this.vpY);
            point.setCenter(0, 0, 200);
        }
        this.triangles = new Array();
        this.triangles[0] = new Triangle(this.points[0], this.points[1], this.points[8], 0xffcccc);
        this.triangles[1] = new Triangle(this.points[1], this.points[9], this.points[8], 0xffcccc);
        this.triangles[2] = new Triangle(this.points[1], this.points[2], this.points[9], 0xffcccc);
        this.triangles[3] = new Triangle(this.points[2], this.points[4], this.points[9], 0xffcccc);
        this.triangles[4] = new Triangle(this.points[2], this.points[3], this.points[4], 0xffcccc);
        this.triangles[5] = new Triangle(this.points[4], this.points[5], this.points[9], 0xffcccc);
        this.triangles[6] = new Triangle(this.points[9], this.points[5], this.points[10], 0xffcccc);
        this.triangles[7] = new Triangle(this.points[5], this.points[6], this.points[7], 0xffcccc);
        this.triangles[8] = new Triangle(this.points[5], this.points[7], this.points[10], 0xffcccc);
        this.triangles[9] = new Triangle(this.points[0], this.points[10], this.points[7], 0xffcccc);
        this.triangles[10] = new Triangle(this.points[0], this.points[8], this.points[10], 0xffcccc);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Triangles.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Triangles.prototype.onEnterFrame = function () {
        var angleY = (this.mouseX - this.vpX) * .001;
        var angleX = (this.mouseY - this.vpY) * .001;
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            point.rotateX(angleX);
            point.rotateY(angleY);
        }
        this.graphics.clear();
        for (var i_1 = 0; i_1 < this.triangles.length; i_1++) {
            this.triangles[i_1].draw(this.graphics);
        }
    };
    return Triangles;
}(BaseSprite));
__reflect(Triangles.prototype, "Triangles");
//# sourceMappingURL=Triangles.js.map