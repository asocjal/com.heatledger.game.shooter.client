/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace org.dziemian.ln.view {
    import PaymentChannel = org.dziemian.ln.data.PaymentChannel;

    export class PaymentChannelView implements ElementView {
        private paymentChannel : PaymentChannel;

        public constructor(paymentChannel : PaymentChannel) {
            this.paymentChannel = paymentChannel;
        }

        public draw(drawCanvas : DrawCanvas) {
            let ctx : CanvasRenderingContext2D = drawCanvas.getCtx();
            let node1View : LnNodeView = this.paymentChannel.getNode1().getView();
            let node2View : LnNodeView = this.paymentChannel.getNode2().getView();
            ctx.beginPath();
            if(node1View.isSelected() || node2View.isSelected()) {
                ctx.strokeStyle = (<any>"rgb(50,50,250)");
                ctx.lineWidth = 4;
            } else {
                ctx.strokeStyle = (<any>"rgb(100,100,200)");
                ctx.lineWidth = 1;
            }
            ctx.moveTo(node1View.getX(), node1View.getY());
            ctx.lineTo(node2View.getX(), node2View.getY());
            ctx.stroke();
            ctx.closePath();
        }
    }
    PaymentChannelView["__class"] = "org.dziemian.ln.view.PaymentChannelView";
    PaymentChannelView["__interfaces"] = ["org.dziemian.ln.view.ElementView"];


}

