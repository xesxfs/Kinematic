class MultiSpring extends BaseSprite {

	private ball: Ball;
	private handles: Array<Ball> = [];
	private spring: number = 0.1;
	private friction: number = 0.8;
	private gravity: number = 5;

	private mouseX: number = 0;
	private mouseY: number = 0;
	private numHandles: number = 4;

	public constructor() {
		super();
	}

	protected init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.ball = new Ball();
		this.addChild(this.ball);
		for (let i = 0; i < this.numHandles; i++) {
			let handle = new Ball(10, 0x0000fff);
			handle.x = Math.random() * this.stage.stageWidth;
			handle.y = Math.random() * this.stage.stageHeight;

			this.addChild(handle);
			this.handles.push(handle);
		}

		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	private onEnterFrame() {
		for (let i = 0; i < this.numHandles; i++) {
			this.ball.vx += (this.handles[i].x - this.ball.x) * this.spring;
			this.ball.vy += (this.handles[i].y - this.ball.y) * this.spring;
		}

		// this.ball.vy += this.gravity;
		this.ball.vx *= this.friction;
		this.ball.vx *= this.friction;
		this.ball.x += this.ball.vx;
		this.ball.y += this.ball.vy;

		this.graphics.clear();
		this.graphics.lineStyle(1);
		for (let i = 0; i < this.numHandles; i++) {
			this.graphics.moveTo(this.ball.x,this.ball.y);
			this.graphics.lineTo(this.handles[i].x,this.handles[i].y);
		}

	}


}