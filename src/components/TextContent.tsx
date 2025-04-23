
export const TextContent = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Добро пожаловать на текстовый сайт</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">О проекте</h2>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Этот сайт создан специально для демонстрации текстового контента. Здесь нет лишних изображений и сложных элементов дизайна, только текст и минималистичная структура.
        </p>
        <p className="text-gray-700 mb-3 leading-relaxed">
          Использование текстового сайта имеет множество преимуществ: быстрая загрузка, доступность для пользователей с медленным интернет-соединением, удобство для людей с нарушениями зрения, использующих программы экранного доступа.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Принципы текстового дизайна</h2>
        <p className="text-gray-700 mb-3 leading-relaxed">
          1. <strong>Ясность</strong> — информация должна быть представлена понятным и доступным образом.
        </p>
        <p className="text-gray-700 mb-3 leading-relaxed">
          2. <strong>Структурированность</strong> — логическая организация контента помогает пользователям быстро найти нужную информацию.
        </p>
        <p className="text-gray-700 mb-3 leading-relaxed">
          3. <strong>Читабельность</strong> — правильно подобранные шрифты, размеры и отступы улучшают восприятие текста.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Наши услуги</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Создание текстового контента</li>
          <li>Редактирование и корректура</li>
          <li>SEO-оптимизация текстов</li>
          <li>Консультации по структурированию информации</li>
          <li>Разработка минималистичных текстовых сайтов</li>
        </ul>
      </section>
    </div>
  );
};
