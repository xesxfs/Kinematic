class Billiard2 extends BaseSprite {
	private b0: Ball;
	private b1: Ball;
	public constructor() {
		super()
	}


	public init() {
		this.b0 = new Ball(40);
		this.b0.mass = 2;
		this.b0.x = 50;
		this.b0.y = this.stage.stageHeight / 2;
		this.b0.vx = 2;
		this.addChild(this.b0);

		this.b1 = new Ball(25);
		this.b1.mass = 1;
		this.b1.x = 300;
		this.b1.y = this.stage.stageHeight / 2;
		this.b1.vx = -1;
		this.addChild(this.b1);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame() {
		this.b0.x += this.b0.vx;
		this.b1.x += this.b1.vx;
		let dist = this.b1.x - this.b0.x;
		if (Math.abs(dist) < this.b0.radius + this.b1.radius) {
			var vxTotal: number = this.b0.vx - this.b1.vx;

			var vx0Final: number = ((this.b0.mass - this.b1.mass) * this.b0.vx + 2 * this.b1.mass * this.b1.vx) / (this.b0.mass + this.b1.mass);

			//var vx1Final: number = ((this.b1.mass - this.b0.mass) * this.b1.vx + 2 * this.b0.mass * this.b0.vx) / (this.b0.mass + this.b1.mass);

			this.b0.vx = vx0Final;
			this.b1.vx = vxTotal + vx0Final;

			this.b0.x += this.b0.vx;
			this.b1.x += this.b1.vx;
		}
	}
}