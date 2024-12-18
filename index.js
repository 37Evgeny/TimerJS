
const timer__hours = document.querySelector('.timer__hours');
const timer__minutes = document.querySelector('.timer__minutes');
const timer__seconds = document.querySelector('.timer__seconds');
const timer__value = document.querySelector('.timer__value');
console.log(timer__value.value)

const deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + parseInt(timer__value.value))

    const updateTimer = () => {
       
        const now = new Date();
        const diff = Math.max(0, deadline - now);

        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        timer__hours.textContent = String(hours).padStart(2, '0');
        timer__minutes.textContent = String(minutes).padStart(2, '0');
        timer__seconds.textContent = String(seconds).padStart(2, '0');

    if (diff === 0) {
        clearInterval(timerId);
      }
    
    }

    const startTimer = () => {
        updateTimer();
        const timerId = setInterval(updateTimer, 1000);
    }

    
    






     
     
