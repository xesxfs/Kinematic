class Easing1 extends BaseSprite {
	private ball: Ball;
	private easing: number = .2;
	private targetX: number;
	private targetY: number;

	public constructor() {
		super();
	}

	protected init() {
		this.ball = new Ball();
		this.targetX = this.stage.stageWidth / 2;
		this.targetY = this.stage.stageHeight / 2;
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame() {
		let vx = (this.targetX - this.ball.x) * this.easing;
		let vy = (this.targetY - this.ball.y) * this.easing;
		this.ball.x += vx;
		this.ball.y += vy;
	}
}