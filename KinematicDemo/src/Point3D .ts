class Point3D {
	public fl: number = 250;
	private vpX: number = 0;
	private vpY: number = 0;
	private cX: number = 0;
	private cY: number = 0;
	private cZ: number = 0;
	public x: number = 0;
	public y: number = 0;
	public z: number = 0;
	public constructor(x: number = 0, y: number = 0, z: number = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	public setVanishingPoint(vpX: number, vpY: number): void {
		this.vpX = vpX;
		this.vpY = vpY;
	}

	public setCenter(cX: number, cY: number, cZ: number = 0): void {
		this.cX = cX;
		this.cY = cY;
		this.cZ = cZ;
	}
	public get screenX(): number {
		var scale: number = this.fl / (this.fl + this.z + this.cZ);
		return this.vpX + this.cX + this.x * scale;
	}

	public get screenY(): number {
		var scale: number = this.fl / (this.fl + this.z + this.cZ);
		return this.vpY + this.cY + this.y * scale;
	}

	public rotateX(angleX: number): void {
		var cosX: number = Math.cos(angleX);
		var sinX: number = Math.sin(angleX);
		var y1: number = this.y * cosX - this.z * sinX;
		var z1: number = this.z * cosX + this.y * sinX;
		this.y = y1;
		this.z = z1;
	}


	public rotateY(angleY: number): void {
		var cosY: number = Math.cos(angleY);
		var sinY: number = Math.sin(angleY);
		var x1: number = this.x * cosY - this.z * sinY;
		var z1: number = this.z * cosY + this.x * sinY;
		this.x = x1;
		this.z = z1;
	}


	public rotateZ(angleZ: number): void {
		var cosZ: number = Math.cos(angleZ);
		var sinZ: number = Math.sin(angleZ);
		var x1: number = this.x * cosZ - this.y * sinZ;
		var y1: number = this.y * cosZ + this.x * sinZ;
		this.x = x1;
		this.y = y1;
	}

}