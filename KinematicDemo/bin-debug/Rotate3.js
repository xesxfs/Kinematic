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
var Rotate3 = (function (_super) {
    __extends(Rotate3, _super);
    function Rotate3() {
        var _this = _super.call(this) || this;
        _this.numBalls = 10;
        _this.vr = .05;
        _this.cos = Math.cos(_this.vr);
        _this.sin = Math.sin(_this.vr);
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
    }
    Rotate3.prototype.init = function () {
        mouse.setMouseMoveEnabled(true);
        this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
        this.balls = new Array();
        for (var i = 0; i < this.numBalls; i++) {
            var ball = new Ball();
            this.balls.push(ball);
            this.addChild(ball);
            this.randDisplay(ball);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Rotate3.prototype.onMouseMove = function (e) {
        this.mouseX = e.stageX;
        this.mouseY = e.stageY;
    };
    Rotate3.prototype.onEnterFrame = function () {
        var angle = (this.mouseX - this.stage.stageWidth / 2) * .001;
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        for (var i = 0; i < this.numBalls; i++) {
            var ball = this.balls[i];
            var x1 = ball.x - this.stage.stageWidth / 2;
            var y1 = ball.y - this.stage.stageHeight / 2;
            var x2 = cos * x1 - sin * y1;
            var y2 = cos * y1 + sin * x1;
            ball.x = this.stage.stageWidth / 2 + x2;
            ball.y = this.stage.stageHeight / 2 + y2;
        }
        // var x1: number = this.ball.x - this.stage.stageWidth / 2;
        // var y1: number = this.ball.y - this.stage.stageHeight / 2;
        // var x2: number = this.cos * x1 - this.sin * y1;
        // var y2: number = this.cos * y1 + this.sin * x1;
        // this.ball.x = this.stage.stageWidth / 2 + x2;
        // this.ball.y = this.stage.stageHeight / 2 + y2;
    };
    return Rotate3;
}(BaseSprite));
__reflect(Rotate3.prototype, "Rotate3");
//# sourceMappingURL=Rotate3.js.map