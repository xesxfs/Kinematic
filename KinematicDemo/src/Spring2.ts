class Spring2 extends BaseSprite {
	private ball: Ball;
	private spring: number = .1;
	private targetX: number;
	private vx: number = 0;
	private friction: number = 0.95;
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
		//由于小球每次摇摆时的距离相同，所以速度向量也相同，这样它就会以同样的速度来回摆动；引入摩擦力，衰减速度，摇摆时的距离也就衰减，最终停止
		this.vx *= this.friction;
		this.ball.x += this.vx;
	}
}