class Bounce3D extends BaseSprite {
	private ball: Ball;
	private xpos: number = 0;
	private ypos: number = 0;
	private zpos: number = 0;
	private fl: number = 250;
	private vpX: number = 0;
	private vpY: number = 0;

	private vx: number = Math.random() * 10 - 5;
	private vy: number = Math.random() * 10 - 5;
	private vz: number = Math.random() * 10 - 5;

	private friction: number = .98;
	private mouseX: number = 0;
	private mouseY: number = 0;

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
		mouse.setMouseMoveEnabled(true);
		// document.onkeydown = this.onkeyDown.bind(this);
		// document.onkeyup = this.onkeyUp.bind(this);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.ball = new Ball(15);
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame() {
		this.xpos += this.vx;
		this.ypos += this.vy;
		this.zpos += this.vz;
		var radius = this.ball.radius;
		if (this.xpos + radius > this.right) {
			this.xpos = this.right - radius;
			this.vx *= -1;
		} else if (this.xpos - radius < this.left) {
			this.xpos = this.left + radius;
			this.vx *= -1;
		}
		if (this.ypos + radius > this.bottom) {
			this.ypos = this.bottom - radius;
			this.vy *= -1;
		} else if (this.ypos - radius < this.top) {
			this.ypos = this.top + radius;
			this.vy *= -1;
		}

		if (this.zpos + radius > this.front) {
			this.zpos = this.front - radius;
			this.vz *= -1;
		} else if (this.zpos - radius < this.back) {
			this.zpos = this.back + radius;
			this.vz *= -1;
		}


		if (this.zpos > -this.fl) {
			// this.xpos = this.mouseX - this.vpX;
			// this.ypos = this.mouseY - this.vpY;
			var scale = this.fl / (this.fl + this.zpos);
			this.ball.scaleX = this.ball.scaleY = scale;
			this.ball.x = this.vpX + this.xpos * scale;
			this.ball.y = this.vpY + this.ypos * scale;
			this.ball.visible = true;
		} else {
			this.ball.visible = false;
		}
	}
	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

}