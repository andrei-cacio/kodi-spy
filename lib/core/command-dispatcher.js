var request = require('request');

function CommandDispatcher(host, command) {
    this.protocol = 'http://';
    this.kodiHost = this.protocol + host + '/jsonrpc?request=';
    this.command = command;
}

CommandDispatcher.prototype.send = function(command) {
    request(this.kodiHost + command.toString());
};

CommandDispatcher.prototype.sendCommand = function() {
    request(this.kodiHost + this.command.toString());
};

module.exports = CommandDispatcher;