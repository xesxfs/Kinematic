class AngleBounceFinal extends BaseSprite {
	private ball: Ball;
	private line: egret.Sprite;
	private bounce: number = -0.6;
	private gravity: number = 0.3;
	private mouseX: number = 0;
	private mouseY: number = 0;
	public constructor() {
		super();
	}

	public init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);

		this.ball = new Ball();
		this.addChild(this.ball);
		this.ball.x = 100;
		this.ball.y = 100;
		this.line = new egret.Sprite();
		this.line.graphics.lineStyle(1, 0xff0000);
		this.line.graphics.moveTo(0, 0);
		this.line.graphics.lineTo(300, 0);
		this.addChild(this.line);
		this.line.x = 50;
		this.line.y = 200;
		this.line.rotation = 30;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	private onEnterFrame() {
		this.line.rotation = (this.stage.stageWidth / 2 - this.mouseX) * .1;

		// 普通的运动代码 
		this.ball.vy += this.gravity;
		this.ball.x += this.ball.vx;
		this.ball.y += this.ball.vy;

		if (this.ball.x + this.ball.radius > this.stage.stageWidth) {

			this.ball.x = this.stage.stageWidth - this.ball.radius;
			this.ball.vx *= this.bounce;
		}
		else if (this.ball.x - this.ball.radius < 0) {
			this.ball.x = this.ball.radius;
			this.ball.vx *= this.bounce;
		}

		if (this.ball.y + this.ball.radius > this.stage.stageHeight) {
			this.ball.y = this.stage.stageHeight - this.ball.radius;
			this.ball.vy *= this.bounce;
		}
		else if (this.ball.y - this.ball.radius < 0) {
			this.ball.y = this.ball.radius;
			this.ball.vy *= this.bounce;

		}

		// 实现反弹 
		var bounds = this.line.getTransformedBounds(this);

		if (this.ball.x > bounds.left && this.ball.x < bounds.right) {
			// 获得角度及正余弦值 
			var angle = this.line.rotation * Math.PI / 180;
			var cos = Math.cos(angle);
			var sin = Math.sin(angle);

			// 获得 ball 与 line 的相对位置 
			var x1 = this.ball.x - this.line.x;
			var y1 = this.ball.y - this.line.y;
			// 旋转坐标 
			var y2 = cos * y1 - sin * x1;
			var x2 = cos * x1 + sin * y1;

			// 旋转速度向量 
			var vx1 = cos * this.ball.vx + sin * this.ball.vy;
			var vy1 = cos * this.ball.vy - sin * this.ball.vx;
			if (y2 > -this.ball.height && y2 < vy1) {
				y2 = -this.ball.height / 2;
				vy1 *= this.bounce;
				// 将一切旋转回去
				x1 = cos * x2 - sin * y2;
				y1 = cos * y2 + sin * x2;
				this.ball.vx = cos * vx1 - sin * vy1;
				this.ball.vy = cos * vy1 + sin * vx1;
				this.ball.x = this.line.x + x1;
				this.ball.y = this.line.y + y1;
			}

		}


	}
}