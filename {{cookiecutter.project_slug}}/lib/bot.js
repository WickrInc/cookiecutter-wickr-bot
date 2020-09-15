const WickrBot = require('wickrbot');

class {{cookiecutter.class_name}} extends WickrBot {
    constructor(wickr, username) {
        super(wickr, username);

        // This handler function will be run when the bot receives the `/echo` command
        // Parameters:
        //   msg: The message object as received from the Wickr client.
        //        See https://wickrinc.github.io/wickrio-docs/#definitions-wickr-message-formats
        //   args: An array of each of the arguments passed to the command
        this.listen('echo', (msg, args) => {
            this.send(msg.vgroupid, args.join(' '));
        });

        // Wait for bot to start before interacting with Wickr APIs
        this.on('start', () => {
            // This clears the send/recv statistics on the client
            this.clearStats();
        });
    }
}

module.exports = {{cookiecutter.class_name}};
