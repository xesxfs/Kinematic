class BaseSprite extends egret.Sprite {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
	}

	protected init() {

	}

	public setDisplayCenter(display: egret.DisplayObject) {
		display.x = this.stage.stageWidth / 2;
		display.y = this.stage.stageHeight / 2;
	}

	public randDisplay(display: egret.DisplayObject) {
		display.x = this.stage.stageWidth * Math.random();
		display.y = this.stage.stageHeight * Math.random();
	}
}