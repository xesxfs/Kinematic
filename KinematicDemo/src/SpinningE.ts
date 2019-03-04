class SpinningE extends BaseSprite {
	private points: Array<Point3D>;
	private numPoints: number = 12;
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

		this.points[0] = new Point3D(-150, -250, 100);
		this.points[1] = new Point3D(150, -250, 100);
		this.points[2] = new Point3D(150, -150, 100);
		this.points[3] = new Point3D(-50, -150, 100);
		this.points[4] = new Point3D(-50, -50, 100);
		this.points[5] = new Point3D(50, -50, 100);
		this.points[6] = new Point3D(50, 50, 100);
		this.points[7] = new Point3D(-50, 50, 100);
		this.points[8] = new Point3D(-50, 150, 100);
		this.points[9] = new Point3D(150, 150, 100);
		this.points[10] = new Point3D(150, 250, 100);
		this.points[11] = new Point3D(-150, 250, 100);

		for (let i = 0; i < this.numPoints; i++) {
			var point = this.points[i];
			point.setVanishingPoint(this.vpX, this.vpY);
			point.setCenter(0, 100, 200);
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
		this.graphics.beginFill(0xffcccc);
		this.graphics.moveTo(this.points[0].screenX, this.points[0].screenY);
		for (let i = 1; i < this.numPoints; i++) {
			this.graphics.lineTo(this.points[i].screenX, this.points[i].screenY);
		}
		this.graphics.lineTo(this.points[0].screenX, this.points[0].screenY);
		this.graphics.endFill();
	}


}