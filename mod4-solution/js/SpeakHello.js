(function (window){
  var helloSpeaker ={};
  n=helloSpeaker.name;
  var speakWord = "Hello";
  helloSpeaker.sayHello= function (n) {
    console.log(speakWord + " " + n);
  };
  window.helloSpeaker=helloSpeaker;
})(window);