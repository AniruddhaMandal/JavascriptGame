import SpriteSheet from './SpriteSheet.js'
import {loadImage, loadLevel} from './loaders.js'


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
            console.log(level)});
    
    
    sprite.draw('sky', context, 90,90)
    sprite.draw('ground',context,45,45);
    for(let x=0; x < 25; ++x){
        for(let y=0; y < 14; ++y){
            sprite.drawTile('sky', context, x, y);
        }
    }
    for(let x=0; x < 25;++x){
        for(let y=12; y < 14; ++y){
            sprite.drawTile('ground', context, x, y);
        }
    }
})
