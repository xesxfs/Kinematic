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
var DepthTest = (function (_super) {
    __extends(DepthTest, _super);
    function DepthTest() {
        var _this = _super.call(this) || this;
        _this.objectList = [];
        _this.world = new egret.Sprite();
        _this.world.x = 1136 / 2;
        _this.world.y = 100;
        _this.addChild(_this.world);
        var c = 20;
        var s = 20;
        for (var i = 0; i < c; i++) {
            for (var j = 0; j < c; j++) {
                var tile = new DrawnIsoTile(s, 0xcccccc);
                tile.position = new Point3D(i * s, 0, j * s);
                _this.world.addChild(tile);
                _this.objectList.push(tile);
            }
        }
        _this.world.touchEnabled = true;
        _this.world.addEventListener("touchTap", _this.onWorldClick, _this);
        return _this;
    }
    DepthTest.prototype.onWorldClick = function (event) {
        var box = new DrawnIsoBox(20, Math.random() * 0xffffff, 20);
        var pos = IsoUtils.screenToIso(new egret.Point(event.localX, event.localY));
        pos.x = Math.round(pos.x / 20) * 20;
        pos.y = Math.round(pos.y / 20) * 20;
        pos.z = Math.round(pos.z / 20) * 20;
        box.position = pos;
        this.world.addChild(box);
        this.sortList();
    };
    DepthTest.prototype.sortList = function () {
        this.objectList.sort(function (a, b) {
            return a.depth - b.depth;
        });
        for (var i = 0; i < this.objectList.length; i++) {
            this.world.setChildIndex(this.objectList[i], i);
        }
    };
    return DepthTest;
}(egret.Sprite));
__reflect(DepthTest.prototype, "DepthTest");
//# sourceMappingURL=DepthTest.js.map