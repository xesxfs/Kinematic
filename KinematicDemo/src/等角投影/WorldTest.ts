class WorldTest extends egret.Sprite {
	private world: IsoWorld;
	public constructor() {
		super();

		this.world = new IsoWorld();
		this.world.x = 1136 / 2;
		this.world.y = 100;
		this.addChild(this.world);
		for (var i = 0; i < 20; i++) {
			for (var j = 0; j < 20; j++) {
				var tile: DrawnIsoTile = new DrawnIsoTile(20, 0xcccccc);
				tile.position = new Point3D(i * 20, 0, j * 20);
				this.world.addChildToFloor(tile);
			}
		}

		this.world.touchEnabled = true;
		this.world.addEventListener("touchTap", this.onWorldClick, this);
	}

	private onWorldClick(event: egret.TouchEvent): void {
		var box: DrawnIsoBox = new DrawnIsoBox(20, Math.random() * 0xffffff, 20);
		var pos: Point3D = IsoUtils.screenToIso(new egret.Point(event.localX, event.localY));
		pos.x = Math.round(pos.x / 20) * 20;
		pos.y = Math.round(pos.y / 20) * 20;
		pos.z = Math.round(pos.z / 20) * 20;
		box.position = pos;
		this.world.addChildToWorld(box);
	}
}