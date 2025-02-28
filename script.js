document.addEventListener("DOMContentLoaded", function () {
    if (window.Telegram?.WebApp) {
        window.Telegram.WebApp.ready(); // Telegram WebApp готов
        window.Telegram.WebApp.expand(); // Разворачиваем WebApp
    } else {
        console.warn("WebApp API недоступен. Запустите в Telegram.");
    }

    // Получаем элемент для вывода Telegram ID
    const telegram_id_HTML = document.getElementById("telegram_id");

    // Получаем данные пользователя
    const userData = window.Telegram.WebApp.initDataUnsafe;
    const telegram_id = userData?.user?.id || "Неизвестный ID";

    // Выводим ID, если элемент существует
    if (telegram_id_HTML) {
        telegram_id_HTML.textContent = `Ваш Telegram ID: ${telegram_id}`;
    } else {
        console.warn("Элемент #telegram_id не найден в HTML.");
    }

    // Переключение вкладок
    const buttons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");

            // Убираем активный класс у всех кнопок
            buttons.forEach(btn => btn.classList.remove("active"));

            // Добавляем активный класс нажатой кнопке
            button.classList.add("active");

            // Скрываем все секции
            sections.forEach(section => section.classList.remove("active"));

            // Показываем нужную секцию
            const targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.classList.add("active");
            } else {
                console.warn(`Секция с ID ${target} не найдена!`);
            }
        });
    });
});
