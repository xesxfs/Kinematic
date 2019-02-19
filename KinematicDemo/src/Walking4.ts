class Walking4 extends BaseSprite {

	private segment0: Segment;
	private segment1: Segment;

	private segment2: Segment;
	private segment3: Segment;

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

		this.segment2 = new Segment(100, 20);
		this.addChild(this.segment2);
		this.segment2.x = 300;
		this.segment2.y = 200;

		this.segment3 = new Segment(100, 20);
		this.addChild(this.segment3);
		this.segment3.x = this.segment3.getPin().x;
		this.segment3.y = this.segment3.getPin().y;

		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame(even: egret.Event) {
		this.walk(this.segment0, this.segment1, this.cycle);
		this.walk(this.segment2, this.segment3, this.cycle + Math.PI);
		this.cycle += .05;
	}

	private walk(segA: Segment, segB: Segment, cycle: number) {

		let angle0 = Math.sin(cycle) * 45 + 90;
		let angle1 = Math.sin(cycle + this.offset) * 45 + 45;
		segA.rotation = angle0;
		segB.rotation = segA.rotation + angle1;
		segB.x = segA.getPin().x;
		segB.y = segA.getPin().y;


	}

}