import {vect2} from './math.js'
export default class Entity {
    constructor(){
        this.pos = new vect2(0,0);
        this.vel = new vect2(0,0);
    };
};
