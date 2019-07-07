class DepthTest2 extends egret.Sprite {
	private floor: egret.Sprite;
	private world: egret.Sprite;
	private objectList: Array<DrawnIsoTile>;

	public constructor() {
		super();


		this.floor = new egret.Sprite();
		this.floor.x = 1136 / 2;
		this.floor.y = 100;
		this.addChild(this.floor);

		this.objectList = [];
		this.world = new egret.Sprite();
		this.world.x = 1136 / 2;
		this.world.y = 100;
		this.addChild(this.world);

		let c = 20;
		let s = 20
		for (var i = 0; i < c; i++) {
			for (var j = 0; j < c; j++) {
				var tile: DrawnIsoTile = new DrawnIsoTile(s, 0xcccccc);
				tile.position = new Point3D(i * s, 0, j * s);
				this.floor.addChild(tile);
			}
		}
		this.floor.touchEnabled = true;
		this.floor.addEventListener("touchTap", this.onWorldClick, this);
	}

	private onWorldClick(event: egret.TouchEvent): void {
		var box: DrawnIsoBox = new DrawnIsoBox(20, Math.random() * 0xffffff, 20);
		var pos: Point3D = IsoUtils.screenToIso(new egret.Point(event.localX, event.localY));
		pos.x = Math.round(pos.x / 20) * 20;
		pos.y = Math.round(pos.y / 20) * 20;
		pos.z = Math.round(pos.z / 20) * 20;
		box.position = pos;
		this.objectList.push(box);
		this.world.addChild(box);
		this.sortList();
	}

	private sortList(): void {
		this.objectList.sort((a, b) => {
			return a.depth - b.depth;
		});
		for (var i = 0; i < this.objectList.length; i++) {
			this.world.addChildAt(this.objectList[i], i);
		}
	}
}