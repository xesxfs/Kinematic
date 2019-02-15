class Rotate3 extends BaseSprite {
	private balls: Array<Ball>;
	private numBalls: number = 10
	private vr: number = .05;
	private cos: number = Math.cos(this.vr);
	private sin: number = Math.sin(this.vr);
	private mouseX: number = 0;
	private mouseY: number = 0;
	public constructor() {
		super();
	}

	public init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.balls = new Array();
		for (let i = 0; i < this.numBalls; i++) {
			var ball = new Ball();
			this.balls.push(ball)
			this.addChild(ball);
			this.randDisplay(ball);
		}
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	private onEnterFrame() {
		var angle: number = (this.mouseX - this.stage.stageWidth / 2) * .001;
		var cos: number = Math.cos(angle);
		var sin: number = Math.sin(angle);
		for (let i = 0; i < this.numBalls; i++) {
			var ball: Ball = this.balls[i];
			var x1: number = ball.x - this.stage.stageWidth / 2;
			var y1: number = ball.y - this.stage.stageHeight / 2;
			var x2: number = cos * x1 - sin * y1;
			var y2: number = cos * y1 + sin * x1;
			ball.x = this.stage.stageWidth / 2 + x2;
			ball.y = this.stage.stageHeight / 2 + y2;
		}
		// var x1: number = this.ball.x - this.stage.stageWidth / 2;
		// var y1: number = this.ball.y - this.stage.stageHeight / 2;
		// var x2: number = this.cos * x1 - this.sin * y1;
		// var y2: number = this.cos * y1 + this.sin * x1;
		// this.ball.x = this.stage.stageWidth / 2 + x2;
		// this.ball.y = this.stage.stageHeight / 2 + y2;
	}
}