function myModule() {
    this.hello = function() {
        console.log("Hello!");
    };
    this.bye = function() {
        console.log("bye!");
    };
}

module.exports = myModule;