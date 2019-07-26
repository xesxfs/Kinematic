class VehicleTest extends egret.Sprite {
	public constructor() {
		super();
		this.VehicleTest();
	}

	private _vehicle: Vehicle;
	public VehicleTest() {
		this._vehicle = new Vehicle();
		this._vehicle.position = new Vector2D(100, 100);
		this._vehicle.velocity.length = 5;
		this._vehicle.velocity.angle = Math.PI / 4;
		this.addChild(this._vehicle);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}
	private onEnterFrame(event: Event): void {
		this._vehicle.update();
	}

}