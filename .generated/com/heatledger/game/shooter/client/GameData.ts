/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.heatledger.game.shooter.client {
    import ArrayList = java.util.ArrayList;

    import List = java.util.List;

    import TankView = com.heatledger.game.shooter.client.view.TankView;

    export class GameData {
        public team1Tanks : List<TankView> = <any>(new ArrayList<TankView>());

        public team2Tanks : List<TankView> = <any>(new ArrayList<TankView>());

        public getTeam1Tanks() : List<TankView> {
            return this.team1Tanks;
        }
    }
    GameData["__class"] = "com.heatledger.game.shooter.client.GameData";

}

