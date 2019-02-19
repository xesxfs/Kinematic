class Segment extends BaseSprite {
	private color: number;
	private segmentWidth: number;
	private segmentHeight: number;
	public vx: number = 0;
	public vy: number = 0;
	public constructor(segmentWidth: number, segmentHeight: number, color: number = 0xffffff) {
		super();
		this.segmentWidth = segmentWidth;
		this.segmentHeight = segmentHeight;
		this.color = color;
	}

	public init() {
		// 绘制关节 
		this.graphics.lineStyle(0);
		this.graphics.beginFill(this.color);
		this.graphics.drawRoundRect(-this.segmentHeight / 2, -this.segmentHeight / 2, this.segmentWidth + this.segmentHeight, this.segmentHeight, this.segmentHeight, this.segmentHeight);
		this.graphics.endFill();
		// 绘制两个“枢轴” 
		this.graphics.drawCircle(0, 0, 2);
		this.graphics.drawCircle(this.segmentWidth, 0, 2);
	}

	public getPin(): egret.Point {
		var angle: number = this.rotation * Math.PI / 180;
		var xPos = this.x + Math.cos(angle) * this.segmentWidth;
		var yPos = this.y + Math.sin(angle) * this.segmentWidth;
	
		return new egret.Point(xPos, yPos);
	}
}