
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">О нас</h1>
          
          <section className="mb-8">
            <p className="text-gray-700 mb-3 leading-relaxed">
              Мы команда энтузиастов, которая верит в силу простоты и текстового содержания. Наш проект направлен на создание доступных и быстрых текстовых сайтов.
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Мы начали этот проект в 2024 году с целью показать, что иногда самые простые решения являются наиболее эффективными.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Наша миссия</h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Мы стремимся создавать контент, который будет доступен всем пользователям, независимо от их технических возможностей и скорости интернета.
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Наша цель — показать, что текстовый сайт может быть удобным, информативным и эстетически приятным.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Наша команда</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Александр — основатель и главный редактор</li>
              <li>Мария — контент-менеджер</li>
              <li>Дмитрий — веб-разработчик</li>
              <li>Елена — SEO-специалист</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
