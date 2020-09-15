const WickrBot = require('wickrbot');

class {{cookiecutter.class_name}} extends WickrBot {
    constructor(wickr, username) {
        super(wickr, username);

        this.listen('echo', (msg, args) => {
            this.send(msg.vgroupid, args.join(' '));
        });

        // Wait for bot to start before interacting with Wickr APIs
        this.on('start', () => {
            // This clears the send/recv statistics on the bot
            this.clearStats();
        });
    }
}

module.exports = {{cookiecutter.class_name}};
