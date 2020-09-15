const expect = require('chai').expect;
const sinon = require('sinon');

const FakeWickr = require('./fakes/wickr');
const {{cookiecutter.class_name}} = require('../lib/bot');

describe('bot', function() {
    beforeEach(function() {
        this.bot = new {{cookiecutter.class_name}}(new FakeWickr(), "rbot");
    });

    it('instantiates without issue', function() {
        let wickr = new FakeWickr();
        let bot = new {{cookiecutter.class_name}}(wickr, 'foo');
    });

    it('registers handlers', function() {
        expect(Object.keys(this.bot.handlers)).to.eql(["help", "echo"]);
    });

});
