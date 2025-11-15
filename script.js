// Очікуємо, поки весь HTML-вміст завантажиться
document.addEventListener("DOMContentLoaded", () => {

    // 1. Отримуємо всі необхідні елементи з DOM
    const subscriptionForm = document.getElementById("subscription-form");
    const emailInput = document.getElementById("email-input");
    const errorMessage = document.getElementById("error-message");
    const subscriptionCard = document.getElementById("subscription-card");
    
    const successDialog = document.getElementById("success-dialog");
    const userEmailSpan = document.getElementById("user-email");
    const closeDialogBtn = document.getElementById("close-dialog-btn");

    // 2. Регулярний вираз для валідації email (згідно з умовою)
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // 3. Додаємо слухача події "submit" на форму
    subscriptionForm.addEventListener("submit", (event) => {
        // Запобігаємо стандартній поведінці форми (перезавантаженню сторінки)
        event.preventDefault();

        const email = emailInput.value.trim(); // Отримуємо email і видаляємо зайві пробіли

        // 4. Перевіряємо email за допомогою регулярного виразу
        if (emailRegex.test(email)) {
            // УСПІХ: Email валідний
            
            // Ховаємо повідомлення про помилку (якщо воно було)
            errorMessage.classList.remove("visible");
            emailInput.classList.remove("invalid");

            // Вставляємо email користувача в діалогове вікно
            userEmailSpan.textContent = email;

            // Ховаємо картку підписки
            subscriptionCard.style.display = "none";

            // Показуємо модальне вікно успіху
            successDialog.showModal();

        } else {
            // ПОМИЛКА: Email невалідний
            
            // Показуємо повідомлення про помилку
            errorMessage.classList.add("visible");
            // Додаємо червону рамку інпуту
            emailInput.classList.add("invalid");
        }
    });

    // 5. Додаємо слухача на кнопку закриття діалогового вікна
    closeDialogBtn.addEventListener("click", () => {
        // Закриваємо діалогове вікно
        successDialog.close();

        // Повертаємо картку підписки
        subscriptionCard.style.display = "block";
        
        // Очищуємо поле вводу
        emailInput.value = "";
    });

});