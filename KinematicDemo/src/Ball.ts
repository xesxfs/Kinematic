class Ball extends BaseSprite {
	public radius: number;
	private color: number;
	public vx: number = 0;
	public vy: number = 0;

	public constructor(radius: number = 20, color: number = 0xff0000) {
		super();
		this.radius = radius;
		this.color = color;
	}

	protected init() {
		this.graphics.beginFill(this.color);
		this.graphics.drawCircle(0, 0, this.radius);
		this.graphics.endFill();
	}
}