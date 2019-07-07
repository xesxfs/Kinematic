class IsoUtils {
	// 1.2247 的精确计算版本
	public static Y_CORRECT: number = Math.cos(-Math.PI / 6) * Math.SQRT2;
	public constructor() {
	}

	/**
	* 把等角空间中的一个 3D 坐标点转换成屏幕上的 2D 坐标点
	* @参数 pos 是一个 3D 坐标点
	*/
	public static isoToScreen(pos: Point3D): egret.Point {
		var screenX: number = pos.x - pos.z;
		var screenY: number = pos.y * this.Y_CORRECT + (pos.x + pos.z) * .5;
		return new egret.Point(screenX, screenY);
	}


	/**
	* 把屏幕上的 2D 坐标点转换成等角空间中的一个 3D 坐标点，设 y=0 
	* @参数 pos 是一个 2D 坐标点
	*/
	public static screenToIso(point: egret.Point): Point3D {
		var xpos: number = point.y + point.x * .5;
		var ypos: number = 0;
		var zpos: number = point.y - point.x * .5;
		return new Point3D(xpos, ypos, zpos);
	}

}