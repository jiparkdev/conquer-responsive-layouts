<h1>Conquering Responsive Layouts - Challenges</h1>
<p>A set of responsive CSS3 layout challenges and notes from Kevin Powell's online course.</p>

<hr>

<details>
    <summary><b>Notes on <code>rem</code> & <code>em</code></b></summary>
    <blockquote>YouTube Video: <a href="https://www.youtube.com/watch?v=_-aDOAMmDHI">CSS em and rem explained</a></blockquote>
    <ul>
        <li>Try to stick with using either em or rem throughout the site.</li>
        <li>Use em for adaptibility and rem for consistency.</li>
        <li>Padding might need to adapt sometimes, for buttons, so use em for button paddings.</li>
        <li>Margins might need consistency sometimes, between blocks/buttons/elements, so use rem in such cases.</li>
        <li>em for padding and margin takes the font-size of the element for which em is being applied.</li>
        <li>rem for padding and margin takes the font-size of the root element no matter what.</li>
        <li>em font-size takes on the font-size of the parent element, and it compounds.</li>
    </ul>
</details>

<details>
    <summary><strong>Using Percentages for Width, and Avoiding Heights</strong></summary>
    <p>Learned that using percentage for width is recommended for responsive layouts. Also, height should not be used in many cases to avoid overflowing content when displaying the webpage in smaller viewport sizes.</p>
    <ul>
        <li>👨‍💻 <a href="https://github.com/jiparkdev/conquer-responsive-layouts/tree/master/percentages-width">Source Code</a></li>
        <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/percentages-width">Live Demo</a></li>
    </ul>
</details>

<details>
    <summary><b>Using Max-Width and Width Properties</b></summary>
    <p>Learned that max-width property could help us in avoiding the issue of content stretching out too much on larger viewport sizes. So, the recommendation is to have both widths as a percentage and max-width as a fixed value.</p>
    <ul>
        <li>👨‍💻 <a href="https://github.com/jiparkdev/conquer-responsive-layouts/tree/master/percentages-width">Source Code</a></li>
        <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/max-width">Live Demo</a></li>
    </ul>
    <strong>Notes</strong>
    <ul>
        <li>Always remember to set width to a percentage and max-width to pixels.</li>
    </ul>
</details>
