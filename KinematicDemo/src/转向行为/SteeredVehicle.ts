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
		this._steeringForce.truncate(this._maxForce);
		this._steeringForce = this._steeringForce.divide(this._mass);
		this._velocity = this._velocity.add(this._steeringForce);
		this._steeringForce = new Vector2D();
		super.update();
	}


	public seek(target: Vector2D): void {
		var desiredVelocity: Vector2D = target.subtract(this._position);
		desiredVelocity.normalize();
		desiredVelocity = desiredVelocity.multiply(this._maxSpeed);
		var force: Vector2D = desiredVelocity.subtract(this._velocity);
		this._steeringForce = this._steeringForce.add(force);
	}

}