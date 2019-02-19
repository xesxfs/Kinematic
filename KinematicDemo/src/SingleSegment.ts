class SingleSegment extends BaseSprite {
	private slider: eui.HSlider;
	private segment: Segment;
	public constructor() {
		super();
	}
	public init() {
		this.segment = new Segment(100, 20);
		this.addChild(this.segment);
		this.segment.x = 100;
		this.segment.y = 200;
		this.slider = new eui.HSlider();
		this.slider.height = 10;
		this.slider.width = 100;
		this.slider.minimum = -90;
		this.slider.maximum = 90;
		this.addChild(this.slider);
		this.slider.x = 300;
		this.slider.y = 20;
		this.slider.addEventListener(egret.Event.CHANGE, this.onChange, this);
	}

	public onChange(even: egret.Event) {
		this.segment.rotation = this.slider.value;

	}
}