export function changeMenu(hamburger ,parent, over, active) {
    const show = document.querySelector(hamburger),
        menu = document.querySelector(parent),
        overlay = document.querySelector(over)
    
    show.addEventListener('click', () => {
        menu.classList.add(active);
    }); 
    menu.addEventListener('click', (e) => {
        
            if (menu.classList.contains('active') && e.target == overlay || e.target.parentElement.getAttribute('data-close') == '' || e.target.parentElement.parentElement.getAttribute('data-close') == '' ) {
                menu.classList.remove(active);
            }
        });
        document.addEventListener('keydown', (e) => {
            if (menu.classList.contains('active') && e.code === 'Escape') {
                menu.classList.remove(active);
            }
        })


}