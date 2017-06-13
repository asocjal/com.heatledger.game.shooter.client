/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.heatledger.game.shooter.client.view {
    import Animation = com.heatledger.game.shooter.client.tools.Animation;

    export class TankView implements ElementView {
        private radius : number = 5;

        private dirx : number;

        private diry : number;

        private x : number;

        private y : number;

        private selected : boolean = false;

        animation : Animation = new Animation("sprite-breakable-block", 10, 0, 84);

        public setCooridnates(x : number, y : number) {
            this.x = x;
            this.y = y;
        }

        public constructor(x : number, y : number) {
            this.dirx = 0;
            this.diry = 0;
            this.x = 0;
            this.y = 0;
            this.x = x;
            this.y = y;
        }

        public getX() : number {
            return this.x;
        }

        public getY() : number {
            return this.y;
        }

        public setDirX(dirX : number) {
            this.dirx = dirX;
        }

        public setDirY(dirY : number) {
            this.diry = dirY;
        }

        public draw(drawCanvas : DrawCanvas) {
            this.x += this.dirx;
            this.y += this.diry;
            if((this.x < this.radius + 1) || (this.x > drawCanvas.getWidth() - this.radius - 1)) {
                this.dirx = -this.dirx;
            }
            if((this.y < this.radius + 1) || (this.y > drawCanvas.getHeight() - this.radius - 1)) {
                this.diry = -this.diry;
            }
            this.animation.draw(drawCanvas, this.x, this.y);
        }

        public isSelected() : boolean {
            return this.selected;
        }

        public setSelected(selected : boolean) {
            this.selected = selected;
        }
    }
    TankView["__class"] = "com.heatledger.game.shooter.client.view.TankView";
    TankView["__interfaces"] = ["com.heatledger.game.shooter.client.view.ElementView"];


}

