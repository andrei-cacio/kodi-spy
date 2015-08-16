var chokidar = require('chokidar'),
    request = require('request'),
    folderDest = process.argv[2],
    kodiHost = process.argv[3],
    watcher = chokidar.watch(folderDest, {
      ignored: /[\/\\]\./, persistent: true
    }),
    exec = require('child_process').exec;

var log = console.log.bind(console);
log('Watching folder: ' + folderDest);

watcher
    .on('ready', function(path) {
        watcher.on('add', function(path) {
            if (path.search('.part') === -1) {
                log('File', path, 'has been added');
                exec('notify-send "Kodi", "Updating video library"');
                request('http://' + kodiHost + '/jsonrpc?request={"jsonrpc":"2.0","method":"VideoLibrary.Scan"}');
            }
        });
    });