namespace SpriteKind {
    export const copter = SpriteKind.create()
    export const cloud = SpriteKind.create()
    export const landpad = SpriteKind.create()
    export const bird = SpriteKind.create()
    export const dead = SpriteKind.create()
    export const pluspoints = SpriteKind.create()
    export const goodplayer = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.goodplayer, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(-3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onCreated(SpriteKind.cloud, function (sprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 8 1 1 1 1 1 . . . . 
        . . 1 9 9 1 1 1 1 8 8 1 . . . . 
        . 1 1 8 8 1 1 1 8 1 8 8 8 . . . 
        1 8 1 8 1 1 8 8 8 1 1 9 8 9 . . 
        1 1 1 8 9 1 1 1 1 8 1 1 1 1 . . 
        1 8 1 1 1 1 9 1 1 8 8 8 8 1 1 . 
        1 1 8 8 1 8 8 1 8 1 1 1 1 1 1 . 
        . 1 1 8 1 8 1 1 1 8 8 1 . . . . 
        . . . 1 1 1 1 1 8 1 1 1 . . . . 
        . . . . 1 9 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    sprite.x = randint(16, scene.screenWidth() - 16)
    sprite.y = randint(75, scene.screenHeight() - 75)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pluspoints, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(3)
})
let projectile: Sprite = null
let picture: Image = null
let projectile2: Sprite = null
let projectile3: Sprite = null
let choice = 0
game.showLongText("Welcome to Destroying Game!", DialogLayout.Bottom)
game.showLongText("If your destroy... Fireball = 1 points   Big Stone = 3 POINTS  The Bird = -3 POINTS", DialogLayout.Bottom)
info.setScore(0)
info.startCountdown(30)
scene.setBackgroundColor(9)
let main_character = sprites.create(img`
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff......ccc.
    .ffefbf44fbfeff....cddc.
    .ffefbf44fbfeff...cddc..
    .fee4dddddd4eef.ccddc...
    fdfeeddddd4eeffecddc....
    fbffee4444ee4fddccc.....
    fbf4f222222f1edde.......
    fcf.f222222f44ee........
    .ff.f445544f............
    ....ffffffff............
    .....ff..ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(main_character, 100, 100)
main_character.setStayInScreen(true)
let cloud1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
let cloud2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
let cloud3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
let cloud4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cloud)
game.onUpdateInterval(5000, function () {
    choice = randint(0, 1)
    if (choice == 0) {
        projectile3 = sprites.createProjectileFromSide(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, 50, 0)
        projectile3.setPosition(0, randint(10, 110))
        projectile3.setKind(SpriteKind.pluspoints)
    } else {
        projectile3 = sprites.createProjectileFromSide(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, -50, 0)
        projectile3.setPosition(160, randint(10, 110))
        projectile3.setKind(SpriteKind.pluspoints)
    }
})
game.onUpdateInterval(1800, function () {
    choice = randint(0, 1)
    if (choice == 0) {
        projectile2 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, 50, 0)
        projectile2.setPosition(0, randint(10, 110))
        projectile2.setKind(SpriteKind.goodplayer)
    } else {
        projectile2 = sprites.createProjectileFromSide(img`
            . . . b 5 b . . . . . . . . . . 
            . . . . b 5 b . . . . . . . . . 
            . . . . b b b b b b . . . . . . 
            . . . b 5 5 5 5 5 b b . . . . . 
            . . c 4 d 5 f 1 d 5 b b . . . . 
            b 4 4 4 d d f f 1 5 5 b . . . . 
            . b 4 4 4 4 b f d 5 5 b . . . . 
            . . b 4 4 4 4 5 5 5 5 d b . . . 
            . . b 5 5 5 5 5 5 5 d d d b b . 
            . b 5 5 5 5 5 5 5 b b b d d d b 
            . b 5 5 5 5 5 5 c d 5 5 b d d c 
            . b 5 5 5 5 5 5 d c d 5 d b b c 
            . b 5 5 5 5 5 5 d d c b 5 5 b c 
            . b d 5 5 5 5 5 d d d c c c b b 
            . . b b 5 5 5 d d d c c . . . . 
            . . . b b c c c c c . . . . . . 
            `, -50, 0)
        projectile2.setKind(SpriteKind.goodplayer)
        projectile2.setPosition(160, randint(10, 110))
    }
})
game.onUpdateInterval(500, function () {
    choice = randint(0, 1)
    if (choice == 0) {
        picture = assets.image`fireball2`
        picture.flipX()
        projectile = sprites.createProjectileFromSide(picture, 50, 0)
        projectile.setPosition(0, randint(10, 110))
        projectile.setKind(SpriteKind.Projectile)
    } else {
        projectile = sprites.createProjectileFromSide(assets.image`fireball2`, -50, 0)
        projectile.setPosition(160, randint(10, 110))
        projectile.setKind(SpriteKind.Projectile)
    }
})
