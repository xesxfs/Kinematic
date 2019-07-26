class SteeredVehicle extends Vehicle {
	private _maxForce: number = 1;
	private _steeringForce: Vector2D;
	public constructor() {
		super();
		this._steeringForce = new Vector2D();
	}


	public set maxForce(value: number) {
		this._maxForce = value;
	}

	public get maxForce(): number {
		return this._maxForce;
	}

	public update(): void {
		//转向合力。不让_steeringForce 超过大作用力
		this._steeringForce.truncate(this._maxForce);
		//除以(divide)机车的质量(mass),越重的物 体有着越大的动力， 旋转的角度也越大，而较轻的物体则旋转更快速
		this._steeringForce = this._steeringForce.divide(this._mass);
		//把转向力叠加于机车的当前速度上
		this._velocity = this._velocity.add(this._steeringForce);

		this._steeringForce = new Vector2D();
		super.update();
	}


	public seek(target: Vector2D): void {
		//到达目标的期望速度
		var desiredVelocity: Vector2D = target.subtract(this._position);
		//得到一个指向目标的单位向量
		desiredVelocity.normalize();
		//得到一个指向目标的期望速度
		desiredVelocity = desiredVelocity.multiply(this._maxSpeed);
		//尽大可能以大速率面向正确方位
		var force: Vector2D = desiredVelocity.subtract(this._velocity);
		//会叠加给转向力
		this._steeringForce = this._steeringForce.add(force);
	}

}