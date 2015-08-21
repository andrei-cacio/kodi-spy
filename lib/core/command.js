Command.TYPE = {
    SCAN: 'VideoLibrary.Scan',
    CLEAN: 'VideoLibrary.Clean'
};

function Command(type) {
    this.type = type;
    this.payload = {
        jsonrpc: '2.0',
    }
}

Command.prototype.toString = function() {
    this.payload.method = this.type;

    return JSON.stringify(this.payload);
};

module.exports = Command;