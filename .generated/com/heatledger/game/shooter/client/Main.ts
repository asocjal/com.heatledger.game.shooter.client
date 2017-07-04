/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.heatledger.game.shooter.client {
    import ArrayList = java.util.ArrayList;

    import List = java.util.List;

    import Tanks = com.heatledger.game.shooter.client.objects.Tanks;

    import ServerConnection = com.heatledger.game.shooter.client.server.connection.ServerConnection;

    import DrawCanvas = com.heatledger.game.shooter.client.view.DrawCanvas;

    import ElementsToDraw = com.heatledger.game.shooter.client.view.ElementsToDraw;

    import TankView = com.heatledger.game.shooter.client.view.TankView;

    export class Main {
        serverConnection : ServerConnection = null;

        elementsToDraw : ElementsToDraw = new ElementsToDraw();

        greenTanks : Tanks = new Tanks(this.elementsToDraw, TankView.Type.green);

        redTanks : Tanks = new Tanks(this.elementsToDraw, TankView.Type.red);

        drawCanvas : DrawCanvas;

        public static main(args : string[]) {
            window.onload = (e) => {
                let main : Main = new Main();
                main.run();
                return main;
            };
        }

        public run() {
            this.serverConnection = new ServerConnection();
            this.serverConnection.connect();
            this.serverConnection.onConnected((event) => {
                let canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
                this.drawCanvas = new DrawCanvas(canvas);
                this.serverConnection.send("get-sell-offers");
                this.onFrame();
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
            for(let index752=0; index752 < arr.length; index752++) {
                let obj = arr[index752];
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
