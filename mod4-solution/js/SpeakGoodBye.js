(function (window){
  var goodbyeSpeaker = {};
  n=goodbyeSpeaker.name;
  var speakWord = "Good Bye";
  goodbyeSpeaker.sayGoodbye= function (n) {
    console.log(speakWord + " " + n);
  };
  window.goodbyeSpeaker=goodbyeSpeaker;
})(window);