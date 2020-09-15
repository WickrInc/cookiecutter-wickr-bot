const wickr = require('wickrio_addon');

const {{cookiecutter.class_name}} = require('./lib/bot');

async function main() {
    let bot = new {{cookiecutter.class_name}}(wickr);
    bot.start();
}

main().then(result => {}).catch(e => { console.error(e); process.exit(1); });
