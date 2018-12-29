class Oval extends BaseSprite {
	private ball: Ball;
	private centerY: number = 200;
	private centerX: number = 600;
	private radiusx: number = 200;
	private radiusy: number = 100;
	private angle: number = 0;
	private speed: number = .1;
	public constructor() {
		super();
	}

	protected init() {
		this.ball = new Ball();
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame(e: egret.Event) {
		this.ball.x = this.centerX + Math.cos(this.angle) * this.radiusx;
		this.ball.y = this.centerY + Math.sin(this.angle) * this.radiusy;
		this.angle += this.speed
	}
}