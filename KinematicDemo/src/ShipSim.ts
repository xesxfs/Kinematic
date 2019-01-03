class ShipSim extends BaseSprite {
	private ship: Ship;
	private vr: number = 0;
	/***推力**/
	private thrust: number = 0;
	private vx: number = 0;
	private vy: number = 0;
	public constructor() {
		super();
	}

	protected init() {		
		this.ship = new Ship();
		this.ship.draw(false);
		this.setDisplayCenter(this.ship);
		this.addChild(this.ship);
		this.setDisplayCenter(this.ship);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		document.onkeydown = this.onkeyDown.bind(this);
		document.onkeyup = this.onkeyUp.bind(this);
	}

	private onEnterFrame() {
		this.ship.rotation += this.vr;
		let angle = this.ship.rotation * Math.PI / 180;
		let ax = Math.cos(angle) * this.thrust;
		let ay = Math.sin(angle) * this.thrust;
		this.vx += ax;
		this.vy += ay;
		this.ship.x += this.vx;
		this.ship.y += this.vy;
	}

	private onkeyDown(event: KeyboardEvent) {

		if (event.keyCode === 37) {
			this.vr = -5;
		}

		if (event.keyCode === 39) {
			this.vr = 5;
		}

		if (event.keyCode === 38) {
			this.thrust = 0.2;
			this.ship.draw(true);
		}
	}

	private onkeyUp(event: KeyboardEvent) {
		this.vr = 0;
		this.thrust = 0;
		this.ship.draw(false);
	}
}