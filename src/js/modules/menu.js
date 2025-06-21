export function changeMenu(hamburger ,parent, close, active) {
    const show = document.querySelector(hamburger),
        hide = document.querySelector(close),
        menu = document.querySelector(parent)
    
    show.addEventListener('click', () => {
        menu.classList.add(active);
    }); 

    hide.addEventListener('click', () => {
        menu.classList.remove(active);
    });


}