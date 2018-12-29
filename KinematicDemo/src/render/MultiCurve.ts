class MultiCurve extends BaseSprite {

	private numPoints: number = 9;
	public constructor() {
		super();
	}

	protected init() {
		let points = new Array<egret.Point>();
		for (var i = 0; i < this.numPoints; i++) {
			let x = Math.random() * this.stage.stageWidth;
			let y = Math.random() * this.stage.stageHeight;
			let point = egret.Point.create(x, y);
			points.push(point);
		}

		this.graphics.lineStyle(1);
		this.graphics.moveTo(points[0].x, points[0].y);
		for (i = 1; i < this.numPoints - 2; i++) {
			var xc = (points[i].x + points[i + 1].x) / 2;
			var yc = (points[i].y + points[i + 1].y) / 2;
			this.graphics.curveTo(points[i].x, points[i].y, xc, yc);
		}
		this.graphics.curveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
	}
}