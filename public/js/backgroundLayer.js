function drawBackground(background, context, sprite){
    background.renges.forEach(([x1, x2, y1, y2]) => {
        for(let x=x1; x < x2; ++x){
            for(let y=y1; y < y2; ++y){
                sprite.drawTile(background.tile, context, x, y);
            }
        }        
    })
}

export function createBackgroundLayer(backgrounds, sprite){
    const buffer = document.createElement('canvas');
    buffer.width = 256;
    buffer.height = 240;
    
    backgrounds.forEach(background => {
        drawBackground(background, buffer.getContext('2d'), sprite)
    });
    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0);
    };
}

export function createSpriteLayer(entity){
    return function spriteLayer(context){
        entity.draw(context);
    }
}