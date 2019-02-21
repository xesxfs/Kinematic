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
var Trees = (function (_super) {
    __extends(Trees, _super);
    function Trees() {
        var _this = _super.call(this) || this;
        _this.numTrees = 10;
        _this.fl = 250;
        _this.vpX = 0;
        _this.vpY = 0;
        _this.floor = 50;
        _this.vz = 0;
        _this.friction = .98;
        return _this;
    }
    Trees.prototype.init = function () {
        this.vpX = this.stage.stageWidth / 2;
        this.vpY = this.stage.stageHeight / 2;
        document.onkeydown = this.onkeyDown.bind(this);
        document.onkeyup = this.onkeyUp.bind(this);
        this.trees = [];
        for (var i = 0; i < this.numTrees; i++) {
            var tree = new Tree();
            this.trees.push(tree);
            tree.xpos = Math.random() * 2000 - 1000;
            tree.ypos = this.floor;
            tree.zpos = Math.random() * 10000;
            this.addChild(tree);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Trees.prototype.onEnterFrame = function () {
        for (var i = 0; i < this.numTrees; i++) {
            var tree = this.trees[i];
            this.move(tree);
        }
        this.vz *= this.friction;
        this.sortZ();
    };
    Trees.prototype.onkeyDown = function (event) {
        switch (event.keyCode) {
            case 38:
                this.vz -= 1;
                break;
            case 40:
                this.vz += 1;
                break;
        }
    };
    Trees.prototype.onkeyUp = function (event) {
    };
    Trees.prototype.move = function (tree) {
        tree.zpos += this.vz;
        if (tree.zpos < -this.fl) {
            tree.zpos += 10000;
        }
        if (tree.zpos > 10000 - this.fl) {
            tree.zpos -= 10000;
        }
        var scale = this.fl / (this.fl + tree.zpos);
        tree.scaleX = tree.scaleY = scale;
        tree.x = this.vpX + tree.xpos * scale;
        tree.y = this.vpY + tree.ypos * scale;
        tree.alpha = scale * .7 + .3;
    };
    Trees.prototype.sortZ = function () {
        this.trees.sort(function (a, b) { return b.zpos - a.zpos; });
        for (var i = 0; i < this.numTrees; i++) {
            var tree = this.trees[i];
            this.setChildIndex(tree, i);
        }
    };
    return Trees;
}(BaseSprite));
__reflect(Trees.prototype, "Trees");
//# sourceMappingURL=Trees.js.map