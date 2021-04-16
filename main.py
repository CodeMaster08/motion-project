@namespace
class SpriteKind:
    copter = SpriteKind.create()
    cloud = SpriteKind.create()
    landpad = SpriteKind.create()
    bird = SpriteKind.create()

def on_up_pressed():
    copter2.vy += -1
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    copter2.vx += -1
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_created(sprite):
    sprite.set_image(img("""
        . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . f . . . . . . . 
                . . f . . . . . f . . . . . . . 
                . . . f . . . . f . . . f f . . 
                . . . . f f f f f f f f f f . . 
                . . . f . . . . f . . . f f . . 
                . . f . . . . . f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
    sprite.x = randint(16, scene.screen_width() - 16)
    sprite.y = randint(75, scene.screen_height() - 75)
sprites.on_created(SpriteKind.bird, on_on_created)

def on_right_pressed():
    copter2.vx += 1
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_created2(sprite):
    sprite.set_image(img("""
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
    """))
    sprite.x = randint(16, scene.screen_width() - -16)
    sprite.y = randint(75, scene.screen_height() - 75)
sprites.on_created(SpriteKind.cloud, on_on_created2)

def on_down_pressed():
    copter2.vy += 1
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap(sprite, otherSprite):
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
sprites.on_overlap(SpriteKind.copter, SpriteKind.cloud, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    otherSprite.vy += -20
sprites.on_overlap(SpriteKind.copter, SpriteKind.bird, on_on_overlap2)

def on_on_overlap3(sprite, otherSprite):
    otherSprite.x += 8
sprites.on_overlap(SpriteKind.bird, SpriteKind.cloud, on_on_overlap3)

copter2: Sprite = None
game.splash("spawnCloud")
scene.set_background_color(9)
copter2 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f . . . . . . f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . f . . . . . f . . . . . . . . 
            . f . . 6 6 6 6 6 6 6 . . . . . 
            . f . . 6 6 6 6 6 1 1 6 6 . . . 
            . . f f 6 6 6 6 6 1 1 1 6 . . . 
            . . . . 6 6 6 6 6 1 1 1 6 . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . . . f . . . . f . . . . . 
            . . . . . f . . . . f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.copter)
copter2.set_stay_in_screen(True)
cloud1 = sprites.create(img("""
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
    """),
    SpriteKind.cloud)
cloud2 = sprites.create(img("""
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
    """),
    SpriteKind.cloud)
cloud3 = sprites.create(img("""
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
    """),
    SpriteKind.cloud)
cloud4 = sprites.create(img("""
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
    """),
    SpriteKind.cloud)
bird2 = sprites.create(img("""
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
    """),
    SpriteKind.bird)
bird22 = sprites.create(img("""
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
    """),
    SpriteKind.bird)
bird3 = sprites.create(img("""
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
    """),
    SpriteKind.bird)