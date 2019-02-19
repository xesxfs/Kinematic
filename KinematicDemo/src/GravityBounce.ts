class GravityBounce extends BaseSprite {
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
				this.checkCollision(partA, partB);
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

	private checkCollision(b0: Ball, b1: Ball) {
		var dx: number = b1.x - b0.x;
		var dy: number = b1.y - b0.y;
		var dist: number = Math.sqrt(dx * dx + dy * dy);

		if (dist < b0.radius + b1.radius) {
			// 计算角度和正余弦值
			var angle: number = Math.atan2(dy, dx);
			var sin: number = Math.sin(angle);
			var cos: number = Math.cos(angle);

			// 旋转 ball0 的位置
			var pos0 = new egret.Point(0, 0);
			// 旋转 ball1 的位置
			var pos1 = this.rotate(dx, dy, sin, cos, true);

			// 旋转 ball0 的速度
			var vel0 = this.rotate(b0.vx, b0.vy, sin, cos, true);
			// 旋转 ball1 的位置
			var vel1 = this.rotate(b1.vx, b1.vy, sin, cos, true);

			// 碰撞的作用力
			var vxTotal: number = vel0.x - vel1.x;
			vel0.x = ((b0.mass - b1.mass) * vel0.x + 2 * b1.mass * vel1.x) / (b0.mass + b1.mass);
			vel1.x = vxTotal + vel0.x;

			// 更新位置
			var absV: number = Math.abs(vel0.x) + Math.abs(vel1.x);
			//小球之间重叠部分的大小
			var overlap: number = (b0.radius + b1.radius) - Math.abs(pos0.x - pos1.x);
			//根据小球速度与绝对速度的百分比，让小球移动出重叠的那一部分
			pos0.x += vel0.x / absV * overlap;
			pos1.x += vel1.x / absV * overlap;

			// 将位置旋转回来
			var pos0F = this.rotate(pos0.x, pos0.y, sin, cos, false);
			var pos1F = this.rotate(pos1.x, pos1.y, sin, cos, false);

			// 将位置调整为屏幕的实际位置
			b1.x = b0.x + pos1F.x;
			b1.y = b0.y + pos1F.y;
			b0.x = b0.x + pos0F.x;
			b0.y = b0.y + pos0F.y;

			// 将速度旋转回来
			let vel0F = this.rotate(vel0.x, vel0.y, sin, cos, false);
			let vel1F = this.rotate(vel1.x, vel1.y, sin, cos, false);
			b0.vx = vel0F.x
			b0.vy = vel0F.y;
			b1.vx = vel1F.x;
			b1.vy = vel1F.y;
		}
	}

	private rotate(x: number, y: number, sin: number, cos: number, reverse: boolean): egret.Point {
		var result = new egret.Point();
		if (reverse) {
			result.x = x * cos + y * sin;
			result.y = y * cos - x * sin;
		} else {
			result.x = x * cos - y * sin;
			result.y = y * cos + x * sin;
		}
		return result;
	}

}