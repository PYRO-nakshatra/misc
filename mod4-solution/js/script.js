(function (){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (name in names) {
        var firstLetter = names[name];
        if(firstLetter.charAt(0)=="j"||firstLetter.charAt(0)=="J"){
            goodbyeSpeaker.sayGoodbye(firstLetter);
        }
        else{
            helloSpeaker.sayHello(firstLetter);
        }
    }
})();