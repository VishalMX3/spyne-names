# Aim: Sort and display the top 10 names dynamically based on their counts

## Running the project (Use any one method)

Method 1: Deployed Project [Live Url](https://spyne-names.onrender.com).

Method 2: Clone the [Source Code](https://github.com/VishalMX3/spyne-names) and run using `npm start`

### My Approach

> States Used:

- `name`: A state variable to hold the current input value.
- `names`: A state variable to hold the names and their counts as an object. The keys are the names, and the values are the counts.

> Preparing List:

- When the form, containing the name input, is submitted, a function `handlesubmit` is called.
- If the input is not empty, `setNames` function is called which updates the `names` state.
- If the `name` already exists in the `names` object, its count is incremented; otherwise, the `name` is added with a count of 1.

> Rendering top 10 frequemt names:

- Converted the `names` object into an array of entries using `Object.entries()`.
- Sorted this array in descending order based on the counts.
- Sliced the first 10 entries to get the top 10 names.
- Stored in a new array called `sortedNames`.
- Rendered the `sortedNames` array using `map()` function, in the form of list.

> Styling

- Used Tailwind CSS
