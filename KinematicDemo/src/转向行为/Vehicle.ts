class Vehicle extends BaseSprite {

	protected _edgeBehavior: string = Vehicle.WRAP;
	protected _mass: number = 1.0;
	protected _maxSpeed: number = 10;
	protected _position: Vector2D;
	protected _velocity: Vector2D;

	// potential edge behaviors         
	public static WRAP: string = "wrap";
	public static BOUNCE: string = "bounce";
	public constructor() {
		super();
		this._position = new Vector2D();
		this._velocity = new Vector2D();
	}


	protected init() {
		this.draw();
	}

	public draw(): void {
		let graphics = this.graphics;
		graphics.clear();
		graphics.lineStyle(1, 0xffffff);
		graphics.moveTo(10, 0);
		graphics.lineTo(-10, 5);
		graphics.lineTo(-10, -5);
		graphics.lineTo(10, 0);
	}


	/**          
	 * * Handles all basic motion. Should be called on each frame / timer interval.          
	 */
	public update(): void {
		// make sure velocity stays within max speed.            
		this._velocity.truncate(this._maxSpeed);
		// add velocity to position             
		this._position = this._position.add(this._velocity);
		// handle any edge behavior             
		if (this._edgeBehavior == Vehicle.WRAP) {
			this.wrap();
		}
		else if (this._edgeBehavior == Vehicle.BOUNCE) {
			this.bounce();
		}
		// update position of sprite     
		this.x = this.position.x;
		this.y = this.position.y;
		// rotate heading to match velocity    
		this.rotation = this._velocity.angle * 180 / Math.PI;
	}


	/**          
	 * * Causes character to bounce off edge if edge is hit.          
	 */
	private bounce(): void {
		if (this.stage != null) {
			if (this.position.x > this.stage.stageWidth) {
				this.position.x = this.stage.stageWidth;
				this.velocity.x *= -1;
			}
			else if (this.position.x < 0) {
				this.position.x = 0;
				this.velocity.x *= -1;
			}
			if (this.position.y > this.stage.stageHeight) {
				this.position.y = this.stage.stageHeight;
				this.velocity.y *= -1;
			} else if (this.position.y < 0) {
				this.position.y = 0;
				this.velocity.y *= -1;
			}
		}
	}

	/**          
	 * * Causes character to wrap around to opposite edge if edge is hit.          
	 * */
	private wrap(): void {
		if (this.stage != null) {
			if (this.position.x > this.stage.stageWidth) this.position.x = 0;
			if (this.position.x < 0) this.position.x = this.stage.stageWidth;
			if (this.position.y > this.stage.stageHeight) this.position.y = 0;
			if (this.position.y < 0) this.position.y = this.stage.stageHeight;
		}
	}

	/**          
	 * * Sets / gets what will happen if character hits edge.          
	 * */
	public set edgeBehavior(value: string) {
		this._edgeBehavior = value;
	}
	public get edgeBehavior(): string {
		return this._edgeBehavior;
	}


	/**          
	 * * Sets / gets mass of character.          
	 * */
	public set mass(value: number) {
		this._mass = value;
	}
	public get mass(): number {
		return this._mass;
	}


	/**          
	 * * Sets / gets maximum speed of character.          
	 * */
	public set maxSpeed(value: number) {
		this._maxSpeed = value;
	}
	public get maxSpeed(): number {
		return this._maxSpeed;
	}


	/**          
	 * * Sets / gets position of character as a Vector2D.          
	 * */
	public set position(value: Vector2D) {
		this._position = value;
		this.x = this._position.x;
		this.y = this._position.y;
	}
	public get position(): Vector2D {
		return this._position;
	}


	/**          
	 * * Sets / gets velocity of character as a Vector2D.          
	 */
	public set velocity(value: Vector2D) {
		this._velocity = value;
	}
	public get velocity(): Vector2D {
		return this._velocity;
	}


	/**          
	 * * Sets x position of character. Overrides Sprite.x to set internal Vector2D position as well.          
	 * */
	public set x(value: number) {
		super.$setX(value);
		this._position.x = value;
	}
	public set y(value: number) {
		super.$setY(value);
		this._position.y = value;
	}


}