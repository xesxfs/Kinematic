class Wave2 extends BaseSprite {
	private xpos: number = 0;
	private ypos: number = 0;
	private centerY: number = 200;
	private xspeed: number = 2;
	private yspeed: number = 0.5;
	private range: number = 50;
	private angle: number = 0;
	public constructor() {
		super();
	}
	protected init() {
		this.xpos = 0;
		this.graphics.lineStyle(1, 0, 1);
		this.graphics.moveTo(0, this.centerY);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}
	private onEnterFrame(e: egret.Event) {
		this.xpos += this.xspeed;
		this.angle += this.yspeed;
		this.ypos = this.centerY + Math.sin(this.angle) * this.range;
		this.graphics.lineTo(this.xpos, this.ypos);
	}
}