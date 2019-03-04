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
var Cube = (function (_super) {
    __extends(Cube, _super);
    function Cube() {
        var _this = _super.call(this) || this;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    Cube.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.points = [];
        this.points[0] = new Point3D(-100, -100, -100);
        this.points[1] = new Point3D(100, -100, -100);
        this.points[2] = new Point3D(100, 100, -100);
        this.points[3] = new Point3D(-100, 100, -100);
        this.points[4] = new Point3D(-100, -100, 100);
        this.points[5] = new Point3D(100, -100, 100);
        this.points[6] = new Point3D(100, 100, 100);
        this.points[7] = new Point3D(-100, 100, 100);
        for (var i = 0; i < this.points.length; i++) {
            var point = this.points[i];
            point.setVanishingPoint(this.vpX, this.vpY);
            point.setCenter(0, 0, 200);
        }
        this.triangles = new Array();
        // front
        this.triangles[0] = new Triangle(this.points[0], this.points[1], this.points[2], 0x6666cc);
        this.triangles[1] = new Triangle(this.points[0], this.points[2], this.points[3], 0x6666cc); // top
        this.triangles[2] = new Triangle(this.points[0], this.points[5], this.points[1], 0x66cc66);
        this.triangles[3] = new Triangle(this.points[0], this.points[4], this.points[5], 0x66cc66); //back
        this.triangles[4] = new Triangle(this.points[4], this.points[6], this.points[5], 0xcc6666);
        this.triangles[5] = new Triangle(this.points[4], this.points[7], this.points[6], 0xcc6666); // bottom
        this.triangles[6] = new Triangle(this.points[3], this.points[2], this.points[6], 0xcc66cc);
        this.triangles[7] = new Triangle(this.points[3], this.points[6], this.points[7], 0xcc66cc); // right
        this.triangles[8] = new Triangle(this.points[1], this.points[5], this.points[6], 0x66cccc);
        this.triangles[9] = new Triangle(this.points[1], this.points[6], this.points[2], 0x66cccc); // left
        this.triangles[10] = new Triangle(this.points[4], this.points[0], this.points[3], 0xcccc66);
        this.triangles[11] = new Triangle(this.points[4], this.points[3], this.points[7], 0xcccc66);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Cube.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Cube.prototype.onEnterFrame = function () {
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
    return Cube;
}(BaseSprite));
__reflect(Cube.prototype, "Cube");
//# sourceMappingURL=Cube.js.map