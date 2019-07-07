class IsoWorld extends egret.Sprite {
	private _floor: egret.Sprite;
	private _objects: Array<IsoObject>;
	private _world: egret.Sprite;
	public constructor() {
		super();
		this._floor = new egret.Sprite();
		this.addChild(this._floor);
		this._world = new egret.Sprite();
		this.addChild(this._world);
		this._objects = new Array();
	}

	public addChildToWorld(child: IsoObject): void {
		this._world.addChild(child);
		this._objects.push(child);
		this.sort();
	}
	public addChildToFloor(child: IsoObject): void {
		this._floor.addChild(child);
	}

	private sort(): void {
		this._objects.sort((a, b) => {
			return a.depth - b.depth;
		});
		for (var i = 0; i < this._objects.length; i++) {
			this._world.addChildAt(this._objects[i], i);
		}
	}


}