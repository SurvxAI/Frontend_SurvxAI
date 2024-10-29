import { Bot } from "lucide-react";
import { ArrowRight, Shield, Clock, Bell, CheckCircle } from "lucide-react";

const SurvLanding = () => {
  const features = [
    {
      title: "Litiges de crédit simplifiés",
      description: "Déposez et gérez facilement vos litiges de crédit.",
      icon: Shield,
    },
    {
      title: "Traitement rapide des remboursements",
      description: "Laissez notre IA gérer vos processus de remboursement.",
      icon: Clock,
    },
    {
      title: "Gestion des contraventions",
      description:
        "Ne vous inquiétez plus des contraventions, nous nous en chargeons.",
      icon: CheckCircle,
    },
  ];

  const testimonials = [
    {
      text: "SURV m'a fait gagner des heures en gérant mes contraventions.",
      author: "Marie D.",
    },
    {
      text: "Déposer un litige de crédit n'a jamais été aussi simple !",
      author: "Thomas L.",
    },
    {
      text: "J'adore comment la plateforme renouvelle automatiquement mon permis de conduire.",
      author: "Sophie M.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Révolutionner vos tâches quotidiennes grâce à l'IA
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              SURV simplifie votre vie en automatisant les litiges de crédit, la
              gestion des contraventions, le renouvellement de licences, et bien
              plus.
            </p>
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg 
                             font-semibold text-lg transition-all flex items-center mx-auto"
            >
              Commencez dès aujourd'hui
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Automatisation intelligente des tâches quotidiennes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Comment fonctionne SURV ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inscrivez-vous</h3>
              <p className="text-gray-600">
                Personnalisez vos préférences et choisissez vos services
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                L'IA travaille pour vous
              </h3>
              <p className="text-gray-600">
                Notre système gère automatiquement vos tâches
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Suivez l'avancement
              </h3>
              <p className="text-gray-600">
                Recevez des mises à jour en temps réel
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Ce que disent nos utilisateurs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow border border-gray-100"
            >
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Prêt à simplifier votre vie ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Commencez votre parcours avec SURV dès aujourd'hui et profitez d'une
            vie sans tracas.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
            Rejoignez-nous maintenant
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">SURV</h3>
              <p className="text-sm">Simplifiez votre vie grâce à l'IA</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Légal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Conditions d'utilisation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-gray-800 rounded-l px-4 py-2 w-full text-white"
                />
                <button className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SurvLanding;
