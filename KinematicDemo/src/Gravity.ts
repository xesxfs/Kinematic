class Gravity extends BaseSprite {
	private particles: Array<Ball>;
	private numParticles: number = 30;
	public constructor() {
		super();
	}

	public init() {
		this.particles = [];
		for (let i = 0; i < this.numParticles; i++) {
			var particle: Ball = new Ball(5);
			this.randDisplay(particle);
			particle.mass = 1;
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
				this.gravitate(partA, partB);
			}
		}
	}

	public gravitate(partA: Ball, partB: Ball) {
		var dx = partB.x - partA.x;
		var dy = partB.y - partA.y;
		var distSQ = dx * dx + dy * dy;
		var dist = Math.sqrt(distSQ);
		var force = partA.mass * partB.mass / distSQ;
		var ax = force * dx / dist;
		var ay = force * dy / dist;

		partA.vx += ax / partA.mass;
		partA.vy += ay / partA.mass;

		partB.vx -= ax / partB.mass;
		partB.vy -= ay / partB.mass;
	}

}