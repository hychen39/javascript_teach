# Lab 6.4: Button Click Counter

In this lab, you will create a webpage with buttons that count the number of times they are clicked. Follow the steps below to complete the lab.

---

## Step 1: Create the HTML structure

1. Create a basic HTML document with a title and a heading.
2. Add three buttons to the page, each with a unique `id` (e.g., `btn1`, `btn2`, `btn3`).
3. Add a `<label>` element next to each button to display the click count. Each label should also have a unique `id` (e.g., `lbl1`, `lbl2`, `lbl3`).

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Lab 6.4 Solution</title>
</head>
<body>
    <h1>Lab 6.4 Solution</h1>
    <h2>Count the number of clicks for buttons.</h2>
    <div>
        <button id="btn1">Button 1</button> <label id="lbl1"></label>
    </div>
    <div>
        <button id="btn2">Button 2</button> <label id="lbl2"></label>
    </div>
    <div>
        <button id="btn3">Button 3</button> <label id="lbl3"></label>
    </div>
</body>
</html>
```

---

## Step 2: Write the `counterFun` function

1. Define a function named `counterFun` that takes two parameters: `idx` (the button index) and `counter` (the initial count, starting at 0).
2. Inside the function, return another function that:
   - Retrieves the corresponding label element using `document.getElementById`.
   - Increments the `counter` variable.
   - Updates the label's `innerHTML` with the new counter value.

Example:
```javascript
function counterFun(idx, counter) {
    return function() {
        let lbl = document.getElementById(`lbl${idx + 1}`);
        counter++;
        lbl.innerHTML = counter;
    };
}
```

---

## Step 3: Add event listeners to the buttons

1. Use `document.getElementsByTagName` to retrieve all button elements on the page.
2. Convert the HTMLCollection to an array using `Array.from`.
3. Use a `for` loop or `for...of` loop with `entries()` to iterate through the buttons.
4. For each button:
   - Add an event listener for the `click` event.
   - Use the `counterFun` function to handle the click event, passing the button index and an initial counter value of 0.

Example:
```javascript
let buttons = document.getElementsByTagName("button");
for (let [idx, btn] of Array.from(buttons).entries()) {
    btn.addEventListener("click", counterFun(idx, 0));
}
```

---

## Step 4: Test the program

1. Open the HTML file in a browser.
2. Click each button multiple times and verify that the corresponding label updates with the correct click count.

---

## Final Notes

- Ensure that each button updates only its corresponding label.
- Experiment with adding more buttons and labels to test the scalability of your solution.
