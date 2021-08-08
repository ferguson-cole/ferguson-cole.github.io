$(document).ready(setActivePage);

document.write('\
    <nav class="navbar">\
        <ul>\
            <li><a class="active" href="index.html">Home</a></li>\
            <li><a href="about.html">About Me</a></li>\
            <li><a href="resume.htm">Resume</a></li>\
            <li><a href="https://github.com/ferguson-cole" target="_blank" rel="noopener noreferrer">Github</a></li>\
        </ul>\
    </nav>\
');

function setActivePage() {
    $('.navbar li a').click(function(e) {
        $('.navbar li.active').removeClass('active');

        $(this).parent().addClass('active');
        e.preventDefault();
    });
}
// add if contact page needed
// <li><a href="contact.html">Contact</a></li>\
