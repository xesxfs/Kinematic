class SeekTest extends BaseSprite {
	private _vehicle: SteeredVehicle;
	private mouseX: number = 0;
	private mouseY: number = 0;
	public constructor() {
		super();
		this._vehicle = new SteeredVehicle();


	}

	protected init() {
		// this._vehicle.position = new Vector2D(100, 100);
		this.addChild(this._vehicle);
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onEnterFrame(event: egret.Event): void {
		this._vehicle.seek(new Vector2D(this.mouseX,this.mouseY));
		this._vehicle.update();
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
	}
}