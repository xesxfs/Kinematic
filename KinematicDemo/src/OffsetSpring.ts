class OffsetSpring extends BaseSprite {

	private ball: Ball;

	private spring: number = 0.1;
	private friction: number = 0.8;


	private mouseX: number = 0;
	private mouseY: number = 0;
	private springLength: number = 100;

	public constructor() {
		super();
	}

	protected init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.ball = new Ball();
		this.addChild(this.ball);


		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	private onEnterFrame() {
		var dx: number = this.ball.x - this.mouseX;
		var dy: number = this.ball.y - this.mouseY;
		var angle: number = Math.atan2(dy, dx);

		var targetX: number = this.mouseX + Math.cos(angle) * this.springLength;
		var targetY: number = this.mouseY + Math.sin(angle) * this.springLength;
		this.ball.vx += (targetX - this.ball.x) * this.spring;
		this.ball.vy += (targetY - this.ball.y) * this.spring;
		this.ball.vx *= this.friction;
		this.ball.vy *= this.friction;
		this.ball.x += this.ball.vx;
		this.ball.y += this.ball.vy;
		this.graphics.clear();
		this.graphics.lineStyle(1);
		this.graphics.moveTo(this.ball.x, this.ball.y);
		this.graphics.lineTo(this.mouseX, this.mouseY);


	}


}