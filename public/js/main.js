import Compositor from './Compositor.js'
import {createSpriteLayer,createBackgroundLayer} from './backgroundLayer.js'
import {loadLevel} from './loaders.js'
import {loadBackgroundSprites} from './sprites.js'
import Entity from './Entity.js'
import {createMario} from './entities.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');




Promise.all([
    createMario(),loadBackgroundSprites(), loadLevel('1-1')
])
.then(([Mario,backgroundSprites, level]) => {

    const com = new Compositor();
    
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    com.layers.push(backgroundLayer);

    const spriteLayer = createSpriteLayer(Mario);
    com.layers.push(spriteLayer);

    const gravity = 0.5;

    function update(){
        com.draw(context);
        Mario.update();
        Mario.vel.y += gravity;
        requestAnimationFrame(update);
    };
    update()
});