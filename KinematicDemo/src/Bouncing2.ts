class Bouncing2 extends BaseSprite {
	private ball: Ball;
	private vx: number;
	private vy: number;
	/**弹力系数**/
	private bounce: number = -0.7;
	public constructor() {
		super();
	}

	protected init() {
		this.ball = new Ball();
		this.setDisplayCenter(this.ball);
		this.vx = Math.random() * 10 - 5;
		this.vy = Math.random() * 10 - 5;
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame() {
		let ball = this.ball;
		this.ball.x += this.vx;
		this.ball.y += this.vy;
		let left = 0;
		let right = this.stage.stageWidth;
		let top = 0;
		let bottom = this.stage.stageHeight;
		this.graphics.clear();
		this.graphics.beginFill(0);
		this.graphics.drawRect(left,left,right,bottom);
		this.graphics.endFill();
		if (ball.x + ball.radius > right) {
			ball.x = right - ball.radius;
			this.vx *= this.bounce;
		}
		else if (ball.x - ball.radius < left) {
			ball.x = left + ball.radius;
			this.vx *= this.bounce;
		}


		if (ball.y + ball.radius > bottom) {
			ball.y = bottom - ball.radius;
			this.vy *= this.bounce;
		}
		else if (ball.y - ball.radius < top) {
			ball.y = top + ball.radius;
			this.vy *= this.bounce;
		}

	}
}