# Game Overview
This is a simple falling ball catching game. The game draws the player paddle, the ball, and the text on screen and the ball falls. The game checks where the ball is to see if the ball has been caught or has fallen past the canvas, then resets the ball. There is also a lives system (called “will to live”) that tracks how many times the player has dropped the ball. The game stops when this hits 0.

## Your task
Download this code and have a go at refactoring it in Visual Studio Code.

1. Read the this file!
2. Start by reading through the code and playing the game. Can you see what each bit of code is doing? Add some comments to explain what each bit of code is doing (you can decide how much detail is needed).
3. There is some repetition in this code. Start by creating functions for those bits and calling that function at the points with repeated code.
4. Can you isolate any distinct operations that could be factored out and given a more legible name?

## Extra tasks:

1. The game just stops when the player runs out of will to live. Can you add some text saying game over?
2. Could you add a method that allows the player to trigger a game restart?

If you're stuck, look at the end of the lecture slides for some hints!

## Versions
There are three versions of this game:
1. NORMAL: this is the version I expect most of you to work with, but if you're feeling confident...
2. CHALLENGE: this is for students wanting a bit of a challenge. There is no line spacing in this version – you'll have to add them!
3. COMMENTED: a version with my comments on it – use this version only if you're really stuck.
