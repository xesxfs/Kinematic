class Orbit extends BaseSprite {
	private particles: Array<Ball>;
	private numParticles: number = 2;
	public constructor() {
		super();
	}

	public init() {
		this.particles = [];
		for (let i = 0; i < this.numParticles; i++) {
			let size = Math.random() * 25 + 5;
			var particle: Ball = new Ball(size);
			this.randDisplay(particle);
			// particle.mass = size;
			particle.vx = Math.random() * 6 - 3;
			particle.vy = Math.random() * 6 - 3;
			this.addChild(particle);
			this.particles.push(particle);
		}
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}
	public onEnterFrame() {
		for (let i = 0; i < this.numParticles; i++) {
			var particle: Ball = this.particles[i];
			particle.x += particle.vx;
			particle.y += particle.vy;
		}

		for (let i = 0; i < this.numParticles - 1; i++) {
			let partA = this.particles[i];
			for (let j = i + 1; j < this.numParticles; j++) {
				let partB = this.particles[j];
			}
		}

	}




}