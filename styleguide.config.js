const path = require('path');

module.exports = {
    components: [
        'src/components/video-player/video.js',
        'src/components/video-player/video-player-with-playlist.js'
        //'src/components/playlist/playlist.js',
        //'src/components/video-player/video-player.js'
    ].sort(),
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/containers/styleguide/wrapper.js')
    }
};
