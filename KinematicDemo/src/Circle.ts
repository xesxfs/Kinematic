class Circle extends BaseSprite {
	private ball: Ball;
	private centerX: number = 200;
	private centerY: number = 200;
	private radius: number = 150;
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

	protected onEnterFrame() {
		this.ball.x = this.centerX + Math.cos(this.angle) * this.radius;
		this.ball.y = this.centerY + Math.sin(this.angle) * this.radius;
		this.angle += this.speed;
	}
}