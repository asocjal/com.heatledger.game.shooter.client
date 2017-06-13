/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace org.dziemian.ln.main {
    export class HelloWorld {
        public static main(args : string[]) {
            alert("V1");
            let e : HTMLElement = document.getElementById("target");
            e.innerHTML = "Hello world!";
            let canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
            canvas.width = 800;
            canvas.height = 600;
        }
    }
    HelloWorld["__class"] = "org.dziemian.ln.main.HelloWorld";

}


org.dziemian.ln.main.HelloWorld.main(null);
