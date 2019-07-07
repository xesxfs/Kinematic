class DrawnIsoBox extends DrawnIsoTile {
	public constructor(size: number, color: number, height: number) {
		super(size, color, height);
	}

	protected draw(): void {
		this.graphics.clear();
		var red = this._color >> 16;
		var green = this._color >> 8 & 0xff;
		var blue = this._color & 0xff;
		var leftShadow = (red * .5) << 16 | (green * .5) << 8 | (blue * .5);
		var rightShadow = (red * .75) << 16 | (green * .75) << 8 | (blue * .75);
		var h: number = this._height * IsoObject.Y_CORRECT;
		// draw top 
		this.graphics.beginFill(this._color);
		this.graphics.lineStyle(0, 0, .5);
		this.graphics.moveTo(-this._size, -h);
		this.graphics.lineTo(0, -this._size * .5 - h);
		this.graphics.lineTo(this._size, -h);
		this.graphics.lineTo(0, this._size * .5 - h);
		this.graphics.lineTo(-this._size, -h);
		this.graphics.endFill();
		// draw left 
		this.graphics.beginFill(leftShadow);
		this.graphics.lineStyle(0, 0, .5);
		this.graphics.moveTo(-this._size, -h);
		this.graphics.lineTo(0, this._size * .5 - h);
		this.graphics.lineTo(0, this._size * .5);
		this.graphics.lineTo(-this._size, 0);
		this.graphics.lineTo(-this._size, -h);
		this.graphics.endFill();
		// draw right 
		this.graphics.beginFill(rightShadow);
		this.graphics.lineStyle(0, 0, .5);
		this.graphics.moveTo(this._size, -h);
		this.graphics.lineTo(0, this._size * .5 - h);
		this.graphics.lineTo(0, this._size * .5);
		this.graphics.lineTo(this._size, 0);
		this.graphics.lineTo(this._size, -h);
		this.graphics.endFill();
	}
}