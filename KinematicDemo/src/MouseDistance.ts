class MouseDistance extends BaseSprite {
	private sprite1: egret.Sprite;
	public constructor() {
		super();
	}

	protected init() {
		this.sprite1 = new egret.Sprite();
		this.addChild(this.sprite1);
		this.sprite1.graphics.beginFill(0x0);
		this.sprite1.graphics.drawRect(-2, -2, 4, 4);
		this.sprite1.graphics.endFill();
		this.setDisplayCenter(this.sprite1);
		mouse.setMouseMoveEnabled(true);
		this.stage.addEventListener(mouse.MouseEvent.MOUSE_MOVE, this.onMouseMove, this);
	}

	private onMouseMove(e: egret.TouchEvent) {
		this.graphics.clear();
		this.graphics.lineStyle(1, 0, 1);
		this.graphics.moveTo(this.sprite1.x, this.sprite1.y);
		this.graphics.lineTo(e.localX, e.localY);
	}
}