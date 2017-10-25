var table;

function preload(){
    afinn = loadJSON("afinn111.json");
}

function setup() {
    noCanvas();
    console.log(afinn);

    var txt = select("#txt");//, [container])
    txt.input(typing);

    function typing(){
        var textInput = txt.value();
        var words = textInput.split(/\W/);// this regext looks for all non letters
        console.log(words);
        var scoredwords = [];
        totalScore = 0;
        for(var i =0; i< words.length; i++){
            var word = words[i].toLowerCase();
            if(afinn.hasOwnProperty(word)){
                var score = afinn[word];
                console.log(word, score);
                totalScore += Number(afinn[word]);
                scoredwords.push(word + ": " + score + ' ')
            }
        }
        var scoreP = select("#score");
        scoreP.html("score:" + totalScore);
        var comp = select("#comparative");
        comp.html("comparative:" + totalScore / words.length);
        var wordlist = select("#wordlist");
        wordlist.html(scoredwords);
        // console.log(txt.value());
    }
}

function draw() {

}