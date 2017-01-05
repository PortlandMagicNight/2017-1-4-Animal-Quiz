#!/usr/sbin/node

var prompt = require('prompt');

var data = {
    "q": "Is it an elephant?"
}

prompt.start();

var askQuestions = function () {
    console.log("I lose");
    console.log("Help me make me better!");
    var newAnimal = "What animal were you thinking about?";
    var newQuestion = "How can i tell this apart from the animal i guessed?";
    var newQAnswer = "What is the answer to the new question for this new animal? (y/n)";
    prompt.get([newAnimal], function (err, newAnimalResult) {
        prompt.get([newQuestion], function (err, newQuestionResult) {
            prompt.get([newQAnswer], function (err, newQAnswerResult) {

                var newQ = {
                    "q": "Is it an " + newAnimalResult + "?"
                }
                var yes = "";
                var no = "";
                if (newQAnswerResult == "y") {
                    yes = newQ;
                    no = data;
                } else {
                    yes = data;
                    no = newQ;
                }
                var newData = {
                    "q": newQuestionResult,
                    "yes": yes,
                    "no": no
                }

                console.log(newData);

                data = newData;
                console.log(data);
                run(data);
            });
        });
    });
}

var run = function (tree) {

    prompt.get([tree["q"]], function (err, result) {
        if (result[tree["q"]] == "y") {
            if (tree.hasOwnProperty('yes')) {
                run(tree["yes"]);
            } else {
                console.log("I WIN!!!");
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
