class Spring3 extends BaseSprite {
	private ball: Ball;
	private spring: number = .1;
	private targetX: number;
	private targetY: number;
	private vx: number = 50;
	private vy: number = 0;
	private friction: number = 0.95;
	public constructor() {
		super();
	}

	protected init() {
		this.targetX = this.stage.stageWidth / 2;
		this.targetY = this.stage.stageHeight / 2;
		this.ball = new Ball();
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame() {
		let dx = this.targetX - this.ball.x;
		let dy = this.targetY - this.ball.y;
		let ax = dx * this.spring;
		let ay = dy * this.spring;
		this.vx += ax;
		this.vy += ay;
		//由于小球每次摇摆时的距离相同，所以速度向量也相同，这样它就会以同样的速度来回摆动；引入摩擦力，衰减速度，摇摆时的距离也就衰减，最终停止
		this.vx *= this.friction;
		this.vy *= this.friction;
		this.ball.x += this.vx;
		this.ball.y += this.vy;
	}
}