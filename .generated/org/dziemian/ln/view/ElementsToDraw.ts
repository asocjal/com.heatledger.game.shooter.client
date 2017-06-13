/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace org.dziemian.ln.view {
    import ArrayList = java.util.ArrayList;

    import List = java.util.List;

    export class ElementsToDraw {
        private elements : List<ElementView> = <any>(new ArrayList<ElementView>());

        public add(elementView : ElementView) {
            this.elements.add(elementView);
        }

        public draw(drawCanvas : DrawCanvas) {
            for(let index194=this.elements.iterator();index194.hasNext();) {
                let el = index194.next();
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
    ElementsToDraw["__class"] = "org.dziemian.ln.view.ElementsToDraw";

}

