/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.heatledger.game.shooter.client {
    import ArrayList = java.util.ArrayList;

    import List = java.util.List;

    import Tanks = com.heatledger.game.shooter.client.objects.Tanks;

    import ServerConnection = com.heatledger.game.shooter.client.server.connection.ServerConnection;

    import Animation = com.heatledger.game.shooter.client.tools.Animation;

    import Audio = com.heatledger.game.shooter.client.tools.Audio;

    import SingleAnimation = com.heatledger.game.shooter.client.tools.SingleAnimation;

    import DrawCanvas = com.heatledger.game.shooter.client.view.DrawCanvas;

    import ElementsToDraw = com.heatledger.game.shooter.client.view.ElementsToDraw;

    import TankView = com.heatledger.game.shooter.client.view.TankView;

    export class Main {
        serverConnection : ServerConnection = null;

        elementsToDraw : ElementsToDraw = new ElementsToDraw();

        greenTanks : Tanks = new Tanks(this.elementsToDraw, TankView.Type.green);

        redTanks : Tanks = new Tanks(this.elementsToDraw, TankView.Type.red);

        animation : Animation = new Animation("sprite-breakable-block", 10, 168, 84, 4);

        audio : Audio = new Audio("audio_gun_shot");

        singleAnimation : SingleAnimation = new SingleAnimation(this.animation, this.audio);

        drawCanvas : DrawCanvas;

        public static main(args : string[]) {
            window.onload = (e) => {
                let main : Main = new Main();
                main.run();
                return main;
            };
        }

        public onMouseUp(event : MouseEvent) {
            event.preventDefault();
            this.singleAnimation.play(event.clientX - 40, event.clientY - 40);
        }

        public run() {
            this.serverConnection = new ServerConnection();
            this.serverConnection.connect();
            this.serverConnection.onConnected((event) => {
                let canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
                this.drawCanvas = new DrawCanvas(canvas);
                this.serverConnection.send("get-sell-offers");
                this.onFrame();
                canvas.addEventListener("mouseup", (mouseEvent) => {
                    console.info("Mouse up");
                    this.onMouseUp(mouseEvent);
                    return null;
                }, true);
                return null;
            });
            this.serverConnection.addMessageListener((message) => {
                let msg : string = message.data.toString();
                let msgs : string[] = msg.split("SEPARATEMSG");
                if(msgs.length !== 2) {
                    throw new Error("Incorrect message: " + msg);
                }
                this.refreshOffers(msgs[1], this.greenTanks);
                this.refreshOffers(msgs[0], this.redTanks);
                this.serverConnection.send("get-sell-offers");
                return null;
            });
        }

        private refreshOffers(jsonMsg : string, tanks : Tanks) {
            let arr : Array<any> = <Array<any>>JSON.parse(jsonMsg);
            let offers : List<Offer> = <any>(new ArrayList<Offer>((<number>arr.length|0)));
            for(let index155=0; index155 < arr.length; index155++) {
                let obj = arr[index155];
                {
                    offers.add(this.revive(obj));
                }
            }
            tanks.refreshElementsToDraw(offers);
        }

        private revive(untypedDto : any) : Offer {
            return <Offer>$.extend(new Offer(), untypedDto);
        }

        private animateFrame() {
            this.drawCanvas.getCtx().clearRect(0, 0, this.drawCanvas.getWidth(), this.drawCanvas.getHeight());
            this.elementsToDraw.draw(this.drawCanvas);
            this.singleAnimation.onFrame(this.drawCanvas);
        }

        private onFrame() {
            this.animateFrame();
            window.requestAnimationFrame((time) => {
                this.onFrame();
            });
        }

        constructor() {
        }
    }
    Main["__class"] = "com.heatledger.game.shooter.client.Main";

}


com.heatledger.game.shooter.client.Main.main(null);
