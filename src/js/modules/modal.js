function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    
    modal.classList.add('show')
    document.body.style.overflow = 'hidden'
    // console.log(modalTimer);
    // if (modalTimer) {
    //     clearInterval(modalTimer);
    // }
}
 
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.remove('show')
    document.body.style.overflow = 'none'
}
function modal(triggerSelector, modalSelector) {
    const modal = document.querySelector(modalSelector),
          modalBtn = document.querySelectorAll(triggerSelector);

    

    modalBtn.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector)) 
    });
    
    modal.addEventListener('click', (e) => {
        if (modal.classList.contains('show') && e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('show') && e.code === 'Escape') {
            closeModal(modalSelector);
        }
    })
    // function showModalByScroll() {
    //     if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
    //         openModal(modalSelector, modalTimer);
    //         window.removeEventListener('scroll', showModalByScroll);
    //     }
        
    // }
    // window.addEventListener('scroll', showModalByScroll);

}
export default modal
export {closeModal, openModal};