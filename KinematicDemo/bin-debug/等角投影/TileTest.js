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
var TileTest = (function (_super) {
    __extends(TileTest, _super);
    function TileTest() {
        var _this = _super.call(this) || this;
        var world = new egret.Sprite();
        world.x = 1136 / 2;
        world.y = 100;
        _this.addChild(world);
        var c = 10;
        var s = 50;
        for (var i = 0; i < c; i++) {
            for (var j = 0; j < c; j++) {
                var tile = new DrawnIsoTile(s, 0xcccccc);
                tile.position = new Point3D(i * s, 0, j * s);
                world.addChild(tile);
            }
        }
        return _this;
    }
    return TileTest;
}(egret.Sprite));
__reflect(TileTest.prototype, "TileTest");
//# sourceMappingURL=TileTest.js.map