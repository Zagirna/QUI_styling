
let container_main = document.querySelector('.main')
let container_start = document.querySelector('.start')

let start_button = document.querySelector('.start-btn');
let question_field = document.querySelector('.question');
let answer_buttons = document.querySelectorAll('.answer');
let countQuestion = 0;

container_main.style.display = 'none'
container_start.style.display = 'flex'


class Question {
    constructor(question, answer_1, answer_2, correct, answer_4, answer_5) {
        this.question = question;
        this.correct = correct;
        this.answers = [
            answer_1,
            answer_2,
            this.correct,
            answer_4,
            answer_5,
        ];
    }
    
    display() {
        // Для перемішування запитань
        const shuffledAnswers = this.answers.slice().sort(() => Math.random() - 0.5);
        
        // показуємо запитання + відповіді
        question_field.innerHTML = this.question;
        for (let i = 0; i < shuffledAnswers.length; i += 1) {
            answer_buttons[i].innerHTML = shuffledAnswers[i];
            console.log(shuffledAnswers[i]);
        }
    }
}

let spisok_questions = [
    new Question("2+2", "6", "2", "4", "10", "3"),
    new Question("Яка найбільша країна Європи", "Україна", "Італія", "Франція", "Німеччина", "Чехія"),
    new Question("Хто святив Русь", "Княгиння Ольга", "Ярослав Мудрий", "Князь Володимер", "Ігор", "Князь Олег"),
    new Question("який хімічний елемент має атомний номер 1", "хром", "літій", "гідроген", "нітроген", "бор"),
    new Question("який фільм отримав оскар в 2023 році", "джереммі і джеремія", "моя провина", "все завжди і водночас", "хатіко", "черепахи і їм немає кінця"),
    new Question("Яка компанія заснувала перший телефон", "Apple", "Sansung", "Bell Labs", "fly", "lenovo"),
    new Question("Яка планета найбільша в сонячній сестемі", "Земля", "Уран", "Юпітер", "Меркурій", "Венерна"),
    new Question("Яка столиця Франції", "Тур", "Рен", "Париж", "Джон", "Руан"),

]
    
   

let total_answers_given = 0;

let current_question;

start_button.addEventListener('click', function() {
    container_main.style.display = 'flex'
    container_start.style.display = 'none'

    current_question = spisok_questions[total_answers_given];
    current_question.display();

})

for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML == current_question.correct) {
            console.log("Правильно");
            answer_buttons[i].classList.add('right');
            setTimeout(function() {
                answer_buttons[i].classList.remove('right');
            }, 100); // видаляємо клас 
        } else {
            console.log("Неправильно");
            answer_buttons[i].classList.add('wrong');
            setTimeout(function() {
                answer_buttons[i].classList.remove('wrong');
            }, 100); // видаляємо клас 
        }

        total_answers_given += 1;
        if (total_answers_given === spisok_questions.length) {
            // КІНЕЦЬ ГРИ
            document.body.style.backgroundImage = "url('./image/end.jpg')";
            document.body.style.backgroundSize = "cover"; // Изображение будет масштабироваться, чтобы покрыть весь экран
            document.body.style.backgroundPosition = "center"; // Изображение будет центрировано
            container_main.style.display = 'none'; // скрываем основное окно
            container_start.style.display = 'flex'; // возвращаем начальный экран или другое завершение
            // Вы можете также добавить сообщение о завершении игры
            let endMessage = document.createElement('div');
            endMessage.textContent = "Гра завершена! Дякуємо за участь!";
            endMessage.style.fontSize = '24px';
            endMessage.style.textAlign = 'center';
            endMessage.style.color = 'white';
            container_start.innerHTML = ''; // очищаем контейнер от кнопки старта
            container_start.appendChild(endMessage); // добавляем сообщение
        } else {
            current_question = spisok_questions[total_answers_given];
            current_question.display();
        }
        
        current_question = spisok_questions[total_answers_given];
        current_question.display();
    });
}