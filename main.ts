namespace SpriteKind {
    export const character = SpriteKind.create()
    export const advenplayer = SpriteKind.create()
    export const taser = SpriteKind.create()
    export const raptor = SpriteKind.create()
    export const boss = SpriteKind.create()
}
function character_select () {
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408020203001c0001dc00690000045e0100040000000000000000000005640001040003310000000c000212161000140002111414002000020a0d24002800020c0f2800340002111438003c00020f123c004000020d1106001c00010a006400f4016400000400000000000000000000000000000000022a0000000c00012a10001400012914002000012224002800012428003400012938003c0001273c0040000125`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.setBackgroundImage(img`
        cccccccccccccbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccc
        cccccccccccccbbbbbbbcccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccc
        cccccccccccccbbbbbbbbcccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccc
        ccccccccccccccbbbbbbbccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccbbbbbbccccccccccccccbbbbbbbbbbbbbbbcccccbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbbbc
        cccccccccccccccbbbbbbccccccccccccccccccccbbbbbbbcbbbbbbbbbbbbbbccccccccccccccbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbb
        ccccccccbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbb
        ccccccbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbb
        cccccbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbb
        ccccbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbccccbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbcccccccbbbbb
        cccbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbcccccbbbbbbccbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbccccccccccbbbb
        ccbbbbbbbbbbcccbbbbbbbbbbbbccccccbbbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbccccccbbbbbbbbbbbbcccccccccccccbbb
        ccbbbbbbbbbcccbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbb
        ccbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbb
        cbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbb
        bbbbbbbcccccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbb
        bbbbbbbccccbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccc
        bbbbbbbcccbbbbbbbbbccccccbbbbbbbbbbccbbbbbbcccccccccccccccccccccccccccccbbbbbccbbbbbbbbbbcccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccc
        bbbbbbccccbbbbbbbbcccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccccc
        bbbbbcccccbbbbbbbccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccccc
        cccccccccbbbbbbbcccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccc
        ccccccccbbbbbbbccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccc
        ccccccccbbbbbbbccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccccccccc
        ccccccccbbbbbbbccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccccccccc
        ccccccccbbbbbbcccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccccccccccc
        ccccccccbbbbbccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccbbbbbbbbbbbbbbbccbbbbbbbbbccccccccccccccccccccccccccccccccc
        ccccccccbbbbbccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccc
        ccccccccbbbbbccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccc
        ccccccccbbbbbccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccc
        ccccccccbbbbbcccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccc
        ccccccccbbbbbbbbbbcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbccbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccc
        cccccbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbcbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbbccccccccccccccccccccccccccccc
        ccccbbbbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbcccccccccccccccccccccccccccc
        ccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccc
        cbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbcccccccccccccccccbbbbbbbbbc
        bbbbbbbbbbbbbbbcbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccbbbbbbbbbccccccccccccccbbbbbbbbbbb
        bbbbbbbbcbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbbbbbcccccccccccbbbbbbbbbbbbb
        bbbbbbcccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbccccccbbbbbbbbbbbbbbbbb
        bbbbbcccccbbbbbbccccbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccbbbbbbbccccbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccbbbbbbbbccccccbbbbbbbbbbbbbbcccccccccccbbbbbbbbcccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccc
        cccccccccccbbbbbbbbcccccccccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbccccccccc
        cccccccccccbbbbbbbbbcccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbccccccccccccc
        ccccccccccccbbbbbbbbbcccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbcccccccccccccccccc
        cccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccc
        ccccccccccccccbbbbbbbbccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccc
        cccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccc
        ccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccc
        cccccccccccccccccbbbbbbbccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccc
        cccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccbbbbbccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccc
        ccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccbbbbbbccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccc
        cccccccccccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccccccccc
        ccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccbbbbbbccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccc
        cccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccc
        ccccccccccccccccbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccc
        cccccccccccccccbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccc
        ccccccccccccccbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccccccc
        ccccbbbbbbbccbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccc
        ccbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccc
        cbbbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbcbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbcccbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbccccccccccccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbccccbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbcccccccccccbbbbbbbccccccccccbbbbbbbbbbbcccccccccccc
        bbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbcccccbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbccccccccccbbbbbbccccccccbbbbbbbbbbbbbbbbbccccccccc
        bbbbbbcccbbbbbbbbbbbcccccccccbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbcccccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbcccccccc
        bbbbbccccbbbbbbbbbbbbcccccccbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbcccccccccccbbbbbbbbbbcccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbcccccc
        bbbccccccbbbbbbbbbbbbbcccccbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbccccccccccccbbbbbbbbbbbcccccbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc
        cccccccccbbbbbbbbbbbbbccbbbbbbbbbbbbccccccccccbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbcccccccccccccbbbbbbbbbbccccbbbbbbcbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbccc
        cccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbcccbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbcccccccccccccbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbc
        cccccccccbbbbbbcbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbccccccccbbbbbbbbccccccccccccccccccbbbbbbbccccccccccccccbbbbbbbbbbbcbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbc
        ccccccccccbbbbbccbbbbbbbbbbbbbbbbccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbbbc
        ccccccccccbbbbbccbbbbbbbbbbbbbbcccccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbbbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbc
        ccccccccccbbbbbbccbbbbbbbbbbccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbc
        ccccccccccbbbbbbccccbbbbbcccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbc
        ccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccbbbbbbbbbbbbcccccccccccccccccccccccccccccccccc
        ccccccccccbbbbbbcccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccccccccc
        cccccccccccbbbbbcccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccc
        cccccccccccbbbbbcccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccc
        cccccccccccbbbbbcccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccccc
        cccccccccccbbbbbcccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccccccc
        cccccccccccbbbbbbccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccccccccc
        cccccccccccbbbbbbccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccccc
        cccccccccccbbbbbbbcccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccbbbbbbbcccccccccccccccccccccccccccccccc
        cccccccccccbbbbbbbcccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccccc
        ccccccccccccbbbbbbbccbbbbbbbbbbbbbccccccccccbbbbbbbcccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccc
        ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccc
        cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbccccccccccccccccccccccccccbbbbbcccbbbbbbccccccccccccccccccccccccccccccbbbbbbbbbcccccccccccccccccccccccccccc
        cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccbbbbbbbbbccccccccccccccccccccccccccc
        ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccbbbbbbbbbcccccccccccccccccccccccccc
        cccccccccccccbbbbbbbbbbbbcccccbbbbbbbbbbccccccbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccbbbbbbbbbccccccccccccccccccccccccc
        ccccccccccccbbbbbbbbbbbbccccccccbbbbbbbbbcccccccbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccc
        cccccccccccbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbccccccccccc
        cccccccccccbbbbbbbbbbbbbffffffffffffffffffff8888888ffffffffffffffffffffffffffffffffffffffffffffffffff8888888ffffffffffffffffffffffffffffffffbbbbbbbbbbcccccccccc
        cccccccccbbbbbbbbbbbbbbbffffffffffffffff888888888888fffffffffffffffffffffffffffffffffffffffffffffffff88888888fffffffffffffffffffffffffffffffbbbbbbbbbbbccccccccc
        cbbbbbccbbbbbbbbbbcbbbbbfff111111111111888888888888881111c1111111111111111888888111111111111111111118888888888111111888888111111111111111fffbbbbbbbbbbbbbccccccc
        cbbbbbbbbbbbbbbbccccbbbbfff11111111111888886688998888888888888888888888888888888888888888888888888888889968888888888888888811111111111111fffcccbbbbbbbbbbbbccccc
        cbbbbbbbbbbbbbbbcccccbbbfff11111111118888999998998888888888888888888888888888888888888888888888888888889968888888888888888881111111111111fffccccbbbbbbbbbbbbbccc
        cbbbbbbbbbbbbbbccccccbbbfff11111111118889999968998888888888888888888888888889988888888888888888888888889968888888888889988888c11111111111fffccccccbbbbbbbbbbbbbb
        cbbbbbbbbbbbbcccccccbbbbfff11111111188869988888996998899998696698999688699999998899968996988899968899989968899988699999998888c11111111111fffcccccccbbbbbbbbbbbbb
        ccbbbbbbbbbbccccccccbbbbfff111111111888996888889999966999966999999999869996999986999989999889999689999699689999669996999988886c1111111111fffcccccccccbbbbbbbbbbb
        ccccccccccccccccccccbbbbfff1111111118889968888899699688899669996888998998688998899899899968899688698699996698699998688998888666c111111111fffcccccccccccbbbbbbbbb
        cccccccccccccccccccbbbbbfff1111111118889998888899869689999669688699998998888998899999899888869998999996696999996998888998888666c111111111fffcccccccccccccbbbbbbb
        ccccccccccccccccccbbbbbbfff1111111118886998869899869699669669988998998998888998899888899888886999998888996998888998888998888666c111111111fffcccccccccccccccccccc
        cccccccccccccccccbbbbbbbfff1111111118888999999899869699999969988999996999998999899999899888899996699996996699996999998999888666c111111111fffcccccccccccccccccccc
        ccccccccccccccccbbbbbbbbfff1111111111888699998899869669969969688699696699988999869996899888899998899998996899998699988999888666c111111111fffcccccccccccccccccccc
        cccccccccccccccbbbbbbbbbfff1111111111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666c111111111fffcccccccccccccccccccc
        ccccccccccccccbbbbbbbbbcfff1111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888666c111111111fffcccccccccccccccccccc
        cccccccccccccbbbbbbbbbbcfff1111111111118888888888888888888888888888888888888888888888888888888888888888888888888888888888866666c111111111fffcccccccccccccccccccc
        ccccccccccccbbbbbbbbbcccfff111111111111188886666668666666868666666866668866666666886666666666886666886666666886668866666666666c1111111111fffcccccccccccccccccccc
        cccccccccccbbbbbbbbbccccfff11111111111111c666666666666666666666666666666666666666666666666666666666666666666666666666666666666c1111111111fffcccccccccccccccccccc
        cccccccccbbbbbbbbbbcccccfff111111111111111cc666666666666666666666666666666666666666666666666cc666666666666666666666666666666cc11111111111fffcccccccccccccccccccc
        ccccccccbbbbbbbbbbccccccfff11111111111111111cccccccccccccccccccccccccccccccccccccccccccccccc111ccccccccccccccccccccccccccccc1111111111111fffcccccccccccccccccccc
        ccccccccbbbbbbbbbcccccccfff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffcccccccccccccccccccc
        ccccccccbbbbbbbbccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccc
        ccccccccbbbbbbbcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccc
        ccccccccbbbbbbccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccc
        ccccccccbbbbbbcccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccc
        ccccccccbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccc
        cccccccccbbbbbbccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccc
        cccccccccbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccbbbbbbccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    Stump = sprites.create(img`
        ffffffffffffffffff
        f1111111e11111111f
        f1111111de1111111f
        f1ee111eedde11111f
        f11deeeeededde111f
        f111edddded411111f
        f111ddeee55411111f
        f111deef555411111f
        f111555f555441111f
        f1115f55555441111f
        f111155cccc441111f
        f1111c11ccc449661f
        f1111cccc54449996f
        f1111144444991116f
        f1111119999881111f
        f1111166666681111f
        f1111166666888111f
        ffffffffffffffffff
        `, SpriteKind.character)
    tiles.placeOnRandomTile(Stump, assets.tile`myTile17`)
    taser = sprites.create(img`
        cccccccccccccccccc
        cbbbbbfffffbbbbbbc
        cbbbbbbffffbbffbbc
        cbbbbbbfffffffbbbc
        cbbbbbbffff5bbbbbc
        cbbbbfff5555bbbbbc
        cbbbbbbb55f5fbbbbc
        cbbbbbbb5555bbbbbc
        cbbbbbfffffbbbbbbc
        cbbbbbfffffeffbbbc
        cbbbffbffeeefffbbc
        cbbfffbfeeefbfffbc
        cbffbbfff55ffbbffc
        cfffbbfff55ffffffc
        cffbbffff88fffffbc
        c55bfffff88ffffbbc
        c55bbbffbbb88bbbbc
        cccccccccccccccccc
        `, SpriteKind.character)
    tiles.placeOnRandomTile(taser, assets.tile`myTile18`)
    theconeguy = sprites.create(img`
        ffffffffffffffffff
        f1111111881111111f
        f1111118968111111f
        f1111118968111111f
        f11111811bb111111f
        f11111891b6111111f
        f1111888888881111f
        f1111899996681111f
        f1111ccccccc11111f
        f111114eecec11111f
        f111114ffeee11111f
        f1111144efe881111f
        f1111114fee888111f
        f1111118bb8681111f
        f1111118bb8681111f
        f1111118998681111f
        f1111118888681111f
        ffffffffffffffffff
        `, SpriteKind.character)
    tiles.placeOnRandomTile(theconeguy, assets.tile`myTile19`)
    pixeldoodle = sprites.create(img`
        ffffffffffffffffff
        f1111f111f1111111f
        f111fffffff111111f
        f111ffffffff11111f
        f11ffff4ffeff1111f
        f111f44444eeff111f
        f111ff4f44eeff111f
        f1114f4f44eee1111f
        f111f4444feef1111f
        f111f44ffeeef1111f
        f11111fffff111111f
        f1111666668f11111f
        f1111666668f11111f
        f111f666668ff1111f
        f111f6666688f1111f
        f111f6666688f1111f
        f111f6666888f1111f
        ffffffffffffffffff
        `, SpriteKind.character)
    tiles.placeOnRandomTile(pixeldoodle, assets.tile`myTile20`)
    Red_Line = sprites.create(img`
        dddddddddddddddddd
        dbbbbfffffbbbbbbbd
        dbbbbf2f2fbbbbbbbd
        dbbbbf2f2ffbbbbbbd
        dbbbbffffffbbbbbbd
        dbbbbbbfffffbbbbbd
        dbbbbbfffffffbbbbd
        dbbbbffffffffbbbbd
        dbbbbffffffffbbbbd
        dbbbbfffffffffbbbd
        dbbbbfffffffffbbbd
        dbbbbbffffffbfbbbd
        dbbbbbffffffbbbbbd
        dbbbbbffbbfffbbbbd
        dbbbbbffbbbffbbbbd
        dbbbbbfbbbbffbbbbd
        dbbbbbfbbbbbfbbbbd
        dddddddddddddddddd
        `, SpriteKind.character)
    tiles.placeOnRandomTile(Red_Line, assets.tile`myTile21`)
    if (blockSettings.readNumber("raptor") == 1) {
        raptor = sprites.create(img`
            ffffffffffffffffff
            f1111111111111111f
            f111fff1111111111f
            f1ffbccf111111111f
            ffbbcf1f111111111f
            ffbcccccfffff1111f
            f1ffbccccccccfff1f
            f111fbccccccccccff
            f1111fbccccccccccf
            f11111fbcccccccccf
            f11111fccccccccccf
            f1111fbfffbcccccff
            f1111fc11ffcccff1f
            f11111ff1ffccf111f
            f1111111fbcfcf111f
            f1111111fbffbcf11f
            f111111fbcf1fbf11f
            ffffffffffffffffff
            `, SpriteKind.character)
        tiles.placeOnRandomTile(raptor, assets.tile`myTile22`)
    }
    character_cursor = sprites.create(img`
        ffff............ffff
        f111f..........f111f
        f1ff............ff1f
        f1f..............f1f
        .f................f.
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .f................f.
        f1f..............f1f
        f1ff............ff1f
        f111f..........f111f
        ffff............ffff
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(character_cursor, assets.tile`myTile17`)
    wc = textsprite.create("Selection: ", 6, 1)
    wc.setPosition(52, 86)
    color.pauseUntilFadeDone()
    cs = true
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ingame) {
        cursor.y += -16
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        275,
        1250,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.InBackground)
    }
    if (inadventuregame) {
        cursor.y += -16
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        275,
        1250,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.advenplayer, assets.tile`myTile28`, function (sprite, location) {
    blockSettings.writeNumber("myspot", blockSettings.readNumber("myspot") + 1)
    spawn_new_map()
})
sprites.onOverlap(SpriteKind.advenplayer, SpriteKind.taser, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.Player)
    if (blockSettings.readNumber("myspot") == 0) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("Hello there!", 1000, true)
        timer.after(1000, function () {
            otherSprite.sayText("You must be the new puzzle champ!", 2000, true)
            timer.after(2000, function () {
                otherSprite.sayText("Hmmm... it doesn't look like you are ready.", 3000, true)
                timer.after(3000, function () {
                    otherSprite.sayText("How about a practice match?", 2000, true)
                    timer.after(2000, function () {
                        otherSprite.sayText("What do you say to that?", 1500, true)
                        timer.after(2000, function () {
                            if (game.ask("Let's do this", "Maybe later...")) {
                                start_game_with_goal(500, 6000, 1)
                                blockSettings.writeNumber("player x", adventplayer.x)
                                blockSettings.writeNumber("player y", adventplayer.y)
                            } else {
                                sprite.y += 20
                                otherSprite.setKind(SpriteKind.taser)
                                controller.moveSprite(sprite, 50, 50)
                            }
                        })
                    })
                })
            })
        })
    }
    if (blockSettings.readNumber("myspot") == 1) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("Sup'", 1000, true)
        timer.after(1000, function () {
            otherSprite.sayText("Don't even ask why the grass is red", 2500, true)
            timer.after(2500, function () {
                otherSprite.sayText("Anyway I can't let you pass", 1500, true)
                timer.after(1500, function () {
                    otherSprite.sayText("so...", 1000, true)
                    timer.after(1000, function () {
                        otherSprite.sayText("Let's battle!", 1000, true)
                        timer.after(1500, function () {
                            if (game.ask("If you say so!", "Nuh uh!")) {
                                start_game_with_goal(750, 4500, 1)
                                blockSettings.writeNumber("player x", adventplayer.x)
                                blockSettings.writeNumber("player y", adventplayer.y)
                            } else {
                                sprite.x += 20
                                otherSprite.setKind(SpriteKind.taser)
                                controller.moveSprite(sprite, 50, 50)
                            }
                        })
                    })
                })
            })
        })
    }
    if (blockSettings.readNumber("myspot") == 2) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("Yo...", 1000, true)
        timer.after(1000, function () {
            otherSprite.sayText("What did the cone say to the other cone?", 3000, true)
            timer.after(3500, function () {
                otherSprite.sayText("nothing. cones don't talk", 1500, true)
                timer.after(1500, function () {
                    otherSprite.sayText("I need to test you before you pass", 2000, true)
                    timer.after(2000, function () {
                        otherSprite.sayText("Get ready for speed!", 1000, true)
                        timer.after(1500, function () {
                            if (game.ask("\"I'm fast!\"", "\"I can't, Doctors orders\"")) {
                                start_game_with_goal(500, 3000, 2)
                                blockSettings.writeNumber("player x", adventplayer.x)
                                blockSettings.writeNumber("player y", adventplayer.y)
                            } else {
                                sprite.x += 20
                                otherSprite.setKind(SpriteKind.taser)
                                controller.moveSprite(sprite, 50, 50)
                            }
                        })
                    })
                })
            })
        })
    }
    if (blockSettings.readNumber("myspot") == 3) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("Hello!", 1000, true)
        timer.after(1000, function () {
            otherSprite.sayText("I didn't expect you to be back so soon", 2000, true)
            timer.after(2000, function () {
                otherSprite.sayText("This is your final test before the competition", 3000, true)
                timer.after(3000, function () {
                    otherSprite.sayText("This is the challenge of your lifetime", 2500, true)
                    timer.after(3000, function () {
                        if (game.ask("LETS GO", "I'm too weak")) {
                            start_game_with_goal(1500, 5000, 1.35)
                            blockSettings.writeNumber("player x", adventplayer.x)
                            blockSettings.writeNumber("player y", adventplayer.y)
                        } else {
                            sprite.y += 20
                            otherSprite.setKind(SpriteKind.taser)
                        }
                        controller.moveSprite(sprite, 50, 50)
                    })
                })
            })
        })
    }
    if (blockSettings.readNumber("myspot") == 4) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("Hi! I'm Richard!", 1000, true)
        timer.after(1000, function () {
            otherSprite.sayText("If you have a coding question, ask me", 3000, true)
            timer.after(3500, function () {
                otherSprite.sayText("that's just how good I am", 1500, true)
                timer.after(1500, function () {
                    otherSprite.sayText("Anyway I have to battle you so...", 2000, true)
                    timer.after(2000, function () {
                        otherSprite.sayText("Lets get this over with", 1000, true)
                        timer.after(1500, function () {
                            if (game.ask("okey dokey", "nononononono")) {
                                start_game_with_goal(2000, 4000, 1.5)
                                blockSettings.writeNumber("player x", adventplayer.x)
                                blockSettings.writeNumber("player y", adventplayer.y)
                            } else {
                                sprite.x += 20
                                otherSprite.setKind(SpriteKind.taser)
                                controller.moveSprite(sprite, 50, 50)
                            }
                        })
                    })
                })
            })
        })
    }
    if (blockSettings.readNumber("myspot") == 5) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("Gee Whiz!", 1000, true)
        timer.after(1000, function () {
            otherSprite.sayText("couldn't you let me work on pixel smash just a little bit longer?", 3000, true)
            timer.after(3500, function () {
                otherSprite.sayText("Anywho, I am your 2nd challenger", 1500, true)
                timer.after(1500, function () {
                    otherSprite.sayText("so...", 1000, true)
                    timer.after(1000, function () {
                        otherSprite.sayText("Bippity Boppity boo!", 1000, true)
                        timer.after(1250, function () {
                            if (game.ask("Ummmm... okay?", "I'm so confused right now")) {
                                start_game_with_goal(2000, 4000, 1.75)
                                blockSettings.writeNumber("player x", adventplayer.x)
                                blockSettings.writeNumber("player y", adventplayer.y)
                            } else {
                                sprite.x += 20
                                otherSprite.setKind(SpriteKind.taser)
                                controller.moveSprite(sprite, 50, 50)
                            }
                        })
                    })
                })
            })
        })
    }
    if (blockSettings.readNumber("myspot") == 6) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("Hejo!", 1000, true)
        timer.after(1000, function () {
            otherSprite.sayText("I am kind of the 2nd best", 3000, true)
            timer.after(3500, function () {
                otherSprite.sayText("if you beat me you go to the finals", 1500, true)
                timer.after(1500, function () {
                    otherSprite.sayText("But I won't let you win", 2000, true)
                    timer.after(2000, function () {
                        otherSprite.sayText("Fight FIGHT FIGHT", 1000, true)
                        timer.after(1250, function () {
                            if (game.ask("yes sir", "nuh uh")) {
                                start_game_with_goal(2000, 4000, 1.75)
                                blockSettings.writeNumber("player x", adventplayer.x)
                                blockSettings.writeNumber("player y", adventplayer.y)
                            } else {
                                sprite.x += 20
                                otherSprite.setKind(SpriteKind.taser)
                                controller.moveSprite(sprite, 50, 50)
                            }
                        })
                    })
                })
            })
        })
    }
    if (blockSettings.readNumber("myspot") == 7) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("Welcome to humble abode..", 2000, true)
        timer.after(2500, function () {
            otherSprite.sayText("*chuckles*", 1000, true)
            timer.after(1500, function () {
                otherSprite.sayText("I am kinda the best of all puzzlers", 2000, true)
                timer.after(2000, function () {
                    otherSprite.sayText("Please don't cry when I beat you... okay?", 2000, true)
                    timer.after(2500, function () {
                        otherSprite.sayText("The battle is on", 1000, true)
                        timer.after(1250, function () {
                            if (game.ask("I'm ready", "On second thought...")) {
                                start_game_with_goal(5000, 3500, 1.75)
                                blockSettings.writeNumber("player x", adventplayer.x)
                                blockSettings.writeNumber("player y", adventplayer.y)
                            } else {
                                sprite.x += 20
                                otherSprite.setKind(SpriteKind.taser)
                                controller.moveSprite(sprite, 50, 50)
                            }
                        })
                    })
                })
            })
        })
    }
})
function make_fall () {
    for (let value5 of tiles.getTilesByType(assets.tile`myTile`)) {
        if (tiles.tileAtLocationEquals(value5.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)) {
            tiles.setTileAt(value5, assets.tile`transparency16`)
            tiles.setTileAt(value5.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`)
        }
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile0`)) {
        if (tiles.tileAtLocationEquals(value6.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)) {
            tiles.setTileAt(value6, assets.tile`transparency16`)
            tiles.setTileAt(value6.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`)
        }
    }
    for (let value7 of tiles.getTilesByType(assets.tile`myTile2`)) {
        if (tiles.tileAtLocationEquals(value7.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)) {
            tiles.setTileAt(value7, assets.tile`transparency16`)
            tiles.setTileAt(value7.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`)
        }
    }
    for (let value8 of tiles.getTilesByType(assets.tile`myTile4`)) {
        if (tiles.tileAtLocationEquals(value8.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)) {
            tiles.setTileAt(value8, assets.tile`transparency16`)
            tiles.setTileAt(value8.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`)
        }
    }
    for (let value8 of tiles.getTilesByType(assets.tile`myTile7`)) {
        if (tiles.tileAtLocationEquals(value8.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)) {
            tiles.setTileAt(value8, assets.tile`transparency16`)
            tiles.setTileAt(value8.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`)
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ingame) {
        add_new_layer()
        music.play(music.createSoundEffect(WaveShape.Square, 733, 2095, 0, 255, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
    if (inadventuregame) {
        music.play(music.createSoundEffect(WaveShape.Square, 733, 2095, 0, 255, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        add_new_layer()
    }
})
function start_game_with_goal (num: number, speed: number, speedsay: number) {
    score = 0
    character = 1
    isgame_over = 0
    adv = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.advenplayer)
    sprites.destroyAllSpritesOfKind(SpriteKind.taser)
    scene.centerCameraAt(80, 60)
    goal = num
    music.stopAllSounds()
    if (blockSettings.readString("music?") == "yes") {
        music.play(music.createSong(hex`0078000408080400001c00010a006400f401640000040000000000000000000000000005000004c80000000c00031224270c0010000311222510001c00031224271c0020000314252920002c00031224272c0030000311222530004000031224274000440003142529440048000314252948004c00030f20244c005000030f202450005400031224275400600003112225640070000311222570007400030f202474008000031122258000840003122427840090000311222590009400030f202494009800031122259c00a00003122427a000a40003122427a400a800030f2024a800ac00030f2024ac00b8000311222507001c00020a006400f40164000004000000000000000000000000000000000315007000740002292c8000840002292c9000940002292c08001c000e050046006603320000040a002d00000064001400013200020100023700bc00c000022427c000c400022529c400c80002272acc00d800012cd800dc0002272adc00e000022529e000e400022427e800f80002202409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80020014000410001044400450001044800490001044c004d0001045000510001045400550001045800590001035c005d0001036000610001046400650001046800690001046c006d0001047000710001047400750001037800790001037c007d0001048000810001048400850001048800890001048c008d0001049000910001049400950001039800990001039c009d000104a000a1000104a400a5000103a800a9000103ac00ad000104b000b1000104b400b5000104b800b9000104bc00bd000103c000c1000103c400c5000103c800c9000103cc00cd000104d000d1000104d400d5000104d800d9000104dc00dd000104e000e1000104e400e5000104e800e9000104ec00ed000103f000f1000103f400f5000103f800f9000103fc00fd000103`), music.PlaybackMode.LoopingInBackground)
    }
    playericonhub = sprites.create(img`
        ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff
        ff1111111111111111111111111111ff
        ff111111111111ee11111111111111ff
        ff111111111111ee11111111111111ff
        ff111111111111dde1111111111111ff
        ff111ee11111ee1edddde111111111ff
        ff111dd11111eeeeedeeddde111111ff
        ff1111deeeeeeeeeddeeddee111111ff
        ff1111dd1eeedddddeddee11111111ff
        ff11111dedddddddeed44111111111ff
        ff11111ddddeeeee55544111111111ff
        ff111111deeeee5555544111111111ff
        ff111111deeefff555544111111111ff
        ff111111fffff55555544411111111ff
        ff11111155555f5555544411111111ff
        ff11111155f5555555544411111111ff
        ff1111111555555555544411111111ff
        ff1111111555ccccccc44411111111ff
        ff11111115ccc11111c44411111111ff
        ff11111115c1111cccc44419966611ff
        ff11111115cccccc54444499999661ff
        ff1111111155554444446999999961ff
        ff1111111114444444469991111961ff
        ff1111111111999994999911111111ff
        ff1111111111999999968811111111ff
        ff1111111116666666666881111111ff
        ff1111111116666666668888111111ff
        ff1111111116666666668888111111ff
        ff1111111116666666668888111111ff
        ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff
        `, SpriteKind.Player)
    animation.runImageAnimation(
    playericonhub,
    [img`
        ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff
        ff1111111111111111111111111111ff
        ff111111111111ee11111111111111ff
        ff111111111111ee11111111111111ff
        ff111111111111dde1111111111111ff
        ff111ee11111ee1edddde111111111ff
        ff111dd11111eeeeedeeddde111111ff
        ff1111deeeeeeeeeddeeddee111111ff
        ff1111dd1eeedddddeddee11111111ff
        ff11111dedddddddeed44111111111ff
        ff11111ddddeeeee55544111111111ff
        ff111111deeeee5555544111111111ff
        ff111111deeefff555544111111111ff
        ff111111fffff55555544411111111ff
        ff11111155555f5555544411111111ff
        ff11111155f5555555544411111111ff
        ff1111111555555555544411111111ff
        ff1111111555ccccccc44411111111ff
        ff11111115ccc11111c44411111111ff
        ff11111115c1111cccc44419966611ff
        ff11111115cccccc54444499999661ff
        ff1111111155554444446999999961ff
        ff1111111114444444469991111961ff
        ff1111111111999994999911111111ff
        ff1111111111999999968811111111ff
        ff1111111116666666666881111111ff
        ff1111111116666666668888111111ff
        ff1111111116666666668888111111ff
        ff1111111116666666668888111111ff
        ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff
        `,img`
        ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff
        ff1111111111111111111111111111ff
        ff1111111111111111111111111111ff
        ff111111111111ee11111111111111ff
        ff111111111111ee11111111111111ff
        ff111111111111ddeee11111111111ff
        ff111ee111111eedddede111111111ff
        ff111dde1111dddd1eeeddde111111ff
        ff1111deeeeddddeeeeeddee111111ff
        ff1111ddeeeeddeededdee11111111ff
        ff11111deddddeedeed44111111111ff
        ff11111ddddeeeee55544111111111ff
        ff111111deeeee5555544111111111ff
        ff111111deeefff555544111111111ff
        ff111111fffff55555544411111111ff
        ff11111155555f5555544411111111ff
        ff11111155f5555555544411111111ff
        ff1111111555555555544411111111ff
        ff1111111555ccccccc44411111111ff
        ff11111115ccc11111c44411111111ff
        ff11111115c1111cccc44411111111ff
        ff11111115cccccc54444491111961ff
        ff1111111155554444446999999961ff
        ff1111111114444444469999999661ff
        ff1111111111999994999919966611ff
        ff1111111111999999968811111111ff
        ff1111111116666666666881111111ff
        ff1111111116666666668888111111ff
        ff1111111116666666668888111111ff
        ffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff
        `],
    200,
    true
    )
    playericonhub.setPosition(125, 95)
    textSprite = textsprite.create("0", 6, 1)
    textSprite.setScale(1.5, ScaleAnchor.Middle)
    textSprite.setPosition(110, 23)
    textSprite.setOutline(1, 8)
    textSprite2 = textsprite.create("score:", 0, 15)
    textSprite2.setPosition(120, 10)
    textSprite3 = textsprite.create("combo:", 0, 15)
    textSprite3.setPosition(120, 40)
    textSprite4 = textsprite.create("0", 3, 1)
    textSprite4.setOutline(1, 15)
    textSprite4.setScale(2, ScaleAnchor.Middle)
    textSprite4.setPosition(112, 58)
    textSprite5 = textsprite.create("speed: " + speedsay, 0, 15)
    textSprite5.setPosition(128, 72)
    textSprite6 = textsprite.create("Goal: " + num, 0, 13)
    textSprite6.setPosition(130, 115)
    speedbonus = speedsay
    isgame_over = 0
    cursor = sprites.create(img`
        .ffff........................ffff...............................................
        f1111f......................f1111f..............................................
        f1fff........................fff1f..............................................
        f1f............................f1f..............................................
        f1f............................f1f..............................................
        .f..............................f...............................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        .f..............................f...............................................
        f1f............................f1f..............................................
        f1f............................f1f..............................................
        f1fff........................fff1f..............................................
        f1111f......................f1111f..............................................
        .ffff........................ffff...............................................
        `, SpriteKind.Player)
    if (!(blockSettings.readNumber("myspot") == 7)) {
        scene.setBackgroundImage(img`
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        random_map = randint(1, 3)
        if (random_map == 1) {
            tiles.setCurrentTilemap(tilemap`level1`)
        }
        if (random_map == 2) {
            tiles.setCurrentTilemap(tilemap`level12`)
        }
        if (random_map == 3) {
            tiles.setCurrentTilemap(tilemap`level14`)
        }
    } else {
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccc4444444444444444444444ddd44444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccc4444444444444444444444ddd44444444444444444444444444444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccc44444444444444ddddddddddd44444444444444444444444444444dddddd444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccddddddddddddccccc44444444444444444444444dddddd444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            444ccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddcccccccdddddddddddcccccccddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            44444ccccccccccccccccccccccccccccccccccccccccccccccccdddddddddcccccccdddddddddddcccccccddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            444444ccccccccccccccccccccccccccccccccccccccccccccccccddddddddcccccccdddddddddddccccccccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            c44ddd44ccccccccccccccccccccccccccccccccccccccccccccccddddddddcccccccdddddddddccccccccccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cddddd444ccccccccccccccccccccccccccccccccccccccccccccccccdddddccccccccccddddddccccccccccddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cdddddd4444ccccccccccccccccccccccccccccccccccccccccccccccdddddcccccccccccddddcccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cddddddd4444cccccccccccccccccccccccccccccccccccccccccccccdddddccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cdddddddd44444ccccccccccccccccccccc4444cccccccccccccccccccddddccccccccccccccccccccccccccddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cdddddddd444444cccccccccccccccc44444444cccccccccccccccccccddddccccccccccccccccccccccccccddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cddddddddd4444444cccccccccc444444444444cccccccccccccccc444ccccccccccccccccccccccccccccccddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cddddddddddddd4444ccccc444444444444444cccccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cddddddddddddddddddddddddd44444444444ccccccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cddddddddddddddddddddddddddd4cc44444ccccccccccccccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cddddccdddddddddddddddddddddc44ddddcccccccccccccccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cddddcccdddccddddddddddddddd444ddddccccccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccddddddddd44dddddccccccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccdddddd44dddddcccccccccc4444ccc444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccddd444dddddcccccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccc44444cdddddcccccccccc4444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccc44444ccdddddcccccccccc444444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccc44444cccdddddcccccccccc44444444444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccc44444ccccdddddccccccccccc4444444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccc44444cccccdddddccccccccccc444444dddd4444ddd4cccccccccccccccccccccccccccccccccccccc444ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccc44444ccccccddddccccccccccccc44444dddddd44ddd4444ccccccccccccccccccccccccccccccccccc444ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccc444444ccccccccccccccccccccccccc4444ddddddddddd444444cccccccccccccccccccccccccccccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccc444444ccccccccccccccccccccccccc444444cddddddddd444444dddcccccccccccccccccccccccccccc44444ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccc444444cccccccccccccccccccccccccc444444ccddddddddcc444dddd444ccccccccccccccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccc44444cccccccccccccccccccccccccccc4444444ccccdddddccccddddddd444cccccccccccccccccccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccc44444cccccccccccccccccccccccccccc444444444cccdddddccccddddddd444444ccccccccccccccccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccc44444ccccccccccccccccccccccccccccc4444c4444cccdddddccccdddcddd44444444cccccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccc44444444cccccccccccccccccccccccccc4444ccc4444ccdddddccccdddcdddc4444444444cccccccccccc44444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccc444444444444444444cccccccccccccccc44dddcc44444cdddddccccdddcdddcccc4444444cccccccccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccc44444dddd4444444444444444444ccccc444dddcccddd4cddddddcccdddddddcccccc44444ccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccddddddd444444dddd44444444444444444dddcccdddd4ddddddcccdddddddccccc44444ccccccccccc44444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccdddddddcddddddddddd4444444444444dddddcccdddddddddddcccddddddccccc44444cccccccccccc4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccdddddddddddddddddddccccc44444444dddddcccdddddddddddccccdddddcccc44444cccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccdddddddddddddddddddccc4444444444dddddccccddddddddddccccdddddccc44444ccccccccccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccddddddddddcccccccccc44444444c444dddddccccddddddddddcccccccccccc4444ccccccccccccc444dddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccddddddddcccccccccc444ddd44ccc44ddddddccccdddddddddcccccccccccc4444ccccccccccccc444ddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccdddddccccccccccc4444ddddcccc444ddddddccccdddddddddccccccccccc44444ccccccccccccc444ddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccdddddccccccccc444dddddddcccc444ddddddccccdddddd444cccccccccc444dddcccccccccccc444dddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccddddcccccccc4444dddddddcccc444dddddddccccdddddd444ccccccccc444dddddccccccccccc444dddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccddddcccccc444444dddddddcccc44ddddddddcccccddddd4444ccccccc4444dddddcccccccccc444dddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccddddcccc44444444ddddddcccc444ddddddddcccccddddd44444ccccc44444dddddccccccccc444ddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccddddcc44444444cdddddddcccc444dddddddcccccccddddc4444cccc44444cddddcccccccccc444dddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccdddc44444444dddddddddcccc4444ccddddcccccccddddddc4444cc44444cdddddccccccccc444ddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccc44444444dddddddddddcccc4444ccddddcccccccddddddc4444444444dddddddcccccccc444ddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccc44444444dddddddddddddccc4444cccddddcccccccddddddcc44444444cdddddcccccccccc444ddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccc4444ddddddddddddcddddddccc4444cccddddcccccccdddddcccc444444ccddddcccccccccc444dddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccc444444ddddddddddcccddddddccc444ccccddddcccccccdddddcccc44444ccccccccccccccccc444dddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccc4444444dddddddddcccccddddddcc4444cccccccccccccccdddddcccc444444ccccccccccccccc444dddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccc44444444cddddddccccccccddddddcc4444cccccccccccccccdddddccc4444444cccccccccccccc444ddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccc44444444cccddddddccccccccddddddc4444ccccccccccccccccdddddcc444444444ccccccccccccc444ddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            c44444444ccccdddddddccccccccddddddc4444cccccccccccccccccddddc44444c44444ccccccccccc4444ddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            4444444ccccccdddddddccccccccdddddcc444ccccccccccccccccccdddd44444ccc4444ccccccccccc4444ddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            444444444ccccdddddddccccccccdddddcc444ccccccccccccccccccccc4444dddccc4444ccccccccc4444cddddcdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            4444444444444dddddddccccccccdddddccccccccccccccccccccccccc444dddddccc44444ccccccc44444cddddcdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccc4444ddd44444dddddcccccccccddddcccccccccccccccccccccccc4444dddddcccc4444ccccccc4444cdddddcdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccdddd44444dddd4ccccccccdddcccccccccccccccccccccccc44ddddddddccccc4444ccccc4444ccddddccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccdddd44ddddddd44444cccccccccccccccccccccccccccccc444dddddddcccccc44444ccc44444ccdddcccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccddddddddddddd4444444444ccccccccccccccccccccccccc444dddddddccccccc4444ccc4444cccdddcccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccdddddddddddddd44444444444444cccccccccccccccccccc444ddddddddcccccccc4444c4444ccccdddcccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccddddddddddddddddddddd44444444444ccccccccccccccc444ddddddddccccccccc444444444cccddddcccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccdddddccccddddddddddddddd444444444444cccccccccc444ddddddddccccccccccc4444444ccccddddcccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccdddddccccddddddddddddddddddd444444444444ccccc444dddddddddcccccccccccc444444ccccddddcccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccddddddcccdddddddcccdddddddddddd44444444444444444dddddddddcccccccccccc44444cccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccddddddcccddddddccccccdddddddddddddddddd444444444dddddddddcccccccccccc44444cccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccc444ddddddcccddddddcccccccccccddddddddddddd44444444cccccdddddcccccccccccc444444cccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccc4444dddddccccdddddccccccccccccccddddddddddccc44444cccccdddddccccccccccc44444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccc4444dddddccccdddddcccccc444ccccccccccccccccccccccccccccdddddcccccccccc444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccc444dddddccccdddcccccccc4444cccccccccccccccccccccccccccdddddcccccccccc444ddddd44ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccc4444ddddccccccccccccccc444444cccccccccccccccccccccccccdddddccccccccc444ddddddd44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccc444ddddcccccccccccccccc444444ccccccccccccccccccccccccdddddcccccccc444ddddddddd4cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccc4444ccccccccccccccccccc4dddd4cccccccccccccccccccccccdddddcccccccc44ddddddddddd4ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccc44444cccccccccccccccccccddddd44cccccccccccccccccccccdddddccccccc444ddddddddddd44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccc4444cccccccccccccccccccddddddd4cccccccccccccccccccccddddccccccc444ddddddddddd44cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccc4444ccccccccccccccccccddddddd44ccccccccccccccccccccddddccccccc444dddddddddd4444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccc4444cccccccccccccccccccddddddd444ccccccccccccccccccccccccccccccccccddddcccc44444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccc4444cccccccccccccccccccccddddd444ccccccccccccccccccccccccccccccccdddddccccc4444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccddd44444cccccccccccccccccccccdddd4444cccccccccccccccccccccccccccccccdddddcccccc444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccdddd4444cccccccccccccccccccccddddd4444ccccccccccccccccccccccccccccccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccddddc4444ccccccccccccccccccccddddd444444ccccccccccccccccccccccccccccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccdddc44444cccccccccccccccccccdddddd444444ccccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccdddcc4444cccccccccccccccccccddddddc444444cccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccdddccc444cccccccccccccccccccddddddccc444444cccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccdddccc444cccccccccccccccccccddddddcccc444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccdddcccccccccccccccccccccccccddddddccccc444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccddddcccccccccccccccccccccccccdddddcccccccc444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccddddccccccccccccccccccccccccccccccccccccccc444444ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccdddccccccccccccccccccccccccccccccccccccccccc444444cccc4444444444444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccdddccccccccccccccccccccccccccccccccccccccc444444dddccc444444444444444444444444444444444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccc44444444444444ddddddccc4444444444444444ddd44444444444444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccc444444444444444444ddddddddddddcccccccccccccccccdddddddddddd4444444444444444cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccc444444444444444444444444ddddddddddddcccccccccccccccccddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccc444444444444444444ccccccddddddddcccccccccccccccccccccddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccc44444444cccccccccccccccccccccccccccccccccccccccccccccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccdddddddcccccccccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccc44444444dddddddddd4ccccccccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccc44444444ddddddddddddd4444444444444444ccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccc44444444ddddddddddddddddd444444444444ccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccddddddddddddddddd444444444444ccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccdddddddddddccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccdddddddddddccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccdddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
        tiles.setCurrentTilemap(tilemap`level53`)
    }
    tiles.placeOnRandomTile(cursor, assets.tile`myTile2`)
    speed = 7000
    animation.runImageAnimation(
    cursor,
    [img`
        .ffff........................ffff...............................................
        f1111f......................f1111f..............................................
        f1fff........................fff1f..............................................
        f1f............................f1f..............................................
        f1f............................f1f..............................................
        .f..............................f...............................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        .f..............................f...............................................
        f1f............................f1f..............................................
        f1f............................f1f..............................................
        f1fff........................fff1f..............................................
        f1111f......................f1111f..............................................
        .ffff........................ffff...............................................
        `,img`
        ................................................................................
        ..ffff......................ffff................................................
        .f1111f....................f1111f...............................................
        .f1fff......................fff1f...............................................
        .f1f..........................f1f...............................................
        .f1f..........................f1f...............................................
        ..f............................f................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ..f............................f................................................
        .f1f..........................f1f...............................................
        .f1f..........................f1f...............................................
        .f1fff......................fff1f...............................................
        .f1111f....................f1111f...............................................
        ..ffff......................ffff................................................
        ................................................................................
        `],
    250,
    true
    )
    color.pauseUntilFadeDone()
    music.play(music.createSoundEffect(WaveShape.Square, 2515, 2000, 255, 0, 800, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    countdown = sprites.create(img`
        ................................
        ................................
        ..........ffffffffffffff........
        .........ffffcccbbbbccff........
        ......fffffcbbbbbccbbccf........
        .....fffcccbbccccccccbcff.......
        .....ffccbbcccccfffcccbff.......
        .....ffccbcccff....fccbff.......
        .....ffcccfff......fccbff.......
        .....ffffff.........ccbff.......
        ...................fccbff.......
        ..................ffccbff.......
        ................ffffccbff.......
        ............fffffffcccbff.......
        ............fffccccccbcff.......
        ............fffccccccbcf........
        ............fffcccbbbff.........
        ............fffccbbcff..........
        .............ffccbbcfff.........
        ...............fccbccff.........
        .....fffff......fccbcff.........
        .....fcccff......fcbccf.........
        .....fcbccff.....fcbccf.........
        .....fcbccfff.....cbccf.........
        .....fcbbcccff...ffbccf.........
        .....ffcbbcccccfcbbbccf.........
        ......fccbbccccbbcccccf.........
        .......ffccbbbbcccccccf.........
        ........ffffcccccccffff.........
        .........fffffffffffff..........
        ................................
        ................................
        `, SpriteKind.Player)
    timer.after(1000, function () {
        music.play(music.createSoundEffect(WaveShape.Square, 2515, 2000, 255, 0, 800, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        countdown.setImage(img`
            .........fffcccccccccff.........
            .......ffccccbbbbbbbbbcf........
            .....ffccccbbbcccccccbbcf.......
            ....ffcccbbcccfffffcccbbf.......
            ...ffccbbbcfffffffffcccbf.......
            ...ffcccccfff.....fffcccb.......
            ...ffccccff........ffcccb.......
            ...fffffff..........fcccb.......
            ...ffffff..........fcccbc.......
            ...fffff..........ffcbbbf.......
            ..................fcbbccf.......
            .................fcbbccff.......
            ................fbbbccff........
            ...............fbbcccfff........
            ..............fbbcccfff.........
            ............ffbbccccff..........
            ...........ffbbccccff...........
            ..........ffbbccccfff...........
            .........ffcbccccff.............
            .......fffcbccccff..............
            .......ffcbbccfff...............
            ......ffcbbccfff................
            .....ffccbccff..................
            ....fffcbccff...................
            ....ffccbccccffffffffff.........
            ....ffccbbbbbbbbbbbbbbbbcff.....
            ....ffcccccccccccccccccbcff.....
            ....fffffffccccccccccccccff.....
            ....fffffffffffffffffffffff.....
            ...................ffffffff.....
            ................................
            ................................
            `)
        timer.after(1000, function () {
            music.play(music.createSoundEffect(WaveShape.Square, 2515, 2000, 255, 0, 800, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            countdown.setImage(img`
                ............ffffffff............
                ...........ffffccccf............
                ..........ffffcccccf............
                .........ffccccbbbcf............
                .......fffcccbbbcbcf............
                ......fffcccbccccbcf............
                ......fffccbccfcbcff............
                ......fffcccfffcbcf.............
                ......fffffff.fcbcf.............
                ......ffffff..fcbcf.............
                ..............fcbcf.............
                ..............fcbcf.............
                ..............fcbcf.............
                ..............fcbcf.............
                ..............fcbcf.............
                .............ffcbcf.............
                .............ffcbcf.............
                .............ffcbcf.............
                .............fccbcf.............
                .............fccbc..............
                .............fccbf..............
                .............fccbf..............
                .............fccbf..............
                .............fcbcf..............
                ....ffffffff.fcbcf..............
                ....fccccccccfcbcffcccccccff....
                ....fccbbbbbccbbbbbbbbbbbbff....
                ....fcccbbbbbbbbccccccccccff....
                ....fffffcccbbbbcccccfffffff....
                .......fffffccccffffffffffff....
                ................................
                ................................
                `)
            timer.after(1000, function () {
                music.play(music.createSoundEffect(WaveShape.Triangle, 2919, 2267, 255, 127, 1500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                countdown.setImage(img`
                    ................................................................
                    ................................................................
                    ................................................................
                    ..............fffffffffffff.....................................
                    ............ffccccccccccfff.....................................
                    ...........fccbbbbbbbcccfff...........fffffffff.................
                    ..........fcbbccccccccccfff..........fffcccccccfff..............
                    ........ffcbbcccfffffffffff.........ffccbbbbbbcccff.............
                    ........fcbbcccffff................ffcbbbcccccbbccf.............
                    .......fcbbcccff..................ffccbccccffccbbcff............
                    ......fccbcccff...................fccbccff.fffccbccf............
                    ......fcbccfff...................fccbccff....ffcbccff...........
                    ......ccbccff....................fccbcff......ffbbcff...........
                    .....fcbccff....................fccbbcff.......fcbcff...........
                    .....fcbccf......ffffff.........fccbcff........fcbcff...........
                    .....fcbcff......fccccccffff....fccbcf..........cbcff...........
                    .....fcbbff......fcbbbbbbcff....fccbff.........fcbcff...........
                    .....fccbff......fccccccbbcf...ffcbbff.........ccbcff...........
                    .....fccbf.......ffffccccbcf...ffcbcf..........ccbcff...........
                    .....fccbcf........ffffccbcf...ffcbcf..........ccbfff...........
                    .....fccbcf...........ffcbcf...ffcbcf.........fcbbff............
                    .....fccbccf.........fffcbcf...fccbc..........fcbcff............
                    .....ffcbbccc.fffffffccccbcf...fccbcf.......ffccbcff............
                    ......fcccbbccccccccccbbbccf...fccbcc.....fffcccbcff............
                    ......ffccccbbbbbbbbbbbccccf...fccbbccc..fffcccbcfff............
                    .......ffffcccccccccccccfff....ffccbbbcccccbbbbbcff.............
                    ........ffffffffffffffffff.....fffcccbbbbbbbbbccff..............
                    .........fffffffff..............ffffcccccccccccff...............
                    ................................fffffffffffffff.................
                    .................................ffffffffffff...................
                    ................................................................
                    ................................................................
                    `)
                inadventuregame = true
                timer.after(500, function () {
                    for (let index = 0; index < 5; index++) {
                        countdown.startEffect(effects.disintegrate)
                    }
                    timer.after(500, function () {
                        sprites.destroy(countdown)
                    })
                })
            })
        })
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inadventuregame) {
        tilesave = tiles.tileImageAtLocation(cursor.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
        tiles.setTileAt(cursor.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), tiles.tileImageAtLocation(cursor.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Left)))
        tiles.setTileAt(cursor.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Left), tilesave)
        music.play(music.createSoundEffect(
        WaveShape.Noise,
        1812,
        3563,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
    if (ingame) {
        tilesave = tiles.tileImageAtLocation(cursor.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
        tiles.setTileAt(cursor.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), tiles.tileImageAtLocation(cursor.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Left)))
        tiles.setTileAt(cursor.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Left), tilesave)
        music.play(music.createSoundEffect(
        WaveShape.Noise,
        1812,
        3563,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
    if (cs) {
        cs = false
        color.startFadeFromCurrent(color.Black)
        color.pauseUntilFadeDone()
        sprites.destroy(wc)
        sprites.destroy(character_cursor)
        sprites.destroyAllSpritesOfKind(SpriteKind.character)
        color.startFadeFromCurrent(color.originalPalette)
        start_marthon()
    }
})
function spawn_new_map () {
    tiles.setCurrentTilemap(tilemaps[blockSettings.readNumber("myspot")])
    tiles.placeOnRandomTile(adventplayer, assets.tile`myTile29`)
    if (blockSettings.readNumber("myspot") == 0) {
        taser = sprites.create(img`
            ......fffff.......
            .......ffff..ff...
            .......fffffff....
            .......ffff5......
            .....fff5555......
            ........55f5f.....
            ........5555......
            ......fffff.......
            .....ffffffeff....
            ....fffffeeefff...
            ...fff.feeef.fff..
            ..ff..fff55ff..ff.
            .fff..fff55ffff55.
            .ff..ffff88ffff55.
            .55.fffff88ffff...
            .55...8888888.....
            ......88...88.....
            .....ff8..ff8.....
            .....ffff.ffff....
            `, SpriteKind.taser)
        tiles.placeOnRandomTile(taser, assets.tile`myTile26`)
    }
    if (blockSettings.readNumber("myspot") == 1) {
        sprites.destroy(taser)
        PD = sprites.create(img`
            ......ffff........
            .....fffffffff....
            ...ffffffffff.....
            ...fffffff44f.....
            ....f4444f4f4f....
            ....f4444f4f4f....
            ....f44f44444f....
            .....f44ff44f.....
            ......ffffff......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......ffffff......
            `, SpriteKind.taser)
        tiles.placeOnRandomTile(PD, assets.tile`myTile31`)
    }
    if (blockSettings.readNumber("myspot") == 2) {
        sprites.destroy(PD)
        CG = sprites.create(img`
            .......88.........
            ......8968........
            ......8968........
            .....811bb........
            .....891b6........
            ....88888888......
            ....89999668......
            ....ccccccc.......
            .....4eecec.......
            .....4ffeee.......
            .....44efe88......
            ......4fee888.....
            ......8bb868......
            ......8bb868......
            ......899868......
            ......888868......
            .....cce.cce......
            .....eee.eee......
            `, SpriteKind.taser)
        tiles.placeOnRandomTile(CG, assets.tile`myTile34`)
    }
    if (blockSettings.readNumber("myspot") == 3) {
        taser = sprites.create(img`
            ......fffff.......
            .......ffff..ff...
            .......fffffff....
            .......ffff5......
            .....fff5555......
            ........55f5f.....
            ........5555......
            ......fffff.......
            .....ffffffeff....
            ....fffffeeefff...
            ...fff.feeef.fff..
            ..ff..fff55ff..ff.
            .fff..fff55ffff55.
            .ff..ffff88ffff55.
            .55.fffff88ffff...
            .55...8888888.....
            ......88...88.....
            .....ff8..ff8.....
            .....ffff.ffff....
            `, SpriteKind.taser)
        tiles.placeOnRandomTile(taser, assets.tile`myTile26`)
    }
    if (blockSettings.readNumber("myspot") == 4) {
        richard = sprites.create(img`
            ..................
            .....f.fc.........
            .....fffc.........
            ....fffffc........
            ...ff51ffff.......
            ....bf5bcc........
            ...c1bbb7c........
            ..cccb7727........
            ....172221........
            ....121111........
            ....221fff......c.
            ....22ffff.....bc.
            ....22fffffbbbbcc.
            ....fffffffbbbcc..
            ....fffffffbbcc...
            ......fffffbcc....
            ......c..c........
            ......c..c........
            .....1c.1c........
            `, SpriteKind.taser)
        tiles.placeOnRandomTile(richard, assets.tile`myTile26`)
        sprites.destroy(taser)
    }
    if (blockSettings.readNumber("myspot") == 5) {
        sprites.destroy(richard)
        PD = sprites.create(img`
            ......ffff........
            .....fffffffff....
            ...ffffffffff.....
            ...fffffff44f.....
            ....f4444f4f4f....
            ....f4444f4f4f....
            ....f44f44444f....
            .....f44ff44f.....
            ......ffffff......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......ffffff......
            `, SpriteKind.taser)
        tiles.placeOnRandomTile(PD, assets.tile`myTile31`)
    }
    if (blockSettings.readNumber("myspot") == 6) {
        sprites.destroy(PD)
        CG = sprites.create(img`
            .......88.........
            ......8968........
            ......8968........
            .....811bb........
            .....891b6........
            ....88888888......
            ....89999668......
            ....ccccccc.......
            .....4eecec.......
            .....4ffeee.......
            .....44efe88......
            ......4fee888.....
            ......8bb868......
            ......8bb868......
            ......899868......
            ......888868......
            .....cce.cce......
            .....eee.eee......
            `, SpriteKind.taser)
        tiles.placeOnRandomTile(CG, assets.tile`myTile34`)
    }
    if (blockSettings.readNumber("myspot") == 7) {
        sprites.destroy(PD)
        redline_guy = sprites.create(img`
            ..................
            .....fffff........
            .....f2f2f........
            .....f2f2ff.......
            .....ffffff.......
            .......fffff......
            ......fffffff.....
            .....ffffffff.....
            .....ffffffff.....
            .....fffffffff....
            .....fffffffff....
            ......ffffff.f....
            ......ffffff......
            ......ff..fff.....
            ......ff...ff.....
            ......f....ff.....
            ......f.....f.....
            ..................
            `, SpriteKind.taser)
        tiles.placeOnRandomTile(redline_guy, assets.tile`myTile52`)
        if (blockSettings.readNumber("myspot") == 7) {
            taser = sprites.create(img`
                ......fffff.......
                .......ffff..ff...
                .......fffffff....
                .......ffff5......
                .....fff5555......
                ........55f5f.....
                ........5555......
                ......fffff.......
                .....ffffffeff....
                ....fffffeeefff...
                ...fff.feeef.fff..
                ..ff..fff55ff..ff.
                .fff..fff55ffff55.
                .ff..ffff88ffff55.
                .55.fffff88ffff...
                .55...8888888.....
                ......88...88.....
                .....ff8..ff8.....
                .....ffff.ffff....
                `, SpriteKind.boss)
            tiles.placeOnRandomTile(taser, assets.tile`myTile26`)
        }
    }
}
function Win () {
    music.stopAllSounds()
    timer.after(1500, function () {
        inadventuregame = false
        isgame_over = 0
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        color.startFadeFromCurrent(color.Black, 2000)
        color.pauseUntilFadeDone()
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        get_a_move_on()
    })
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inadventuregame) {
        cursor.x += -16
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        275,
        1250,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.InBackground)
    }
    if (ingame) {
        cursor.x += -16
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        275,
        1250,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.InBackground)
    }
    if (cs) {
        if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile18`)) {
            tiles.placeOnRandomTile(character_cursor, assets.tile`myTile17`)
            music.play(music.createSoundEffect(
            WaveShape.Sine,
            275,
            1250,
            0,
            255,
            80,
            SoundExpressionEffect.None,
            InterpolationCurve.Logarithmic
            ), music.PlaybackMode.InBackground)
        } else {
            if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
                tiles.placeOnRandomTile(character_cursor, assets.tile`myTile18`)
                music.play(music.createSoundEffect(
                WaveShape.Sine,
                275,
                1250,
                0,
                255,
                80,
                SoundExpressionEffect.None,
                InterpolationCurve.Logarithmic
                ), music.PlaybackMode.InBackground)
            } else {
                if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
                    tiles.placeOnRandomTile(character_cursor, assets.tile`myTile19`)
                    music.play(music.createSoundEffect(
                    WaveShape.Sine,
                    275,
                    1250,
                    0,
                    255,
                    80,
                    SoundExpressionEffect.None,
                    InterpolationCurve.Logarithmic
                    ), music.PlaybackMode.InBackground)
                } else {
                    if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
                        tiles.placeOnRandomTile(character_cursor, assets.tile`myTile20`)
                        music.play(music.createSoundEffect(
                        WaveShape.Sine,
                        275,
                        1250,
                        0,
                        255,
                        80,
                        SoundExpressionEffect.None,
                        InterpolationCurve.Logarithmic
                        ), music.PlaybackMode.InBackground)
                    } else if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile22`) && blockSettings.readNumber("raptor") == 1) {
                        tiles.placeOnRandomTile(character_cursor, assets.tile`myTile21`)
                        music.play(music.createSoundEffect(
                        WaveShape.Sine,
                        275,
                        1250,
                        0,
                        255,
                        80,
                        SoundExpressionEffect.None,
                        InterpolationCurve.Logarithmic
                        ), music.PlaybackMode.InBackground)
                    }
                }
            }
        }
    }
})
function _4_in_a_row () {
    combo += 1
    score += Math.ceil(65 * speedbonus * combo)
    textSprite4.setText("x" + combo)
}
function spawn_player () {
    adventplayer = sprites.create(img`
        . . e . e . . . . . . . . . . . 
        . . e e e e e . . . . . . . . . 
        . . e e 5 e e . . . . . . . . . 
        . . . 5 5 5 4 . . . . . . . . . 
        . . . f 5 f 4 . . . . . . . . . 
        . . . 5 5 5 4 . 9 6 . . . . . . 
        . . . 9 9 9 9 9 6 . . . . . . . 
        . . . 6 6 8 8 . . . . . . . . . 
        . . . 6 6 8 8 . . . . . . . . . 
        . . . 6 6 8 8 . . . . . . . . . 
        . . . 6 8 8 8 . . . . . . . . . 
        . . . c c c c . . . . . . . . . 
        . . . c . . c . . . . . . . . . 
        . . . c . . c . . . . . . . . . 
        . . . c . . c . . . . . . . . . 
        . . e e . e e . . . . . . . . . 
        `, SpriteKind.advenplayer)
    controller.moveSprite(adventplayer, 50, 50)
    scene.cameraFollowSprite(adventplayer)
    characterAnimations.loopFrames(
    adventplayer,
    [img`
        . . . . . . e . e . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e 5 e e . . . . . . . 
        . . . . . 5 5 5 4 . . . . . . . 
        . . . . . f 5 f 4 . . . . . . . 
        . . . . . 5 5 5 4 . . 9 6 . . . 
        . . . . . . 9 9 9 9 9 6 . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . e e . e e . . . . . . 
        `,img`
        . . . . . e . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e 5 e e . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . f 5 f 4 . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . 9 9 9 9 6 . . . . . 
        . . . . . . 6 6 8 8 9 6 . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . e e e . . . . . . . 
        `,img`
        . . . . . e e . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . e e 5 e e . . . . . . . 
        . . . . . 5 5 5 4 . . . . . . . 
        . . . . . f 5 f 4 . . . . . . . 
        . . . . . 5 5 5 4 . 9 6 . . . . 
        . . . . . . 9 9 9 9 6 . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . e e . e e . . . . . . 
        `,img`
        . . . . . e . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e 5 e e . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . f 5 f 4 . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . 9 9 9 9 9 6 . . . . 
        . . . . . . 6 6 8 8 . 9 6 . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . e e . . . e e . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    adventplayer,
    [img`
        . . . . . . e . e . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e 5 e e . . . . . . . 
        . . . . . 5 5 5 4 . . . . . . . 
        . . . . . f 5 f 4 . . . . . . . 
        . . . . . 5 5 5 4 . . 9 6 . . . 
        . . . . . . 9 9 9 9 9 6 . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . e e . e e . . . . . . 
        `,img`
        . . . . . e . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e 5 e e . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . f 5 f 4 . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . 9 9 9 9 6 . . . . . 
        . . . . . . 6 6 8 8 9 6 . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . e e e . . . . . . . 
        `,img`
        . . . . . e e . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . e e 5 e e . . . . . . . 
        . . . . . 5 5 5 4 . . . . . . . 
        . . . . . f 5 f 4 . . . . . . . 
        . . . . . 5 5 5 4 . 9 6 . . . . 
        . . . . . . 9 9 9 9 6 . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . e e . e e . . . . . . 
        `,img`
        . . . . . e . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e 5 e e . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . f 5 f 4 . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . 9 9 9 9 9 6 . . . . 
        . . . . . . 6 6 8 8 . 9 6 . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . e e . . . e e . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    adventplayer,
    [img`
        . . . . . . e . e . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e e 5 e e . . . . . . . 
        . . . . . 5 5 5 4 . . . . . . . 
        . . . . . f 5 f 4 . . . . . . . 
        . . . . . 5 5 5 4 . . 9 6 . . . 
        . . . . . . 9 9 9 9 9 6 . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . e e . e e . . . . . . 
        `,img`
        . . . . . e . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e 5 e e . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . f 5 f 4 . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . 9 9 9 9 6 . . . . . 
        . . . . . . 6 6 8 8 9 6 . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . e e e . . . . . . . 
        `,img`
        . . . . . e e . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . e e 5 e e . . . . . . . 
        . . . . . 5 5 5 4 . . . . . . . 
        . . . . . f 5 f 4 . . . . . . . 
        . . . . . 5 5 5 4 . 9 6 . . . . 
        . . . . . . 9 9 9 9 6 . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . e e . e e . . . . . . 
        `,img`
        . . . . . e . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e 5 e e . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . f 5 f 4 . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . 9 9 9 9 9 6 . . . . 
        . . . . . . 6 6 8 8 . 9 6 . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . e e . . . e e . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    adventplayer,
    [img`
        . . . . . . . e . e . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . . e e 4 e e . . . . 
        . . . . . . . 5 5 5 4 . . . . . 
        . . . . . . . 5 f 5 f . . . . . 
        . . . 9 6 . . 5 5 5 4 . . . . . 
        . . . . 9 9 9 9 9 6 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . e e . e e . . . . . 
        `,img`
        . . . . . . . . e . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e 4 e e . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . 9 9 9 9 6 . . . . . . 
        . . . . 9 6 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . e e e . . . . . . 
        `,img`
        . . . . . . . . . e e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . e e 4 e e . . . . 
        . . . . . . . 5 5 4 4 . . . . . 
        . . . . . . . 5 f 5 f . . . . . 
        . . . . 9 6 . 5 5 5 4 . . . . . 
        . . . . . 9 9 9 9 6 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . e e . e e . . . . . 
        `,img`
        . . . . . . . . e . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e 4 e e . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . 9 9 9 9 9 6 . . . . . . 
        . . . 9 6 . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . . e e . . . e e . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    adventplayer,
    [img`
        . . . . . . . e . e . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . . e e 4 e e . . . . 
        . . . . . . . 5 5 5 4 . . . . . 
        . . . . . . . 5 f 5 f . . . . . 
        . . . 9 6 . . 5 5 5 4 . . . . . 
        . . . . 9 9 9 9 9 6 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . e e . e e . . . . . 
        `,img`
        . . . . . . . . e . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e 4 e e . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . 9 9 9 9 6 . . . . . . 
        . . . . 9 6 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . e e e . . . . . . 
        `,img`
        . . . . . . . . . e e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . e e 4 e e . . . . 
        . . . . . . . 5 5 4 4 . . . . . 
        . . . . . . . 5 f 5 f . . . . . 
        . . . . 9 6 . 5 5 5 4 . . . . . 
        . . . . . 9 9 9 9 6 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . e e . e e . . . . . 
        `,img`
        . . . . . . . . e . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e 4 e e . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . 9 9 9 9 9 6 . . . . . . 
        . . . 9 6 . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . . e e . . . e e . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    adventplayer,
    [img`
        . . . . . . . e . e . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . . e e 4 e e . . . . 
        . . . . . . . 5 5 5 4 . . . . . 
        . . . . . . . 5 f 5 f . . . . . 
        . . . 9 6 . . 5 5 5 4 . . . . . 
        . . . . 9 9 9 9 9 6 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . e e . e e . . . . . 
        `,img`
        . . . . . . . . e . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e 4 e e . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . 9 9 9 9 6 . . . . . . 
        . . . . 9 6 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . e e e . . . . . . 
        `,img`
        . . . . . . . . . e e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . e e 4 e e . . . . 
        . . . . . . . 5 5 4 4 . . . . . 
        . . . . . . . 5 f 5 f . . . . . 
        . . . . 9 6 . 5 5 5 4 . . . . . 
        . . . . . 9 9 9 9 6 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . e e . e e . . . . . 
        `,img`
        . . . . . . . . e . e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e 4 e e . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . 9 9 9 9 9 6 . . . . . . 
        . . . 9 6 . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . . c . . . . c . . . . . 
        . . . . . e e . . . e e . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    adventplayer,
    [img`
        . . . . . . . . e e . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . e e 4 e e . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . 9 6 5 5 5 4 . . . . . . 
        . . . . . 9 9 9 9 6 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . e e . e e . . . . . 
        `,img`
        . . . . . . . . e e . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . e e 4 e e . . . . . 
        . . . . . . 5 5 4 4 . . . . . . 
        . . . . . . 5 f 5 f . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . 9 9 9 9 6 . . . . . . 
        . . . . 9 6 6 6 6 8 . . . . . . 
        . . . . . . 6 6 6 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . e e . e e . . . . . 
        `],
    400,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    adventplayer,
    [img`
        . . . . . e . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e 5 e e . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . f 5 f 4 . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . 9 9 9 9 6 . . . . . 
        . . . . . . 6 6 8 8 9 6 . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . e e . e e . . . . . . 
        `,img`
        . . . . . e . e . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e 5 e e . . . . . . 
        . . . . . . 5 5 5 4 . . . . . . 
        . . . . . . f 5 f 4 . . . . . . 
        . . . . . . 5 5 5 4 9 6 . . . . 
        . . . . . . 9 9 9 9 6 . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 6 8 8 . . . . . . 
        . . . . . . 6 8 8 8 . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . e e . e e . . . . . . 
        `],
    400,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
}
function game_over () {
    animation.stopAnimation(animation.AnimationTypes.All, playericonhub)
    if (!(adv)) {
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        make_face_hurt()
        ingame = false
        timer.after(1500, function () {
            ingame = false
            isgame_over = 1
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
            color.startFadeFromCurrent(color.Black, 2000)
            color.pauseUntilFadeDone()
            game.reset()
        })
    } else {
        inadventuregame = false
        music.stopAllSounds()
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        make_face_hurt()
        timer.after(1500, function () {
            inadventuregame = false
            isgame_over = 1
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
            color.startFadeFromCurrent(color.Black, 2000)
            color.pauseUntilFadeDone()
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            get_a_move_on()
        })
    }
}
function make_face_hurt () {
    animation.stopAnimation(animation.AnimationTypes.All, playericonhub)
    if (character == 1) {
        playericonhub.setImage(img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff111111111111ee11111111111111ff
            ff11111111111edd11111111111111ff
            ff1111111edddde1ee11111ee11111ff
            ff1111edddeedeeeee11111dd11111ff
            ff1111eeddeeddeeeeeeeeed111111ff
            ff111111eeddedddddeee1dd111111ff
            ff111111155deeddddddded1111111ff
            ff111111155555eeeeedddd1111111ff
            ff1111111f5f55f5feeeed11111111ff
            ff11111115f5555f55eeed11111111ff
            ff1111111f5f55f5f5544411111111ff
            ff1111111555555555544411111111ff
            ff1111111555cc5555544411111111ff
            ff111111155c11c555544411111111ff
            ff111111155c11c555544419966611ff
            ff1111111555cc5554444499999661ff
            ff1111111155554444446999999961ff
            ff1111111114444444469991111961ff
            ff1111111111999994999911111111ff
            ff1111111111999999968811111111ff
            ff1111111116666666666881111111ff
            ff1111111116666666668888111111ff
            ff1111111116666666668888111111ff
            ff1111111116666666668888111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `)
    }
    if (character == 2) {
        playericonhub.setImage(img`
            cccccccccccccccccccccccccccccccc
            cffffffffffffffffffffffffffffffc
            cf1111111111111ccfffff11111111fc
            cf1111111111111cccffff11111111fc
            cf11111111111111cfffff11111111fc
            cf11111111111111cfffff11111111fc
            cf1111111cc1111ccffff111111111fc
            cf11111111ccccccfffff111111111fc
            cf1111111111cccff2f2f111111111fc
            cf5511111111115522f22111111551fc
            cfcff11111111155ffffffff111551fc
            cfcfff111111115522422111111ff1fc
            cfccff11111111555242111111cff1fc
            cf11cff11111ff5ff54411111cfff1fc
            cf111cfff11111555544111cccf111fc
            cf111cccff1111555fff11ccfff111fc
            cf1111ccfff111555fff1cffff1111fc
            cf111111cfff111ccfffcfff111111fc
            cf111111ccffff4cccfffff1111111fc
            cf1111111ccfff44ecfffff1111111fc
            cf11111111cfff44eccfff11111111fc
            cf1111111111ff44eccff111111111fc
            cf111111111111fceeecf111111111fc
            cf1111111111ccf54cccff11111111fc
            cf1111111111cff54ccfff11111111fc
            cf1111111111cff44ccfffff111111fc
            cf11111111ccfff68ccfffff111111fc
            cf1111111cccfff68ccfffff111111fc
            cf111111ccffff668cfffffff11111fc
            cf111111cfffff688ccfffffff1111fc
            cffffffffffffffffffffffffffffffc
            cccccccccccccccccccccccccccccccc
            `)
    }
    if (character == 3) {
        playericonhub.setImage(img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111188881111111111111ff
            ff1111111111189681111111111111ff
            ff1111111111899668111111111111ff
            ff1111111111899668111111111111ff
            ff11111111118199b8111111111111ff
            ff11111111181111bb811111111111ff
            ff1111111118911bb6811111111111ff
            ff1111111189999996681111111111ff
            ff1111111888888888888111111111ff
            ff1111111899999996668111111111ff
            ff1111111188888828281111111111ff
            ff1111111cccccc22c221111111111ff
            ff111111111ccccccccceee4111111ff
            ff111114eee4ece22e228e48111111ff
            ff1111184e84eeee2e2e8668111111ff
            ff1111186684fefeeeee8698111111ff
            ff11111896844eeeeee86981111111ff
            ff111111896844ffee886981111111ff
            ff1111118968844ee9886981111111ff
            ff111111896889b9b9869811111111ff
            ff111111189689b9b9888811111111ff
            ff111111188889b9b9981111111111ff
            ff1111111111899999981111111111ff
            ff1111111111898889981111111111ff
            ff1111111111889968981111111111ff
            ff1111111111899966881111111111ff
            ff1111111111888888881111111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `)
    }
    if (character == 4) {
        playericonhub.setImage(img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff11111111f1f111ff111111111111ff
            ff1111111fffff1ffff11111111111ff
            ff111111ffffffffffff1111111111ff
            ff11111ffffffffff2f2f111111111ff
            ff11111fffffffff22f22f11111111ff
            ff1111fffffff4fff4effff1111111ff
            ff11111ffff444ff22e22fff111111ff
            ff11111fff44444442e2efff111111ff
            ff11111fff44444444eeefff111111ff
            ff11111f44fff44fffeeeef1111111ff
            ff11111f4444444444eeeef1111111ff
            ff11111f444444444eeeeef1111111ff
            ff111111f444ffffeeeeef11111111ff
            ff111111f44f444efeeeef11111111ff
            ff1111111ff444eeeeeff111111111ff
            ff111111111ffffffff11111111111ff
            ff1111111ff66666688f1111111111ff
            ff1111111f666666688ff111111111ff
            ff1111111f6666666888f111111111ff
            ff111111ff6666666888f111111111ff
            ff111111f66666666888ff11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666668888f11111111ff
            ff111111f666666688888f11111111ff
            ff111111f666666688888f11111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `)
    }
    if (character == 5) {
        playericonhub.setImage(img`
            dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd
            ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd
            ddbbbbbbbbbcbbbbfbbbbbbbbbbbbbdd
            ddbbbbbbbbccbbbfffbbbbbbbbbbbbdd
            ddbbbbbbbcccfbfffffbbbbbbbbbbbdd
            ddbbbbbbfccffffffffbbcfbbbbbbbdd
            ddbbbbccfccdfdfdfdfbbcffbbbbbbdd
            ddbbbbccfcd2d2d2d2dbbbffbbbbbbdd
            ddbbbbccfccd2dfd2dfbbccfbbbbbbdd
            ddbbbbccfcd2d2d2d2dbccffbbbbbbdd
            ddbbbbbcffcdfdfdfdfccfffbbbbbbdd
            ddbbbbbcffccfffffffcffffbbbbbbdd
            ddbbbbbccffffffffffffffbbbbbbbdd
            ddbbbbbbcfffffffffffffbbbbbbbbdd
            ddbbbbbbccfcffffffffffbbbbbbbbdd
            ddbbbbbbbcfcffffffcffbbbbbbbbbdd
            ddbbbbbbbcccffffffcffbbbbbbbbbdd
            ddbbbbbbbbbcffffffcfbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffbbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffbbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffbbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffbbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffbbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffbbbbbbbbbbbdd
            ddbbbbbbbbbfffffffffbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffffbbbbbbbbbdd
            ddbbbbbbbbccfffbcffffbbbbbbbbbdd
            ddbbbbbbbccfffbbbcfffbbbbbbbbbdd
            dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            `)
    }
    if (character == 6) {
        playericonhub.setImage(img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111fff111111111111111ff
            ff111111111fcccf11111111111111ff
            ff11111111fbcccf11111111111111ff
            ff1111111fbccccf11111111111111ff
            ff1111fffdcdcccffffffffff11111ff
            ff1111fbbcdcccccccccccccf11111ff
            ff11ffbbcdcdcccccccccccccfffffff
            ff11fbbbccccccccccccccccccccccff
            ff11fbbbcffcccccccccccccccccccff
            ff11ffbff1bbbccc222cccccccccccff
            ff1111f1bfbbbbcc222cccccccccccff
            ff1111fff1f222b2222cccccccccccff
            ff111111111222b4442cccccccccccff
            ff11111111222224442cccccccccccff
            ff11111112222224442222ccccccccff
            ff11111112244444442222ccccccccff
            ff11111122444444442222ccccccccff
            ff11111222444444442222ccccccccff
            ff11111224444444442222ccccccccff
            ff11112224445554444222bccccfffff
            ff11122444555554444422bbccf111ff
            ff11122444555555444422bbbff111ff
            fffff2244455555544442fffffffffff
            ffffffffffff5555ffffffffffffffff
            `)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inadventuregame) {
        cursor.x += 16
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        275,
        1250,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.InBackground)
    }
    if (ingame) {
        cursor.x += 16
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        275,
        1250,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.InBackground)
    }
    if (cs) {
        if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile17`)) {
            tiles.placeOnRandomTile(character_cursor, assets.tile`myTile18`)
            music.play(music.createSoundEffect(
            WaveShape.Sine,
            275,
            1250,
            0,
            255,
            80,
            SoundExpressionEffect.None,
            InterpolationCurve.Logarithmic
            ), music.PlaybackMode.InBackground)
        } else {
            if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile18`)) {
                tiles.placeOnRandomTile(character_cursor, assets.tile`myTile19`)
                music.play(music.createSoundEffect(
                WaveShape.Sine,
                275,
                1250,
                0,
                255,
                80,
                SoundExpressionEffect.None,
                InterpolationCurve.Logarithmic
                ), music.PlaybackMode.InBackground)
            } else {
                if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
                    tiles.placeOnRandomTile(character_cursor, assets.tile`myTile20`)
                    music.play(music.createSoundEffect(
                    WaveShape.Sine,
                    275,
                    1250,
                    0,
                    255,
                    80,
                    SoundExpressionEffect.None,
                    InterpolationCurve.Logarithmic
                    ), music.PlaybackMode.InBackground)
                } else {
                    if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
                        tiles.placeOnRandomTile(character_cursor, assets.tile`myTile21`)
                        music.play(music.createSoundEffect(
                        WaveShape.Sine,
                        275,
                        1250,
                        0,
                        255,
                        80,
                        SoundExpressionEffect.None,
                        InterpolationCurve.Logarithmic
                        ), music.PlaybackMode.InBackground)
                    } else if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile21`) && blockSettings.readNumber("raptor") == 1) {
                        tiles.placeOnRandomTile(character_cursor, assets.tile`myTile22`)
                        music.play(music.createSoundEffect(
                        WaveShape.Sine,
                        275,
                        1250,
                        0,
                        255,
                        80,
                        SoundExpressionEffect.None,
                        InterpolationCurve.Logarithmic
                        ), music.PlaybackMode.InBackground)
                    }
                }
            }
        }
    }
})
function _3_in_a_row () {
    combo += 1
    score += Math.ceil(30 * speedbonus * combo)
    textSprite4.setText("x" + combo)
}
sprites.onOverlap(SpriteKind.advenplayer, SpriteKind.raptor, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.Player)
    if (blockSettings.readNumber("myspot") == 3) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("Rawr!", 1000, true)
        timer.after(1000, function () {
            otherSprite.sayText("Rar roar?", 1000, true)
            timer.after(1500, function () {
                otherSprite.sayText("Raaaaawrrr?????", 3000, true)
                timer.after(3000, function () {
                    otherSprite.sayText("Hmph!", 2000, true)
                    timer.after(2000, function () {
                        otherSprite.sayText("ROAR!", 1500, true)
                        timer.after(2000, function () {
                            controller.moveSprite(sprite, 50, 50)
                            sprites.destroy(raptor, effects.fire, 500)
                            blockSettings.writeNumber("raptor", 1)
                        })
                    })
                })
            })
        })
    }
})
function _5_in_a_row () {
    combo += 1
    score += Math.ceil(100 * speedbonus * combo)
    textSprite4.setText("x" + combo)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ingame) {
        cursor.y += 16
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        275,
        1250,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.InBackground)
    }
    if (inadventuregame) {
        cursor.y += 16
        music.play(music.createSoundEffect(
        WaveShape.Sine,
        275,
        1250,
        0,
        255,
        80,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.InBackground)
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    score += 100
})
function start_marthon () {
    isgame_over = 0
    adv = false
    music.stopAllSounds()
    if (blockSettings.readString("music?") == "yes") {
        music.play(music.createSong(hex`0078000408080400001c00010a006400f401640000040000000000000000000000000005000004af0000000c000224270c00100002222510001c000224271c00200002252920002c000224272c00300002222530004000022427400044000225294400480002252948004c000220244c0050000220245000540002242754006000022225640070000222257000740002202474008000022225800084000224278400900002222590009400022024940098000222259c00a000022427a000a400022427a400a800022024a800ac00022024ac00b80002222507001c00020a006400f40164000004000000000000000000000000000000000315007000740002292c8000840002292c9000940002292c08001c000e050046006603320000040a002d00000064001400013200020100023700bc00c000022427c000c400022529c400c80002272acc00d800012cd800dc0002272adc00e000022529e000e400022427e800f80002202409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80020014000410001044400450001044800490001044c004d0001045000510001045400550001045800590001035c005d0001036000610001046400650001046800690001046c006d0001047000710001047400750001037800790001037c007d0001048000810001048400850001048800890001048c008d0001049000910001049400950001039800990001039c009d000104a000a1000104a400a5000103a800a9000103ac00ad000104b000b1000104b400b5000104b800b9000104bc00bd000103c000c1000103c400c5000103c800c9000103cc00cd000104d000d1000104d400d5000104d800d9000104dc00dd000104e000e1000104e400e5000104e800e9000104ec00ed000103f000f1000103f400f5000103f800f9000103fc00fd000103`), music.PlaybackMode.LoopingInBackground)
    }
    if (character == 1) {
        playericonhub = sprites.create(img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff111111111111ee11111111111111ff
            ff111111111111ee11111111111111ff
            ff111111111111dde1111111111111ff
            ff111ee11111ee1edddde111111111ff
            ff111dd11111eeeeedeeddde111111ff
            ff1111deeeeeeeeeddeeddee111111ff
            ff1111dd1eeedddddeddee11111111ff
            ff11111dedddddddeed44111111111ff
            ff11111ddddeeeee55544111111111ff
            ff111111deeeee5555544111111111ff
            ff111111deeefff555544111111111ff
            ff111111fffff55555544411111111ff
            ff11111155555f5555544411111111ff
            ff11111155f5555555544411111111ff
            ff1111111555555555544411111111ff
            ff1111111555ccccccc44411111111ff
            ff11111115ccc11111c44411111111ff
            ff11111115c1111cccc44419966611ff
            ff11111115cccccc54444499999661ff
            ff1111111155554444446999999961ff
            ff1111111114444444469991111961ff
            ff1111111111999994999911111111ff
            ff1111111111999999968811111111ff
            ff1111111116666666666881111111ff
            ff1111111116666666668888111111ff
            ff1111111116666666668888111111ff
            ff1111111116666666668888111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `, SpriteKind.Player)
        animation.runImageAnimation(
        playericonhub,
        [img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff111111111111ee11111111111111ff
            ff111111111111ee11111111111111ff
            ff111111111111dde1111111111111ff
            ff111ee11111ee1edddde111111111ff
            ff111dd11111eeeeedeeddde111111ff
            ff1111deeeeeeeeeddeeddee111111ff
            ff1111dd1eeedddddeddee11111111ff
            ff11111dedddddddeed44111111111ff
            ff11111ddddeeeee55544111111111ff
            ff111111deeeee5555544111111111ff
            ff111111deeefff555544111111111ff
            ff111111fffff55555544411111111ff
            ff11111155555f5555544411111111ff
            ff11111155f5555555544411111111ff
            ff1111111555555555544411111111ff
            ff1111111555ccccccc44411111111ff
            ff11111115ccc11111c44411111111ff
            ff11111115c1111cccc44419966611ff
            ff11111115cccccc54444499999661ff
            ff1111111155554444446999999961ff
            ff1111111114444444469991111961ff
            ff1111111111999994999911111111ff
            ff1111111111999999968811111111ff
            ff1111111116666666666881111111ff
            ff1111111116666666668888111111ff
            ff1111111116666666668888111111ff
            ff1111111116666666668888111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff111111111111ee11111111111111ff
            ff111111111111ee11111111111111ff
            ff111111111111ddeee11111111111ff
            ff111ee111111eedddede111111111ff
            ff111dde1111dddd1eeeddde111111ff
            ff1111deeeeddddeeeeeddee111111ff
            ff1111ddeeeeddeededdee11111111ff
            ff11111deddddeedeed44111111111ff
            ff11111ddddeeeee55544111111111ff
            ff111111deeeee5555544111111111ff
            ff111111deeefff555544111111111ff
            ff111111fffff55555544411111111ff
            ff11111155555f5555544411111111ff
            ff11111155f5555555544411111111ff
            ff1111111555555555544411111111ff
            ff1111111555ccccccc44411111111ff
            ff11111115ccc11111c44411111111ff
            ff11111115c1111cccc44411111111ff
            ff11111115cccccc54444491111961ff
            ff1111111155554444446999999961ff
            ff1111111114444444469999999661ff
            ff1111111111999994999919966611ff
            ff1111111111999999968811111111ff
            ff1111111116666666666881111111ff
            ff1111111116666666668888111111ff
            ff1111111116666666668888111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `],
        200,
        true
        )
    }
    if (character == 2) {
        playericonhub = sprites.create(img`
            cccccccccccccccccccccccccccccccc
            cffffffffffffffffffffffffffffffc
            cf1111111111111ccfffff11111111fc
            cf1111111111111cccffff11111111fc
            cf11111111111111cfffff11111111fc
            cf11111111111111cfffff11111111fc
            cf1111111cc1111ccffff111111111fc
            cf11111111ccccccfffff111111111fc
            cf1111111111cccffffff111111111fc
            cf11111111111155fffff111111111fc
            cf11111111111155fffff111111111fc
            cf111111111111555544fffff11111fc
            cf1111111111ff5ff5441111111111fc
            cf1111111111ff5ff5441111111111fc
            cf1111111111115555441111111111fc
            cf111111111111555fff1111111111fc
            cf111111111111555fff1111111111fc
            cf1111111111111ccfffff11111111fc
            cf11111111cfff4cccffffff111111fc
            cf1111111ccfff44ecffffffff1111fc
            cf111111ccffff44eccff1fffff111fc
            cf111111cfffff44eccff1fffff111fc
            cf1111ccffff11fceeecf111fffff1fc
            cf111cccff11ccf54cccff111ffffffc
            cf111cffff11cff54ccfff111ffffffc
            cf11cff11111cff44ccfffff111ffffc
            cfccff1111ccfff68ccfffff11111ffc
            cfcfff111cccfff68ccfffff11111ffc
            cfcff111ccffff668cfffffff1111ffc
            cf551111cfffff688ccfffffff1115fc
            cffffffffffffffffffffffffffffffc
            cccccccccccccccccccccccccccccccc
            `, SpriteKind.Player)
        animation.runImageAnimation(
        playericonhub,
        [img`
            cccccccccccccccccccccccccccccccc
            cffffffffffffffffffffffffffffffc
            cf11111111111111ccffffff111111fc
            cf11111111111111cccfffff111111fc
            cf11111111111111cffffff1111111fc
            cf11111111111111cffffff1111111fc
            cf1111111111111ccfffff11111111fc
            cf1111111cc111ccffffff11111111fc
            cf11111111cccccffffff111111111fc
            cf1111111111cc55fffff111111111fc
            cf11111111111155fffffffff11111fc
            cf1111111111115555441111111111fc
            cf1111111111ff5ff5441111111111fc
            cf1111111111ff5ff5441111111111fc
            cf1111111111115555441111111111fc
            cf111111111111555fff1111111111fc
            cf111111111111555fff1f11111111fc
            cf11111111cfff1ccfffffff111111fc
            cf1111111ccfff4cccffffffff1111fc
            cf111111ccffff44ecfff1fffff111fc
            cf111111cfffff44eccff1fffff111fc
            cf1111ccffff1144eccff111fffff1fc
            cf111cccff1111fceeecf111fffffffc
            cf111cffff11ccf54cccff111ffffffc
            cf11cff11111cff54ccfff11111ffffc
            cfccff111111cff44ccfffff11111ffc
            cfcfff1111ccfff68ccfffff11111ffc
            cfcff1111cccfff68ccfffff11111ffc
            cf551111ccffff668cfffffff11115fc
            cf551111cfffff688ccfffffff1115fc
            cffffffffffffffffffffffffffffffc
            cccccccccccccccccccccccccccccccc
            `,img`
            cccccccccccccccccccccccccccccccc
            cffffffffffffffffffffffffffffffc
            cf1111111111111ccfffff11111111fc
            cf1111111111111cccffff11111111fc
            cf11111111111111cfffff11111111fc
            cf11111111111111cfffff11111111fc
            cf1111111cc1111ccffff111111111fc
            cf11111111ccccccfffff111111111fc
            cf1111111111cccffffff111111111fc
            cf11111111111155fffff111111111fc
            cf11111111111155fffff111111111fc
            cf111111111111555544fffff11111fc
            cf1111111111ff5ff5441111111111fc
            cf1111111111ff5ff5441111111111fc
            cf1111111111115555441111111111fc
            cf111111111111555fff1111111111fc
            cf111111111111555fff1111111111fc
            cf1111111111111ccfffff11111111fc
            cf11111111cfff4cccffffff111111fc
            cf1111111ccfff44ecffffffff1111fc
            cf111111ccffff44eccff1fffff111fc
            cf111111cfffff44eccff1fffff111fc
            cf1111ccffff11fceeecf111fffff1fc
            cf111cccff11ccf54cccff111ffffffc
            cf111cffff11cff54ccfff111ffffffc
            cf11cff11111cff44ccfffff111ffffc
            cfccff1111ccfff68ccfffff11111ffc
            cfcfff111cccfff68ccfffff11111ffc
            cfcff111ccffff668cfffffff1111ffc
            cf551111cfffff688ccfffffff1115fc
            cffffffffffffffffffffffffffffffc
            cccccccccccccccccccccccccccccccc
            `],
        200,
        true
        )
    }
    if (character == 3) {
        playericonhub = sprites.create(img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111188881111111111111ff
            ff1111111111189681111111111111ff
            ff1111111111899668111111111111ff
            ff1111111111899668111111111111ff
            ff11111111118199b8111111111111ff
            ff11111111181111bb811111111111ff
            ff1111111118911bb6811111111111ff
            ff1111111189999996681111111111ff
            ff1111111888888888888111111111ff
            ff1111111899999996668111111111ff
            ff1111111188888888881111111111ff
            ff1111111ccccccccccc1111111111ff
            ff111111111ccccccccc1111111111ff
            ff1111111114eceeceec1111111111ff
            ff1111111114fefeeeee1111111111ff
            ff1111111114fefeeeee1111111111ff
            ff11111111144eeefee88811111111ff
            ff111111111144ffee888881111111ff
            ff1111111111844ee8888881111111ff
            ff111111111189b9b8968811111111ff
            ff111111111189b9b8968111111111ff
            ff111111111189b9b8968111111111ff
            ff1111111111899998968111111111ff
            ff1111111111898888968111111111ff
            ff1111111111889968668111111111ff
            ff11111111118999684e8111111111ff
            ff1111111111888884eee111111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `, SpriteKind.Player)
        animation.runImageAnimation(
        playericonhub,
        [img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111118888111111111111ff
            ff1111111111118968111111111111ff
            ff1111111111189966111111111111ff
            ff1111111111189966811111111111ff
            ff111111111188199b811111111111ff
            ff111111111181111b811111111111ff
            ff11111111189911bbb81111111111ff
            ff1111111188899999681111111111ff
            ff1111111189988888668111111111ff
            ff1111111118899999888811111111ff
            ff1111111cccc88888666811111111ff
            ff11111111cccccccc888111111111ff
            ff1111111114eceeceec1111111111ff
            ff1111111114fefeeeee1111111111ff
            ff1111111114fefeeeee1111111111ff
            ff11111111144eeefee88811111111ff
            ff111111111144ffee888881111111ff
            ff1111111111844ee8888881111111ff
            ff111111111189b9b8968811111111ff
            ff111111111189b9b8968111111111ff
            ff111111111189b9b8968111111111ff
            ff1111111111899998968111111111ff
            ff1111111111898888968111111111ff
            ff1111111111889968668111111111ff
            ff11111111118999684e8111111111ff
            ff1111111111888884eee111111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111888811111111111111ff
            ff1111111111896811111111111111ff
            ff1111111118996681111111111111ff
            ff1111111118996681111111111111ff
            ff1111111118199b81111111111111ff
            ff1111111181111bb8111111111111ff
            ff111111118911bb68111111111111ff
            ff1111111899999966811111111111ff
            ff1111118888888888881111111111ff
            ff1111118999999966681111111111ff
            ff111111c888888888811111111111ff
            ff1111111cccccccccc11111111111ff
            ff111111114eceeceec11111111111ff
            ff111111114fefeeeee11111111111ff
            ff111111114fefeeeee11111111111ff
            ff1111111144eeefee881111111111ff
            ff11111111144ffee8888811111111ff
            ff111111111144ee88888811111111ff
            ff111111111189b9b8968111111111ff
            ff111111111189b9b8968111111111ff
            ff111111111189b9b8968111111111ff
            ff1111111111899998968111111111ff
            ff1111111111898888968111111111ff
            ff1111111111889968668111111111ff
            ff11111111118999684e8111111111ff
            ff1111111111888884eee111111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `],
        200,
        true
        )
    }
    if (character == 4) {
        playericonhub = sprites.create(img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff11111111f1f111ff111111111111ff
            ff1111111fffff1ffff11111111111ff
            ff111111ffffffffffff1111111111ff
            ff11111ffffffffffffff111111111ff
            ff11111fffffffffffffff11111111ff
            ff1111fffffff4fff4effff1111111ff
            ff11111ffff444ff44efffff111111ff
            ff11111fff44444444eeefff111111ff
            ff11111fff4f44f444eeefff111111ff
            ff11111f444f44f444eeeef1111111ff
            ff11111f444f44f444eeeef1111111ff
            ff11111f444444444eeeeef1111111ff
            ff111111f44f4444feeeef11111111ff
            ff111111f444ffffeeeeef11111111ff
            ff1111111ff444eeeeeff111111111ff
            ff111111111ffffffff11111111111ff
            ff1111111ff66666688f1111111111ff
            ff1111111f666666688ff111111111ff
            ff1111111f6666666888f111111111ff
            ff111111ff6666666888f111111111ff
            ff111111f66666666888ff11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666668888f11111111ff
            ff111111f666666688888f11111111ff
            ff111111f666666688888f11111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `, SpriteKind.Player)
        animation.runImageAnimation(
        playericonhub,
        [img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff11111111f1f111ff111111111111ff
            ff1111111fffff1ffff11111111111ff
            ff111111ffffffffffff1111111111ff
            ff11111ffffffffffffff111111111ff
            ff11111fffffffffffffff11111111ff
            ff1111fffffffefffeeffff1111111ff
            ff11111ffffe44ffeeefffff111111ff
            ff11111fffe4444444eeefff111111ff
            ff11111fff4f44f444eeefff111111ff
            ff11111f444f44f444eeeef1111111ff
            ff11111f444f44f444eeeef1111111ff
            ff11111f444444444eeeeef1111111ff
            ff111111f44f4444feeeef11111111ff
            ff111111f444ffffeeeeef11111111ff
            ff1111111ff444eeeeeff111111111ff
            ff111111111ffffffff11111111111ff
            ff1111111ff66666688f1111111111ff
            ff1111111f666666688ff111111111ff
            ff1111111f6666666888f111111111ff
            ff111111ff6666666888f111111111ff
            ff111111f66666666888ff11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666668888f11111111ff
            ff111111f666666688888f11111111ff
            ff111111f666666688888f11111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff11111111f1f111ff111111111111ff
            ff1111111fffff1ffff11111111111ff
            ff111111ffffffffffff1111111111ff
            ff11111ffffffffffffff111111111ff
            ff11111fffffffffffffff11111111ff
            ff1111fffffffefff4effff1111111ff
            ff11111ffffee4ffe4efffff111111ff
            ff11111fffe4444444eeefff111111ff
            ff11111fffef44f444eeefff111111ff
            ff11111f444f44f444eeeef1111111ff
            ff11111f444f44f444eeeef1111111ff
            ff11111f4444444444eeeef1111111ff
            ff111111f44f4444feeeef11111111ff
            ff111111f444ffffeeeeef11111111ff
            ff1111111ff4444eeeeff111111111ff
            ff111111111ffffffff11111111111ff
            ff1111111f666666668ff111111111ff
            ff1111111f6666666888f111111111ff
            ff111111ff6666666688f111111111ff
            ff111111f66666666888ff11111111ff
            ff111111f666666666888f11111111ff
            ff111111f666666668888f11111111ff
            ff111111f666666668888f11111111ff
            ff111111f666666668888f11111111ff
            ff111111f666666668888f11111111ff
            ff111111f666666688888f11111111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `],
        200,
        true
        )
    }
    if (character == 5) {
        playericonhub = sprites.create(img`
            dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd
            ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd
            ddbbbbbbbbbcbbbbfbbbbbbbbbbbbbdd
            ddbbbbbbbbccbbbfffbbbbbbbbbbbbdd
            ddbbbbbbbcccfbfffffbbbbbbbbbbbdd
            ddbbbbbbbccffffffffbbbbbbbbbbbdd
            ddbbbbbbbccdffffdffbbbbbbbbbbbdd
            ddbbbbbbbcd22dd22dfbbbbbbbbbbbdd
            ddbbbbbbbcc22ff22ffbbbbbbbbbbbdd
            ddbbbbbbbcd22dd22dfbbbbbbbbbbbdd
            ddbbbbbbbccfdffdfffbbbbbbbbbbbdd
            ddbbbbbbbcccffffffffbbbbbbbbbbdd
            ddbbbbbbbbfffffffffffbbbbbbbbbdd
            ddbbbbbbbccffffffffffbbbbbbbbbdd
            ddbbbbbbbcfcffffffffffbbbbbbbbdd
            ddbbbbbbccfcffffffcfffbbbbbbbbdd
            ddbbbbbbcffcffffffcffffbbbbbbbdd
            ddbbbbbbccfcffffffccffffbbbbbbdd
            ddbbbbbbcffcfffffffccfffbbbbbbdd
            ddbbbbbbcffcfffffffbccffbbbbbbdd
            ddbbbbbbccfcfffffffbbccfbbbbbbdd
            ddbbbbbbccfcfffffffbbbffbbbbbbdd
            ddbbbbbbccfcffffffffbcffbbbbbbdd
            ddbbbbbbccfcffffffffbcfbbbbbbbdd
            ddbbbbbbbbffffffffffbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffffbbbbbbbbbdd
            ddbbbbbbbbccfffbcffffbbbbbbbbbdd
            ddbbbbbbbccfffbbbcfffbbbbbbbbbdd
            dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            `, SpriteKind.Player)
        animation.runImageAnimation(
        playericonhub,
        [img`
            dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd
            ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd
            ddbbbbbbbbbcbbbbfbbbbbbbbbbbbbdd
            ddbbbbbbbbccbbbfffbbbbbbbbbbbbdd
            ddbbbbbbbcccfbfffffbbbbbbbbbbbdd
            ddbbbbbbbccffffffffbbbbbbbbbbbdd
            ddbbbbbbbccdffffdffbbbbbbbbbbbdd
            ddbbbbbbbcd22dd22dfbbbbbbbbbbbdd
            ddbbbbbbbcc22ff22ffbbbbbbbbbbbdd
            ddbbbbbbbcd22dd22dfbbbbbbbbbbbdd
            ddbbbbbbbccfdffdfffbbbbbbbbbbbdd
            ddbbbbbbbcccffffffffbbbbbbbbbbdd
            ddbbbbbbbbfffffffffffbbbbbbbbbdd
            ddbbbbbbbccfccfffffffbbbbbbbbbdd
            ddbbbbbbbcfcccccffffffbbbbbbbbdd
            ddbbbbbbccfcccffffcfffbbbbbbbbdd
            ddbbbbbbcffcccffffcffffbbbbbbbdd
            ddbbbbbbccfccfffffccffffbbbbbbdd
            ddbbbbbbcffccffffffccfffbbbbbbdd
            ddbbbbbbcffccffffffbccffbbbbbbdd
            ddbbbbbbccfccffffffbbccfbbbbbbdd
            ddbbbbbbccfccffffffbbbffbbbbbbdd
            ddbbbbbbccfcffffffffbcffbbbbbbdd
            ddbbbbbbccfcffffffffbcfbbbbbbbdd
            ddbbbbbbbbffffffffffbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffffbbbbbbbbbdd
            ddbbbbbbbbfcfffbcffffbbbbbbbbbdd
            ddbbbbbbbfcfffbbbcfffbbbbbbbbbdd
            dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            `,img`
            dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd
            ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd
            ddbbbbbbbbbcbbbbfbbbbbbbbbbbbbdd
            ddbbbbbbbbccbbbfffbbbbbbbbbbbbdd
            ddbbbbbbbcccfbfffffbbbbbbbbbbbdd
            ddbbbbbbbccffffffffbbbbbbbbbbbdd
            ddbbbbbbbccddffddffbbbbbbbbbbbdd
            ddbbbbbbbcc22ff22ffbbbbbbbbbbbdd
            ddbbbbbbbcd22dd22dfbbbbbbbbbbbdd
            ddbbbbbbbcc22ff22ffbbbbbbbbbbbdd
            ddbbbbbbbccddffddffbbbbbbbbbbbdd
            ddbbbbbbbcccffffffffbbbbbbbbbbdd
            ddbbbbbbbbfffffffffffbbbbbbbbbdd
            ddbbbbbbbccfccfffffffbbbbbbbbbdd
            ddbbbbbbbcfcccccffffffbbbbbbbbdd
            ddbbbbbbccfcccffffcfffbbbbbbbbdd
            ddbbbbbbcffcccffffcffffbbbbbbbdd
            ddbbbbbbccfccfffffccffffbbbbbbdd
            ddbbbbbbcffccffffffccfffbbbbbbdd
            ddbbbbbbcffccffffffbccffbbbbbbdd
            ddbbbbbbccfccffffffbbccfbbbbbbdd
            ddbbbbbbccfccffffffbbbffbbbbbbdd
            ddbbbbbbccfcffffffffbcffbbbbbbdd
            ddbbbbbbccfcffffffffbcfbbbbbbbdd
            ddbbbbbbbbffffffffffbbbbbbbbbbdd
            ddbbbbbbbbbcfffffffffbbbbbbbbbdd
            ddbbbbbbbbfcfffbcffffbbbbbbbbbdd
            ddbbbbbbbfcfffbbbcfffbbbbbbbbbdd
            dddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            `],
        200,
        true
        )
    }
    if (character == 6) {
        playericonhub = sprites.create(img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff11111111fffff111111111111111ff
            ff11111111fbccf111111111111111ff
            ff1111ffffbbcccf11111111111111ff
            ff1111fbbbcccccf11111111111111ff
            ff11ffbbcfb11ccf11111111111111ff
            ff11fbbbcfb11ccf11111111111111ff
            ff11fbbbccccccccfffffffff11111ff
            ff11ffbffffcccccccccccccf11111ff
            ff1111f1b1bccccccccccccccfffffff
            ff1111ffffbbccccccccccccccccccff
            ff11111111fbbcccccccccccccccccff
            ff11111111fbbbccccccccccccccccff
            ff111111111fbbccccccccccccccccff
            ff111111111ffbbcccccccccccccccff
            ff11111111111fbbccccccccccccccff
            ff11111111111fbbccccccccccccccff
            ff11111111111fbbbbccccccccccccff
            ff11111111111fbcbbccccccccccccff
            ff111111111ffbccccccccccccccccff
            ff111111111fbbcfffffbcccccccccff
            ff111111111fbcc111ffbcccccccccff
            ff111111111ffbc111ffbbbccccfffff
            ff11111111111fcf11fcffbbccf111ff
            ff11111111111fff11fcffbbbff111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `, SpriteKind.Player)
        animation.runImageAnimation(
        playericonhub,
        [img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff11111111fffff111111111111111ff
            ff11111111fbccf111111111111111ff
            ff1111ffffbbcccf11111111111111ff
            ff1111fbbbcccccf11111111111111ff
            ff11ffbbcfb11ccf11111111111111ff
            ff11fbbbcfb11ccf11111111111111ff
            ff11fbbbccccccccfffffffff11111ff
            ff11ffbffffcccccccccccccf11111ff
            ff1111f1b1bccccccccccccccfffffff
            ff1111ffffbbccccccccccccccccccff
            ff11111111fbbcccccccccccccccccff
            ff11111111fbbbccccccccccccccccff
            ff111111111fbbccccccccccccccccff
            ff111111111ffbbcccccccccccccccff
            ff11111111111fbbccccccccccccccff
            ff11111111111fbbccccccccccccccff
            ff11111111111fbbbbccccccccccccff
            ff11111111111fbcbbccccccccccccff
            ff111111111ffbccccccccccccccccff
            ff111111111fbbcfffffbcccccccccff
            ff111111111fbcc111ffbcccccccccff
            ff111111111ffbc111ffbbbccccfffff
            ff11111111111fcf11fcffbbccf111ff
            ff11111111111fff11fcffbbbff111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `,img`
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff1111111111111111111111111111ff
            ff11111111fffff111111111111111ff
            ff11111111fbccf111111111111111ff
            ff1111ffffbbcccf11111111111111ff
            ff1111fbbbcccccf11111111111111ff
            ff11ffbbcfb11ccf11111111111111ff
            ff11fbbbcfb11ccfffffffff111111ff
            ff11fbbbcccccccccccccccf111111ff
            ff11ffbffffcccccccccccccfffff1ff
            ff1111f1b1bccccccccccccccccccfff
            ff1111ffffbbccccccccccccccccccff
            ff1111111fbbbcccccccccccccccccff
            ff11111111fbbcccccccccccccccccff
            ff11111111ffbbccccccccccccccccff
            ff1111111111fbbcccccccccccccccff
            ff1111111111fbbcccccccccccccccff
            ff1111111111fbbbbcccccccccccccff
            ff111111111ffbcbbcccccccccccccff
            ff1111111ffbccccccccccccccccccff
            ff1111111fbbcffffffbcccccccccfff
            ff1111111fbcc1111ffbcccccccccfff
            ff1111111ffbc1111ffbbbccccfff1ff
            ff111111111fcf111fcffbbccf1111ff
            ff111111111fff111fcffbbbff1111ff
            ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff
            `],
        200,
        true
        )
    }
    playericonhub.setPosition(125, 95)
    textSprite = textsprite.create("0", 6, 1)
    textSprite.setScale(1.5, ScaleAnchor.Middle)
    textSprite.setPosition(110, 23)
    textSprite.setOutline(1, 8)
    textSprite2 = textsprite.create("score:", 0, 15)
    textSprite2.setPosition(120, 10)
    textSprite3 = textsprite.create("combo:", 0, 15)
    textSprite3.setPosition(120, 40)
    textSprite4 = textsprite.create("0", 3, 1)
    textSprite4.setOutline(1, 15)
    textSprite4.setScale(2, ScaleAnchor.Middle)
    textSprite4.setPosition(112, 58)
    textSprite5 = textsprite.create("speed:", 0, 15)
    textSprite5.setPosition(118, 72)
    textSprite6 = textsprite.create("high:", 0, 13)
    textSprite6.setPosition(116, 115)
    speedbonus = 1
    isgame_over = 0
    if (0 == 0) {
        random_map = randint(1, 3)
        if (random_map == 1) {
            tiles.setCurrentTilemap(tilemap`level1`)
        }
        if (random_map == 2) {
            tiles.setCurrentTilemap(tilemap`level12`)
        }
        if (random_map == 3) {
            tiles.setCurrentTilemap(tilemap`level14`)
        }
    }
    cursor = sprites.create(img`
        .ffff........................ffff...............................................
        f1111f......................f1111f..............................................
        f1fff........................fff1f..............................................
        f1f............................f1f..............................................
        f1f............................f1f..............................................
        .f..............................f...............................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        .f..............................f...............................................
        f1f............................f1f..............................................
        f1f............................f1f..............................................
        f1fff........................fff1f..............................................
        f1111f......................f1111f..............................................
        .ffff........................ffff...............................................
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(cursor, assets.tile`myTile2`)
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    speed = 7000
    animation.runImageAnimation(
    cursor,
    [img`
        .ffff........................ffff...............................................
        f1111f......................f1111f..............................................
        f1fff........................fff1f..............................................
        f1f............................f1f..............................................
        f1f............................f1f..............................................
        .f..............................f...............................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        .f..............................f...............................................
        f1f............................f1f..............................................
        f1f............................f1f..............................................
        f1fff........................fff1f..............................................
        f1111f......................f1111f..............................................
        .ffff........................ffff...............................................
        `,img`
        ................................................................................
        ..ffff......................ffff................................................
        .f1111f....................f1111f...............................................
        .f1fff......................fff1f...............................................
        .f1f..........................f1f...............................................
        .f1f..........................f1f...............................................
        ..f............................f................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ..f............................f................................................
        .f1f..........................f1f...............................................
        .f1f..........................f1f...............................................
        .f1fff......................fff1f...............................................
        .f1111f....................f1111f...............................................
        ..ffff......................ffff................................................
        ................................................................................
        `],
    250,
    true
    )
    color.pauseUntilFadeDone()
    music.play(music.createSoundEffect(WaveShape.Square, 2515, 2000, 255, 0, 800, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    countdown = sprites.create(img`
        ................................
        ................................
        ..........ffffffffffffff........
        .........ffffcccbbbbccff........
        ......fffffcbbbbbccbbccf........
        .....fffcccbbccccccccbcff.......
        .....ffccbbcccccfffcccbff.......
        .....ffccbcccff....fccbff.......
        .....ffcccfff......fccbff.......
        .....ffffff.........ccbff.......
        ...................fccbff.......
        ..................ffccbff.......
        ................ffffccbff.......
        ............fffffffcccbff.......
        ............fffccccccbcff.......
        ............fffccccccbcf........
        ............fffcccbbbff.........
        ............fffccbbcff..........
        .............ffccbbcfff.........
        ...............fccbccff.........
        .....fffff......fccbcff.........
        .....fcccff......fcbccf.........
        .....fcbccff.....fcbccf.........
        .....fcbccfff.....cbccf.........
        .....fcbbcccff...ffbccf.........
        .....ffcbbcccccfcbbbccf.........
        ......fccbbccccbbcccccf.........
        .......ffccbbbbcccccccf.........
        ........ffffcccccccffff.........
        .........fffffffffffff..........
        ................................
        ................................
        `, SpriteKind.Player)
    timer.after(1000, function () {
        music.play(music.createSoundEffect(WaveShape.Square, 2515, 2000, 255, 0, 800, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        countdown.setImage(img`
            .........fffcccccccccff.........
            .......ffccccbbbbbbbbbcf........
            .....ffccccbbbcccccccbbcf.......
            ....ffcccbbcccfffffcccbbf.......
            ...ffccbbbcfffffffffcccbf.......
            ...ffcccccfff.....fffcccb.......
            ...ffccccff........ffcccb.......
            ...fffffff..........fcccb.......
            ...ffffff..........fcccbc.......
            ...fffff..........ffcbbbf.......
            ..................fcbbccf.......
            .................fcbbccff.......
            ................fbbbccff........
            ...............fbbcccfff........
            ..............fbbcccfff.........
            ............ffbbccccff..........
            ...........ffbbccccff...........
            ..........ffbbccccfff...........
            .........ffcbccccff.............
            .......fffcbccccff..............
            .......ffcbbccfff...............
            ......ffcbbccfff................
            .....ffccbccff..................
            ....fffcbccff...................
            ....ffccbccccffffffffff.........
            ....ffccbbbbbbbbbbbbbbbbcff.....
            ....ffcccccccccccccccccbcff.....
            ....fffffffccccccccccccccff.....
            ....fffffffffffffffffffffff.....
            ...................ffffffff.....
            ................................
            ................................
            `)
        timer.after(1000, function () {
            music.play(music.createSoundEffect(WaveShape.Square, 2515, 2000, 255, 0, 800, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            countdown.setImage(img`
                ............ffffffff............
                ...........ffffccccf............
                ..........ffffcccccf............
                .........ffccccbbbcf............
                .......fffcccbbbcbcf............
                ......fffcccbccccbcf............
                ......fffccbccfcbcff............
                ......fffcccfffcbcf.............
                ......fffffff.fcbcf.............
                ......ffffff..fcbcf.............
                ..............fcbcf.............
                ..............fcbcf.............
                ..............fcbcf.............
                ..............fcbcf.............
                ..............fcbcf.............
                .............ffcbcf.............
                .............ffcbcf.............
                .............ffcbcf.............
                .............fccbcf.............
                .............fccbc..............
                .............fccbf..............
                .............fccbf..............
                .............fccbf..............
                .............fcbcf..............
                ....ffffffff.fcbcf..............
                ....fccccccccfcbcffcccccccff....
                ....fccbbbbbccbbbbbbbbbbbbff....
                ....fcccbbbbbbbbccccccccccff....
                ....fffffcccbbbbcccccfffffff....
                .......fffffccccffffffffffff....
                ................................
                ................................
                `)
            timer.after(1000, function () {
                music.play(music.createSoundEffect(WaveShape.Triangle, 2919, 2267, 255, 127, 1500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                countdown.setImage(img`
                    ................................................................
                    ................................................................
                    ................................................................
                    ..............fffffffffffff.....................................
                    ............ffccccccccccfff.....................................
                    ...........fccbbbbbbbcccfff...........fffffffff.................
                    ..........fcbbccccccccccfff..........fffcccccccfff..............
                    ........ffcbbcccfffffffffff.........ffccbbbbbbcccff.............
                    ........fcbbcccffff................ffcbbbcccccbbccf.............
                    .......fcbbcccff..................ffccbccccffccbbcff............
                    ......fccbcccff...................fccbccff.fffccbccf............
                    ......fcbccfff...................fccbccff....ffcbccff...........
                    ......ccbccff....................fccbcff......ffbbcff...........
                    .....fcbccff....................fccbbcff.......fcbcff...........
                    .....fcbccf......ffffff.........fccbcff........fcbcff...........
                    .....fcbcff......fccccccffff....fccbcf..........cbcff...........
                    .....fcbbff......fcbbbbbbcff....fccbff.........fcbcff...........
                    .....fccbff......fccccccbbcf...ffcbbff.........ccbcff...........
                    .....fccbf.......ffffccccbcf...ffcbcf..........ccbcff...........
                    .....fccbcf........ffffccbcf...ffcbcf..........ccbfff...........
                    .....fccbcf...........ffcbcf...ffcbcf.........fcbbff............
                    .....fccbccf.........fffcbcf...fccbc..........fcbcff............
                    .....ffcbbccc.fffffffccccbcf...fccbcf.......ffccbcff............
                    ......fcccbbccccccccccbbbccf...fccbcc.....fffcccbcff............
                    ......ffccccbbbbbbbbbbbccccf...fccbbccc..fffcccbcfff............
                    .......ffffcccccccccccccfff....ffccbbbcccccbbbbbcff.............
                    ........ffffffffffffffffff.....fffcccbbbbbbbbbccff..............
                    .........fffffffff..............ffffcccccccccccff...............
                    ................................fffffffffffffff.................
                    .................................ffffffffffff...................
                    ................................................................
                    ................................................................
                    `)
                ingame = true
                timer.after(500, function () {
                    for (let index = 0; index < 5; index++) {
                        countdown.startEffect(effects.disintegrate)
                    }
                    timer.after(500, function () {
                        sprites.destroy(countdown)
                    })
                })
            })
        })
    })
}
function add_new_layer () {
    row = 0
    for (let index = 0; index < 8; index++) {
        collumn = 0
        for (let index = 0; index < 6; index++) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(collumn, row), assets.tile`myTile7`)) {
                tiles.setTileAt(tiles.getTileLocation(collumn, row), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(collumn, row - 1), assets.tile`myTile7`)
                if (row == 0) {
                    game_over()
                }
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(collumn, row), assets.tile`myTile`)) {
                tiles.setTileAt(tiles.getTileLocation(collumn, row), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(collumn, row - 1), assets.tile`myTile`)
                if (row == 0) {
                    game_over()
                }
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(collumn, row), assets.tile`myTile0`)) {
                tiles.setTileAt(tiles.getTileLocation(collumn, row), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(collumn, row - 1), assets.tile`myTile0`)
                if (row == 0) {
                    game_over()
                }
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(collumn, row), assets.tile`myTile2`)) {
                tiles.setTileAt(tiles.getTileLocation(collumn, row), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(collumn, row - 1), assets.tile`myTile2`)
                if (row == 0) {
                    game_over()
                }
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(collumn, row), assets.tile`myTile4`)) {
                tiles.setTileAt(tiles.getTileLocation(collumn, row), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(collumn, row - 1), assets.tile`myTile4`)
                if (row == 0) {
                    game_over()
                }
            }
            collumn += 1
        }
        row += 1
    }
    collumn = 0
    for (let index = 0; index < 6; index++) {
        random = randint(1, 5)
        if (random == 1) {
            tiles.setTileAt(tiles.getTileLocation(collumn, 7), assets.tile`myTile`)
        }
        if (random == 2) {
            tiles.setTileAt(tiles.getTileLocation(collumn, 7), assets.tile`myTile0`)
        }
        if (random == 3) {
            tiles.setTileAt(tiles.getTileLocation(collumn, 7), assets.tile`myTile2`)
        }
        if (random == 4) {
            tiles.setTileAt(tiles.getTileLocation(collumn, 7), assets.tile`myTile4`)
        }
        if (random == 5) {
            tiles.setTileAt(tiles.getTileLocation(collumn, 7), assets.tile`myTile7`)
        }
        collumn += 1
    }
}
function get_a_move_on () {
    music.stopAllSounds()
    if (!(blockSettings.readNumber("myspot") == 7)) {
        music.play(music.createSong(hex`00780004080a0201001c000f05001202c102c2010004050028000000640028000314000602000418010000080001160c001000011210001400011114001800010d18001c00010820002800010d2c003000010f30003400011134003800011438003c000118440050000212165000540002111458006800020c0f68006c00020d1170007c0002121684009000011690009400011494009800011298009c00010f9c00a000010aa400b000010ab000b400010cb400b800010db800bc000111bc00c0000116c400c8000116c800cc000116cc00d0000116d000d4000114d400d8000112d800dc00010fdc00e000010ae400e800010ae800ec00010aec00f000010af000f400010cf400f800010df800fc000111fc0000010116040110010212161001140102111418012401020c0f24012801020d112c0138010212163c014001010509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001a018400850001038800890001038c008d0001039000910001039400950001039800990001039c009d000103a000a1000103a400a5000103a800a9000103ac00ad000103b000b1000103b400b5000103b800b9000103bc00bd000103c000c1000103c400c5000103c800c9000114cc00cd000103d000d1000114d400d5000103d800d9000114dc00dd000103e000e1000114e400e5000103e800e9000114ec00ed000103f000f1000114f400f5000103f800f9000114fc00fd0001030001010101140401050101070801090101070c010d0101071001110101071401150101071801190101071c011d0101072001210101072401250101072801290101072c012d0101073001310101073401350101073801390101073c013d010107`), music.PlaybackMode.LoopingInBackground)
    } else {
        music.play(music.createSong(hex`00780004080e0202001c000c960064006d019001000478002c010000640032000000000a060005b4000000040002141808000c00020f121000400002060a4000440002080c48008000020a0d8000840002080c8800b400020508b400b80002060abc00c000020c0fc400c800021114d000d400021216d800dc000112dc00e0000111e000e400010de800ec00010dec00f000010df000f400010ff800fc000116fc000c0101142001240102141828012c01020f123001600102060a6001640102080c6801a001020a0da801ac0102080cac01b001020508b401b801010509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006c022000210001062400250001062800290001062c002d000106300031000204063400350001063800390001063c003d00010640004100020406440045000106480049000214064c004d00010650005100020406540055000106580059000214065c005d00010660006100020406640065000106680069000214066c006d00010670007100020406740075000106780079000214067c007d00010680008100030f040684008500020f0688008900030f14068c008d00010690009100020406940095000106980099000214069c009d000106a000a100030f0406a400a500020f06a800a900030f1406ac00ad00021006b000b10003100406b400b500021006b800b900021406bc00bd000109c000c1000109c400c5000109c800c9000109cc00cd000109d000d100020809d400d5000109d800d9000109dc00dd000109e000e100020809e400e5000109e800e9000109ec00ed000109f000f100020809f400f5000109f800f9000109fc00fd000109000101010208091001110101101401150101101801190101101c011d010110200121010210072801290101073001310101073401350101073801390101073c013d0101074001410101074401450101074801490101074c014d0101075001510101075401550101075801590101075c015d01010760016101020407640165010107680169010204076c016d0101077001710103140407740175010107780179010204077c017d0101078001810103140407840185010107880189010204078c018d0101079001910103140407940195010107980199010204079c019d010107a001a10103140407b401b50103050607b801b90103050607bc01bd0103050607`), music.PlaybackMode.LoopingInBackground)
    }
    spawn_player()
    tiles.setCurrentTilemap(tilemaps[blockSettings.readNumber("myspot")])
    adventplayer.setPosition(blockSettings.readNumber("player x"), blockSettings.readNumber("player y"))
    if (blockSettings.readNumber("myspot") == 0) {
        if (isgame_over == 1) {
            adventplayer.y += 20
        }
        taser = sprites.create(img`
            ......fffff.......
            .......ffff..ff...
            .......fffffff....
            .......ffff5......
            .....fff5555......
            ........55f5f.....
            ........5555......
            ......fffff.......
            .....ffffffeff....
            ....fffffeeefff...
            ...fff.feeef.fff..
            ..ff..fff55ff..ff.
            .fff..fff55ffff55.
            .ff..ffff88ffff55.
            .55.fffff88ffff...
            .55...8888888.....
            ......88...88.....
            .....ff8..ff8.....
            .....ffff.ffff....
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(taser, assets.tile`myTile26`)
        color.startFadeFromCurrent(color.originalPalette)
        color.pauseUntilFadeDone()
        if (isgame_over == 0) {
            taser.sayText("Well Done!", 1500, true)
            timer.after(1500, function () {
                taser.sayText("you may now move on", 2000, true)
                timer.after(2500, function () {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.rings, 500)
                    for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
                        tiles.setWallAt(value, false)
                    }
                })
            })
        } else {
            taser.sayText("Try Again!", 750, true)
        }
    }
    if (blockSettings.readNumber("myspot") == 1) {
        if (isgame_over == 1) {
            adventplayer.x += 20
        }
        PD = sprites.create(img`
            ......ffff........
            .....fffffffff....
            ...ffffffffff.....
            ...fffffff44f.....
            ....f4444f4f4f....
            ....f4444f4f4f....
            ....f44f44444f....
            .....f44ff44f.....
            ......ffffff......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......ffffff......
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(PD, assets.tile`myTile31`)
        color.startFadeFromCurrent(color.originalPalette)
        color.pauseUntilFadeDone()
        if (isgame_over == 0) {
            PD.sayText("Goof Job!", 1500, true)
            timer.after(1500, function () {
                PD.sayText("Let me just unlock this gate...", 2500, true)
                timer.after(2500, function () {
                    sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.rings, 500)
                    for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
                        tiles.setWallAt(value, false)
                        tiles.setTileAt(value, sprites.castle.tilePath5)
                    }
                })
            })
        } else {
            PD.sayText("Loser!", 750, true)
            PD.setKind(SpriteKind.taser)
        }
    }
    if (blockSettings.readNumber("myspot") == 3) {
        if (isgame_over == 1) {
            adventplayer.x += 20
        }
        taser = sprites.create(img`
            ......fffff.......
            .......ffff..ff...
            .......fffffff....
            .......ffff5......
            .....fff5555......
            ........55f5f.....
            ........5555......
            ......fffff.......
            .....ffffffeff....
            ....fffffeeefff...
            ...fff.feeef.fff..
            ..ff..fff55ff..ff.
            .fff..fff55ffff55.
            .ff..ffff88ffff55.
            .55.fffff88ffff...
            .55...8888888.....
            ......88...88.....
            .....ff8..ff8.....
            .....ffff.ffff....
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(taser, assets.tile`myTile26`)
        color.startFadeFromCurrent(color.originalPalette)
        color.pauseUntilFadeDone()
        if (isgame_over == 0) {
            taser.sayText("Congratulations!", 1500, true)
            timer.after(1500, function () {
                taser.sayText("I will see you near the final match", 2500, true)
                timer.after(2500, function () {
                    taser.sayText("Good Luck", 1500, true)
                    timer.after(1500, function () {
                        sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.rings, 500)
                        for (let value of tiles.getTilesByType(assets.tile`myTile38`)) {
                            tiles.setWallAt(value, false)
                            tiles.setTileAt(value, assets.tile`myTile36`)
                        }
                        for (let value of tiles.getTilesByType(assets.tile`myTile39`)) {
                            tiles.setWallAt(value, false)
                            tiles.setTileAt(value, assets.tile`myTile36`)
                        }
                        for (let value of tiles.getTilesByType(assets.tile`myTile40`)) {
                            tiles.setWallAt(value, false)
                            tiles.setTileAt(value, assets.tile`myTile36`)
                        }
                        raptor = sprites.create(img`
                            ........................
                            ...fff..................
                            .ffcccf.................
                            fcccf1f.................
                            fccccccfffff............
                            .ffcccccccccfff.........
                            ...fcccccccccccfff......
                            ....fcccccccccccccffff..
                            .....fccccccccccccccccf.
                            .....fcccccccccccccccccf
                            ....fcfffccccccfff......
                            ....fc..ffcccff.........
                            .....ff.ffccf...........
                            .......fccfcf...........
                            .......fcffccf..........
                            ......fccf.fcf..........
                            ......fcf..fcf..........
                            .......f....f...........
                            `, SpriteKind.raptor)
                        tiles.placeOnRandomTile(raptor, assets.tile`myTile42`)
                        for (let value of tiles.getTilesByType(assets.tile`myTile42`)) {
                            tiles.setWallAt(value, false)
                            tiles.setTileAt(value, assets.tile`myTile36`)
                        }
                    })
                })
            })
        } else {
            taser.sayText("ouchies", 750, true)
            taser.setKind(SpriteKind.taser)
        }
    }
    if (blockSettings.readNumber("myspot") == 2) {
        if (isgame_over == 1) {
            adventplayer.x += 20
        }
        CG = sprites.create(img`
            .......88.........
            ......8968........
            ......8968........
            .....811bb........
            .....891b6........
            ....88888888......
            ....89999668......
            ....ccccccc.......
            .....4eecec.......
            .....4ffeee.......
            .....44efe88......
            ......4fee888.....
            ......8bb868......
            ......8bb868......
            ......899868......
            ......888868......
            .....cce.cce......
            .....eee.eee......
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(CG, assets.tile`myTile34`)
        color.startFadeFromCurrent(color.originalPalette)
        color.pauseUntilFadeDone()
        if (isgame_over == 0) {
            CG.sayText("This gate is locked.", 1500, true)
            timer.after(1500, function () {
                CG.sayText("I lost my key", 2500, true)
                timer.after(1500, function () {
                    CG.sayText("JK!", 1000, true)
                    timer.after(1500, function () {
                        sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.rings, 500)
                        for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
                            tiles.setWallAt(value, false)
                            tiles.setTileAt(value, sprites.dungeon.darkGroundCenter)
                        }
                    })
                })
            })
        } else {
            CG.sayText("just LOL", 750, true)
            CG.setKind(SpriteKind.taser)
        }
    }
    if (blockSettings.readNumber("myspot") == 4) {
        if (isgame_over == 1) {
            adventplayer.x += 20
        }
        CG = sprites.create(img`
            ..................
            .....f.fc.........
            .....fffc.........
            ....fffffc........
            ...ff51ffff.......
            ....bf5bcc........
            ...c1bbb7c........
            ..cccb7727........
            ....172221........
            ....121111........
            ....221fff......c.
            ....22ffff.....bc.
            ....22fffffbbbbcc.
            ....fffffffbbbcc..
            ....fffffffbbcc...
            ......fffffbcc....
            ......c..c........
            ......c..c........
            .....1c.1c........
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(CG, assets.tile`myTile26`)
        color.startFadeFromCurrent(color.originalPalette)
        color.pauseUntilFadeDone()
        if (isgame_over == 0) {
            CG.sayText("I told Jwhuderl this would happen", 2000, true)
            timer.after(2250, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.rings, 500)
                for (let value of tiles.getTilesByType(assets.tile`myTile38`)) {
                    tiles.setWallAt(value, false)
                    tiles.setTileAt(value, assets.tile`myTile23`)
                }
            })
        } else {
            CG.sayText("Try again1", 750, true)
            CG.setKind(SpriteKind.taser)
        }
    }
    if (blockSettings.readNumber("myspot") == 5) {
        if (isgame_over == 1) {
            adventplayer.x += 20
        }
        CG = sprites.create(img`
            ......ffff........
            .....fffffffff....
            ...ffffffffff.....
            ...fffffff44f.....
            ....f4444f4f4f....
            ....f4444f4f4f....
            ....f44f44444f....
            .....f44ff44f.....
            ......ffffff......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......f8888f......
            ......ffffff......
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(CG, assets.tile`myTile31`)
        color.startFadeFromCurrent(color.originalPalette)
        color.pauseUntilFadeDone()
        if (isgame_over == 0) {
            CG.sayText("gosh diggity darn it", 1000, true)
            timer.after(1250, function () {
                sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.rings, 500)
                for (let value of tiles.getTilesByType(assets.tile`myTile38`)) {
                    tiles.setWallAt(value, false)
                    tiles.setTileAt(value, assets.tile`myTile23`)
                }
            })
        } else {
            CG.sayText("just sad", 750, true)
            CG.setKind(SpriteKind.taser)
        }
    }
    if (blockSettings.readNumber("myspot") == 7) {
        if (isgame_over == 1) {
            adventplayer.x += -20
        }
        if (!(secretboss)) {
            redline_guy = sprites.create(img`
                ..................
                .....fffff........
                .....f2f2f........
                .....f2f2ff.......
                .....ffffff.......
                .......fffff......
                ......fffffff.....
                .....ffffffff.....
                .....ffffffff.....
                .....fffffffff....
                .....fffffffff....
                ......ffffff.f....
                ......ffffff......
                ......ff..fff.....
                ......ff...ff.....
                ......f....ff.....
                ......f.....f.....
                ..................
                `, SpriteKind.Player)
            tiles.placeOnRandomTile(redline_guy, assets.tile`myTile52`)
            color.startFadeFromCurrent(color.originalPalette)
            color.pauseUntilFadeDone()
            if (isgame_over == 0) {
                redline_guy.sayText("CONGRADULATIONS", 1000, true)
                timer.after(1000, function () {
                    redline_guy.sayText("you have beaten me and become the champion!", 2000, true)
                    timer.after(2000, function () {
                        color.startFadeFromCurrent(color.White, 2000)
                        timer.after(2000, function () {
                            game.showLongText("You march back into the city, everyone claps when they hear your footsteps", DialogLayout.Full)
                            game.showLongText("Mayor Jaywunderl is there waiting for you with the key to the city", DialogLayout.Full)
                            game.showLongText("In your honor, they build a statue, and kids in future generations marvel ait is and hope that they can live up to you", DialogLayout.Full)
                            game.splash("You got the good ending!")
                            blockSettings.remove("myspot")
                            blockSettings.writeNumber("ge", 1)
                            game.reset()
                        })
                    })
                })
            } else {
                redline_guy.sayText("YOU HAVE FAILED THE COMPETITION", 2000, true)
                timer.after(2500, function () {
                    music.stopAllSounds()
                    scene.cameraShake(6, 5000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 196, 527, 0, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                    timer.after(1000, function () {
                        redline_guy.sayText("Oh no! the volcano is erupting!", 1000, true)
                        color.startFadeFromCurrent(color.Black, 4000)
                        timer.after(4000, function () {
                            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
                            color.setPalette(
                            color.originalPalette
                            )
                            game.showLongText("The Volcano explodes, and you fear it is only seconds until your doom.", DialogLayout.Full)
                            game.showLongText("With barely a second to think, you run out as fast as you can.", DialogLayout.Full)
                            game.showLongText("Everyone else has evacuated, so you hop into a nearby car and drive to safety", DialogLayout.Full)
                            game.showLongText("Back in the city, you tell the people what happened. but they shame you for not saving the others in the volcano and for losing the match", DialogLayout.Full)
                            game.splash("YOU GOT THE BAD ENDING")
                            blockSettings.remove("myspot")
                            blockSettings.writeNumber("be", 1)
                            game.reset()
                        })
                    })
                })
            }
        } else {
            taser = sprites.create(img`
                .......88888......
                ...88.c8188.......
                ....8cc8c88.......
                ...c.c98cc8c......
                ...ccccc1ccc8.....
                .....8c811ccc.....
                ......9999........
                .......88888......
                ...cc86888188.....
                ...cc166688c88....
                ..88c.86668c881...
                .88..889988cc.11..
                .99888899811..818.
                .998881668188..18.
                ..111116688188.19.
                ....16c66666...99.
                ....1c11..66......
                ....cc81..6cc.....
                ....888cccc88.....
                `, SpriteKind.Player)
            tiles.placeOnRandomTile(taser, assets.tile`myTile26`)
            color.startFadeFromCurrent(color.originalPalette)
            color.pauseUntilFadeDone()
            if (isgame_over == 0) {
                taser.sayText("aww man...", 1000, true)
                timer.after(1000, function () {
                    taser.sayText("What could I ever do to repay you?", 2000, true)
                    timer.after(2000, function () {
                        color.startFadeFromCurrent(color.White, 2000)
                        timer.after(2000, function () {
                            game.showLongText("Taser admits his defeat and apologizes. but stump also apologizes because he made taser serious on purpose.", DialogLayout.Full)
                            game.showLongText("Then, Taser makes Brohann the winner of the CODER KING 2 competition!", DialogLayout.Full)
                            game.showLongText("Anyway, this is a message from the developer. thanks for playing, please vote for my game and keep on making code!", DialogLayout.Full)
                            game.splash("YOU GOT THE SECRET ENDING")
                            blockSettings.remove("myspot")
                            blockSettings.writeNumber("se", 1)
                            game.reset()
                        })
                    })
                })
            } else {
                taser.sayText("HAHHAHAHAHAHAHAAAA", 2000, true)
                timer.after(2500, function () {
                    music.stopAllSounds()
                    scene.cameraShake(6, 5000)
                    music.play(music.createSoundEffect(WaveShape.Noise, 196, 527, 0, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
                    timer.after(1000, function () {
                        taser.sayText("I WILL DESTROY YOU ALL", 1000, true)
                        color.startFadeFromCurrent(color.Black, 4000)
                        timer.after(4000, function () {
                            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
                            color.setPalette(
                            color.originalPalette
                            )
                            game.showLongText("The Volcano explodes, and you with it", DialogLayout.Full)
                            game.showLongText("It isn't till 5 days later when searchers find you, burnt and barely alive", DialogLayout.Full)
                            game.showLongText("Everyone else has evacuated, so you hop into a nearby car and drive to safety", DialogLayout.Full)
                            game.showLongText("Most of the cities are destroyed. You also have no memory of the last 6 years of your life.", DialogLayout.Full)
                            game.splash("YOU GOT THE WORST ENDING EVER!")
                            blockSettings.writeNumber("we", 1)
                            blockSettings.remove("myspot")
                            game.reset()
                        })
                    })
                })
            }
        }
    }
}
function destroy_all_halfgones () {
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.advenplayer, SpriteKind.boss, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.Player)
    secretboss = true
    if (blockSettings.readNumber("myspot") == 7) {
        controller.moveSprite(sprite, 0, 0)
        otherSprite.sayText("HMPH", 1000, true)
        timer.after(1000, function () {
            otherSprite.sayText("HOW COME I HAVE NO FUNNY LINES!", 3000, true)
            timer.after(3500, function () {
                otherSprite.sayText("THIS MEANS WAR", 1500, true)
                timer.after(1500, function () {
                    scene.cameraShake(4, 500)
                    otherSprite.setImage(img`
                        .......88888......
                        ...88.c8188.......
                        ....8cc8c88.......
                        ...c.c98cc8c......
                        ...ccccc1ccc8.....
                        .....8c811ccc.....
                        ......9999........
                        .......88888......
                        ...cc86888188.....
                        ...cc166688c88....
                        ..88c.86668c881...
                        .88..889988cc.11..
                        .99888899811..818.
                        .998881668188..18.
                        ..111116688188.19.
                        ....16c66666...99.
                        ....1c11..66......
                        ....cc81..6cc.....
                        ....888cccc88.....
                        `)
                    timer.after(1000, function () {
                        otherSprite.sayText("IVE HAD ENOUGH!", 1000, true)
                        timer.after(1500, function () {
                            if (game.ask("Gee whiz", "*cries in fear*")) {
                                start_game_with_goal(3000, 2750, 2.25)
                                blockSettings.writeNumber("player x", adventplayer.x)
                                blockSettings.writeNumber("player y", adventplayer.y)
                            } else {
                                sprite.x += -20
                                otherSprite.setKind(SpriteKind.boss)
                                controller.moveSprite(sprite, 50, 50)
                            }
                        })
                    })
                })
            })
        })
    }
})
function check_if_any_are_in_a_row () {
    combo = 0
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        if (isgame_over == 0) {
            if (!(tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`))) {
                if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`)) {
                    tiles.setTileAt(value, assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    _5_in_a_row()
                    timer.after(500, function () {
                        tiles.setTileAt(value, assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value, assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value, assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value, assets.tile`myTile5`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value, assets.tile`transparency16`)
                                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            })
                        }
                    }
                }
                if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`)) {
                    _5_in_a_row()
                    tiles.setTileAt(value, assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    timer.after(500, function () {
                        tiles.setTileAt(value, assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile7`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value, assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value, assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile7`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile7`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value, assets.tile`myTile5`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value, assets.tile`transparency16`)
                                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            })
                        }
                    }
                }
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        if (isgame_over == 0) {
            if (!(tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`))) {
                if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`)) {
                    tiles.setTileAt(value, assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    _5_in_a_row()
                    timer.after(500, function () {
                        tiles.setTileAt(value, assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value, assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value, assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value, assets.tile`myTile5`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value, assets.tile`transparency16`)
                                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            })
                        }
                    }
                }
                if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile4`)) {
                    _5_in_a_row()
                    tiles.setTileAt(value, assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    timer.after(500, function () {
                        tiles.setTileAt(value, assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile4`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value, assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value, assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile4`) && tiles.tileAtLocationEquals(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile4`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value, assets.tile`myTile5`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value, assets.tile`transparency16`)
                                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                                tiles.setTileAt(value.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            })
                        }
                    }
                }
            }
        }
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
        if (isgame_over == 0) {
            if (!(tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`))) {
                if (tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`)) {
                    _5_in_a_row()
                    tiles.setTileAt(value2, assets.tile`myTile5`)
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    timer.after(500, function () {
                        tiles.setTileAt(value2, assets.tile`transparency16`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value2, assets.tile`myTile5`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value2, assets.tile`transparency16`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value2, assets.tile`myTile5`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value2, assets.tile`transparency16`)
                                tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                                tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            })
                        }
                    }
                }
                if (tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile2`)) {
                    _5_in_a_row()
                    tiles.setTileAt(value2, assets.tile`myTile5`)
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    timer.after(500, function () {
                        tiles.setTileAt(value2, assets.tile`transparency16`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile2`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value2, assets.tile`myTile5`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value2, assets.tile`transparency16`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile2`) && tiles.tileAtLocationEquals(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile2`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value2, assets.tile`myTile5`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value2, assets.tile`transparency16`)
                                tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                                tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            })
                        }
                    }
                }
            }
        }
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile0`)) {
        if (isgame_over == 0) {
            if (!(tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`))) {
                if (tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`)) {
                    _5_in_a_row()
                    tiles.setTileAt(value3, assets.tile`myTile5`)
                    tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    timer.after(500, function () {
                        tiles.setTileAt(value3, assets.tile`transparency16`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value3, assets.tile`myTile5`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value3, assets.tile`transparency16`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value3, assets.tile`myTile5`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value3, assets.tile`transparency16`)
                                tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                                tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            })
                        }
                    }
                }
                if (tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`)) {
                    _5_in_a_row()
                    tiles.setTileAt(value3, assets.tile`myTile5`)
                    tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    timer.after(500, function () {
                        tiles.setTileAt(value3, assets.tile`transparency16`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value3, assets.tile`myTile5`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value3, assets.tile`transparency16`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`) && tiles.tileAtLocationEquals(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value3, assets.tile`myTile5`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value3, assets.tile`transparency16`)
                                tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                                tiles.setTileAt(value3.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            })
                        }
                    }
                }
            }
        }
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile`)) {
        if (isgame_over == 0) {
            if (!(tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`))) {
                if (tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`)) {
                    _5_in_a_row()
                    tiles.setTileAt(value4, assets.tile`myTile5`)
                    tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                    timer.after(500, function () {
                        tiles.setTileAt(value4, assets.tile`transparency16`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value4, assets.tile`myTile5`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value4, assets.tile`transparency16`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value4, assets.tile`myTile5`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value4, assets.tile`transparency16`)
                                tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                                tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                            })
                        }
                    }
                }
                if (tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`)) {
                    _5_in_a_row()
                    tiles.setTileAt(value4, assets.tile`myTile5`)
                    tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                    timer.after(500, function () {
                        tiles.setTileAt(value4, assets.tile`transparency16`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                    })
                } else {
                    if (tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`)) {
                        _4_in_a_row()
                        tiles.setTileAt(value4, assets.tile`myTile5`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                        timer.after(500, function () {
                            tiles.setTileAt(value4, assets.tile`transparency16`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                        })
                    } else {
                        if (tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`) && tiles.tileAtLocationEquals(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`)) {
                            _3_in_a_row()
                            tiles.setTileAt(value4, assets.tile`myTile5`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile5`)
                            timer.after(500, function () {
                                tiles.setTileAt(value4, assets.tile`transparency16`)
                                tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                                tiles.setTileAt(value4.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                            })
                        }
                    }
                }
            }
        }
    }
}
let random = 0
let collumn = 0
let row = 0
let combo = 0
let redline_guy: Sprite = null
let richard: Sprite = null
let CG: Sprite = null
let PD: Sprite = null
let tilesave: Image = null
let countdown: Sprite = null
let speed = 0
let random_map = 0
let speedbonus = 0
let textSprite6: TextSprite = null
let textSprite5: TextSprite = null
let textSprite4: TextSprite = null
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let playericonhub: Sprite = null
let goal = 0
let adv = false
let isgame_over = 0
let character = 0
let score = 0
let adventplayer: Sprite = null
let cursor: Sprite = null
let wc: TextSprite = null
let character_cursor: Sprite = null
let raptor: Sprite = null
let Red_Line: Sprite = null
let pixeldoodle: Sprite = null
let theconeguy: Sprite = null
let taser: Sprite = null
let Stump: Sprite = null
let myMenu2: miniMenu.MenuSprite = null
let inadventuregame = false
let tilemaps: tiles.TileMapData[] = []
let ingame = false
let cs = false
let secretboss = false
if (!(blockSettings.exists("be"))) {
    blockSettings.writeNumber("be", 0)
}
if (!(blockSettings.exists("ge"))) {
    blockSettings.writeNumber("ge", 0)
}
if (!(blockSettings.exists("se"))) {
    blockSettings.writeNumber("se", 0)
}
if (!(blockSettings.exists("we"))) {
    blockSettings.writeNumber("we", 0)
}
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f c f c f c f c f c f c f c f 
    f f c c c c c c c c c c c f f 
    f c c c b c b c b c b c c c f 
    f f c b b b b b b b b b c f f 
    f c c c b 1 1 1 1 1 b c c c f 
    f f c b b 1 1 1 1 1 b b c f f 
    f c c c b 1 1 1 1 1 b c c c f 
    f f c b b 1 1 1 1 1 b b c f f 
    f c c c b 1 1 1 1 1 b c c c f 
    f f c b b b b b b b b b c f f 
    f c c c b c b c b c b c c c f 
    f f c c c c c c c c c c c f f 
    f c f c f c f c f c f c f c f 
    f f f f f f f f f f f f f f f 
    `)
secretboss = false
let listofspeeds = [
6000,
4500,
3000,
4500,
4500,
4000,
3500,
3500,
2750
]
tiles.setCurrentTilemap(tilemap`level2`)
let title = sprites.create(img`
    ..................................................................................................................................................................................................................................................................................................
    ..................................................................................................................................................................................................................................................................................................
    ..................................................................................................................................................................................................................................................................................................
    ..................................................................................................................................................................................................................................................................................................
    ...............................................................................ccc.......ccc........cccc........ccc.....ccc..cccccccccc......cccc........ccccc........cccccccc.......cccccccccc...................................................................................................
    .............................................................................6666666...6666666c...c6666666...c666666cc666666666666666666c.6666666666...666666666c..c666666666666c..c666666666666c.................................................................................................
    ............................................................................666666666.c66666666...666666666..66666666666666666666666666666666666666666666666666666c666666666666666c66666666666666c................................................................................................
    ............................................................................6667776666666777666c.c666777666cc6667766666677666677777777766666677776666666667777666666667777777666666666777777777666c...............................................................................................
    ............................................................................66655566666665557666c6667555666666665576666555766755555555566665555555566667555555576666665555555557666667555555555666cc..............................................................................................
    ...........................................................................c666555766666755576666666555576666666557666555766675555555576675555555556667555555555566666555555555556666755555555766677c.............................................................................................
    ...........................................................................c667555566666555576666667555556666666557667557666675566666666655576666556665557666655576666557666675557666755666666666677c.............................................................................................
    ...........................................................................6667555576666555576666665557556666666557675556666675566666666755766666666655576666665556666557666666555666755666666666777c.............................................................................................
    ...........................................................................6667555556665555556666665576557666666557755566666675566666666555666666666655566666665556666557666666555666755666666666777c.............................................................................................
    ...........................................................................6665557556665577556666675566555666666557555666666675577777666555666776666655566676667556666557666666755666755777776666777c.............................................................................................
    ...........................................................................6665576557675567556666655566755666666555556666666675555555766555666777666655766676667557666557666666755766755555557666777c.............................................................................................
    ...........................................................................666557655565556755666665576665576666655755566666667555555576655566677766665576667666755666655766666675566675555555766677cc.............................................................................................
    ...........................................................................666557675575566655666675555555556666655775556666667556666666655566677666665556667666755666655766666675566675566666666777c..............................................................................................
    ...........................................................................666556665555566655666655555555556666655765555666667556666666655576666666665556666666555666655766666655566675566666666677c..............................................................................................
    ..........................................................................c666556667555766655766755777777557666655766555566667556666666675556666666665557666667557666655766666755766675566666666667c..............................................................................................
    ..........................................................................c667556666555666655766555666666555666655766655576667556666666665555766755666555766675556666655766665555666675566666666667c..............................................................................................
    ..........................................................................6667556666777666655766557666666755666655766675557667555555555666555555555666755555555576666655555555556666675555555556667c..............................................................................................
    ..........................................................................66675566666666666557675566666666557666557666675556675555555576666555555576666655555556666666555555557666666755555555766677c.............................................................................................
    ...e2222222222222222222e..................................................66666666666666666666666666677666666666666666667766666666666666666666666666666666676666666666666666666666666666666666666677c.............................................................................................
    ..222222222222222222222222e...............................................c6666666666666666666666666677666666666666666666666666666666666666666666666666666666666667666666666666666666666666666666777c.............................................................................................
    .e22222222222222222222222222e..............................................6666666777777766666666666777766666666666667666666666666666666676666666666776666666666677766666666666677766666666666666777c.............................................................................................
    .2224444444444444444444222222e..............................................c66677777777777666766677777776666777667777766667766666666667777766666777777776666677777776666666677777777666666666677777c.............................................................................................
    .22244444444444444444444442222e..............................................cc77777777ccc7777777777777cccc777777777777777777777777777777777777777777777777777777777cc77777777777777cc7777777777777cc.............................................................................................
    .222444444444444444444444442222e..............................................cc7777ccc.22ccc777777777cc45cc7777777777cccc77777777777777777ccc7777777cccccc7777777cccccc7777777777cccccc7777777777cc2222222222222.................................................................................
    .2224444444444444444444444442224e..............................................ccccc....22244ccccccccc22454eccccccccccc..cccccccccccccccccc222ccccccc222222ccccccc2e....cccccccccc.....cccccccccccc222222222222222................................................................................
    .22244444444444444444444444422224eeeeee..eeeeeeeeee..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2224444444444222455eeee22222ee...............e222222222422222222222222222222e.....................222222222222222222222222ee..............................................................................
    .22244444444444444444444444422222222222222222222222222222222222222222222222222222222222222244444444442224542222222222222e...........e2222244444444444422444444444222eee...................2224444444422444444442224ee.............................................................................
    .e222244444444442244444444444222222222222222222222222222222222222222222222222222222222222222244444444222442222222222222222.........e222244444444444444444444444442224ee...................22244444444224444444422244ee............................................................................
    .e2222444444444422444444444442222222222222222222222222222222222222222222222222222222222222222444444442222222222444442222222e.......22224444444444444444444444444422244ee..........eee.....222444444442244444444222454ee.ee....................e...........e....................ee.................
    ..22224444444444222444444444444444444442244444444442244444444444444444424444444444444444444224444444422222224444444444422222e.....e22244444444444444444444444444422222222e..e222222222222e222444444442244444444222442222222222e.222222222222222222e...e22222222222222222e.e222222222e.............
    ...2224444444444222444444444444444444442244444444442244444444444444444424444444444444444444224444444422222444444444444444222ee....222244444444444444444424444444422222222222222222222222222224444444422444444442222222222222222222222222222222222222e222222222222222222222222222222222e...........
    ...22244444444442244444444444444444444422444444444422444444444444444444244444444444444444442244444444222244444444444444442222ee..e222444444444224444444422444444422222222222222222222222222222444444422244444442222222222222222222222222222222222222222222222222222222222222222222222222..........
    ...222444444444444444444444424444444444224444444444224444444444444444442444444444444444444422444444442222444444444444444442224ee.e2224444444442224444444224444444244444422222444444444444222224444444222444444422222244444444422224444444424444442222222444444244444444222224444444422222e........
    ...2224444444444444444444444244444444442244444444442244444444444444444424444444444444444444224444444422244444444444444444422244e.22224444444422224444444224444444444444442222444444444444422224444444222444444422224444444444442244444444444444444222224444444444444444222444444444442222ee.......
    ...2224444444444444444444442244444444442244444444442244444444444444444424444444444444444442224444444422244444444222444444442224ee222444444444222244444442244444444444444442224444444444444422244444442224444444222444444444444442444444444444444444222444444444444444442244444444444442222ee......
    ...22244444444444444444444422224444444422244444444422444442244444444442244444424444444444222244444444222444444444224444444422245e2224444444442222222222222444444444444444422244444444444444222444444422244444442224444444444444424444444444444444442224444444444444444424444444444444442224ee.....
    ...22244444444444444444442222224444444422244444444422222222444444444422222222244444444442222244444444224444444444444444444422245e22244444444422222222222224444444444444444222444444444444442224444444222444444422444444442444444424444444444444444422444444444444444444244444442244444422244e.....
    ...22244444444444444422222222224444444422244444444422222224444444444222222222444444444422222244444444224444444444444444444422245e22244444444422222222222224444444224444444222442222244444444224444444222444444422444444422444444422444444422444444422444444442444444442244444442244444422245ee....
    ...222444444444422222222222222244444444222444444444222222444444444422222222244444444442222222444444442244444444444444444444222454222444444444222222222222244444442244444442222222224444444442244444442224444444224444444444444444224444444224444444224444444222444444424444444444444444222454e....
    ...222444444444422222222224422244444444222444444444222224444444444222222222444444444422222222444444442244444444444444444444222454222444444444222244444442244444442244444442222244444444444442244444442224444444224444444444444444224444444224444444224444444222444444424444444444444444422455e....
    ..2222444444444422222224455422244444444222444444444222244444444442444444224444444444244444422444444442244444444422222222222222554222444444444222244444442244444442244444442222444444444444442244444442224444444224444444444444444224444444224444444224444444242444444424444444444444444422455ee...
    .e2222444444444422222245555422244444444422444444444222444444444422444444244444444442244444422444444442224444444442222224442224554e22244444444422244444442244444442244444442224444444444444442244444442224444444224444444222222222224444444224444444224444444222444444424444444422222222222455ee...
    .22244444444444444422245555422244444444444444444444424444444444444444444444444444444444444444444444444424444444444444444444224554e22244444444422444444442244444442244444442244444442244444442244444442224444444224444444422222442224444444224444444224444444424444444424444444422222244222455ee...
    .2224444444444444442224555ee22244444444444444444444424444444444444444444444444444444444444444444444444424444444444444444444224554e22244444444444444444442444444444444444444444444444444444444444444444444444444424444444444444444244444444444444444444444444444444444422444444444444444222455ee...
    .2224444444444444442224554ee2224444444444444444444442444444444444444444444444444444444444444444444444442244444444444444444422455eee2224444444444444444444444444444444444444444444444444444444444444444444444444422444444444444444444444444444444444444444444444444444422444444444444444222455ee...
    .222444444444444444222455eee2224444444444444444444442444444444444444444444444444444444444444444444444442224444444444444444422455eee2222444444444444444444444444444444444444444444444444444444444444444444444444422444444444444444444444444444444444442444444444444444422244444444444444222455e....
    .222444444444444444222455ee.e222444444444444444444442444444444444444444444444444444444444444444444444442222444444444444444222455ee.e222244444444444444444444444444444444444424444444444444444444444444444444444422244444444444444444444444444444444442444444444444444422224444444444444222455e....
    .222444444444444444222455ee.e222244444442244444444442444444444444444444444444444444444444444444444444442222244444444444442222455ee..222222444444444442222444444444444444444422444444244444444444444444444444444422222444444444422244444444444444444442224444442444444422222444444444442222455e....
    .e22222222222222222222455ee..e22222242222222222222222222222222222222222222222222222222222222222222222222222222222442222222222455ee..e22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224444444422222222222222222222554e....
    .e22222222222222222222455ee...22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224555ee...ee222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222244444444444444222222222222222222224554e....
    ..e2222222222222222224555ee....e222222222222222222222222222222222222222222222222222222222222222222222222454222222222222222455554e.....ee42222222222222222222222222222222222222222222222222222222222222222222222222442222222222222222222222222222222222244444444444444222442222222222222455554e....
    ...ee44444444444444455555e.....ee4222244554444444444444444444444444444444444444444444444444444444444444555555442222224445555555ee......ee444422222445555444444444444444444445442224444444444444444444444444444444555544222224455544444444444444444422224444444444444422245544422224445555555ee....
    ....e4555555555555555555ee......ee45555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554ee........eee555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555554222444444444444422225555555555555555554ee.....
    ....eee4555555555555554ee........eee55555555555555555555555555555555555555555555555555555555555555555555554eeee4555555555544eee...........eee4555555555555555555555555555555555555555555555555555555555555555555555544445555555555555555555555555552222444444444444222245554ee45555555554eee......
    ......eeeeeeeeeeeeeeeeee...........eeeeeeeeeeeeeeeeeee444eeeeeeeeeeeeeeee444eeeeeeeeeeeeeeeee44eeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeeeeee444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222244444222222245555eeeeeeeeeeeeeee........
    .....................................eeeee..........eeeeeee............eeeeeee.............eeeeeee...............eeeeeeee......................eeeeeee.........................eeeeeee.......eeeeeee..eeeeeee.............eeeeee...................e2222222222222222245555ee....eeeeee............
    ....................................................................................................................................................................................................................................................e222222222222222455554e.......................
    ......................................................................................................................................................................................................................................................e442222222245555554ee.......................
    ......................................................................................................................................................................................................................................................ee5555555555555554ee........................
    .......................................................................................................................................................................................................................................................ee4555555555554eee.........................
    ........................................................................................................................................................................................................................................................eeeeee4444eeeee...........................
    ...........................................................................................................................................................................................................................................................eeeeeeeee..............................
    ..................................................................................................................................................................................................................................................................................................
    ..................................................................................................................................................................................................................................................................................................
    ..................................................................................................................................................................................................................................................................................................
    ..................................................................................................................................................................................................................................................................................................
    `, SpriteKind.Player)
title.setScale(0.55, ScaleAnchor.Middle)
title.setPosition(80, 35)
animation.runMovementAnimation(
title,
animation.animationPresets(animation.bobbing),
2000,
true
)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888666666666666666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    6666666666666666666666666666666666666666888888888888888866666666666666666666666666666666666668888888888888888888888888888888888888888888888888888888888888888888
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666888888888888888888888888888888888888888888888888888888888
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666888888888888888888888
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666668888
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999996666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999996666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999666666666666666999996666666666666666666666666666666666
    6666666666669999996666669999996666666666666666666666666666666666666666666666666666666666666666666699999999666666666666669999996666666666666666666666666666666666
    6699999996699999999666999999996666666666666666666666666666666666666666666666666666666666666666666699999999666666666666699999996666666666666666666666666666666666
    6999999999999999999669999999996666666666666666666666666666666666666666666666666666666666666666669999999999666666666666699999996666666666666666666666666666666666
    6999999999999999999699999999996666669999999999666666666666666699999996666666666666666666666699999999999999966666666666699999996666666666666669999999666666666666
    6999999999999999999999999999996669999999999999666666666666669999999996666666666666666666669999999999999999966666666666999999996666666666699999999999666666666666
    6999999999999999999999999999999999999999999999666666666666999999999996669999999999996666999999999999999999999999999999999999996666699999999999999999666666666666
    9999999999999999999999999999999999999999999999666666666699999999999999999999999999996669999999999999999999999999999999999999999999999999999999999999666666666666
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999996699999999999999999999999999999999999999999999999999999999999999999999966666
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbb999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbb9999999999999999999999999999999999999
    999999999999999999999999999bbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbb999999999999999999999999999999999999
    9999999999999999999999999bbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbb99999999999999999999999999999999999
    9999999999999999999999999bbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbb99999999999999999999999999999999999
    9999999999999999999999999bbbbbbbbb99999999999999999999999999999999999999999bbbbbbbbbb999999999999999999999999999999bbbbbbbbbbb9999999999999999999999999999999999
    9999999999999999999999999bbbbbbbbbb9999999999999999999999999999999999999999bbbbbbbbbbb999999999999999999999999999999bbbbbbbbbbb999999999999999999999999999999999
    9999999999999999999999999bbbbbbbbbbbbbbbb9999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999999999999999bbbbbbbbbb99999999999999999999999999999999
    999999999999999999999bbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999bbbbbbbbbbbb99999999999999999999bbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999
    99999999999999999999bbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999bbbbbbbbbbbb9999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999
    999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999bbbbbbbbbbbbbb99999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999
    999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999bbbbbbbbbbbbbbbb99999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999
    999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999bbbbbbbbbbbbbbbbbb9999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999
    999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999bbbbbbbbbbbbbbbbbbbb999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999
    999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999bbbbbbbbbbbbbbbbbbbbbb9999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999
    999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999
    999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666699999999999bbbbbbbbbbbbbbbbbbbbbbbb999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999
    999999999999999999999bbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbb99999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666669999999999
    999999999999966666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbb99999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbb66666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbb66666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbb66666666666666bbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666bbbbb6666666666666bbbbbbb6666666666666666666666666bbbbbb66666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666bbbbbb666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666aaaaaaaaa666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666aaaaaaaaaaaaa66666666666666666666666666666666666aaaaaaaaa66666666666666666666666666666666666666666666666666666666666666aaaaaa666666666666
    6666aaaaaaaaaa6666666aaaaaaaaaaaaaaaa666666666666666666666666666666666aaaaaaaaaaaaa66666666666666666666666666666666aaaaaaaaaaa666666666666aaaaaaaaaaaa6666666666
    6aaaaaaaaaaaaaaa6666aaaaaaaaaaaaaaaaaaa6666666666aaaaaaaaa66666666666aaaaaaaaaaaaaaa66666666666aaaaaaaaa666666666aaaaaaaaaaaaaa66666666aaaaaaaaaaaaaaaa666666666
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa666666aaaaaaaaaaaaa66666666aaaaaaaaaaaaaaaaa6666666aaaaaaaaaaaaaa666666aaaaaaaaaaaaaaaaa66666aaaaaaaaaaaaaaaaaaa66666666
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa66666aaaaaaaaaaaaaaaaaaaaa66aaaaaaaaaaaaaaaaaa666aaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaaaaaaaaaaaaa6666666
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa66aaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333333333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333333333333333333333333aaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33333333333333333333333333333aaaaaaaaaaaaaaaa3333
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33333333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33333333333333333333333333333333aaaaaaaaaaaa333333
    aaaaaaaaaaaaaa333333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaa33333333333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333333333333333333333333333333333333333333333333333
    aaaaaaaaa3333333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaa3333333333333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333333333333333333333333333333333333333333333333333
    aaaaaaa3333333333333333333333aaaaaaaaaaaaaaaaaaaaaaaa3333333333333333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaa33333333333333333333333333333333333333333333333333333
    aaaa33333333333333333333333333aaaaaaaaaaaaaaaaaaaaa3333333333333333333333333333333aaaaaaaaaaaaaaaaaaaaaaaa333333333333333333333333333333333333333333333333333333
    aa33333333333333333333333333333aaaaaaaaaaaaaaaaaaa333333333333333333333333333333333aaaaaaaaaaaaaaaaaaaaa33333333333333333333333333333333333333333333333333333333
    a3333333333333333333333333333333aaaaaaaaaaaaaaaa333333333333333333333333333333333333aaaaaaaaaaaaaaaaa33333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333aaaaaaaaaa333333333333333333333333333333333333333aaaaaaaaaaaa33333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333377777777777777773333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333337777777777777777777777777773333333333333333333333333333333333
    3333333333333333333333377777777777777773333333333333333333333333333333333333333333333333333333777777777777777777777777777777777773333333333333333333333333377777
    3333333333333333333337777777777777777777773333333333333333333333333333333333333333333333337777777777777777777777777777777777777777777333333333333333333377777777
    3333333333333333377777777777777777777777777733333333333333333333333333333333333333333333777777777777777777777777777777777777777777777777777773333333337777777777
    3333333333777777777777777777777777777777777777333333333333333333333333333333333333337777777777777777777777777777777777777777777777777777777777773333777777777777
    3333333777777777777777777777777777777777777777773333333333333333333333333333333377777777777777777777777777777777777777777777777777777777777777777777777777777777
    3333377777777777777777777777777777777777777777777773333333333333333333333333777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    3337777777777777777777777777777777777777777777777777777333333333333333333777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    3777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
if (!(blockSettings.exists("music?"))) {
    blockSettings.writeString("music?", "yes")
}
if (!(blockSettings.exists("highscore"))) {
    blockSettings.writeNumber("highscore", 0)
}
cs = false
menu.addmenuoption("erase progress", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . . 2 1 1 1 1 2 . . . . 
    . . . . . . 2 1 1 1 1 2 . . . . 
    . . . . . . c c c c c c . . . . 
    . . . . . . c b b b b c . . . . 
    . . . . . . c b b b b c . . . . 
    . . . . . . c b b b b c . . . . 
    . . . . . . c b b b b c . . . . 
    . . . . . . c b b b b c . . . . 
    . . . . . . c b b b b c . . . . 
    . . . . . . c b b b b c . . . . 
    . . . . . . c c c c c c . . . . 
    . . . . . . . . . . . . . . . . 
    `, function () {
    if (controller.menu.isPressed()) {
        blockSettings.clear()
    }
})
menu.addmenuoption("toggle music", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f . . . . f f . . 
    . . f f . . . . . . . . f f . . 
    . . f f . . . . . . . . f f f . 
    . . f f . . . . . . . . f f f f 
    . . f f . . . . . . . . f f f f 
    . . f f . . . . . . . . . f f . 
    . . f f f f . . . . . . . . . . 
    . . f f f f f . . . . . . . . . 
    . . f f f f f . . . . . . . . . 
    . . f f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, function () {
    if (blockSettings.readString("music?") == "yes") {
        music.stopAllSounds()
        blockSettings.writeString("music?", "no")
    } else {
        blockSettings.writeString("music?", "yes")
        if (ingame) {
            music.play(music.createSong(hex`0078000408080400001c00010a006400f401640000040000000000000000000000000005000004af0000000c000224270c00100002222510001c000224271c00200002252920002c000224272c00300002222530004000022427400044000225294400480002252948004c000220244c0050000220245000540002242754006000022225640070000222257000740002202474008000022225800084000224278400900002222590009400022024940098000222259c00a000022427a000a400022427a400a800022024a800ac00022024ac00b80002222507001c00020a006400f40164000004000000000000000000000000000000000315007000740002292c8000840002292c9000940002292c08001c000e050046006603320000040a002d00000064001400013200020100023700bc00c000022427c000c400022529c400c80002272acc00d800012cd800dc0002272adc00e000022529e000e400022427e800f80002202409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80020014000410001044400450001044800490001044c004d0001045000510001045400550001045800590001035c005d0001036000610001046400650001046800690001046c006d0001047000710001047400750001037800790001037c007d0001048000810001048400850001048800890001048c008d0001049000910001049400950001039800990001039c009d000104a000a1000104a400a5000103a800a9000103ac00ad000104b000b1000104b400b5000104b800b9000104bc00bd000103c000c1000103c400c5000103c800c9000103cc00cd000104d000d1000104d400d5000104d800d9000104dc00dd000104e000e1000104e400e5000104e800e9000104ec00ed000103f000f1000103f400f5000103f800f9000103fc00fd000103`), music.PlaybackMode.LoopingInBackground)
        } else {
            music.play(music.createSong(hex`0078000408040203001c0001dc00690000045e0100040000000000000000000005640001040003700000000c000222250c00100002202410001400021e22180024000224272400280002222528002c0002202430004000021e2244004800021d2048004c00021e224c0050000220245400600002242768006c000224276c00700002202470007400021d207400780002202478007c0002242709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8005a00080009000109100011000109180019000109200021000109280029000109300031000109380039000109400041000109480049000109500051000109580059000109600061000109680069000109700071000109780079000109`), music.PlaybackMode.LoopingInBackground)
        }
    }
})
music.stopAllSounds()
tilemaps = [
tilemap`level5`,
tilemap`level6`,
tilemap`level7`,
tilemap`level18`,
tilemap`level19`,
tilemap`level20`,
tilemap`level21`,
tilemap`level22`
]
music.play(music.createSong(hex`0078000408040203001c0001dc00690000045e0100040000000000000000000005640001040003700000000c000222250c00100002202410001400021e22180024000224272400280002222528002c0002202430004000021e2244004800021d2048004c00021e224c0050000220245400600002242768006c000224276c00700002202470007400021d207400780002202478007c0002242709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8005a00080009000109100011000109180019000109200021000109280029000109300031000109380039000109400041000109480049000109500051000109580059000109600061000109680069000109700071000109780079000109`), music.PlaybackMode.LoopingInBackground)
ingame = false
inadventuregame = false
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Play Game", img`
    d d d . . . . . . . . . . . . . 
    d 2 2 d d . . . . . . . . . . . 
    d 2 2 2 2 d d . . . . . . . . . 
    d 2 2 2 2 2 2 d d . . . . . . . 
    d 2 2 2 2 2 2 2 2 d d . . . . . 
    d 2 2 2 2 2 2 2 2 2 2 d d . . . 
    d 2 2 2 2 2 2 2 2 2 2 2 2 d d . 
    d 2 2 2 2 2 2 2 2 2 2 2 2 2 2 d 
    d 2 2 2 2 2 2 2 2 2 2 2 2 2 d d 
    d 2 2 2 2 2 2 2 2 2 2 2 d d . . 
    d 2 2 2 2 2 2 2 2 2 d d . . . . 
    d 2 2 2 2 2 2 2 d d . . . . . . 
    d 2 2 2 2 2 d d . . . . . . . . 
    d 2 2 2 d d . . . . . . . . . . 
    d 2 d d . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . 
    `),
miniMenu.createMenuItem("Credits"),
miniMenu.createMenuItem("My Data")
)
let ge = ["locked", "Good Ending"]
let be = ["locked", "Bad Ending"]
let se = ["locked", "Secret Ending"]
let we = ["locked", "Worst Ending"]
myMenu.setPosition(60, 58)
myMenu.setTitle("menu")
myMenu.setDimensions(85, 56)
if (0 == 0) {
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Border, 2)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 7)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 12)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 10)
    myMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 3)
    myMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 15)
    myMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Border, 2)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 2)
    myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 15)
}
myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    if (selectedIndex == 2) {
        game.showLongText("Your Data:" + "                     " + "Marathon Highscore:" + blockSettings.readNumber("highscore") + "     " + "Endings: " + ge[blockSettings.readNumber("ge")] + ", " + be[blockSettings.readNumber("be")] + ", " + se[blockSettings.readNumber("se")] + ", " + we[blockSettings.readNumber("we")] + "" + "", DialogLayout.Full)
    }
    if (selectedIndex == 1) {
        game.showLongText("This game was made for Coder king 2 in 2023 for the microsoft makecode forums. it is inspired by pokemon puzzle challenge, witch was inspired by panel de pon, which was inspired by tetris attak. the characters in this game belong to Lucas_M, taser, pixeldoodle, theconeguy, and brohann Please enjoy the game and make sure to make we win the coder king competition. all quotes or words speaken from any character are completely made up and in no way are meant to be offensive, they are just funny.", DialogLayout.Full)
    }
    if (selectedIndex == 0) {
        myMenu.close()
        myMenu2 = miniMenu.createMenu(
        miniMenu.createMenuItem("Marathon"),
        miniMenu.createMenuItem("Adventure"),
        miniMenu.createMenuItem("Puzzle"),
        miniMenu.createMenuItem("How to Play")
        )
        myMenu2.setPosition(60, 58)
        myMenu2.setTitle("Game mode")
        if (0 == 0) {
            myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Border, 2)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 6)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 12)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 10)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 3)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 15)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Border, 2)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Border, 2)
            myMenu2.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.BorderColor, 15)
            myMenu2.setDimensions(85, 55)
            myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selectedIndex == 3) {
                    game.showLongText("I reccomend you search up a video about POKEMON PUZZLE CHALLENGE, but if you can't or don't want to, I can try to teach you. The goal of the game is to match up the colored squared with others squares of the same color. you can do this sideways or up and down. You score more points depending on how much you get in a row, and how much you got at the same time. you can swap blocks by switching them left and right, hwhen you press the A key. use arrow keys to move your cursor. if the blocks reach the top of the screen then you lose", DialogLayout.Full)
                }
                if (selectedIndex == 2) {
                    game.showLongText("This game mode is under development and will only come out if it wins CODER KING 2", DialogLayout.Full)
                }
                if (selectedIndex == 0) {
                    color.startFadeFromCurrent(color.Black, 1000)
                    color.pauseUntilFadeDone()
                    sprites.destroy(title)
                    music.stopAllSounds()
                    myMenu2.close()
                    character_select()
                    color.startFadeFromCurrent(color.originalPalette)
                }
                if (selectedIndex == 1) {
                    color.startFadeFromCurrent(color.Black, 1000)
                    color.pauseUntilFadeDone()
                    sprites.destroy(title)
                    music.stopAllSounds()
                    myMenu2.close()
                    if (!(blockSettings.exists("myspot"))) {
                        blockSettings.writeNumber("myspot", 0)
                        spawn_player()
                        spawn_new_map()
                        color.startFadeFromCurrent(color.originalPalette)
                    } else {
                        spawn_player()
                        spawn_new_map()
                        color.startFadeFromCurrent(color.originalPalette)
                    }
                    if (!(blockSettings.readNumber("myspot") == 7)) {
                        music.play(music.createSong(hex`00780004080a0201001c000f05001202c102c2010004050028000000640028000314000602000418010000080001160c001000011210001400011114001800010d18001c00010820002800010d2c003000010f30003400011134003800011438003c000118440050000212165000540002111458006800020c0f68006c00020d1170007c0002121684009000011690009400011494009800011298009c00010f9c00a000010aa400b000010ab000b400010cb400b800010db800bc000111bc00c0000116c400c8000116c800cc000116cc00d0000116d000d4000114d400d8000112d800dc00010fdc00e000010ae400e800010ae800ec00010aec00f000010af000f400010cf400f800010df800fc000111fc0000010116040110010212161001140102111418012401020c0f24012801020d112c0138010212163c014001010509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001a018400850001038800890001038c008d0001039000910001039400950001039800990001039c009d000103a000a1000103a400a5000103a800a9000103ac00ad000103b000b1000103b400b5000103b800b9000103bc00bd000103c000c1000103c400c5000103c800c9000114cc00cd000103d000d1000114d400d5000103d800d9000114dc00dd000103e000e1000114e400e5000103e800e9000114ec00ed000103f000f1000114f400f5000103f800f9000114fc00fd0001030001010101140401050101070801090101070c010d0101071001110101071401150101071801190101071c011d0101072001210101072401250101072801290101072c012d0101073001310101073401350101073801390101073c013d010107`), music.PlaybackMode.LoopingInBackground)
                    } else {
                        music.play(music.createSong(hex`00780004080e0202001c000c960064006d019001000478002c010000640032000000000a060005b4000000040002141808000c00020f121000400002060a4000440002080c48008000020a0d8000840002080c8800b400020508b400b80002060abc00c000020c0fc400c800021114d000d400021216d800dc000112dc00e0000111e000e400010de800ec00010dec00f000010df000f400010ff800fc000116fc000c0101142001240102141828012c01020f123001600102060a6001640102080c6801a001020a0da801ac0102080cac01b001020508b401b801010509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8006c022000210001062400250001062800290001062c002d000106300031000204063400350001063800390001063c003d00010640004100020406440045000106480049000214064c004d00010650005100020406540055000106580059000214065c005d00010660006100020406640065000106680069000214066c006d00010670007100020406740075000106780079000214067c007d00010680008100030f040684008500020f0688008900030f14068c008d00010690009100020406940095000106980099000214069c009d000106a000a100030f0406a400a500020f06a800a900030f1406ac00ad00021006b000b10003100406b400b500021006b800b900021406bc00bd000109c000c1000109c400c5000109c800c9000109cc00cd000109d000d100020809d400d5000109d800d9000109dc00dd000109e000e100020809e400e5000109e800e9000109ec00ed000109f000f100020809f400f5000109f800f9000109fc00fd000109000101010208091001110101101401150101101801190101101c011d010110200121010210072801290101073001310101073401350101073801390101073c013d0101074001410101074401450101074801490101074c014d0101075001510101075401550101075801590101075c015d01010760016101020407640165010107680169010204076c016d0101077001710103140407740175010107780179010204077c017d0101078001810103140407840185010107880189010204078c018d0101079001910103140407940195010107980199010204079c019d010107a001a10103140407b401b50103050607b801b90103050607bc01bd0103050607`), music.PlaybackMode.LoopingInBackground)
                    }
                }
            })
        }
    }
})
game.onUpdate(function () {
    if (inadventuregame) {
        if (cursor.x > 106) {
            cursor.x = 106
        }
        if (cursor.x < 38) {
            cursor.x = 38
        }
        if (isgame_over == 0) {
            check_if_any_are_in_a_row()
            textSprite.setText("" + score)
        }
        if (goal <= score) {
            inadventuregame = false
            Win()
        }
    }
    if (ingame) {
        if (cursor.x > 106) {
            cursor.x = 106
        }
        if (cursor.x < 38) {
            cursor.x = 38
        }
        if (isgame_over == 0) {
            check_if_any_are_in_a_row()
            if (score > blockSettings.readNumber("highscore")) {
                blockSettings.writeNumber("highscore", score)
            }
            textSprite.setText("" + score)
            textSprite5.setText("speed:" + speedbonus)
            textSprite6.setText("high:" + blockSettings.readNumber("highscore"))
        }
    }
    if (cs) {
        if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile17`)) {
            wc.setText("Selection: " + "Stump")
            character = 1
        }
        if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile18`)) {
            wc.setText("Selection: " + "Taser")
            character = 2
        }
        if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
            wc.setText("Selection: " + "Cone Guy")
            character = 3
        }
        if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
            wc.setText("Selection: " + "Pixel Doodle")
            character = 4
        }
        if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
            wc.setText("Selection: " + "Red_Line")
            character = 5
        }
        if (character_cursor.tileKindAt(TileDirection.Center, assets.tile`myTile22`)) {
            wc.setText("Selection: " + "Raptor")
            character = 6
        }
    }
})
forever(function () {
    if (ingame) {
        if (0 == 0) {
            pause(speed)
            add_new_layer()
            speed = speed * 0.965
            speedbonus += 0.1
        }
    }
    if (inadventuregame) {
        speed = listofspeeds[blockSettings.readNumber("myspot")]
        if (0 == 0) {
            pause(speed)
            if (inadventuregame) {
                add_new_layer()
            }
        }
    }
})
game.onUpdateInterval(200, function () {
    if (ingame) {
        make_fall()
    }
    if (inadventuregame) {
        make_fall()
    }
})
