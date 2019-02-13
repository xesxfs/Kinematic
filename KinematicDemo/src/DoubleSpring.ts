class DoubleSpring extends BaseSprite {

	private ball0: Ball;
	private ball1: Ball;

	private spring: number = 0.1;
	private friction: number = 0.95;


	private mouseX: number = 0;
	private mouseY: number = 0;
	private springLength: number = 100;

	public constructor() {
		super();
	}

	protected init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.ball0 = new Ball();
		this.randDisplay(this.ball0);
		this.addChild(this.ball0);

		this.ball1 = new Ball();
		this.randDisplay(this.ball1);
		this.addChild(this.ball1);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	private onEnterFrame() {
		this.springTo(this.ball0, this.ball1);
		this.springTo(this.ball1, this.ball0);
	
		this.graphics.clear();
		this.graphics.lineStyle(1);
		this.graphics.moveTo(this.ball0.x, this.ball0.y);
		this.graphics.lineTo(this.ball1.x, this.ball1.y);

	}

	private springTo(ballA: Ball, ballB: Ball) {
		var dx: number = ballB.x - ballA.x;
		var dy: number = ballB.y - ballA.y;
		var angle: number = Math.atan2(dy, dx);
		var targetX: number = ballB.x - Math.cos(angle) * this.springLength;
		var targetY: number = ballB.y - Math.sin(angle) * this.springLength;
		ballA.vx += (targetX - ballA.x) * this.spring;
		ballA.vy += (targetY - ballA.y) * this.spring;
		ballA.vx *= this.friction;
		ballA.vy *= this.friction;
		ballA.x += ballA.vx;
		ballA.y += ballA.vy;
	}


}