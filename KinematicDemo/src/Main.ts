//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

    public constructor() {
        super();
        console.log("Main");
    }

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame();
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }


    protected createGameScene(): void {
        mouse.enable(this.stage);
        // this.addChild(new RotateToMouse());
        // this.addChild(new WorldTest());
        // this.addChild(new Bobbing());
        // this.addChild(new Wave1());
        // this.addChild(new Wave2());
        // this.addChild(new Pulse());
        // this.addChild(new Random());
        // this.addChild(new Circle());
        // this.addChild(new Oval());
        // this.addChild(new MouseDistance());
        // this.addChild(new DrawingCurves());
        // this.addChild(new MultiCurve2());
        // this.addChild(new FollowMouse());
        // this.addChild(new ShipSim());
        // this.addChild(new Bouncing());
        // this.addChild(new Bouncing2());
        // this.addChild(new Friction1());
        // this.addChild(new Friction2());
        // this.addChild(new ShipSimFriction());
        // this.addChild(new Easing1());
        // this.addChild(new EaseToMouse());
        // this.addChild(new Spring1());
        // this.addChild(new Spring2());
        // this.addChild(new Spring3());
        // this.addChild(new Spring4());
        // this.addChild(new Spring5());
        // this.addChild(new Chain());
        // this.addChild(new MultiSpring());
        // this.addChild(new OffsetSpring());
        // this.addChild(new DoubleSpring());
        // this.addChild(new Bubbles());
        // this.addChild(new Bubbles2());
        // this.addChild(new Rotate1());
        // this.addChild(new Rotate2());
        // this.addChild(new Rotate3());
        // this.addChild(new AngleBounce());
        // this.addChild(new AngleBounceRotate());
        // this.addChild(new AngleBounceFinal());
        // this.addChild(new MultiAngleBounce());
        // this.addChild(new Billiard1());
        // this.addChild(new Billiard2());
        // this.addChild(new Billiard3());       
        // this.addChild(new MultiBilliard2());
        // this.addChild(new Gravity());
        // this.addChild(new GravityBounce());
        // this.addChild(new GravityRandom());
        // this.addChild(new Orbit());
        // this.addChild(new NodeGarden());
        // this.addChild(new SingleSegment());
        // this.addChild(new TwoSegment());
        // this.addChild(new Walking1());
        // this.addChild(new Walking2());
        // this.addChild(new Walking3());
        // this.addChild(new Walking4());
        // this.addChild(new RealWalk());
        // this.addChild(new Perspective1());
        // this.addChild(new Velocity3D());
        // this.addChild(new Bounce3D());
        // this.addChild(new MultiBounce3D());
        // this.addChild(new Fireworks());
        // this.addChild(new Trees());
        // this.addChild(new Easing3D());
        // this.addChild(new RotateY());
        // this.addChild(new RotateXY());
        // this.addChild(new Lines3D1());
        // this.addChild(new Lines3D2());
        // this.addChild(new Square3D());
        // this.addChild(new SpinningE());
        // this.addChild(new Triangles());
        // this.addChild(new Cube());

        this.addChild(new VehicleTest());
        // this.addChild(new SeekTest());        

        // new KeyBoard();
    }

}
