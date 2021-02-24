
    const d = document;
    const $menuLink = d.getElementById('link-submenu')
    const $submenu = d.querySelector(".submenu")
    const $nav = d.querySelector(".nav")
    const w = window;
export default function menu () {


    d.addEventListener("mouseover", e => {

        if (e.target == $menuLink || e.target == $submenu) {
        
            $submenu.classList.toggle("visible")
        }
    })
    
    
    $nav.addEventListener("mouseleave", () => {
    
    
        $submenu.classList.remove("visible")
    })

    /* Esto es para dejar el nav sticky despues de pasarlo */

/*     let navHeight = $nav.offsetHeight;

    w.addEventListener("scroll", () => {
        if (w.scrollY >= navHeight) {
            $nav.classList.add('fixed-nav')
        } else {
            $nav.classList.remove('fixed-nav')
        }
    }) */
    
}


