var chokidar = require('chokidar'),
    Notification = require('./notification'),
    mime = require('mime');

function LibrarySpy(folder, commandDispatcher) {
    this.folder = folder;
    this.watcher = null;
    this.commandDispatcher = commandDispatcher;
}

LibrarySpy.prototype.watch = function() {
    var self = this,
        notification = new Notification('Kodi', 'Updating video library');

    this.watcher = chokidar.watch(this.folder, {
      ignored: /[\/\\]\./, persistent: true
    });

    this.watcher.on('ready', function(path) {
        self.watcher.on('add', function(path) {
            var isVideo = /video/.test(mime.lookup(path));

            if (path.search('.part') === -1 && isVideo) {
                self.commandDispatcher.sendCommand();
                notification.display();
            }
        });
    });
};

module.exports = LibrarySpy;