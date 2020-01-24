

/**********************************************************     SCHRIFTART      *************************************************
 * Hier wird die Schrift eingebunden, sodass sie bei der Erstellung von Texten als Schriftart auswählbar ist.
 * **/

var new_font = new FontFace('AhkioW05-Light', 'url(Fonts/AhkioW05-Light.ttf)');
new_font.load().then(function(loaded_face) {
    document.fonts.add(loaded_face);
}).catch(function(error) {
});

/**********************************************************    SETUP FÜR PHASER    ***********************************************/

var config = {
    type: Phaser.AUTO,
    width: 900,                                         // Breite des Spiels
    height: 1200,                                       // Höhe des Spiels
    physics: {
        default: 'arcade',
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Start, Game_Easy, Game_Medium, Game_Hard, Game_Expert, End_Time, End_Life]
    //scene: [End_Time]
};

var game = new Phaser.Game(config);
