class Bubbles extends BaseSprite {

	private centerBall: Ball;
	private balls: Array<Ball> = [];

	private numBalls: number = 10;
	private spring: number = 0.2;
	private bounce: number = -1;


	private mouseX: number = 0;
	private mouseY: number = 0;


	public constructor() {
		super();
	}

	protected init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.centerBall = new Ball(100, 0xcccccc);
		this.setDisplayCenter(this.centerBall);
		this.addChild(this.centerBall);
		for (let i = 0; i < this.numBalls; i++) {
			var ball: Ball = new Ball(Math.random() * 40 + 5, Math.random() * 0xffffff);
			this.randDisplay(ball);
			ball.vx = Math.random() * 60 - 3;
			ball.vy = Math.random() * 60 - 3;
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
		for (let i = 0; i < this.numBalls; i++) {
			var ball: Ball = this.balls[i];
			this.move(ball);
			var dx: number = ball.x - this.centerBall.x;
			var dy: number = ball.y - this.centerBall.y;
			var dist: number = Math.sqrt(dx * dx + dy * dy);
			var minDist: number = ball.radius + this.centerBall.radius;
			if (dist < minDist) {
				var angle = Math.atan2(dy, dx);
				var tx = this.centerBall.x + Math.cos(angle) * minDist;
				var ty = this.centerBall.y + Math.sin(angle) * minDist;
				ball.vx = (tx - ball.x) * this.spring;
				ball.vy = (ty - ball.y) * this.spring;
			}
		}

	}

	private move(ball: Ball) {
		ball.x += ball.vx;
		ball.y += ball.vy;
		if (ball.x + ball.radius > this.stage.stageWidth) {
			ball.x = this.stage.stageWidth - ball.radius;
			ball.vx *= this.bounce;
		} else if (ball.x - ball.radius < 0) {
			ball.x = ball.radius;
			ball.vx *= this.bounce;
		}

		if (ball.y + ball.radius > this.stage.stageHeight) {
			ball.y = this.stage.stageHeight - ball.radius;
			ball.vy *= this.bounce;
		} else if (ball.y - ball.radius < 0) {
			ball.y = ball.radius;
			ball.vy *= this.bounce;
		}
	}

}