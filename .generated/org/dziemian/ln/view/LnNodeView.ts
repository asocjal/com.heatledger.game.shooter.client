/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace org.dziemian.ln.view {
    import LnNode = org.dziemian.ln.data.LnNode;

    export class LnNodeView implements ElementView {
        private radius : number = 5;

        private dirx : number;

        private diry : number;

        private x : number;

        private y : number;

        private selected : boolean = false;

        private node : LnNode;

        public constructor(x : number, y : number, node : LnNode) {
            this.dirx = 0;
            this.diry = 0;
            this.x = 0;
            this.y = 0;
            this.x = x;
            this.y = y;
            this.node = node;
            this.node.setView(this);
        }

        public getLnNode() : LnNode {
            return this.node;
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
            let ctx : CanvasRenderingContext2D = drawCanvas.getCtx();
            ctx.beginPath();
            if(this.selected === true) {
                ctx.fillStyle = (<any>"rgb(50,50,250)");
                ctx.arc(this.x, this.y, this.radius * 2, 0, 2 * Math.PI);
            } else {
                ctx.fillStyle = (<any>"rgb(100,100,200)");
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            }
            ctx.fill();
            ctx.closePath();
        }

        public isSelected() : boolean {
            return this.selected;
        }

        public setSelected(selected : boolean) {
            this.selected = selected;
        }
    }
    LnNodeView["__class"] = "org.dziemian.ln.view.LnNodeView";
    LnNodeView["__interfaces"] = ["org.dziemian.ln.view.ElementView"];


}

