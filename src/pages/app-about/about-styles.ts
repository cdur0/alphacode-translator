import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
    :host {
        display: block;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    h1 {
        text-align: center;
        margin: 20px 0;
    }

    p {
        text-align: left;
        font-size: 16px;
    }

    .licenses {
        display: flex;
        flex-direction: column;
        align-items: center; /* Center cards horizontally */
        gap: 20px; /* Space between cards */
        margin-top: 20px;
    }

    .license-card {
        width: 80%; /* Make the card 80% of the screen width */
        padding: 16px; /* Padding inside the card */
        border: 2px solid white; /* White border for the card */
        border-radius: 8px; /* Smooth rounded corners */
        background-color: transparent; /* Transparent background */
        color: white; /* White text for contrast */
        display: flex;
        flex-direction: column; /* Stack the content vertically */
        justify-content: space-between; /* Ensure proper spacing for elements */
        text-align: left; /* Make the content left-aligned */
    }

    .license-card strong {
        font-size: 18px; /* Highlight library name */
        margin-bottom: 10px;
    }

    .license-card code {
        font-family: monospace;
        background-color: #333; /* Dark background for inline code blocks */
        padding: 2px 5px;
        border-radius: 3px;
    }

    .license-card a {
        color: #0078d4; /* Blue link color */
        text-decoration: none;
        margin-top: 10px;
    }

    .license-card a:hover {
        text-decoration: underline;
    }
`;