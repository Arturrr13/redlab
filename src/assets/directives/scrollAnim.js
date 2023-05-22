export default {
    mounted(){
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    if(change.target.classList.value === 'trigger'){
                        document.querySelector('.image__wrapper').classList.add('element-show')
                        document.querySelector('.order').classList.add('close')
                    }
                    change.target.classList.add('element-show');
                } else {
                    if(change.target.classList.value !== 'card element-show'){
                        change.target.classList.remove('element-show');
                        document.querySelector('.image__wrapper').classList.remove('element-show')
                        document.querySelector('.order').classList.remove('close')
                    }
                }
            });
        }

        let options = {threshold: [0.5]};
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.trigger, .card');
        
        for (let elm of elements) {
            observer.observe(elm);
        }
    }
}