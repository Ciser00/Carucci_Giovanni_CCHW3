import * as PIXI from "pixi.js"
import { gsap } from "gsap";
import { Rectangle } from "pixi.js";

var tl = gsap.timeline({repeat: 0 });
var t2 = gsap.timeline({repeat: 0});
var t3 = gsap.timeline({repeat: 0});
const load = (app: PIXI.Application) => {
    return new Promise<void>((resolve) => {

            resolve();    
    });
};

const main = async () => {
    // Actual app
    let app = new PIXI.Application();
    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';
    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);
    // set up gui

    // Load assets
    await load(app);

    let sprite = new PIXI.Sprite( );    //Q why does this need to stay to keep the background black ?
    app.stage.addChild(sprite);
   // let draw = new PIXI.Graphics();
    for(let i = 0; i < 1600 ; i+=200){
        let draw = new PIXI.Graphics();
        draw.beginFill(0x0000FF, 1)
        draw.lineStyle(2, 0x0000FF, 1)  
        draw.drawCircle(i,-55, 50)
        tl.to(draw, {
            duration:.5,
            y: 700,
        
        })
        tl.to(draw, {
            duration:1,
            y: 0,
        })
        app.stage.addChild(draw); 
    }
  
    for(let i = 50; i < 1600 ; i+=200){
        let draw = new PIXI.Graphics();
        draw.beginFill(0x0000FF, 1)
        draw.lineStyle(2, 0x0000FF, 1)  
        draw.drawCircle(i,window.innerHeight +80, 50)
        t2.to(draw, {
            duration:.5,
            y: -800,
            
        })
        t2.to(draw, {
            duration:1,
            y: 0,
        })
        app.stage.addChild(draw);  
    }
    for(let i = 1; i < 27 ; i+=1){ 
        let rect = new PIXI.Graphics();
        rect.beginFill(0xDE3249);
        rect.drawRect((i*50), 0, 10, 800);
        rect.endFill();
        tl.to(rect, {x: -3000,duration: .2} );
        app.stage.addChild(rect); 
    }
    for(let i = 1; i < 27 ; i+=1){ 
        let rect = new PIXI.Graphics();
        rect.beginFill(0xDE3249);
        rect.drawRect((0), i*25, 1300, 5);
        rect.endFill();    
        t2.to(rect, {y: 3000,duration: .2} );
        app.stage.addChild(rect); 
    }
    for(let i = 1; i < 18 ; i+=1){ 
        let rect = new PIXI.Graphics();
        rect.beginFill(0xDE3249);
        rect.drawRect((-100),(-100), 100, 100);
        rect.endFill()
        let x = i
        if(i<=7){
            tl.to(rect, {x: 100*i,y:100*i,duration: 1} );
        }
        else if (i>9){
            tl.to(rect, {x: i*100,y:100*(i-10),duration: 1} );
        }

        app.stage.addChild(rect); 

    }
 

    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        sprite.x = window.innerWidth / 2 - sprite.width / 2;
        sprite.y = window.innerHeight / 2 - sprite.height / 2;
    });
    document.body.appendChild(app.view);
    app.ticker.add(update);
    

};


function update(delta: number) {
    let draw = new PIXI.Graphics();
    draw.beginFill(0x0000FF, 1)
    draw.lineStyle(2, 0x0000FF, 1)  
    draw.drawCircle((window.outerWidth/2),(window.outerHeight/2), 280)
    
};

main();
