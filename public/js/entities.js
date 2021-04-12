import Entity from './Entity.js';
import {loadMarioSprite} from './sprites.js'

export function createMario() {
return loadMarioSprite()
.then(sprite => {
    const Mario = new Entity();
    Mario.pos.set(64,180);
    Mario.vel.set(2.5,-10);
    Mario.update = function updateMario(){
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    Mario.draw = function drawMario(context){
        sprite.draw('idle', context, this.pos.x, this.pos.y);
    }
    return Mario;
});
}