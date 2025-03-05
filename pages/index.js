import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Oulix - Homepage</title>
        {/* Tailwind CSS is nu lokaal ingesteld via postcss, dus je hoeft geen CDN te laden */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <div className="relative w-full h-full font-sans text-white bg-gray-900 overflow-x-hidden">
        {/* Achtergrond gradient */}
        <div className="fixed inset-0 -z-20 animate-gradient bg-gradient-to-r from-purple-600 via-blue-500 to-green-400"></div>
        {/* Global overlay */}
        <div className="fixed inset-0 -z-10 bg-black/30"></div>

        {/* Header */}
        <header className="relative">
          <nav className="flex justify-between items-center p-4 md:px-8 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="font-bold text-2xl text-yellow-400 drop-shadow-lg">
              Oulix
            </div>
            <ul
              className={`md:flex gap-6 text-lg ${
                navOpen ? "block" : "hidden"
              } md:block`}
            >
              <li>
                <a href="#home" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-yellow-400 transition"
                >
                  Diensten
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400 transition">
                  Over Ons
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>
            </ul>
            {/* Burger-menu voor mobiel */}
            <div
              className="md:hidden flex flex-col cursor-pointer"
              onClick={toggleNav}
            >
              <span className="w-6 h-1 bg-white my-1"></span>
              <span className="w-6 h-1 bg-white my-1"></span>
              <span className="w-6 h-1 bg-white my-1"></span>
            </div>
          </nav>

          {/* Hero Section */}
          <section
            id="home"
            className="relative h-screen flex items-center justify-center text-center px-4"
          >
            <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-2xl">
              <h1 className="font-bold text-5xl md:text-6xl mb-4 animate-fadeIn">
                Welkom op mijn LAN Webserver
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-200">
                Beheer je bestanden, verbind veilig en geniet van krachtige
                tools in een professionele omgeving.
              </p>
              <a
                href="#download"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg inline-flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 animate-fadeIn delay-400"
              >
                <i className="fas fa-cloud"></i> Nextcloud
              </a>
            </div>
          </section>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Diensten Section */}
          <section id="services" className="py-16 px-4 text-center">
            <h2 className="font-bold text-3xl mb-4 inline-block relative">
              Onze Diensten
              <div className="mt-2 h-1 w-24 bg-yellow-400 mx-auto rounded"></div>
            </h2>
            <p className="mb-8 text-lg max-w-xl mx-auto">
              Ontdek de kracht van onze oplossingen, ontworpen om jouw workflow
              te optimaliseren.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nextcloud Card */}
              <div className="bg-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md transform transition hover:scale-105 animate-fadeIn">
                <h3 className="font-bold text-2xl text-yellow-400 mb-3">
                  Nextcloud
                </h3>
                <p className="mb-4">
                  Een persoonlijke cloudoplossing voor veilig opslaan,
                  synchroniseren en delen van bestanden. Complete controle en
                  privacy gegarandeerd.
                </p>
                <ul className="space-y-2 text-left text-sm">
                  <li>
                    <i className="fas fa-sync-alt text-orange-500 mr-2"></i>{" "}
                    Bestanden Synchroniseren
                  </li>
                  <li>
                    <i className="fas fa-share-alt text-orange-500 mr-2"></i>{" "}
                    Eenvoudig Delen
                  </li>
                  <li>
                    <i className="fas fa-lock text-orange-500 mr-2"></i>{" "}
                    Beveiligde Toegang
                  </li>
                  <li>
                    <i className="fas fa-users text-orange-500 mr-2"></i>{" "}
                    Samenwerkingstools
                  </li>
                </ul>
              </div>
              {/* OpenVPN Card */}
              <div className="bg-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md transform transition hover:scale-105 animate-fadeIn delay-200">
                <h3 className="font-bold text-2xl text-yellow-400 mb-3">
                  OpenVPN <span className="text-xs">(Binnenkort)</span>
                </h3>
                <p className="mb-4">
                  Veilige en betrouwbare VPN-verbinding voor een beschermde
                  online ervaring. Altijd en overal veilig verbonden.
                </p>
                <ul className="space-y-2 text-left text-sm">
                  <li>
                    <i className="fas fa-shield-alt text-orange-500 mr-2"></i>{" "}
                    Veilige Verbinding
                  </li>
                  <li>
                    <i className="fas fa-globe text-orange-500 mr-2"></i>{" "}
                    Toegang van Overal
                  </li>
                  <li>
                    <i className="fas fa-key text-orange-500 mr-2"></i> Sterke
                    Encryptie
                  </li>
                  <li>
                    <i className="fas fa-user-shield text-orange-500 mr-2"></i>{" "}
                    Privacy Bescherming
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Over Ons Section */}
          <section
            id="about"
            className="py-16 px-4 bg-gray-800 bg-opacity-50 backdrop-blur-md text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="font-bold text-3xl mb-4">Over Ons</h2>
              <p className="text-lg mb-8">
                Deze website is opgezet voor mijn privéserver thuis – een
                persoonlijke en veilige omgeving waarin ik experimenteer met
                technologie en design. Hier staat controle, privacy en
                functionaliteit voorop, zodat alles naadloos samenkomt.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-4">
                  <i className="fas fa-rocket text-4xl text-yellow-400 mb-4"></i>
                  <h3 className="font-bold text-xl mb-2">Innovatief</h3>
                  <p className="text-sm">
                    Ik experimenteer constant met nieuwe ideeën en technologieën
                    om de serverervaring te verbeteren.
                  </p>
                </div>
                <div className="p-4">
                  <i className="fas fa-shield-alt text-4xl text-yellow-400 mb-4"></i>
                  <h3 className="font-bold text-xl mb-2">Betrouwbaar</h3>
                  <p className="text-sm">
                    Met focus op veiligheid en privacy zorgt mijn privéserver
                    voor een stabiele en beschermde omgeving.
                  </p>
                </div>
                <div className="p-4">
                  <i className="fas fa-users text-4xl text-yellow-400 mb-4"></i>
                  <h3 className="font-bold text-xl mb-2">Persoonlijk</h3>
                  <p className="text-sm">
                    Deze server is niet zomaar een project – het is mijn eigen
                    domein waar ik de touwtjes in handen heb.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Snelle Toegang Section */}
          <section id="download" className="py-16 px-4 text-center">
            <h2 className="font-bold text-3xl mb-4 inline-block relative">
              Snelle Toegang
              <div className="mt-2 h-1 w-24 bg-yellow-400 mx-auto rounded"></div>
            </h2>
            <p className="mb-8 text-lg max-w-xl mx-auto">
              Direct toegang tot Nextcloud voor al je bestanden en meer.
            </p>
            <a
              href="https://cloud-ouladserver.duckdns.org/"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold shadow-xl inline-flex items-center gap-3 transition-transform duration-300 hover:-translate-y-1 animate-fadeIn"
            >
              <i className="fas fa-cloud"></i> Nextcloud
            </a>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-16 px-4 text-center bg-gray-800 bg-opacity-50 backdrop-blur-md"
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="font-bold text-3xl mb-4">Contact</h2>
              <p className="mb-8 text-lg">
                Heb je vragen of wil je meer weten? Neem contact met ons op!
              </p>
              <form
                action="/api/submit"
                method="post"
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData.entries());
                  const res = await fetch("/api/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  const result = await res.json();
                  alert(result.message);
                  e.target.reset();
                }}
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Naam"
                    required
                    className="w-full p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    className="w-full p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Bericht"
                    required
                    className="w-full p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold shadow-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  Verstuur
                </button>
              </form>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 bg-black">
          <p className="mb-2">&copy; 2025 Oulix. Alle rechten voorbehouden.</p>
        </footer>
      </div>

      {/* Voeg hier eventueel globale scripts of extra styling toe */}
      <style jsx global>{`
        /* Gradient Animation */
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradientAnimation 15s ease infinite;
          background-size: 300% 300%;
        }
        /* Fade in Animation */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </>
  );
}
