class Arrow extends egret.Sprite {
	public constructor() {
		super();
		this.init();
	}

	public init() {
		let graphics = this.graphics;

		graphics.lineStyle(1, 0, 1); 
		graphics.beginFill(0xffff00); 
		graphics.moveTo(-50, -25); 
		graphics.lineTo(0, -25); 
		graphics.lineTo(0, -50); 
		graphics.lineTo(50, 0); 
		graphics.lineTo(0, 50); 
		graphics.lineTo(0, 25);
		graphics.lineTo(-50, 25); 
		graphics.lineTo(-50, -25);
		graphics.endFill();
	}
}