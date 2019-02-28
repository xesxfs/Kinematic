class Lines3D2 extends BaseSprite {
	private points: Array<Point3D>;
	private numPoints: number = 50;
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
		this.points = [];
		for (let i = 0; i < this.numPoints; i++) {
			var point = new Point3D(Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100);
			point.setVanishingPoint(this.vpX, this.vpY);
			this.points.push(point);

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
		for (var i = 0; i < this.numPoints; i++) {
			var point: Point3D = this.points[i];
			point.rotateX(angleX);
			point.rotateY(angleY);
		}
		this.graphics.clear();
		this.graphics.lineStyle(1);
		this.graphics.moveTo(this.points[0].x, this.points[0].y);
		for (let i = 1; i < this.numPoints; i++) {
			this.graphics.lineTo(this.points[i].x, this.points[i].y);
		}
	}


}