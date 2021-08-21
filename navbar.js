document.write('\
    <nav>\
        <ul class=NavBarList>\
            <li><a id="home" href="index.htm">Home</a></li>\
            <li><a id="about" href="about.html">About Me</a></li>\
            <li><a id="resume" href="resume.html">Resume</a></li>\
            <li><a href="https://github.com/ferguson-cole" target="_blank" rel="noopener noreferrer">Github</a></li>\
        </ul>\
    </nav>\
');

var currentPage = window.location.href.toString();

if (currentPage.includes("about")) {
    document.getElementById('about').className = "active";
} else if (currentPage.includes("resume")) {
    document.getElementById('resume').className = "active";
} else {
    document.getElementById('home').className = "active";
}

// add if contact page needed
// <li><a href="contact.html">Contact</a></li>\
