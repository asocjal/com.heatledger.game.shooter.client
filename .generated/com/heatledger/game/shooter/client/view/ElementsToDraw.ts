/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.heatledger.game.shooter.client.view {
    import HashMap = java.util.HashMap;

    import List = java.util.List;

    import Map = java.util.Map;

    export class ElementsToDraw {
        private elemntGroups : Map<string, List<any>> = <any>(new HashMap<string, List<any>>());

        public assign(id : string, elements : List<any>) {
            this.elemntGroups.put(id, elements);
        }

        public draw(drawCanvas : DrawCanvas) {
            for(let index756=this.elemntGroups.values().iterator();index756.hasNext();) {
                let elements = index756.next();
                {
                    for(let index757=elements.iterator();index757.hasNext();) {
                        let el = index757.next();
                        {
                            el.draw(drawCanvas);
                        }
                    }
                }
            }
        }
    }
    ElementsToDraw["__class"] = "com.heatledger.game.shooter.client.view.ElementsToDraw";

}

