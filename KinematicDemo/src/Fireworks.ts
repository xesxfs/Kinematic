class Fireworks extends BaseSprite {
	private balls: Array<Ball3D>;
	private numBalls: number = 100;
	private fl: number = 250;
	private vpX: number = 0;
	private vpY: number = 0;

	private gravity: number = 0.2;
	private floor: number = 200;
	private bounce: number = -0.6;

	public constructor() {
		super();
	}

	public init() {
		this.vpX = this.stage.stageWidth / 2;
		this.vpY = this.stage.stageHeight / 2;
		this.balls = [];
		for (let i = 0; i < this.numBalls; i++) {
			let ball = new Ball3D(3, Math.random() * 0xffffff);
			this.balls.push(ball);
			ball.ypos = -100;
			ball.vx = Math.random() * 6 - 3;
			ball.vy = Math.random() * 6 - 6;
			ball.vz = Math.random() * 6 - 3;
			this.addChild(ball);
		}

		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame() {
		for (let i = 0; i < this.numBalls; i++) {
			let ball = this.balls[i];
			this.move(ball);
		}
		this.sortZ();
	}


	private move(ball: Ball3D) {
		ball.vy += this.gravity;
		ball.xpos += ball.vx;
		ball.ypos += ball.vy;
		ball.zpos += ball.vz;

		if (ball.ypos > this.floor) {
			ball.ypos = this.floor;
			ball.vy *= this.bounce;
		}

		if (ball.zpos > -this.fl) {
			var scale = this.fl / (this.fl + ball.zpos);
			ball.scaleX = ball.scaleY = scale;
			ball.x = this.vpX + ball.xpos * scale;
			ball.y = this.vpY + ball.ypos * scale;
			ball.visible = true;
		} else {
			ball.visible = false;
		}

	}

	public sortZ() {
		this.balls.sort((a: Ball3D, b: Ball3D): number => { return b.zpos - a.zpos });
		for (let i = 0; i < this.numBalls; i++) {
			var ball = this.balls[i];
			this.setChildIndex(ball, i);
		}
	}

}