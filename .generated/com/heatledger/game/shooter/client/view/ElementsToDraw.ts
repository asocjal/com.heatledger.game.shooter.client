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
            for(let index159=this.elemntGroups.values().iterator();index159.hasNext();) {
                let elements = index159.next();
                {
                    for(let index160=elements.iterator();index160.hasNext();) {
                        let el = index160.next();
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

