/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace org.dziemian.ln.data {
    export class PaymentChannel {
        private node1 : LnNode;

        private node2 : LnNode;

        public constructor(node1 : LnNode, node2 : LnNode) {
            this.node1 = node1;
            this.node2 = node2;
        }

        public getNode1() : LnNode {
            return this.node1;
        }

        public getNode2() : LnNode {
            return this.node2;
        }
    }
    PaymentChannel["__class"] = "org.dziemian.ln.data.PaymentChannel";

}

