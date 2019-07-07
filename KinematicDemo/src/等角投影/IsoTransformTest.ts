class IsoTransformTest extends egret.Sprite {
	public constructor() {
		super();
		var p0: Point3D = new Point3D(0, 0, 0);
		var p1: Point3D = new Point3D(100, 0, 0);
		var p2: Point3D = new Point3D(100, 0, 100);
		var p3: Point3D = new Point3D(0, 0, 100);

		var sp0: egret.Point = IsoUtils.isoToScreen(p0);
		var sp1: egret.Point = IsoUtils.isoToScreen(p1);
		var sp2: egret.Point = IsoUtils.isoToScreen(p2);
		var sp3: egret.Point = IsoUtils.isoToScreen(p3);
		var tile: egret.Sprite = new egret.Sprite();
		tile.x = 200;
		tile.y = 200;

		this.addChild(tile);
		tile.graphics.lineStyle(2);
		tile.graphics.moveTo(sp0.x, sp0.y);
		tile.graphics.lineTo(sp1.x, sp1.y);
		tile.graphics.lineTo(sp2.x, sp2.y);
		tile.graphics.lineTo(sp3.x, sp3.y);
		tile.graphics.lineTo(sp0.x, sp0.y);
	}
}