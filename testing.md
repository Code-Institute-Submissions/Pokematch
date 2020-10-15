# Pokemon Matching Pairs Testing

<img src="assets/images/poke-logo.png" width="400" height="230" />

---

## User stories

### This game has been Created for younger children. (3-7 year olds)

### As a user, I want to have fun with a simple game

- The game is enjoyable and visually appealing to the players. 

### As a user, I want to choose a different experience depending on the difficulty. 

-  The game is approachable for all young children, with a different level of difficulty depending on the age, and for extra challenge.

### As a user, I want to know if I lose

- A timer is added to the game from the start of a round, which on reaching 0, a modal comes up to inform the player that it is a game over.

### As a user, I want to be rewarded with recognition for winning. 

- On all pokemon being free from their pokeballs due to full matches, a modal comes up to inform the player that they have won the game

### As a user, I want some instructions so I know what to do

- There is an option on the main menu which says "How To Play" which explains the rules of the game and what you have to do. 
- - (May need to be tweaked to create more child friendly language)  

### As a user, I want to be told when the two pokemon match

- A sound effect plays which informs the player that the pokemon match. The two matching pokemon stay on the screen.

### As a user, I want to be told in different ways whether the chosen pokemon match or not.
- As was the case with a previous story, there is also a sound effect that plays when it isnt a match, and the pokemon return to their pokeball.

### As a user, I want the game to run on different screen sizes.

- The game has had media queries included in its CSS, in order to look equally as appealing on multiple platforms. From desktop being the largest, to Apple Iphone 5S being the smallest.

### As a user, I want to improve my hand eye co ordination and develop simple early ICT usage skills. 
- Throughout the early years education documentation in the UK (Development Matters in the Early Years Foundation Stage), there are statements that encourage the development of technbology skills, and physical skills. This game covers goals such as "•Shows skill in making toys work by pressing parts or lifting
flaps to achieve effects such as sound, movements or new images.", "•Completes a simple program on a computer.", "Children show good control and co-ordination in large and small movements.". This game is built with just some of these aspects in mind.

## Bugs

### Timer starts even if a difficulty Pokeball is not selected

- Set a return to the start function if the level = null. 

### Sound effects too loud for some players

- 

### Ball doesn't always match Sound

- 

### By repeatedly clicking the same two pokemon that match, you can win without opening any other pokeballs. 

- 

### When clicking off the difficulty ball, the answer is still stored so game starts on that setting if ball is toggled off and ball isn't highlighted. 

- 

## Player opinions

### Children
- Gave children in a preschool setting a chance to play the game to give their opinions. The two year olds liked pushing the buttons, they liked the colours and hearing the sound (but the game was never intended for them anyway). Older children 3-4 enjoyed the pokeball and greatball settings but found masterball level difficult. 
- The children between 5 and 7 who had a go enjoyed it. A child aged 7 found masterball level quite easy but still said it was fun to play and wanted more goes. 
- To appeal to those who find it easy I will consider adding a timer which on a win modal will inform you of the time it took, so they can try to beat their time. 

### Adults
- Some adults also enjoyed playing the game. Most adults enjoyed the masterball difficulty, but for it to be effective for them, the game would require levels to get more challenging using that level. 
- If tweaking the game for adults, pokeball and greatball would be the same as the masterball level, but the timer would get shorter each time.
- Adults might enjoy use of the timer which informs the player of how long it took to win. 

##### Back to [readme](README.md)