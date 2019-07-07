class IsoObject extends egret.Sprite {
	protected _position: Point3D;
	protected _size: number;
	protected _walkable: boolean = false;
	// 1.2247 的精确计算版本
	public static Y_CORRECT: number = Math.cos(-Math.PI / 6) * Math.SQRT2;

	protected _vx: number = 0;
	protected _vy: number = 0;
	protected _vz: number = 0;

	public constructor(size: number) {
		super();
		this._size = size;
		this._position = new Point3D();
		this.updateScreenPosition();
	}

	/**
	* 把当前时刻的一个 3D 坐标点转换成屏幕上的 2D 坐标点
	* 并将自己安置于该点 */
	protected updateScreenPosition(): void {
		var screenPos: egret.Point = IsoUtils.isoToScreen(this._position);
		super.$setX(screenPos.x);
		super.$setY(screenPos.y);

	}

	/**
	* 自身的具体描述方式 
	*/
	public toString(): string {
		return "[IsoObject (x:" + this._position.x + ", y:" + this._position.y + ", z:" + this._position.z + ")]";
	}


	/**
	* 设置/读取3D空间中的x坐标 */
	public set x(value: number) {
		this._position.x = value;
		this.updateScreenPosition();
	}
	public get x(): number {
		return this._position.x;
	}

	/**
	* 设置/读取3D空间中的y坐标 */
	public set y(value: number) {
		this._position.y = value;
		this.updateScreenPosition();
	}
	public get y(): number {
		return this._position.y;
	}


	/**
	* 设置/读取3D空间中的z坐标 */
	public set z(value: number) {
		this._position.z = value;
		this.updateScreenPosition();
	}
	public get z(): number {
		return this._position.z;
	}


	/**
	* 设置/读取 3D 空间中的坐标点 */
	public set position(value: Point3D) {
		this._position = value;
		this.updateScreenPosition();
	}
	public get position(): Point3D {
		return this._position;
	}

	/**
	* 返回形变后的层深 */
	public get depth(): number {
		return (this._position.x + this._position.z) * .866 - this._position.y * .707;
	}


	/**
	* 指定其它对象是否可以经过所占的位置 */
	public set walkable(value: boolean) {
		this._walkable = value;
	}
	public get walkable(): boolean {
		return this._walkable;
	}


	/**
* 返回尺寸 */
	public get size(): number {
		return this._size;
	}
	/**
	* 返回占用着的矩形 */
	public get rect(): egret.Rectangle {
		return new egret.Rectangle(this.x - this.size / 2, this.z - this.size / 2, this.size, this.size);
	}
	/**
	* 设置和读取 x 轴方向上的速度
	*/
	public set vx(value: number) {
		this._vx = value;
	}
	public get vx(): number {
		return this._vx;
	}

	/**
* 设置和读取 y 轴方向上的速度 */
	public set vy(value: number) {
		this._vy = value;
	}
	public get vy(): number {
		return this._vy;
	}


	/**
* 设置和读取 z 轴方向上的速度 */
	public set vz(value: number) {
		this._vz = value;
	}
	public get vz(): number {
		return this._vz;
	}

}