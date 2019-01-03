class EaseToMouse extends BaseSprite {
	private ball: Ball;
	private easing: number = .2;

	private mouseX: number = 0;
	private mouseY: number = 0;

	public constructor() {
		super();
	}

	protected init() {
		this.ball = new Ball();
		this.addChild(this.ball);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE,this.onMouseMove,this);
		mouse.setMouseMoveEnabled(true);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	

	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	private onEnterFrame() {
		let vx = (this.mouseX - this.ball.x) * this.easing;
		let vy = (this.mouseY - this.ball.y) * this.easing;
		this.ball.x += vx;
		this.ball.y += vy;
	}
}