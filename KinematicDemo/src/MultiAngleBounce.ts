class MultiAngleBounce extends BaseSprite {
	private ball: Ball;
	private lines: Array<egret.Sprite> = [];
	private bounce: number = -0.8;
	private gravity: number = 0.3;
	private numLines: number = 5;
	private mouseX: number = 0;
	private mouseY: number = 0;
	public constructor() {
		super();
	}

	public init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);

		this.ball = new Ball(20);
		this.addChild(this.ball);
		this.ball.x = 100;
		this.ball.y = 50;
		for (let i = 0; i < this.numLines; i++) {
			let line = new egret.Sprite();
			line.graphics.lineStyle(1);
			line.graphics.moveTo(-50, 0);
			line.graphics.lineTo(50, 0);
			this.addChild(line);
			this.lines.push(line);
		}

		this.lines[0].x = 100; this.lines[0].y = 100; this.lines[0].rotation = 30;
		this.lines[1].x = 100; this.lines[1].y = 230; this.lines[1].rotation = 45;
		this.lines[2].x = 250; this.lines[2].y = 180; this.lines[2].rotation = -30;
		this.lines[3].x = 150; this.lines[3].y = 330; this.lines[3].rotation = 10;
		this.lines[4].x = 230; this.lines[4].y = 250; this.lines[4].rotation = -30;

		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	private onEnterFrame() {

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

		for (let i = 0; i < this.numLines; i++) {
			if (this.checkLine(this.lines[i])) {
				break;
			}
		}


	}

	private checkLine(line: egret.Sprite): boolean {
		let result = false;

		var bounds = line.getTransformedBounds(this);
		if (this.ball.x > bounds.left && this.ball.x < bounds.right) {
			// 获得角度及正余弦值 
			var angle = line.rotation * Math.PI / 180;
			var cos = Math.cos(angle);
			var sin = Math.sin(angle);

			// 获得 ball 与 line 的相对位置 
			var x1 = this.ball.x - line.x;
			var y1 = this.ball.y - line.y;
			// 旋转坐标 
			var y2 = cos * y1 - sin * x1;
			// 旋转速度向量 
			var vy1 = cos * this.ball.vy - sin * this.ball.vx;
			// 实现反弹 
			if (y2 > -this.ball.height / 2 && y2 < vy1) {
				var x2 = cos * x1 + sin * y1;
				var vx1 = cos * this.ball.vx + sin * this.ball.vy;
				y2 = -this.ball.height / 2;
				vy1 *= this.bounce;
				// 将一切旋转回去
				x1 = cos * x2 - sin * y2;
				y1 = cos * y2 + sin * x2;
				this.ball.vx = cos * vx1 - sin * vy1;
				this.ball.vy = cos * vy1 + sin * vx1;
				this.ball.x = line.x + x1;
				this.ball.y = line.y + y1;
				result = true;
			}

		}

		return result;
	}
}