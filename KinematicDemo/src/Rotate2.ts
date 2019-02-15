class Rotate2 extends BaseSprite {
	private ball: Ball;
	private angle: number = 0;
	private radius: number = 150;
	private vr: number = .05;
	private cos: number = Math.cos(this.vr);
	private sin: number = Math.sin(this.vr);
	public constructor() {
		super();
	}

	public init() {
		this.ball = new Ball();
		this.addChild(this.ball);
		this.randDisplay(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame() {
		// this.ball.x = this.stage.stageWidth / 2 + Math.cos(this.angle) * this.radius;
		// this.ball.y = this.stage.stageHeight / 2 + Math.sin(this.angle) * this.radius;
		// this.angle += this.vr;

		var x1: number = this.ball.x - this.stage.stageWidth / 2;
		var y1: number = this.ball.y - this.stage.stageHeight / 2;
		var x2: number = this.cos * x1 - this.sin * y1;
		var y2: number = this.cos * y1 + this.sin * x1;
		this.ball.x = this.stage.stageWidth / 2 + x2;
		this.ball.y = this.stage.stageHeight / 2 + y2;
	}
}