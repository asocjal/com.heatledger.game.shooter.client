/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace org.dziemian.ln.main {
    import LnNode = org.dziemian.ln.data.LnNode;

    import PaymentChannel = org.dziemian.ln.data.PaymentChannel;

    import DrawCanvas = org.dziemian.ln.view.DrawCanvas;

    import ElementView = org.dziemian.ln.view.ElementView;

    import ElementsToDraw = org.dziemian.ln.view.ElementsToDraw;

    import LnNodeView = org.dziemian.ln.view.LnNodeView;

    import PaymentChannelView = org.dziemian.ln.view.PaymentChannelView;

    import PositionAdapter = org.dziemian.ln.view.PositionAdapter;

    export class CanvasDrawing {
        elementsToDraw : ElementsToDraw = new ElementsToDraw();

        positionAdapter : PositionAdapter = new PositionAdapter();

        drawCanvas : DrawCanvas;

        public static main(args : string[]) {
            window.onload = (e) => {
                return new CanvasDrawing();
            };
        }

        public constructor() {
            alert("V13");
            for(let i : number = 0; i < 20; i++) {
                let nodeView : LnNodeView = new LnNodeView(100 + Math.random() * 400, 100 + Math.random() * 400, new LnNode("Node Czarka"));
                this.elementsToDraw.add(nodeView);
            }
            let size : number = this.elementsToDraw.getSize();
            for(let i : number = 0; i < 40; i++) {
                let nodeView1 : LnNodeView = <LnNodeView>this.elementsToDraw.get((<number>(Math.random() * size)|0));
                let nodeView2 : LnNodeView = <LnNodeView>this.elementsToDraw.get((<number>(Math.random() * size)|0));
                if(nodeView1 !== nodeView2) {
                    let node1 : LnNode = nodeView1.getLnNode();
                    let node2 : LnNode = nodeView2.getLnNode();
                    let paymentChannel : PaymentChannel = new PaymentChannel(node1, node2);
                    this.elementsToDraw.add(new PaymentChannelView(paymentChannel));
                }
            }
            console.info("creating canvas drawing example");
            let canvasElement : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
            this.drawCanvas = new DrawCanvas(canvasElement);
            canvasElement.addEventListener("mousedown", (event) => {
                console.info("Mouse down");
                return null;
            }, true);
            canvasElement.addEventListener("mousemove", (event) => {
                console.info("Mouse move");
                return null;
            }, true);
            canvasElement.addEventListener("mouseup", (event) => {
                console.info("Mouse up");
                this.onMouseUp(event);
                return null;
            }, true);
            this.onFrame();
        }

        private socketOpen() {
            console.info("Socket connectong... to remote ");
            let socket : WebSocket = new WebSocket("ws://192.168.1.3/helloworld-1.1-SNAPSHOT/websocketendpoint");
            socket.addEventListener("open", ((socket) => {
                return (event) => {
                    console.info("Socket opened");
                    socket.send("Dzien doberek");
                    console.info("Socket sent \"dzien doberek\"");
                    return null;
                }
            })(socket));
            socket.addEventListener("message", (event) => {
                console.info("Message received: " + event.data);
                return null;
            });
        }

        public onMouseUp(event : MouseEvent) {
            event.preventDefault();
            this.socketOpen();
            console.info("Looking for node. Coordinates are: " + event.layerX + " and " + event.layerY);
            let clicked : boolean = false;
            for(let index193=this.elementsToDraw.getList().iterator();index193.hasNext();) {
                let el = index193.next();
                {
                    if(el != null && el instanceof org.dziemian.ln.view.LnNodeView) {
                        let lnNode : LnNodeView = <LnNodeView>el;
                        lnNode.setSelected(false);
                        if((lnNode.getX() > event.layerX - 10) && (lnNode.getX() < event.layerX + 10) && (lnNode.getY() > event.layerY - 10) && (lnNode.getY() < event.layerY + 10)) {
                            console.info("Selecting node");
                            lnNode.setSelected(true);
                            clicked = true;
                        }
                    }
                }
            }
            if(clicked === false) {
                let nodeView : LnNodeView = new LnNodeView(event.layerX, event.layerY, new LnNode("Node Czarka"));
                this.elementsToDraw.add(nodeView);
            }
        }

        private animateFrame() {
            this.drawCanvas.getCtx().clearRect(0, 0, this.drawCanvas.getWidth(), this.drawCanvas.getHeight());
            this.elementsToDraw.draw(this.drawCanvas);
        }

        private onFrame() {
            this.positionAdapter.adaptPositions(this.elementsToDraw);
            this.animateFrame();
            window.requestAnimationFrame((time) => {
                this.onFrame();
            });
        }
    }
    CanvasDrawing["__class"] = "org.dziemian.ln.main.CanvasDrawing";

}


org.dziemian.ln.main.CanvasDrawing.main(null);
