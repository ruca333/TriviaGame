var panel = $("#quiz-area");

var quizQuestions = [
{
	question: "What is Joey’s pick-up line?",
	choices: ["Hey, baby!", "How’s it going baby", "How you doing?", "I drive a Porsche!"],
	correctAnswer: "How you doing?"
},
{
	question: "Who was Rachel dating when she turned 30 years old?",
	choices: ["Paolo", "Joey", "Ross", "Russ"],
	correctAnswer: "Ross"
},
{
	question: "How many seasons of Friend’s have there been?",
	choices: ["8", "10", "12", "15"],
	correctAnswer: "10"
},
{
	question: "Which actor plays Joey?",
	choices: ["Matt Tribiani", "Matthew LePerry", "Matt LeBlanc", "Matt Perry"],
	correctAnswer: "Matt LeBlanc"
},
{
	question: "BONUS QUESTION! Finish this Chandler sentence: <p>Gum would be…</p>  ",
	choices: ["Great!", "Exactly what I need!", "Perfection!", "A terrible idea!"],
	correctAnswer: "Perfection!"
}];

var timer;

var game = {
	correct: 0,
	incorrect: 0,
	counter: 30,

	countdown: function() {
		game.counter--;
		$("#counter-number").html(game.counter);
		if (game.counter === 0) {
			console.log("TIME'S UP!!");
			game.done();
		}
    },
    
    start: function() {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
        $("#start").remove();

        for (var i = 0; i < quizQuestions.length; i++) {
            panel.append("<h2>" + quizQuestions[i].question + "</h2>");
            for (var j = 0; j < quizQuestions[i].choices.length; j++) {
                panel.append("<input type='radio' name='question-" + i
                + "' value='" + quizQuestions[i].choices[j] + "''>" + quizQuestions[i].choices[j]);
            }
        }
            
        panel.append("<button id='done'>Done</button>");
    },

    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() === quizQuestions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() === quizQuestions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() === quizQuestions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() === quizQuestions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() === quizQuestions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();

    },

    result: function() {
        clearInterval(timer);
        $("#sub-wrapper h2").remove();
        panel.html("<h2>All Done!</h2>");
        panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        panel.append("<h3>Unanswered Questions: " + (quizQuestions.length - (this.incorrect)) + "</h3>");
    }
};

$(document).on("click", "#start", function(){
    game.start();
});

$(document).on("click", "#done", function(){
    game.done();
});