const d = document;

const $arrow = d.querySelector('.arrow-icon')
const $openMenu = d.querySelector('.sidebar-open')

let $hiddenArrow;

export default function aside () {
    $arrow.addEventListener("click", e => {
        $openMenu.classList.toggle('sidebar-hidden')
        $arrow.classList.toggle("arrow-hidden")
    
    })
    
    /* $arrow.addEventListener("transitionend", _=> {
        $arrowClasses = $arrow.classList;
    
        $arrowClasses.forEach(n =>{
            if (n === 'arrow-hidden') {
                $hiddenArrow = d.querySelector('.arrow-hidden')
    
            }
        })
    
    })
     */
}



