/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.heatledger.game.shooter.client.server.connection {
    export class ServerConnection {
        socket : WebSocket = null;

        private connected : boolean = false;

        public posX : number = 0;

        public posY : number = 0;

        public connect() {
            console.info("Socket connecting... to remote ");
            this.socket = new WebSocket("ws://192.168.0.20/shooter/websocketendpoint");
        }

        public onConnected(listener : (p1: Event) => any) {
            this.socket.addEventListener("open", listener);
        }

        public send(message : string) {
            this.socket.send(message);
        }

        public addMessageListener(listener : (p1: MessageEvent) => any) {
            this.socket.addEventListener("message", listener);
        }
    }
    ServerConnection["__class"] = "com.heatledger.game.shooter.client.server.connection.ServerConnection";

}

