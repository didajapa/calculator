# calculator
## The Odin Project - Foundations

---
**1. Create functions**
- add
- subtract
- multiply
- divide

**2. Create function `operate()`** that takes an operator and 2 numbers, and then calles one of the above functions

**3. Create basic HTML** calculator with buttons for each digit, all the above functions, and an "Equals" key
- Add a display for the calculator
- Add a clear button

**4. Create functions to populate display.** Store the display value in a variable somewhere for next step

**5. Make calculator functional:**
- Store first number that is input into the calculator when user presses operator
- Save which operation has been chosen
- Execute the operation when "=" is presses
- Update display with the soluction once `operate()` is called

**6. Gotchas:**
- Evaluate one pair of numbers at a time
- Round answers with long decimals so that they don't overflow the screen.
- Pressing '=' before entering all of the numbers or an operator could cause problems
- Pressing "clear" should wipe any existing date
- Display an error message when user tries to divide by 0

**Extra:**
- Add a "." button to input decimals
- Make it look nice
- Add a "backspace" button
- Add keyboard support
