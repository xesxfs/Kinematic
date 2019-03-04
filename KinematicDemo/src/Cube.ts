class Cube extends BaseSprite {
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

		this.points[0] = new Point3D(-100, -100, -100);
		this.points[1] = new Point3D(100, -100, -100);
		this.points[2] = new Point3D(100, 100, -100);
		this.points[3] = new Point3D(-100, 100, -100);

		this.points[4] = new Point3D(-100, -100, 100);
		this.points[5] = new Point3D(100, -100, 100);
		this.points[6] = new Point3D(100, 100, 100);
		this.points[7] = new Point3D(-100, 100, 100);


		for (let i = 0; i < this.points.length; i++) {
			var point = this.points[i];
			point.setVanishingPoint(this.vpX, this.vpY);
			point.setCenter(0, 0, 200);
		}

		this.triangles = new Array();

		// front
		this.triangles[0] = new Triangle(this.points[0], this.points[1], this.points[2], 0x6666cc);
		this.triangles[1] = new Triangle(this.points[0], this.points[2], this.points[3], 0x6666cc);// top

		this.triangles[2] = new Triangle(this.points[0], this.points[5], this.points[1], 0x66cc66);
		this.triangles[3] = new Triangle(this.points[0], this.points[4], this.points[5], 0x66cc66); //back

		this.triangles[4] = new Triangle(this.points[4], this.points[6], this.points[5], 0xcc6666);
		this.triangles[5] = new Triangle(this.points[4], this.points[7], this.points[6], 0xcc6666); // bottom

		this.triangles[6] = new Triangle(this.points[3], this.points[2], this.points[6], 0xcc66cc);
		this.triangles[7] = new Triangle(this.points[3], this.points[6], this.points[7], 0xcc66cc); // right

		this.triangles[8] = new Triangle(this.points[1], this.points[5], this.points[6], 0x66cccc);
		this.triangles[9] = new Triangle(this.points[1], this.points[6], this.points[2], 0x66cccc); // left

		this.triangles[10] = new Triangle(this.points[4], this.points[0], this.points[3], 0xcccc66);
		this.triangles[11] = new Triangle(this.points[4], this.points[3], this.points[7], 0xcccc66);

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