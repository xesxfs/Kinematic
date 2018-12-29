class MultiCurve2 extends BaseSprite {

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
		this.graphics.beginFill(0xff00ff);
		this.graphics.lineStyle(1);
		var xc1 = (points[0].x + points[this.numPoints - 1].x) / 2;
		var yc1 = (points[0].y + points[this.numPoints - 1].y) / 2;
		this.graphics.moveTo(xc1, yc1);
		for (i = 0; i < this.numPoints - 1; i++) {
			let xc = (points[i].x + points[i + 1].x) / 2;
			let yc = (points[i].y + points[i + 1].y) / 2;
			this.graphics.curveTo(points[i].x, points[i].y, xc, yc);
		}
		this.graphics.curveTo(points[i].x, points[i].y, xc1, yc1);
		this.graphics.endFill();
	}
}