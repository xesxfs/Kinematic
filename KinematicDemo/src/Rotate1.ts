class Rotate1 extends BaseSprite {
	private ball: Ball;
	private angle: number = 0;
	private radius: number = 150;
	private vr: number = .05;
	public constructor() {
		super();
	}

	public init() {
		this.ball = new Ball();
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}
	
	private onEnterFrame() {
		this.ball.x = this.stage.stageWidth / 2 + Math.cos(this.angle) * this.radius;
		this.ball.y = this.stage.stageHeight / 2 + Math.sin(this.angle) * this.radius;
		this.angle += this.vr;
	}
}