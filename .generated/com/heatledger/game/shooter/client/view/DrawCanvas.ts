/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.heatledger.game.shooter.client.view {
    export class DrawCanvas {
        private canvas : HTMLCanvasElement;

        private ctx : CanvasRenderingContext2D;

        public constructor(canvas : HTMLCanvasElement) {
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
        }

        public getWidth() : number {
            return this.canvas.width;
        }

        public getHeight() : number {
            return this.canvas.height;
        }

        public getCtx() : CanvasRenderingContext2D {
            return this.ctx;
        }
    }
    DrawCanvas["__class"] = "com.heatledger.game.shooter.client.view.DrawCanvas";

}

