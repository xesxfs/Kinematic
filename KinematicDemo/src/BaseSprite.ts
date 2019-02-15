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
	public hitTestObject(obj1: egret.DisplayObject, obj2: egret.DisplayObject, targetCoordinateSpace: egret.DisplayObject): boolean {
		var rect1: egret.Rectangle = obj1.getTransformedBounds(targetCoordinateSpace);
		var rect2: egret.Rectangle = obj2.getTransformedBounds(targetCoordinateSpace);

		// rect1.x = obj1.x;
		// rect1.y = obj1.y;
		// rect2.x = obj2.x;
		// rect2.y = obj2.y;
		return rect1.intersects(rect2);
	}

}