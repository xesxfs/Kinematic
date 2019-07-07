class MotionTest extends egret.Sprite {
	private world: IsoWorld;
	private box: DrawnIsoBox;
	private speed: number = 5;
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
		this.box = new DrawnIsoBox(20, 0xff0000, 20);
		this.box.x = 200;
		this.box.z = 200;
		this.world.addChildToWorld(this.box);
		this.touchEnabled = true;
		this.addEventListener("touchTap", this.onWorldClick, this);

	}

	private onWorldClick() {
		this.box.vx = Math.random() * 2 - 1;
		this.box.vy = -Math.random() * 2;
		this.box.vz = Math.random() * 2 - 1;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame(event: egret.Event): void {
		this.box.x += this.box.vx;
		this.box.y += this.box.vy;
		this.box.z += this.box.vz;
	}
}