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
var WorldTest = (function (_super) {
    __extends(WorldTest, _super);
    function WorldTest() {
        var _this = _super.call(this) || this;
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
        _this.world.touchEnabled = true;
        _this.world.addEventListener("touchTap", _this.onWorldClick, _this);
        return _this;
    }
    WorldTest.prototype.onWorldClick = function (event) {
        var box = new DrawnIsoBox(20, Math.random() * 0xffffff, 20);
        var pos = IsoUtils.screenToIso(new egret.Point(event.localX, event.localY));
        pos.x = Math.round(pos.x / 20) * 20;
        pos.y = Math.round(pos.y / 20) * 20;
        pos.z = Math.round(pos.z / 20) * 20;
        box.position = pos;
        this.world.addChildToWorld(box);
    };
    return WorldTest;
}(egret.Sprite));
__reflect(WorldTest.prototype, "WorldTest");
//# sourceMappingURL=WorldTest.js.map