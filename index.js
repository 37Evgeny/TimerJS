// Получение элементов на странице.
const timer__hours = document.querySelector('.timer__hours');
const timer__minutes = document.querySelector('.timer__minutes');
const timer__seconds = document.querySelector('.timer__seconds');
// получаем нажатую кнопку
let timer__value = document.querySelectorAll('.timer__value').forEach(b => b.addEventListener('click', getValue));

// объявляем переменную в последующем из нее будем вычитать текущее время
let deadline = 0;

// объявляем функцию которая будет присваивать значение на сколько установить таймер
function getValue(e) {

    //используем библиотеку Date 
    deadline = new Date();

    //получаем значение нажатой кнопки
    timer__value = this.value;

    //к текущему времени прибавляем на сколько установить таймер
    deadline.setMinutes(deadline.getMinutes() + parseInt(timer__value));
    console.log(deadline + ' get')

    //функция работы таймера
    const updateTimer = () => {

        const now = new Date();

        // Вычисление оставшегося времени. Разница между текущей датой и конечной датой рассчитывается в миллисекундах
        const diff = Math.max(0, deadline - now);

        // Если время уже прошло, разница будет равна нулю. Далее рассчитывается количество оставшихся дней, часов, минут и секунд с использованием математических операций
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // Обновление значений на странице. Чтобы обновить содержимое элементов на странице, используем свойство textContent. Чтобы числа всегда имели два знака (например, 01, 02 вместо 1, 2)
        timer__hours.textContent = String(hours).padStart(2, '0');
        timer__minutes.textContent = String(minutes).padStart(2, '0');
        timer__seconds.textContent = String(seconds).padStart(2, '0');

        //Когда время истечет (разница времени становится равной 0), таймер останавливается
        if (diff === 0) {
            clearInterval(timerId);
        }
    }

    // Для автоматического обновления каждую секунду
    const timerId = setInterval(updateTimer, 1000);
    
    const startTimer = () => {
        updateTimer();
        const timerId = setInterval(updateTimer, 1000);
    }
}













