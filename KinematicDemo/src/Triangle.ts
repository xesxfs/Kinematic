class Triangle {

	private pointA: Point3D;
	private pointB: Point3D;
	private pointC: Point3D;
	private color: number;
	public constructor(a: Point3D, b: Point3D, c: Point3D, color: number) {
		this.pointA = a;
		this.pointB = b;
		this.pointC = c;
		this.color = color;
	}

	public draw(g: egret.Graphics): void {
		g.beginFill(this.color,.5);
		g.moveTo(this.pointA.screenX, this.pointA.screenY);
		g.lineTo(this.pointB.screenX, this.pointB.screenY);
		g.lineTo(this.pointC.screenX, this.pointC.screenY);
		g.lineTo(this.pointA.screenX, this.pointA.screenY);
		g.endFill();
	}

}