class Lines3D1 extends BaseSprite {
	private balls: Array<Ball3D>;
	private numBalls: number = 50;
	private easing: number = .1;
	private fl: number = 250;
	private vpX: number = 0;
	private vpY: number = 0;
	private mouseX: number = 0;
	private mouseY: number = 0;
	public constructor() {
		super();
	}

	public init() {
		this.vpX = this.stage.stageWidth / 2;
		this.vpY = this.stage.stageHeight / 2;
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.balls = [];
		for (let i = 0; i < this.numBalls; i++) {
			var ball = new Ball3D(0, 0);
			this.balls.push(ball);
			ball.xpos = Math.random() * 200 - 100;
			ball.ypos = Math.random() * 200 - 100;
			ball.zpos = Math.random() * 200 - 100;
			this.addChild(ball);
		}
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	public onEnterFrame() {
		var angleY: number = (this.mouseX - this.vpX) * .001;
		var angleX: number = (this.mouseY - this.vpY) * .001;
		for (var i = 0; i < this.numBalls; i++) {
			var ball: Ball3D = this.balls[i];
			this.rotateY(ball, angleY);
			this.rotateX(ball, angleX);
			this.doPerspective(ball);
		}
		this.graphics.clear();
		this.graphics.lineStyle(1);
		this.graphics.moveTo(this.balls[0].x, this.balls[0].y);
		for (let i = 1; i < this.numBalls; i++) {
			this.graphics.lineTo(this.balls[i].x, this.balls[i].y);
		}
	}


	private rotateY(ball: Ball3D, angleY: number): void {
		var cosY: number = Math.cos(angleY);
		var sinY: number = Math.sin(angleY);
		var x1: number = ball.xpos * cosY - ball.zpos * sinY;
		var z1: number = ball.zpos * cosY + ball.xpos * sinY;
		ball.xpos = x1;
		ball.zpos = z1;

	}

	private rotateX(ball: Ball3D, angleX: number): void {
		var cosX: number = Math.cos(angleX);
		var sinX: number = Math.sin(angleX);
		var y1: number = ball.ypos * cosX - ball.zpos * sinX;
		var z1: number = ball.zpos * cosX + ball.ypos * sinX;
		ball.ypos = y1;
		ball.zpos = z1;

	}

	private doPerspective(ball: Ball3D): void {
		if (ball.zpos > -this.fl) {
			var scale: number = this.fl / (this.fl + ball.zpos);
			ball.scaleX = ball.scaleY = scale;
			ball.x = this.vpX + ball.xpos * scale;
			ball.y = this.vpY + ball.ypos * scale;
			ball.visible = true;
		} else {
			ball.visible = false;
		}
	}


	private sortZ(): void {
		this.balls.sort((a: Ball3D, b: Ball3D): number => { return b.zpos - a.zpos });
		for (let i = 0; i < this.numBalls; i++) {
			var ball = this.balls[i];
			this.setChildIndex(ball, i);
		}
	}
}