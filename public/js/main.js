import SpriteSheet from './SpriteSheet.js'
import {loadImage, loadLevel} from './loaders.js'

function drawBackground(background, context, sprite){
    background.renges.forEach(([x1, x2, y1, y2]) => {
        for(let x=x1; x < x2; ++x){
            for(let y=y1; y < y2; ++y){
                sprite.drawTile(background.tile, context, x, y);
            }
        }        
    })
}

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
context.fillStyle = "#69A1EE";
context.fillRect(0, 0, 50, 50);

loadImage('img/tileset.png')
.then(image => {
    const sprite = new SpriteSheet(image, 16,16);
    sprite.define('ground', 0,0);
    sprite.define('sky', 3,21);
    
    loadLevel('1-1')
        .then(level => {
            level.backgrounds.forEach(background => drawBackground(background, context, sprite))   
        });
})
