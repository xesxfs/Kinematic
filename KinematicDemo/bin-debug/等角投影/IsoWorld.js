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
var IsoWorld = (function (_super) {
    __extends(IsoWorld, _super);
    function IsoWorld() {
        var _this = _super.call(this) || this;
        _this._floor = new egret.Sprite();
        _this.addChild(_this._floor);
        _this._world = new egret.Sprite();
        _this.addChild(_this._world);
        _this._objects = new Array();
        return _this;
    }
    IsoWorld.prototype.addChildToWorld = function (child) {
        this._world.addChild(child);
        this._objects.push(child);
        this.sort();
    };
    IsoWorld.prototype.addChildToFloor = function (child) {
        this._floor.addChild(child);
    };
    IsoWorld.prototype.sort = function () {
        this._objects.sort(function (a, b) {
            return a.depth - b.depth;
        });
        for (var i = 0; i < this._objects.length; i++) {
            this._world.addChildAt(this._objects[i], i);
        }
    };
    return IsoWorld;
}(egret.Sprite));
__reflect(IsoWorld.prototype, "IsoWorld");
//# sourceMappingURL=IsoWorld.js.map