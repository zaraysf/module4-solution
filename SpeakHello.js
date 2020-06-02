// (function (window) {
//     var yousefiGreeter = {};
//     yousefiGreeter.name = "Yousefi";
//     var greeting = "Hello "
//     yousefiGreeter.helloSpeaker = function () {
//         console.log(greeting + yousefiGreeter.name);
//     }
//     window.yousefiGreeter = yousefiGreeter;

// })(window);


(function (window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
})(window);
