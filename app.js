let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link.custom-link");

setInterval(() => {
    for (let i = 0; i < sections.length; i++) {
        if (inViewport(sections[i])) {
            for (let j = 0; j < navLinks.length; j++) {
                //for each section checks if the link takes to that section
                if ("#" + sections[i].id == navLinks[j].getAttribute("href")) {
                    if (navLinks[j].className.includes("active")) {
                        //if already active, do nothing
                        break;
                    }
                    //otherwise, make that active
                    navLinks[j].className += " active";
                }
                else {
                    // if they don't correspond, it means we're not where the link lands
                    navLinks[j].className = navLinks[j].className.replace("active", "");
                }
            }

        }
    }
}, 1500);

// boolean, returns true if the element is in the viewport
function inViewport(el) {

    let r, html;

    if (!el || 1 !== el.nodeType) {
        return false;
    }

    html = document.documentElement;
    r = el.getBoundingClientRect();

    return (r.bottom >= 0
        && r.right >= 0
        && r.top <= html.clientHeight
        && r.left <= html.clientWidth
    );
}
