import Compositor from './Compositor.js'
import {createBackgroundLayer} from './backgroundLayer.js'
import {loadLevel} from './loaders.js'
import {loadMarioSprite, loadBackgroundSprites} from './sprites.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

function createSpriteLayer(sprite, pos){
    return function spriteLayer(context){
        sprite.draw('idle', context, pos.x, pos.y);
    }
}

Promise.all([
    loadMarioSprite(),loadBackgroundSprites(), loadLevel('1-1')
])
.then(([marioSprite,backgroundSprites, level]) => {

    const com = new Compositor();
    
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    com.layers.push(backgroundLayer);

    const pos = {
        x: 64,
        y: 64
    };

    const spriteLayer = createSpriteLayer(marioSprite, pos);
    com.layers.push(spriteLayer);

    function update(){
        com.draw(context);
        pos.x +=2;
        pos.y +=2;
        requestAnimationFrame(update);
    };
    update()
});