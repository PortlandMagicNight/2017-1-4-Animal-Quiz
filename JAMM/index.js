#!/usr/sbin/node

var prompt = require('prompt');

var data = {
    "q": "Is it an elephant?"
}

prompt.start();

var playMore = function () {
    var playAgain = "playAgain? (y/n)";
    prompt.get([playAgain], function (err, playAgainAnswer) {
        if (playAgainAnswer[playAgain] == "y") {
            run(data);
        } else {
            console.log("Thanks for playing!!!");
        }
    });

}

var askQuestions = function () {
    console.log("I lose");
    console.log("Help me make me better!");
    var newAnimal = "What animal were you thinking about?";
    var newQuestion = "How can i tell this apart from the animal i guessed?";
    var newQAnswer = "What is the answer to the new question for this new animal? (y/n)";
    prompt.get([newAnimal,newQuestion,newQAnswer], function (err, result) {

        var newQ = {
            "q": "Is it an " + result[newAnimal] + "?"
        }
        var yes = "";
        var no = "";
        if (result[newQAnswer] == "y" || result[newQAnswer] == "yes") {
            yes = newQ;
            no = data;
        } else {
            yes = data;
            no = newQ;
        }
        var newData = {
            "q": result[newQuestion],
            "yes": yes,
            "no": no
        }


        data = newData;
        console.log(data);

        playMore();

    });
}

var run = function (tree) {

    prompt.get([tree["q"]], function (err, result) {
        if (result[tree["q"]] == "y" || result[tree["q"]] == "yes") {
            if (tree.hasOwnProperty('yes')) {
                run(tree["yes"]);
            } else {
                console.log("I WIN!!!");
                playMore();
            }
        } else {
            if (tree.hasOwnProperty('no')) {
                run(tree["no"]);
            } else {
                askQuestions();
            }
        }
    });
}

run(data);
