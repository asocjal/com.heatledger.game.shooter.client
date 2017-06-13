/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace org.dziemian.ln.view {
    export class PositionAdapter {
        public adaptPositions(elementsToDraw : ElementsToDraw) {
            for(let index195=elementsToDraw.getList().iterator();index195.hasNext();) {
                let elMain = index195.next();
                {
                    if(elMain != null && elMain instanceof org.dziemian.ln.view.LnNodeView) {
                        let lnNodeMain : LnNodeView = <LnNodeView>elMain;
                        let adjusted : boolean = false;
                        for(let index196=elementsToDraw.getList().iterator();index196.hasNext();) {
                            let elCompare = index196.next();
                            {
                                if(elMain !== elCompare) {
                                    if(elCompare != null && elCompare instanceof org.dziemian.ln.view.LnNodeView) {
                                        let lnNodeCompare : LnNodeView = <LnNodeView>elCompare;
                                        if(this.adjust(lnNodeMain, lnNodeCompare)) {
                                            adjusted = true;
                                        }
                                    }
                                }
                            }
                        }
                        if(adjusted === false) {
                            lnNodeMain.setDirX(0);
                            lnNodeMain.setDirY(0);
                        }
                    }
                }
            }
        }

        private adjust(lnNodeMain : LnNodeView, lnNodeCompare : LnNodeView) : boolean {
            let diffX : number = lnNodeMain.getX() - lnNodeCompare.getX();
            let diffY : number = lnNodeMain.getY() - lnNodeCompare.getY();
            if((diffX < 30) && (diffX > -30) && (diffY < 30) && (diffY > -30)) {
                if(diffX <= 0) {
                    lnNodeMain.setDirX(-0.5);
                }
                if(diffX > 0) {
                    lnNodeMain.setDirX(0.5);
                }
                if(diffY <= 0) {
                    lnNodeMain.setDirY(-0.5);
                }
                if(diffY > 0) {
                    lnNodeMain.setDirY(0.5);
                }
                return true;
            }
            return false;
        }
    }
    PositionAdapter["__class"] = "org.dziemian.ln.view.PositionAdapter";

}

