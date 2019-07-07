class TileTest extends egret.Sprite {
	public constructor() {
		super();
		var world: egret.Sprite = new egret.Sprite();
		world.x = 1136 / 2;
		world.y = 100;
		this.addChild(world);
		let c = 10;
		let s=50
		for (var i = 0; i < c; i++) {
			for (var j = 0; j < c; j++) {
				var tile: DrawnIsoTile = new DrawnIsoTile(s, 0xcccccc);
				tile.position = new Point3D(i * s, 0, j * s);
				world.addChild(tile);
			}
		}
	}
}