class TwoSegment extends BaseSprite {
	private slider0: eui.VSlider;
	private slider1: eui.VSlider;
	private segment0: Segment;
	private segment1: Segment;
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

		this.slider0 = new eui.VSlider();
		this.slider0.height = 120;
		this.slider0.width = 20;
		this.slider0.minimum = -90;
		this.slider0.maximum = 90;
		this.addChild(this.slider0);
		this.slider0.x = 320;
		this.slider0.y = 20;

		this.slider1 = new eui.VSlider();
		this.slider1.height = 120;
		this.slider1.width = 20;
		this.slider1.minimum = -90;
		this.slider1.maximum = 90;
		this.addChild(this.slider1);
		this.slider1.x = 360;
		this.slider1.y = 20;

		this.slider0.addEventListener(egret.Event.CHANGE, this.onChange, this);
		this.slider1.addEventListener(egret.Event.CHANGE, this.onChange, this);
	}

	public onChange(even: egret.Event) {
		this.segment0.rotation = this.slider0.value;
		this.segment1.rotation = this.segment0.rotation + this.slider1.value;
		// this.segment1.rotation = this.slider1.value;
		this.segment1.x = this.segment0.getPin().x;
		this.segment1.y = this.segment0.getPin().y;

	}
}