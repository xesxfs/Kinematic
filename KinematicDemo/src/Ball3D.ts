class Ball3D extends BaseSprite {
	public radius: number;
	private color: number;
	public vx: number = 0;
	public vy: number = 0;
	public vz: number = 0;

	public xpos: number = 0;
	public ypos: number = 0;
	public zpos: number = 0;

	public mass: number = 1;

	public constructor(radius: number = 40, color: number = 0xff0000) {
		super();
		this.radius = radius;
		this.color = color;
	}

	protected init() {
		this.graphics.lineStyle(0);
		this.graphics.beginFill(this.color);
		this.graphics.drawCircle(0, 0, this.radius);
		this.graphics.endFill();
	}
}