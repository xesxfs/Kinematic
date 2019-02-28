class Easing3D extends BaseSprite {
	private ball: Ball3D;
	private tx: number;
	private ty: number;
	private tz: number;
	private easing: number = .1;
	private fl: number = 250;
	private vpX: number = 0;
	private vpY: number = 0;
	public constructor() {
		super();
	}

	public init() {
		this.vpX = this.stage.stageWidth / 2;
		this.vpY = this.stage.stageHeight / 2;
		this.ball = new Ball3D();
		this.addChild(this.ball);
		this.tx = Math.random() * 500 - 250;
		this.ty = Math.random() * 500 - 250;
		this.tz = Math.random() * 500;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame() {
		var dx: number = this.tx - this.ball.xpos;
		var dy: number = this.ty - this.ball.ypos;
		var dz: number = this.tz - this.ball.zpos;
		this.ball.xpos += dx * this.easing;
		this.ball.ypos += dy * this.easing;
		this.ball.zpos += dz * this.easing;
		var dist: number = Math.sqrt(dx * dx + dy * dy + dz * dz);
		if (dist < 1) {
			this.tx = Math.random() * 500 - 250;
			this.ty = Math.random() * 500 - 250;
			this.tz = Math.random() * 500;
		}
		
		if (this.ball.zpos > -this.fl) {
			var scale: number = this.fl / (this.fl + this.ball.zpos);
			this.ball.scaleX = this.ball.scaleY = scale;
			this.ball.x = this.vpX + this.ball.xpos * scale;
			this.ball.y = this.vpY + this.ball.ypos * scale;
			this.ball.visible = true;
		} else {
			this.ball.visible = false;
		}
	}
}