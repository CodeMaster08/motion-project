namespace SpriteKind {
    export const copter = SpriteKind.create()
    export const cloud = SpriteKind.create()
    export const landpad = SpriteKind.create()
    export const bird = SpriteKind.create()
    export const dead = SpriteKind.create()
    export const pluspoints = SpriteKind.create()
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(-3)
})
let projectile: Sprite = null
let picture: Image = null
let projectile2: Sprite = null
let projectile3: Sprite = null
let choice = 0
game.splash("Welcome to Destroying Game", "If you destroy...")
game.splash("Fireball = 1 point", "Big Stone = 3 points")
game.showLongText("", DialogLayout.Center)
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
game.onUpdate(function () {
    main_character.x += controller.dx(100)
    main_character.y += controller.dy(100)
})
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
game.onUpdateInterval(1000, function () {
    choice = randint(0, 1)
    if (choice == 0) {
        projectile2 = sprites.createProjectileFromSide(img`
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            .............5................
            .............55...............
            ............555...............
            ...........55555..............
            ...........55555..............
            .....55555555555555555........
            .......5555555555555..........
            .........555555555............
            .........555555555............
            ........55555555555...........
            .......555.....5555...........
            ......555........555..........
            ...................55.........
            ...................55.........
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            ..............................
            `, 50, 0)
        projectile2.setPosition(0, randint(10, 110))
        projectile2.setKind(SpriteKind.Enemy)
    } else {
        projectile2.setKind(SpriteKind.Enemy)
        projectile2 = sprites.createProjectileFromSide(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, -50, 0)
        projectile2.setPosition(160, randint(10, 110))
    }
})
game.onUpdateInterval(800, function () {
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
