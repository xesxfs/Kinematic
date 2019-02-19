class Walking3 extends BaseSprite {

	private segment0: Segment;
	private segment1: Segment;
	private cycle: number = 0;
	private offset: number = -Math.PI / 2;
	public constructor() {
		super();
	}
	public init() {
		this.segment0 = new Segment(100, 20);
		this.addChild(this.segment0);
		this.segment0.x = 300;
		this.segment0.y = 200;

		this.segment1 = new Segment(100, 20);
		this.addChild(this.segment1);
		this.segment1.x = this.segment0.getPin().x;
		this.segment1.y = this.segment0.getPin().y;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame(even: egret.Event) {
		this.cycle += .05;
		let angle0 = Math.sin(this.cycle) * 45 + 90;
		let angle1 = Math.sin(this.cycle + this.offset) * 45 + 45;
		this.segment0.rotation = angle0;
		this.segment1.rotation = this.segment0.rotation + angle1;
		this.segment1.x = this.segment0.getPin().x;
		this.segment1.y = this.segment0.getPin().y;

	}
}