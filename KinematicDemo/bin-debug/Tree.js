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
var Tree = (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = _super.call(this) || this;
        _this.xpos = 0;
        _this.ypos = 0;
        _this.zpos = 0;
        return _this;
    }
    Tree.prototype.init = function () {
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.lineTo(0, -140 - Math.random() * 20);
        this.graphics.moveTo(0, -30 - Math.random() * 30);
        this.graphics.lineTo(Math.random() * 80 - 40, -100 - Math.random() * 40);
        this.graphics.moveTo(0, -60 - Math.random() * 40);
        this.graphics.lineTo(Math.random() * 60 - 30, -110 - Math.random() * 20);
    };
    return Tree;
}(BaseSprite));
__reflect(Tree.prototype, "Tree");
//# sourceMappingURL=Tree.js.map