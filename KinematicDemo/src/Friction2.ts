class Friction2 extends BaseSprite {
	private ball: Ball;
	private vx: number;
	private vy: number;
	private friction: number = 0.9;
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
		// let speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
		// let angle = Math.atan2(this.vy, this.vx);
		// if (speed > this.friction) {
		// 	speed -= this.friction;
		// } else {
		// 	speed = 0;
		// }
		// this.vx = Math.cos(angle) * speed;
		// this.vy = Math.sin(angle) * speed;
		this.vx *= this.friction;
		this.vy *= this.friction;
		this.ball.x += this.vx;
		this.ball.y += this.vy;

	}
}