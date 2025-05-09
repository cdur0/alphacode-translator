import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
* {
    box-sizing: border-box;
}

h1, p {
    text-align: center;
    font-family: Arial, sans-serif;
}

/* Container to center the search field and button */
.search-container {
    display: flex;
    justify-content: center; /* Center the container horizontally */
    align-items: center; /* Vertically align items */
    margin: 20px 0;
    gap: 10px; /* Add some space between the input and button */
}

/* Search input styles */
input {
    width: 80%; /* Maximum width is 80% of the screen */
    max-width: 600px; /* Optional: Cap the width at 600px for larger screens */
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* Search button styles */
button {
    padding: 10px 20px;
    background-color: #0078d4;
    color: white;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #005a9e;
}

/* Style for the search result section */
#search-result {
    margin-top: 20px;
    margin-left: auto; /* Align to the start of the parent container */
    margin-right: auto; /* Center the result container */
    max-width: 80%; /* Match the maximum width of the input field */
    text-align: left; /* Left-align the text in the results */
}

/* Error message styling */
.error {
    color: red;
    font-weight: bold;
}

p {
    font-size: 14px;
    font-family: Arial, sans-serif;
}`