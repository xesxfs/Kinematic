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
var MotionTest = (function (_super) {
    __extends(MotionTest, _super);
    function MotionTest() {
        var _this = _super.call(this) || this;
        _this.speed = 5;
        _this.world = new IsoWorld();
        _this.world.x = 1136 / 2;
        _this.world.y = 100;
        _this.addChild(_this.world);
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 20; j++) {
                var tile = new DrawnIsoTile(20, 0xcccccc);
                tile.position = new Point3D(i * 20, 0, j * 20);
                _this.world.addChildToFloor(tile);
            }
        }
        _this.box = new DrawnIsoBox(20, 0xff0000, 20);
        _this.box.x = 200;
        _this.box.z = 200;
        _this.world.addChildToWorld(_this.box);
        _this.touchEnabled = true;
        _this.addEventListener("touchTap", _this.onWorldClick, _this);
        return _this;
    }
    MotionTest.prototype.onWorldClick = function () {
        this.box.vx = Math.random() * 2 - 1;
        this.box.vy = -Math.random() * 2;
        this.box.vz = Math.random() * 2 - 1;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    MotionTest.prototype.onEnterFrame = function (event) {
        this.box.x += this.box.vx;
        this.box.y += this.box.vy;
        this.box.z += this.box.vz;
    };
    return MotionTest;
}(egret.Sprite));
__reflect(MotionTest.prototype, "MotionTest");
//# sourceMappingURL=MotionTest.js.map