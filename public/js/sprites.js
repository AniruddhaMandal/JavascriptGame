import SpriteSheet from './SpriteSheet.js'
import {loadImage} from './loaders.js'

export function loadMarioSprite(){
    return loadImage('img/characters.gif')
    .then(image => {
        const sprite = new SpriteSheet(image, 16,16);
        sprite.define('idle', 277,44, 12,16);
        return sprite; 
    });
}

export function loadBackgroundSprites(){
    return loadImage('img/tileset.png')
    .then(image => {
        const sprite = new SpriteSheet(image, 16,16);
        sprite.defineTile('ground', 0,0);
        sprite.defineTile('sky', 3,21);
        return sprite; 
    });
}