class Triangles extends BaseSprite {
	private points: Array<Point3D>;
	private triangles: Array<Triangle>;


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

		this.points[0] = new Point3D(-50, -250, 100);
		this.points[1] = new Point3D(50, -250, 100);
		this.points[2] = new Point3D(200, 250, 100);
		this.points[3] = new Point3D(100, 250, 100);
		this.points[4] = new Point3D(50, 100, 100);
		this.points[5] = new Point3D(-50, 100, 100);
		this.points[6] = new Point3D(-100, 250, 100);
		this.points[7] = new Point3D(-200, 250, 100);
		this.points[8] = new Point3D(0, -150, 100);
		this.points[9] = new Point3D(50, 0, 100);
		this.points[10] = new Point3D(-50, 0, 100);

		for (let i = 0; i < this.points.length; i++) {
			var point = this.points[i];
			point.setVanishingPoint(this.vpX, this.vpY);
			point.setCenter(0, 0, 200);
		}

		this.triangles = new Array();
		this.triangles[0] = new Triangle(this.points[0], this.points[1],
			this.points[8], 0xffcccc);
		this.triangles[1] = new Triangle(this.points[1], this.points[9],
			this.points[8], 0xffcccc);
		this.triangles[2] = new Triangle(this.points[1], this.points[2],
			this.points[9], 0xffcccc);
		this.triangles[3] = new Triangle(this.points[2], this.points[4],
			this.points[9], 0xffcccc);
		this.triangles[4] = new Triangle(this.points[2], this.points[3],
			this.points[4], 0xffcccc);

		this.triangles[5] = new Triangle(this.points[4], this.points[5], this.points[9], 0xffcccc);
		this.triangles[6] = new Triangle(this.points[9], this.points[5], this.points[10], 0xffcccc);
		this.triangles[7] = new Triangle(this.points[5], this.points[6], this.points[7], 0xffcccc);
		this.triangles[8] = new Triangle(this.points[5], this.points[7], this.points[10], 0xffcccc);
		this.triangles[9] = new Triangle(this.points[0], this.points[10], this.points[7], 0xffcccc);
		this.triangles[10] = new Triangle(this.points[0], this.points[8], this.points[10], 0xffcccc);




		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}

	public onEnterFrame() {
		var angleY: number = (this.mouseX - this.vpX) * .001;
		var angleX: number = (this.mouseY - this.vpY) * .001;
		for (var i = 0; i < this.points.length; i++) {
			var point: Point3D = this.points[i];
			point.rotateX(angleX);
			point.rotateY(angleY);
		}
		this.graphics.clear();

		for (let i = 0; i < this.triangles.length; i++) {
			this.triangles[i].draw(this.graphics);
		}

	}


}