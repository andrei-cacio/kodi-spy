var exec = require('child_process').exec;

function Notification(title, message) {
    this.title = title;
    this.message = message;
    this.isLinux = /linux/.test(process.platform);
}

Notification.prototype.display = function() {
    if (this.isLinux) {
        exec('notify-send "' + this.title + '", "' + this.message + '"');
    }
};

module.exports = Notification;