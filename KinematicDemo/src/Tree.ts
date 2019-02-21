class Tree extends BaseSprite {

	public xpos: number = 0;
	public ypos: number = 0;
	public zpos: number = 0;

	public constructor() {
		super();

	}

	protected init() {
		this.graphics.lineStyle(1, 0xffffff);
		this.graphics.lineTo(0, -140 - Math.random() * 20);
		this.graphics.moveTo(0, -30 - Math.random() * 30);
		this.graphics.lineTo(Math.random() * 80 - 40, -100 - Math.random() * 40);
		this.graphics.moveTo(0, -60 - Math.random() * 40);
		this.graphics.lineTo(Math.random() * 60 - 30, -110 - Math.random() * 20);
	}
}