/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace org.dziemian.ln.data {
    import HasElementView = org.dziemian.ln.view.HasElementView;

    import LnNodeView = org.dziemian.ln.view.LnNodeView;

    export class LnNode implements HasElementView<LnNodeView> {
        private name : string;

        private lnNodeView : LnNodeView;

        public constructor(name : string) {
            this.name = name;
        }

        public setView(lnNodeView? : any) : any {
            if(((lnNodeView != null && lnNodeView instanceof org.dziemian.ln.view.LnNodeView) || lnNodeView === null)) {
                let __args = Array.prototype.slice.call(arguments);
                return <any>(() => {
                    this.lnNodeView = lnNodeView;
                })();
            } else throw new Error('invalid overload');
        }

        public getView() : LnNodeView {
            return this.lnNodeView;
        }
    }
    LnNode["__class"] = "org.dziemian.ln.data.LnNode";
    LnNode["__interfaces"] = ["org.dziemian.ln.view.HasElementView"];


}

