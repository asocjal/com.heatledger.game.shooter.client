/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.heatledger.game.shooter.client {
    import ServerConnection = com.heatledger.game.shooter.client.server.connection.ServerConnection;

    import DrawCanvas = com.heatledger.game.shooter.client.view.DrawCanvas;

    import ElementsToDraw = com.heatledger.game.shooter.client.view.ElementsToDraw;

    import TankView = com.heatledger.game.shooter.client.view.TankView;

    export class Main {
        tankView : TankView;

        serverConnection : ServerConnection = null;

        elementsToDraw : ElementsToDraw = new ElementsToDraw();

        drawCanvas : DrawCanvas;

        public static main(args : string[]) {
            window.onload = (e) => {
                let main : Main = new Main();
                main.run();
                return main;
            };
        }

        public run() {
            alert("Waiting for serer connection");
            this.serverConnection = new ServerConnection();
            this.serverConnection.connect();
            this.serverConnection.onConnected((event) => {
                alert("Connected to server");
                let canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
                this.drawCanvas = new DrawCanvas(canvas);
                this.tankView = new TankView(10, 10);
                this.elementsToDraw.add(this.tankView);
                this.onFrame();
                return null;
            });
            this.serverConnection.addMessageListener((message) => {
                let msg : string = message.data.toString();
                let split : string[] = msg.split("x");
                this.tankView.setCooridnates(javaemul.internal.DoubleHelper.parseDouble(split[0]), javaemul.internal.DoubleHelper.parseDouble(split[1]));
                return null;
            });
            let animations : any = {};
        }

        private animateFrame() {
            this.drawCanvas.getCtx().clearRect(0, 0, this.drawCanvas.getWidth(), this.drawCanvas.getHeight());
            this.elementsToDraw.draw(this.drawCanvas);
        }

        private onFrame() {
            this.serverConnection.send("Give me coordinates");
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
