class DrawnIsoTile extends IsoObject {
	protected _height: number;
	protected _color: number;
	public constructor(size: number, color: number, height: number = 0) {
		super(size);
		this._color = color;
		this._height = height;
		this.draw();
	}

	protected draw(): void {
		this.graphics.clear();
		this.graphics.beginFill(this._color);
		this.graphics.lineStyle(0, 0, .5);
		this.graphics.moveTo(-this.size, 0);
		this.graphics.lineTo(0, -this.size * .5);
		this.graphics.lineTo(this.size, 0);
		this.graphics.lineTo(0, this.size * .5);
		this.graphics.lineTo(-this.size, 0);

	}

	public set height(value: number) {
		this._height = value;
		this.draw();
	}
	public get height(): number {
		return this._height;
	}


	public set color(value: number) {
		this._color = value;
		this.draw();
	}
	public get color(): number {
		return this._color;
	}

}