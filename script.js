    const buttons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".tab-content");
    const telegram_id_HTML = document.getElementById('telegram_id')

    window.Telelgram.WebApp.ready()
    window.Telelgram.WebApp.expand()

    window.Telelgram.WebApp.initDataUnsafe
    const telegram_id = user.user.id

    telegram_id_HTML.textContent = `${telegram_id}`


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
            document.getElementById(target).classList.add("active");
        });
    });

