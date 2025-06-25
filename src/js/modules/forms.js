import {openModal, closeModal} from "./modal.js";
import {postData} from "../services/services.js";

function forms(formSelector) {
     // Forms
     const forms = document.querySelectorAll(formSelector);
     const message = {
         loading: 'img/form/spinnerp.svg',
         success: 'Спасибо! Скоро мы с вами свяжемся',
         failure: 'Что то пошло не так'
     };
 
 
     forms.forEach(item => {
         bindPostData(item);
     });
     
     
     function bindPostData(form) {
         form.addEventListener('submit', (e) => {
             e.preventDefault();
            
             const statusMessage = document.createElement('img');
             statusMessage.src = message.loading;
             statusMessage.style.cssText = `
                 position: absolute;
                 right: 0;
                 bottom: 0;
                 width: 50px;
                 heigth: 50px;
                 display: block;
                 margin: 0 auto;
             `;
             form.insertAdjacentElement('beforeend', statusMessage)
 
     
             const formData = new FormData(form);
             const json = JSON.stringify(Object.fromEntries(formData.entries()))
             // axios.post('http://localhost:3000/requests', json)
             postData('http://localhost:3000/requests', json)
             .then(data => {
                     console.log(data)
                     showThanksModal(message.success);
             })
             .catch(()=> {
                 showThanksModal(message.failure);
             })
             .finally(() => {
                 form.reset();
                 statusMessage.remove()

             })
         })
     }
     
     function showThanksModal(message) {
         const prevModalDialog = document.querySelector('.modal__dialog');
        
         prevModalDialog.classList.remove('show');
         prevModalDialog.classList.add('hide');

         openModal('.modal');
        
         const thanksModal = document.createElement('div');
         thanksModal.classList.add('modal__dialog');
         thanksModal.innerHTML = 
         `
         <div class="modal__content"> 
             <div class="modal__close" data-close >×</div>
             <div class="modal__title">${message}</div>
         </div>
         `
        
         document.querySelector('.modal').append(thanksModal);
         setTimeout(() => {
             thanksModal.remove();
             prevModalDialog.classList.remove('show');
             prevModalDialog.classList.remove('hide');
             closeModal('.modal');
             
         }, 4000)
     }
}

export default forms;