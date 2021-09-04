namespace sprites {
    /**
     * Sets get the sprite's tile X position. Assuming 16x16 tile
     */
    export function getTileX(sprite: Sprite) : number {
        if (!sprite) return 0;
        return sprite.x / 16;
    }

    /**
     * Sets get the sprite's tile Y position. Assuming 16x16 tile
     */
    export function getTileY(sprite: Sprite) : number {
        if (!sprite) return 0;
        return sprite.y / 16;
    }
}


controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let sierraTileX = sprites.getTileX(sierra);
    if(sierra.image == sierraImgClone){
        sierraTileX--
    } else {
        sierraTileX++
    }

    let l = tiles.getTileLocation(sierraTileX, sprites.getTileY(sierra))
    tiles.setTileAt(l, myTiles.tile2)
    tiles.setWallAt(l, true)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    sierra.setImage(sierraImgClone)
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    sierra.setImage(sierraImg)
})

let sierraImg = img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f f f f d d d d d e e f . .
    . f d d d d f 4 4 4 e e f . . .
    . f b b b b f 2 2 2 2 f 4 e . .
    . f b b b b f 2 2 2 2 f d 4 . .
    . . f c c f 4 5 5 4 4 f 4 4 . .
    . . . f f f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`
let sierraImgClone = sierraImg.clone()
sierraImgClone.flipX()
let sierra = sprites.create(sierraImg, SpriteKind.Player)
controller.moveSprite(sierra)
scene.cameraFollowSprite(sierra)