// The 3 pillar of OOP - abstraction

// idea
// implementation pore krbo

/*

    1. interface
    2. abstract class
 */


// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// };


// // implementation
// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log('Playing nasheed');
//     };
//     pause(): void {
//         console.log('Pause nasheed');
//     };
//     stop(): void {
//         console.log('Stop nasheed');
//     };
// };

// const mezbaPlayer = new MusicPlayer(); // instance
// mezbaPlayer.play();


abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
};

// implementation
class MezbaPlayer extends MediaPlayer {
    play(): void {
        console.log('Playing Nasheed...');
    };
    pause(): void {
        console.log('Pause Nasheed');
    };
    stop(): void {
        console.log('Stop Nasheed');
    };
};

const mezbaPlayer1 = new MezbaPlayer();

mezbaPlayer1.play();