class Bubbles2 extends BaseSprite {


	private balls: Array<Ball> = [];

	private numBalls: number = 30;
	private spring: number = 0.1;
	private bounce: number = -0.5;
	private gravity: number = 0.1;

	private mouseX: number = 0;
	private mouseY: number = 0;


	public constructor() {
		super();
	}

	protected init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);

		for (let i = 0; i < this.numBalls; i++) {
			var ball: Ball = new Ball(Math.random() * 30 + 20, Math.random() * 0xffffff);
			this.randDisplay(ball);
			ball.vx = Math.random() * 6 - 3;
			ball.vy = Math.random() * 6 - 3;
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

		for (let i = 0; i < this.numBalls - 1; i++) {
			let ball0 = this.balls[i];
			for (let j = 1; j < this.numBalls; j++) {
				let ball1 = this.balls[j];
				var dx = ball1.x - ball0.x;
				var dy = ball1.y - ball0.y;
				var dist = Math.sqrt(dx * dx + dy * dy);
				var minDist = ball0.radius + ball1.radius;
				if (dist < minDist) {
					var angle = Math.atan2(dy, dx);
					var tx = ball0.x + Math.cos(angle) * minDist;
					var ty = ball0.y + Math.sin(angle) * minDist;
					var ax = (tx - ball1.x) * this.spring;
					var ay = (ty - ball1.y) * this.spring;
					ball0.vx -= ax;
					ball0.vy -= ay;
					ball1.vx += ax;
					ball1.vy += ay;
				}
			}
		}
		for (let i = 0; i < this.numBalls; i++) {
			var ball: Ball = this.balls[i];
			this.move(ball);
		}

	}

	private move(ball: Ball) {
		// ball.vy += this.gravity;
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