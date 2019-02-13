class Spring5 extends BaseSprite {
	private ball: Ball;
	private spring: number = .1;
	private mouseX: number = 0;
	private mouseY: number = 0;
	private vx: number = 0;
	private vy: number = 0;
	private friction: number = 0.95;
	private gravity: number = 5;

	public constructor() {
		super();
	}

	protected init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.ball = new Ball();
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	private onEnterFrame() {
		let dx = this.mouseX - this.ball.x;
		let dy = this.mouseY - this.ball.y;
		let ax = dx * this.spring;
		let ay = dy * this.spring;
		this.vx += ax;
		this.vy += ay;
		/**重力速度**/
		this.vy += this.gravity;
		//由于小球每次摇摆时的距离相同，所以速度向量也相同，这样它就会以同样的速度来回摆动；引入摩擦力，衰减速度，摇摆时的距离也就衰减，最终停止
		this.vx *= this.friction;
		this.vy *= this.friction;
		this.ball.x += this.vx;
		this.ball.y += this.vy;

		this.graphics.clear();
		this.graphics.lineStyle(1);
		this.graphics.moveTo(this.ball.x, this.ball.y);
		this.graphics.lineTo(this.mouseX, this.mouseY);
	}
}