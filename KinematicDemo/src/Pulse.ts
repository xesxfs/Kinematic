class Pulse extends BaseSprite {
	private ball: Ball;
	private angle: number = 0;
	private speed: number = .1;
	private range: number = .5;
	private centerScale: number = 1;
	public constructor() {
		super();
	}

	protected init() {
		this.ball = new Ball();
		this.addChild(this.ball);
		this.setDisplayCenter(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame(e: egret.Event) {
		this.ball.scaleX = this.ball.scaleY = this.centerScale + Math.sin(this.angle) * this.range;
		this.angle += this.speed;
	}
}