class RotateToMouse extends BaseSprite {
	private arrow: Arrow;
	private mouseX: number = 0;
	private mouseY: number = 0;
	public constructor() {
		super();
	}
	protected init() {
		this.arrow = new Arrow();
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
		this.addChild(this.arrow);
		this.arrow.x = this.stage.stageWidth / 2;
		this.arrow.y = this.stage.stageHeight / 2;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.mouseX = e.stageX;
		this.mouseY = e.stageY;
		// console.log(this.mouseX, this.mouseY);
	}
	private onEnterFrame(e: egret.Event) {
		let dx = this.mouseX - this.arrow.x;
		let dy = this.mouseY - this.arrow.y;
		let radians = Math.atan2(dy, dx);
		// let radians = Math.atan(dy/dx);
		let rotation = radians * 180 / Math.PI;
		this.arrow.rotation = rotation;
		//console.log(radians, rotation);
	}
}