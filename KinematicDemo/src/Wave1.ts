class Wave1 extends BaseSprite {
	private ball: Ball;
	private angle: number = 0;
	private range: number = 150;
	private centerY: number = 200;
	private xSpeed: number = 1;
	private ySpeed: number = .1;
	public constructor() {
		super();
	}

	protected init() {
		this.ball = new Ball();
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame() {
		this.ball.x += this.xSpeed;
		this.ball.y = this.centerY + Math.sin(this.angle) * this.range;
		this.angle += this.ySpeed;
	}
}