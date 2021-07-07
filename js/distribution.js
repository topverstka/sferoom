function findFaq(){
    let faqBoxes = document.querySelectorAll('.faq-box')

    for(i = 0; i <= faqBoxes.length-1; i++){
        setupFaq(faqBoxes[i]);
    }
}

function setupFaq(faq){
    faq.addEventListener('click', function(e) {
        e.preventDefault();
        if(this.classList.contains('active')){
            this.classList.remove('active');
        }else{
            let activeElem = this.closest('.faq').querySelector('.faq-box.active');
            if(activeElem){
                activeElem.classList.remove('active');
            }
            this.classList.add('active');
        }
    });
}
findFaq();