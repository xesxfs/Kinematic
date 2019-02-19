class Walking1 extends BaseSprite {

	private segment0: Segment;
	private segment1: Segment;
	private cycle: number = 0;
	public constructor() {
		super();
	}
	public init() {
		this.segment0 = new Segment(100, 20);
		this.addChild(this.segment0);
		this.segment0.x = 100;
		this.segment0.y = 200;

		this.segment1 = new Segment(100, 20);
		this.addChild(this.segment1);
		this.segment1.x = this.segment0.getPin().x;
		this.segment1.y = this.segment0.getPin().y;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame(even: egret.Event) {
		this.cycle += .05;
		let angle = Math.sin(this.cycle) * 90;
		this.segment0.rotation = angle;
		this.segment1.rotation = this.segment0.rotation + angle;
		this.segment1.x = this.segment0.getPin().x;
		this.segment1.y = this.segment0.getPin().y;

	}
}