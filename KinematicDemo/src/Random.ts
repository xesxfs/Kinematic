class Random extends BaseSprite {
	private ball: Ball;
	private angleX: number = 0;
	private angleY: number = 0;
	private centerX: number = 600;
	private centerY: number = 200;
	private range: number = 150;
	private xspeed: number = .07;
	private yspeed: number = .11;
	public constructor() {
		super();
	}

	protected init() {
		this.ball = new Ball();
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame(e: egret.Event) {
		this.ball.x = this.centerX + Math.sin(this.angleX) * this.range;
		this.ball.y = this.centerY + Math.sin(this.angleY) * this.range;
		this.angleX += this.xspeed;
		this.angleY += this.yspeed;
	}
}