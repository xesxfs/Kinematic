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
var BaseSprite = (function (_super) {
    __extends(BaseSprite, _super);
    function BaseSprite() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    BaseSprite.prototype.init = function () {
    };
    BaseSprite.prototype.setDisplayCenter = function (display) {
        display.x = this.stage.stageWidth / 2;
        display.y = this.stage.stageHeight / 2;
    };
    return BaseSprite;
}(egret.Sprite));
__reflect(BaseSprite.prototype, "BaseSprite");
//# sourceMappingURL=BaseSprite.js.map