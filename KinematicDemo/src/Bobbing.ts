class Bobbing extends BaseSprite {
	private ball: Ball;
	private angle: number = 0;
	private centerY: number = 600;
	private range: number = 150;
	private speed: number = 0.2;
	public constructor() {
		super();
	}
	protected init() {
		this.ball = new Ball();
		this.addChild(this.ball);
		this.ball.x = this.stage.stageWidth / 2;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}
	public onEnterFrame(e: egret.Event) {
		this.ball.y = this.centerY + Math.sin(this.angle) * this.range;
		this.angle += this.speed;
	}
}