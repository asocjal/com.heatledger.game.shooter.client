/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.heatledger.game.shooter.client.view {
    import ArrayList = java.util.ArrayList;

    import List = java.util.List;

    export class ElementsToDraw {
        private elements : List<ElementView> = <any>(new ArrayList<ElementView>());

        public add(elementView : ElementView) {
            this.elements.add(elementView);
        }

        public draw(drawCanvas : DrawCanvas) {
            for(let index144=this.elements.iterator();index144.hasNext();) {
                let el = index144.next();
                {
                    el.draw(drawCanvas);
                }
            }
        }

        public getSize() : number {
            return this.elements.size();
        }

        public get(index : number) : ElementView {
            return this.elements.get(index);
        }

        public getList() : List<ElementView> {
            return this.elements;
        }
    }
    ElementsToDraw["__class"] = "com.heatledger.game.shooter.client.view.ElementsToDraw";

}

