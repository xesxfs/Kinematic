class Ship extends BaseSprite {
	public constructor() {
		super();
	}

	public draw(showFlame: boolean) {
		let graphics = this.graphics;
		graphics.clear();
		graphics.lineStyle(1, 0xffffff);
		graphics.moveTo(10, 0);
		graphics.lineTo(-10, 10);
		graphics.lineTo(-5, 0);
		graphics.lineTo(-10, -10); graphics.lineTo(10, 0);
		if (showFlame) {
			graphics.moveTo(-7.5, -5);
			graphics.lineTo(-15, 0);
			graphics.lineTo(-7.5, 5);
		}
	}
}
