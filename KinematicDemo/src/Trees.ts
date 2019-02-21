class Trees extends BaseSprite {
	private trees: Array<Tree>;
	private numTrees: number = 10;
	private fl: number = 250;
	private vpX: number = 0;
	private vpY: number = 0;
	private floor: number = 50;
	private vz: number = 0;
	private friction: number = .98;

	public constructor() {
		super();
	}

	public init() {
		this.vpX = this.stage.stageWidth / 2;
		this.vpY = this.stage.stageHeight / 2;
		document.onkeydown = this.onkeyDown.bind(this);
		document.onkeyup = this.onkeyUp.bind(this);
		this.trees = [];
		for (let i = 0; i < this.numTrees; i++) {
			let tree = new Tree();
			this.trees.push(tree);
			tree.xpos = Math.random() * 2000 - 1000;
			tree.ypos = this.floor;
			tree.zpos = Math.random() * 10000;
			this.addChild(tree);
		}

		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	}

	public onEnterFrame() {
		for (let i = 0; i < this.numTrees; i++) {
			let tree = this.trees[i];
			this.move(tree);
		}
		this.vz *= this.friction;
		this.sortZ();
	}


	private onkeyDown(event: KeyboardEvent) {
		switch (event.keyCode) {
			case 38:
				this.vz -= 1;
				break;
			case 40:
				this.vz += 1;
				break;
		}
	}

	private onkeyUp(event: KeyboardEvent) {

	}

	private move(tree: Tree) {
		tree.zpos += this.vz;
		if (tree.zpos < -this.fl) {
			tree.zpos += 10000;
		}
		if (tree.zpos > 10000 - this.fl) {
			tree.zpos -= 10000;
		}
		var scale: number = this.fl / (this.fl + tree.zpos);
		tree.scaleX = tree.scaleY = scale;
		tree.x = this.vpX + tree.xpos * scale;
		tree.y = this.vpY + tree.ypos * scale;
		tree.alpha = scale * .7 + .3;
	}

	public sortZ() {
		this.trees.sort((a: Tree, b: Tree): number => { return b.zpos - a.zpos });
		for (let i = 0; i < this.numTrees; i++) {
			var tree = this.trees[i];
			this.setChildIndex(tree, i);
		}
	}
}