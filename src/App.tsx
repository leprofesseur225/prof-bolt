import React, { useState } from 'react';
import { 
  Server, 
  Mic, 
  Brain, 
  Volume2, 
  Phone, 
  Code, 
  Globe, 
  CheckCircle,
  ChevronRight,
  Terminal,
  FileText,
  Settings,
  Play,
  Download,
  AlertTriangle
} from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  completed?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, children, completed = false }) => (
  <div className={`border rounded-lg p-6 ${completed ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'} shadow-sm hover:shadow-md transition-shadow`}>
    <div className="flex items-center mb-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        completed ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
      }`}>
        {completed ? <CheckCircle className="w-4 h-4" /> : number}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 ml-3">{title}</h3>
    </div>
    <div className="pl-11">
      {children}
    </div>
  </div>
);

const CodeBlock: React.FC<{ children: string; language?: string }> = ({ children, language = 'bash' }) => (
  <div className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-gray-400 uppercase tracking-wide">{language}</span>
      <button className="text-gray-400 hover:text-white text-xs flex items-center">
        <Download className="w-3 h-3 mr-1" />
        Copier
      </button>
    </div>
    <pre className="text-sm text-green-400 font-mono">
      <code>{children}</code>
    </pre>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; color: string }> = 
  ({ icon, title, description, color }) => (
  <div className={`p-6 rounded-xl ${color} border border-opacity-20 hover:shadow-lg transition-all duration-300`}>
    <div className="flex items-center mb-3">
      <div className="p-2 bg-white bg-opacity-20 rounded-lg mr-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="text-white text-opacity-90 text-sm">{description}</p>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: <Globe className="w-4 h-4" /> },
    { id: 'prerequisites', label: 'Prérequis', icon: <Settings className="w-4 h-4" /> },
    { id: 'structure', label: 'Structure', icon: <FileText className="w-4 h-4" /> },
    { id: 'installation', label: 'Installation', icon: <Terminal className="w-4 h-4" /> },
    { id: 'deployment', label: 'Déploiement', icon: <Play className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="p-2 bg-blue-600 rounded-lg mr-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Assistant Vocal IA</h1>
                <p className="text-sm text-gray-500">Projet Professeur - Guide d'installation</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Production Ready
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center py-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Assistant Vocal IA Multimodal
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Système complet d'assistant vocal intelligent intégrant reconnaissance vocale, 
                traitement NLP avancé, synthèse vocale et gestion d'appels GSM
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => setActiveTab('installation')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center transition-colors"
                >
                  Commencer l'installation
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Server className="w-6 h-6" />}
                title="Serveur Ubuntu"
                description="Infrastructure robuste et sécurisée pour héberger l'assistant vocal"
                color="bg-gradient-to-r from-orange-500 to-red-500"
              />
              <ServiceCard
                icon={<Mic className="w-6 h-6" />}
                title="AssemblyAI (ASR)"
                description="Reconnaissance vocale haute précision avec support multilingue"
                color="bg-gradient-to-r from-purple-500 to-pink-500"
              />
              <ServiceCard
                icon={<Brain className="w-6 h-6" />}
                title="OpenAI GPT (NLP)"
                description="Traitement du langage naturel avancé pour la compréhension contextuelle"
                color="bg-gradient-to-r from-green-500 to-teal-500"
              />
              <ServiceCard
                icon={<Volume2 className="w-6 h-6" />}
                title="ElevenLabs (TTS)"
                description="Synthèse vocale naturelle avec voix personnalisables"
                color="bg-gradient-to-r from-blue-500 to-indigo-500"
              />
              <ServiceCard
                icon={<Phone className="w-6 h-6" />}
                title="Twilio (GSM)"
                description="Gestion d'appels téléphoniques et interactions vocales"
                color="bg-gradient-to-r from-yellow-500 to-orange-500"
              />
              <ServiceCard
                icon={<Code className="w-6 h-6" />}
                title="Flask Backend"
                description="API REST Python pour orchestrer tous les services"
                color="bg-gradient-to-r from-gray-600 to-gray-800"
              />
            </div>

            {/* Architecture Diagram */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Architecture du Système</h3>
              <div className="text-center">
                <div className="inline-block p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                  <Globe className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Interface Web</p>
                </div>
                <div className="my-4">
                  <div className="w-0.5 h-8 bg-gray-300 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="p-4 bg-orange-100 rounded-lg">
                    <Mic className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm font-medium text-orange-800">Reconnaissance Vocale</p>
                  </div>
                  <div className="p-4 bg-green-100 rounded-lg">
                    <Brain className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium text-green-800">Traitement NLP</p>
                  </div>
                  <div className="p-4 bg-blue-100 rounded-lg">
                    <Volume2 className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm font-medium text-blue-800">Synthèse Vocale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'prerequisites' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Prérequis Système</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Server className="w-5 h-5 mr-2 text-blue-600" />
                    Serveur Ubuntu
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Ubuntu 20.04 LTS ou supérieur
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      4 GB RAM minimum (8 GB recommandé)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      20 GB d'espace disque libre
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Connexion Internet stable
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-purple-600" />
                    Comptes de Service
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Compte AssemblyAI (API Key)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Compte OpenAI (API Key)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Compte ElevenLabs (API Key)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Compte Twilio (SID + Auth Token)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                <h3 className="text-lg font-semibold text-amber-800">Important</h3>
              </div>
              <p className="text-amber-700">
                Assurez-vous d'avoir tous les comptes de service configurés avant de commencer l'installation. 
                Les clés API sont nécessaires pour le bon fonctionnement du système.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'structure' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Structure du Projet</h2>
              
              <CodeBlock language="text">
{`professeur/
├── backend/
│   ├── app.py                 # Application Flask principale
│   ├── config.py             # Configuration et variables d'environnement
│   ├── requirements.txt      # Dépendances Python
│   ├── services/
│   │   ├── __init__.py
│   │   ├── asr_service.py    # Service AssemblyAI
│   │   ├── nlp_service.py    # Service OpenAI GPT
│   │   ├── tts_service.py    # Service ElevenLabs
│   │   └── twilio_service.py # Service Twilio
│   ├── models/
│   │   ├── __init__.py
│   │   └── conversation.py   # Modèles de données
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── api.py           # Routes API REST
│   │   └── webhooks.py      # Webhooks Twilio
│   └── utils/
│       ├── __init__.py
│       ├── audio_processor.py
│       └── logger.py
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── audio-recorder.js
│   │   └── api-client.js
│   └── assets/
│       └── icons/
├── config/
│   ├── nginx.conf           # Configuration Nginx
│   ├── systemd/
│   │   └── professeur.service
│   └── .env.example         # Variables d'environnement exemple
├── scripts/
│   ├── install.sh           # Script d'installation
│   ├── start.sh            # Script de démarrage
│   └── backup.sh           # Script de sauvegarde
├── tests/
│   ├── test_services.py
│   ├── test_api.py
│   └── test_integration.py
├── docs/
│   ├── api.md
│   ├── deployment.md
│   └── troubleshooting.md
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── .gitignore
├── README.md
└── requirements.txt`}
              </CodeBlock>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-3">Backend (Python/Flask)</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• API REST pour toutes les interactions</li>
                    <li>• Services modulaires pour chaque API</li>
                    <li>• Gestion des sessions et conversations</li>
                    <li>• Webhooks pour les appels Twilio</li>
                  </ul>
                </div>

                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-3">Frontend (HTML/JS)</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Interface web responsive</li>
                    <li>• Enregistrement audio en temps réel</li>
                    <li>• Chat interface pour les conversations</li>
                    <li>• Monitoring et statistiques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'installation' && (
          <div className="space-y-6">
            <Step number={1} title="Préparation du serveur Ubuntu">
              <p className="text-gray-600 mb-4">
                Mise à jour du système et installation des dépendances de base.
              </p>
              <CodeBlock>
{`# Mise à jour du système
sudo apt update && sudo apt upgrade -y

# Installation des outils essentiels
sudo apt install -y python3 python3-pip python3-venv git curl wget nginx

# Installation de Node.js (pour les outils frontend)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Vérification des installations
python3 --version
pip3 --version
node --version
nginx -version`}
              </CodeBlock>
            </Step>

            <Step number={2} title="Clonage et configuration du projet">
              <p className="text-gray-600 mb-4">
                Téléchargement du code source et configuration de l'environnement.
              </p>
              <CodeBlock>
{`# Création du répertoire de travail
sudo mkdir -p /opt/professeur
sudo chown $USER:$USER /opt/professeur
cd /opt/professeur

# Clonage du projet (remplacez par votre repository)
git clone https://github.com/votre-repo/professeur.git .

# Création de l'environnement virtuel Python
python3 -m venv venv
source venv/bin/activate

# Installation des dépendances Python
pip install -r requirements.txt`}
              </CodeBlock>
            </Step>

            <Step number={3} title="Configuration des variables d'environnement">
              <p className="text-gray-600 mb-4">
                Configuration des clés API et paramètres du système.
              </p>
              <CodeBlock>
{`# Copie du fichier de configuration exemple
cp config/.env.example .env

# Édition du fichier de configuration
nano .env`}
              </CodeBlock>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Contenu du fichier .env :</p>
                <CodeBlock language="bash">
{`# Configuration Flask
FLASK_ENV=production
SECRET_KEY=votre_cle_secrete_tres_longue_et_complexe

# APIs Configuration
ASSEMBLYAI_API_KEY=votre_cle_assemblyai
OPENAI_API_KEY=votre_cle_openai
ELEVENLABS_API_KEY=votre_cle_elevenlabs

# Twilio Configuration
TWILIO_ACCOUNT_SID=votre_twilio_sid
TWILIO_AUTH_TOKEN=votre_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Application Configuration
HOST=0.0.0.0
PORT=5000
DEBUG=False

# Audio Configuration
MAX_AUDIO_DURATION=300
AUDIO_FORMAT=wav
SAMPLE_RATE=16000`}
                </CodeBlock>
              </div>
            </Step>

            <Step number={4} title="Installation des services Python">
              <p className="text-gray-600 mb-4">
                Configuration des services backend et tests de fonctionnement.
              </p>
              <CodeBlock>
{`# Test des services individuellement
cd /opt/professeur

# Test du service AssemblyAI
python3 -c "from backend.services.asr_service import test_connection; test_connection()"

# Test du service OpenAI
python3 -c "from backend.services.nlp_service import test_connection; test_connection()"

# Test du service ElevenLabs
python3 -c "from backend.services.tts_service import test_connection; test_connection()"

# Test du service Twilio
python3 -c "from backend.services.twilio_service import test_connection; test_connection()"

# Lancement de l'application Flask en mode test
python3 backend/app.py`}
              </CodeBlock>
            </Step>

            <Step number={5} title="Configuration de Nginx">
              <p className="text-gray-600 mb-4">
                Configuration du reverse proxy et serveur web.
              </p>
              <CodeBlock>
{`# Copie de la configuration Nginx
sudo cp config/nginx.conf /etc/nginx/sites-available/professeur

# Activation du site
sudo ln -s /etc/nginx/sites-available/professeur /etc/nginx/sites-enabled/

# Suppression du site par défaut
sudo rm /etc/nginx/sites-enabled/default

# Test de la configuration
sudo nginx -t

# Redémarrage de Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx`}
              </CodeBlock>
            </Step>

            <Step number={6} title="Configuration du service systemd">
              <p className="text-gray-600 mb-4">
                Création du service système pour l'auto-démarrage.
              </p>
              <CodeBlock>
{`# Copie du fichier service
sudo cp config/systemd/professeur.service /etc/systemd/system/

# Rechargement des services
sudo systemctl daemon-reload

# Activation du service
sudo systemctl enable professeur.service

# Démarrage du service
sudo systemctl start professeur.service

# Vérification du statut
sudo systemctl status professeur.service`}
              </CodeBlock>
            </Step>
          </div>
        )}

        {activeTab === 'deployment' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tests et Déploiement</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Tests de fonctionnement</h3>
                  <CodeBlock>
{`# Test de l'API REST
curl -X GET http://localhost/api/health

# Test de reconnaissance vocale
curl -X POST http://localhost/api/speech-to-text \\
  -F "audio=@test.wav"

# Test de synthèse vocale
curl -X POST http://localhost/api/text-to-speech \\
  -H "Content-Type: application/json" \\
  -d '{"text":"Bonjour, je suis votre assistant"}'

# Test d'appel Twilio
curl -X POST http://localhost/api/make-call \\
  -H "Content-Type: application/json" \\
  -d '{"phone":"+33123456789"}'`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Monitoring et Logs</h3>
                  <CodeBlock>
{`# Vérification des logs du service
sudo journalctl -u professeur.service -f

# Logs Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Monitoring des ressources
htop
df -h
free -h

# Test des performances
ab -n 100 -c 10 http://localhost/api/health`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Installation Terminée !</h3>
              </div>
              <p className="text-green-700 mb-4">
                Votre assistant vocal IA "Professeur" est maintenant opérationnel. 
                Vous pouvez accéder à l'interface web et tester toutes les fonctionnalités.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="http://localhost" 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Accéder à l'interface
                </a>
                <button className="bg-white hover:bg-gray-50 text-green-600 border border-green-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Documentation API
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Prochaines étapes</h3>
              <ul className="text-blue-700 space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Configurer le SSL/HTTPS avec Let's Encrypt
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Mettre en place la sauvegarde automatique
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Configurer le monitoring avec Prometheus/Grafana
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Personnaliser les voix et les réponses de l'assistant
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p className="mb-2">Assistant Vocal IA - Projet Professeur</p>
            <p className="text-sm">Guide d'installation complet pour un déploiement en production</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;