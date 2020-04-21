<h1>Conquering Responsive Layouts - Challenges</h1>
<p>A set of responsive CSS3 layout challenges and notes from Kevin Powell's online course.</p>

<hr>

<details open>
    <summary><strong>Notes on <code>rem</code> & <code>em</code></strong></summary>
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

<details open>
    <summary><strong>Using Percentages for Width, and Avoiding Heights</strong></summary>
    <p>Learned that using percentage for width is recommended for responsive layouts. Also, height should not be used in many cases to avoid overflowing content when displaying the webpage in smaller viewport sizes.</p>
    <ul>
        <li>👨‍💻 <a href="https://github.com/jiparkdev/conquer-responsive-layouts/tree/master/percentages-width">Source Code</a></li>
        <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/percentages-width">Live Demo</a></li>
    </ul>
</details>

<details open>
    <summary><strong>Using Max-Width and Width Properties</strong></summary>
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

<details open>
    <summary><strong>Challenge 3: Free-form - Apply What You Learned</strong></summary>
    <p>We were only given a Figma design and were not provided with any starter code. I applied what I learned from previous challenges to this one to mimic the look & feel of the following design in the screenshot.</p>
    <img src="https://github.com/jiparkdev/conquer-responsive-layouts/blob/master/c3-free-form/figma-design.png" />
    <ul>
        <li>👨‍💻 <a href="https://github.com/jiparkdev/conquer-responsive-layouts/tree/master/c3-free-form">Source Code</a></li>
        <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/c3-free-form">Live Demo</a></li>
    </ul>
</details>

<details open>
    <summary><strong>Day 6 Extra Curricular Activities</strong></summary>
    <ul>
        <li><a href="https://youtu.be/pautqDqa54I">Why you shouldn't set font-sizes using em</a>: Essentially, do not use <code>em</code> for font-size, instead, use <code>rem</code>.</li>
        <li><a href="https://css-tricks.com/tale-width-max-width">A Tale of `width` and `max-width`</a>: A rule of thumb is to use percentage for <code>width</code> and pixels for <code>max-width</code>.</li>
    </ul>
</details>

<details open>
    <summary><strong>Day 7 Notes</strong></summary>
    <ul>
        <li>Stick to using classes for the CSS selection, and not inline, IDs, or HTML elements.</li>
    </ul>
</details>

<details open>
    <summary><strong>Flexbox</strong></summary>
    <strong>Notes</strong>
    <ul>
        <li>
            By default, Flexbox wants to be as smallest it possible can be. It is the content that forces and stretches the Flexbox items and not that Flexbox wants to expand to accommodate them. Flexbox is only squeezing as much as it can.
        </li>
        <li>
            If you have multiple columns (flex items) for a flex container, and if you want the items to have an equal distribution of their widths, then give each of the items a width of 100%.
        </li>
        <li>By default, the flex items want to become columns inside flex container. Only the direct children of the flex container become flex items.</li>
    </ul>
    <div>
        <strong>Challenge</strong>
        <p>
        The challenge this week is to mimic the look & feel of the [design specification](flexbox-challenge-1/design-specs.pdf).
        </p>
        <ul>
            <li>👨‍💻 <a href="flexbox-challenge-1">Source Code</a></li>
            <li>🔗 <a href="flexbox-challenge-1/index.html">Live Demo</a></li>
        </ul>
    </div>
</details>
