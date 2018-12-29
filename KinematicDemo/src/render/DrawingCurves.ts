class DrawingCurves extends BaseSprite {

	private x0: number = 100;
	private y0: number = 200;
	private x1: number;
	private y1: number;

	private x2: number = 300;
	private y2: number = 200;
	public constructor() {
		super();
	}

	protected init() {
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		// this.x1 = e.localX;
		// this.y1 = e.localY;

		this.x1 = e.localX * 2 - (this.x0 + this.x2) / 2;
		this.y1 = e.localY * 2 - (this.y0 + this.y2) / 2;

		this.graphics.clear();
		this.graphics.lineStyle(1);
		this.graphics.moveTo(this.x0, this.y0);
		this.graphics.curveTo(this.x1, this.y1, this.x2, this.y2);
	}
}