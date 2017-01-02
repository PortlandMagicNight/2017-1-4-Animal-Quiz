# Animal Quiz

Today's magic night challenge is to build an animal quiz program.

It works like this. The program starts by telling the user to think of an
animal. It then begins asking a series of yes/no questions about that animal:
does it swim, does it have hair, etc. Eventually, it will narrow down the
possibilities to a single animal and guess that (Is it a mouse?).

If the program has guessed correctly, the game is over and may be restarted with
a new animal. If the program has guess incorrectly, it asks the user for the
kind of animal they were thinking of and then asks for the user to provide a
question that can distinguish between its incorrect guess and the correct
answer. It then adds the new question and animal to its "database" and will
guess that animal in the future (if appropriate).

```
Think of an animal...
Is it an elephant?  (y or n)
n
You win.  Help me learn from my mistake before you go...
What animal were you thinking of?
a rabbit
Give me a question to distinguish a rabbit from an elephant.
Is it a small animal?
For a rabbit, what is the answer to your question?  (y or n)
y
Thanks.
Play again?  (y or n)
y
Think of an animal...
Is it a small animal?  (y or n)
y
Is it a rabbit?  (y or n)
n
You win.  Help me learn from my mistake before you go...
What animal were you thinking of?
a Shih Tzu
Give me a question to distinguish a Shih Tzu from a rabbit.
Is it a kind of dog?
For a Shih Tzu, what is the answer to your question?  (y or n)
y
Thanks.
Play again?  (y or n)
y
Think of an animal...
Is it a small animal?  (y or n)
y
Is it a kind of dog?  (y or n)
y
Is it a Shih Tzu?  (y or n)
y
I win.  Pretty smart, aren't I?
Play again?  (y or n)
n
```


This challenge is based off of RubyQuiz 15, and SDRuby's adaptation of it
