class Spring1 extends BaseSprite {
	private ball: Ball;
	private spring: number = .1;
	private targetX: number;
	private vx: number = 0;
	public constructor() {
		super();
	}

	protected init() {
		this.targetX = this.stage.stageWidth / 2;
		this.ball = new Ball();
		this.addChild(this.ball);
		this.ball.y = this.stage.stageHeight / 2;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame() {
		let dx = this.targetX - this.ball.x;
		let ax = dx * this.spring;
		this.vx += ax;
		this.ball.x += this.vx;
	}
}