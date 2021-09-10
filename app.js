
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link.custom-link");

setInterval(() => {

    for (let i = 0; i < sections.length; i++) {
        for (let j = 0; j < navLinks.length; j++) {


            if (inViewport(sections[i]) && ("#" + sections[i].id == navLinks[j].getAttribute("href"))) {
                console.log("#" + sections[i].id);
                console.log(navLinks[j].getAttribute("href"));
                console.log(("#" + sections[i].id == navLinks[j].getAttribute("href")));
                navLinks[j].className += " active";
            }
            else {
                navLinks[j].className.replace("active", "");
            }
        }
    }

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
}, 1500);