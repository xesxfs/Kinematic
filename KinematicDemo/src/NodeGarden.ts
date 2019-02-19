class NodeGarden extends BaseSprite {
	private particles: Array<Ball>;
	private numParticles: number = 50;
	private springAmount: number = .0025;
	private minDist: number = 100;
	public constructor() {
		super();
	}

	public init() {
		this.particles = [];

		for (let i = 0; i < this.numParticles; i++) {
			var size: number = Math.random() * 10 + 2;
			var particle = new Ball(size, 0xffffff);
			this.randDisplay(particle);

			particle.vy = Math.random() * 6 - 3;
			particle.vx = Math.random() * 6 - 3;
			particle.mass = size;

			this.addChild(particle);
			this.particles.push(particle);
		}




		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}
	public onEnterFrame() {
		this.graphics.clear();
		for (let i = 0; i < this.numParticles; i++) {
			var particle: Ball = this.particles[i];
			particle.x += particle.vx;
			particle.y += particle.vy;
			if (particle.x > this.stage.stageWidth) {
				particle.x = 0;
			} else if (particle.x < 0) {
				particle.x = this.stage.stageWidth;
			}

			if (particle.y > this.stage.stageHeight) {
				particle.y = 0;
			} else if (particle.y < 0) {
				particle.y = this.stage.stageHeight;
			}
		}

		for (let i = 0; i < this.numParticles - 1; i++) {
			let partA = this.particles[i];
			for (let j = i + 1; j < this.numParticles; j++) {
				let partB = this.particles[j];
				this.spring(partA, partB);
			}
		}

	}

	private spring(partA: Ball, partB: Ball) {
		var dx = partB.x - partA.x;
		var dy = partB.y - partA.y;
		var dist = Math.sqrt(dx * dx + dy * dy);
		if (dist < this.minDist) {
			this.graphics.lineStyle(1, 0xffffff, 1 - dist / this.minDist);
			this.graphics.moveTo(partA.x, partA.y);
			this.graphics.lineTo(partB.x, partB.y);
			var ax: number = dx * this.springAmount;
			var ay: number = dy * this.springAmount;
			partA.vx += ax / partA.mass;
			partA.vy += ay / partA.mass;
			partB.vx -= ax / partB.mass;
			partB.vy -= ay / partB.mass;
		}
	}


}