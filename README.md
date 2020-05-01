<h1>Conquering Responsive Layouts - Challenges</h1>
<p>A set of responsive CSS3 layout challenges and notes from Kevin Powell's online course.</p>

<hr>

<details closed>
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

<details closed>
    <summary><strong>Using Percentages for Width, and Avoiding FIXED Heights</strong></summary>
    <p>Learned that using percentage for width is recommended for responsive layouts. Also, FIXED height should not be used in many cases to avoid overflowing content when displaying the webpage in smaller viewport sizes.</p>
    <ul>
        <li>👨‍💻 <a href="https://github.com/jiparkdev/conquer-responsive-layouts/tree/master/percentages-width">Source Code</a></li>
        <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/percentages-width">Live Demo</a></li>
    </ul>
</details>

<details closed>
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

<details closed>
    <summary><strong>Challenge 3: Free-form - Apply What You Learned</strong></summary>
    <p>We were only given a Figma design and were not provided with any starter code. I applied what I learned from previous challenges to this one to mimic the look & feel of the following design in the screenshot.</p>
    <img src="https://github.com/jiparkdev/conquer-responsive-layouts/blob/master/c3-free-form/figma-design.png" />
    <ul>
        <li>👨‍💻 <a href="https://github.com/jiparkdev/conquer-responsive-layouts/tree/master/c3-free-form">Source Code</a></li>
        <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/c3-free-form">Live Demo</a></li>
    </ul>
</details>

<details closed>
    <summary><strong>Day 6 Extra Curricular Activities</strong></summary>
    <ul>
        <li><a href="https://youtu.be/pautqDqa54I">Why you shouldn't set font-sizes using em</a>: Essentially, do not use <code>em</code> for font-size, instead, use <code>rem</code>.</li>
        <li><a href="https://css-tricks.com/tale-width-max-width">A Tale of `width` and `max-width`</a>: A rule of thumb is to use percentage for <code>width</code> and pixels for <code>max-width</code>.</li>
    </ul>
</details>

<details closed>
    <summary><strong>Day 7 Notes</strong></summary>
    <ul>
        <li>Stick to using classes for the CSS selection, and not inline, IDs, or HTML elements.</li>
    </ul>
</details>

<details closed>
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
            <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/flexbox-challenge-1/index.html">Live Demo</a></li>
        </ul>
    </div>
</details>

<details closed>
    <summary><strong>Day 9 - A Deeper Dive into Flexbox</strong></summary>
    <strong>Notes</strong>
    <ul>
        <li>On all the sites, add a max-width of 100% for all <code>img</code> elements. This is to make the image responsive so that it won't grow larger than its original size but gets smaller when the viewport size gets smaller.</li>
        <li>When using Flexbox to create columns and you want to have an even space between the flex items, you can you <code>justify-content: space-between</code> and then have each column set with their own widths in percentages.</li>
        <li>You can reduce the amount of HTML by relocating the class names to a other HTML elements to have multiple classes for a single element.</li>
    </ul>
    <ul>
        <li>👨‍💻 <a href="day9-flexbox">Source Code</a></li>
        <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/day9-flexbox/index.html">Live Demo</a></li>
    </ul>
</details>

<details closed>
    <summary><strong>Day 11 - Using Flexbox for Navigation</strong></summary>
    <strong>Notes</strong>
    <ul>
        <li>Make sure you are using <code>main</code> HTML element in any webpage for semantic HTML and accessibility.</li>
        <li>Avoid using <code>div</code> on everything. Make sure to have semantic HTML elements whenever possible. Limit the usage of <code>div</code> and try to use it only when necessary.</li>
    </ul>
    <ul>
        <li>👨‍💻 <a href="nav-challenge">Source Code</a></li>
        <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/nav-challenge/index.html">Live Demo</a></li>
    </ul>
</details>

<details open>
    <summary><strong>Day 12 & Day 19 - Flexbox Challenge #4</strong></summary>
    <p>I was given a design doc, but no starter code. Built the webpage from scratch. Later, I have replaced the images with a higher resolution ones.</p>
    <ul>
        <li>Avoid any long stretch of text that goes from one end to the other end. DO NOT have any lines of text that goes all the across the screen (a dead give away that they're not designers). Designers never let lines of text go all the way across. This is why we often have two or more columns of text. Eye does not track the lines properly for long line of text. Make sure you use either the max width and/or multiple columns.</li>
    </ul>
    <ul>
        <li>📃 <a href="flexbox-challenge-4/flexbox-challenge-4.pdf">Design Doc</li>
        <li>👨‍💻 <a href="flexbox-challenge-4">Source Code</a></li>
        <li>🔗 <a href="https://jiparkdev.github.io/conquer-responsive-layouts/flexbox-challenge-4/index.html">Live Demo</a></li>
    </ul>
    <ul>
        <li>Image #1 Attribution: Photo by Sebastien Gabriel on Unsplash</li>
        <li>Image #2 Attribution: Photo by Artem Sapegin on Unsplash</li>
    </ul>
</details>
