class MultiBounce3D extends BaseSprite {
	private balls: Array<Ball3D>;
	private numBalls: number = 50;
	private fl: number = 250;
	private vpX: number = 0;
	private vpY: number = 0;

	private top: number = -100;
	private bottom: number = 100;
	private left: number = -100;
	private right: number = 100;
	private front: number = 100;
	private back: number = -100;

	public constructor() {
		super();
	}

	public init() {
		this.vpX = this.stage.stageWidth / 2;
		this.vpY = this.stage.stageHeight / 2;
		this.balls = [];
		for (let i = 0; i < this.numBalls; i++) {
			let ball = new Ball3D(15);
			this.balls.push(ball);
			ball.vx = Math.random() * 10 - 5;
			ball.vy = Math.random() * 10 - 5;
			ball.vz = Math.random() * 10 - 5;
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
		ball.xpos += ball.vx;
		ball.ypos += ball.vy;
		ball.zpos += ball.vz;
		var radius = ball.radius;
		if (ball.xpos + radius > this.right) {
			ball.xpos = this.right - radius;
			ball.vx *= -1;
		} else if (ball.xpos - radius < this.left) {
			ball.xpos = this.left + radius;
			ball.vx *= -1;
		}
		if (ball.ypos + radius > this.bottom) {
			ball.ypos = this.bottom - radius;
			ball.vy *= -1;
		} else if (ball.ypos - radius < this.top) {
			ball.ypos = this.top + radius;
			ball.vy *= -1;
		}

		if (ball.zpos + radius > this.front) {
			ball.zpos = this.front - radius;
			ball.vz *= -1;
		} else if (ball.zpos - radius < this.back) {
			ball.zpos = this.back + radius;
			ball.vz *= -1;
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