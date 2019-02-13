class Chain extends BaseSprite {


	private balls: Array<Ball> = [];
	private spring: number = 0.1;
	private friction: number = 0.8;
	private gravity: number = 5;

	private mouseX: number = 0;
	private mouseY: number = 0;
	private numBall: number = 8;

	public constructor() {
		super();
	}

	protected init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		for (let i = 0; i < this.numBall; i++) {
			let ball = new Ball();
			this.addChild(ball);
			this.balls.push(ball);
		}

		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	private onEnterFrame() {

		this.graphics.clear();
		this.graphics.lineStyle(1);
		this.graphics.moveTo(this.mouseX, this.mouseY);
		this.moveBall(this.balls[0], this.mouseX, this.mouseY);
		this.graphics.lineTo(this.balls[0].x, this.balls[0].y);

		for (let i = 1; i < this.balls.length; i++) {
			var ballA = this.balls[i - 1];
			var ballB = this.balls[i];
			this.moveBall(ballB, ballA.x, ballA.y);
			this.graphics.lineTo(ballB.x, ballB.y);
		}


	}

	private moveBall(ball: Ball, targetX: number, targetY: number) {
		ball.vx += (targetX - ball.x) * this.spring;
		ball.vy += (targetY - ball.y) * this.spring;
		ball.vy += this.gravity;
		ball.vx *= this.friction;
		ball.vy *= this.friction;
		ball.x += ball.vx;
		ball.y += ball.vy;
	}
}