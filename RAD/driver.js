/**
 * Created by pc on 1/4/2017.
 */
var keypress = require('keypress');

keypress(process.stdin);

class QuestionNode {

    constructor(question) {
        this.question = question;
        this.yes = "";
        this.no = "";
    }
}

class AnimalNode {
    constructor(name) {
        this.name = name;
    }
}


function setup() {
    var startAnimal = new AnimalNode("Chicken");
    var startQuestion = new QuestionNode("Does it have feathers?")
    startQuestion.yes = startAnimal;
    return startQuestion;
}

function input() {
    process.stdin.on('keypress', function (ch, key) {
            if (key && (key.name === 'y'))
                currentQuestion = currentQuestion.yes;
            if (key && key.name === 'n') {
                currentQuestion = currentQuestion.no;
            }
            if (key && key.name === 'q') {
                process.exit();
            }
            console.log('test');
        }
    )
    ;
    process.stdin.setRawMode(true);
    process.stdin.resume();

}

var currentQuestion = setup();
(function driver() {
    console(currentQuestion.question);
    input();
    console.log("correct");
}());
