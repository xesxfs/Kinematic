class Velocity3D extends BaseSprite {
	private ball: Ball;
	private xpos: number = 0;
	private ypos: number = 0;
	private zpos: number = 0;
	private fl: number = 250;
	private vpX: number = 0;
	private vpY: number = 0;

	private vx: number = 0;
	private vy: number = 0;
	private vz: number = 0;

	private friction: number = .98;
	private mouseX: number = 0;
	private mouseY: number = 0;
	public constructor() {
		super();
	}

	public init() {
		this.vpX = this.stage.stageWidth / 2;
		this.vpY = this.stage.stageHeight / 2;
		mouse.setMouseMoveEnabled(true);
		document.onkeydown = this.onkeyDown.bind(this);
		document.onkeyup = this.onkeyUp.bind(this);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.ball = new Ball();
		this.addChild(this.ball);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame() {
		this.xpos += this.vx;
		this.ypos += this.vy;
		this.zpos += this.vz;

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

	private onkeyDown(event: KeyboardEvent) {
		switch (event.keyCode) {
			case 37:
				this.vx -= 1;
				break;
			case 38:
				this.vy -= 1;
				break;
			case 39:
				this.vx += 1
				break;
			case 40:
				this.vy += 1;
				break;
			case 16:
				this.vz += 1
				break;
			case 17:
				this.vz -= 1;
				break;



		}
		if (event.keyCode == 38) {
			this.zpos += 5;
		}

		if (event.keyCode == 40) {
			this.zpos -= 5;
		}


	}

	private onkeyUp(event: KeyboardEvent) {

	}
}