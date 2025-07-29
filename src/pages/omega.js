import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function OmegaModePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const themeClasses = {
    background: darkMode 
      ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
      : 'bg-gradient-to-br from-gray-50 via-green-50 to-gray-100',
    text: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-white/70' : 'text-gray-600',
    textTertiary: darkMode ? 'text-white/60' : 'text-gray-500',
    card: darkMode 
      ? 'bg-white/5 backdrop-blur-xl border-white/10' 
      : 'bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-xl',
    nav: darkMode 
      ? 'bg-black/80 backdrop-blur-xl border-white/10' 
      : 'bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg',
    button: darkMode
      ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
      : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
    buttonSecondary: darkMode
      ? 'bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10'
      : 'bg-gray-100/80 backdrop-blur-xl border-gray-300/50 hover:bg-gray-200/80',
    accent: darkMode ? 'text-green-400' : 'text-green-600',
    gradientText: darkMode 
      ? 'bg-gradient-to-r from-white to-green-400' 
      : 'bg-gradient-to-r from-gray-900 to-green-600'
  };

  return (
    <>
      <Head>
        <title>Omega drone – Premium Drone Experience</title>
        <meta
          name="description"
          content="Discover the Omega Core Drone – Advanced aerial technology with moderate capabilities, reliable control, and professional performance for versatile operations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          transition: all 0.3s ease;
          overflow-x: hidden;
        }

        .gradient-text {
          background: ${darkMode 
            ? 'linear-gradient(135deg, #ffffff 0%, #4ade80 100%)' 
            : 'linear-gradient(135deg, #1f2937 0%, #059669 100%)'
          };
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glassmorphism {
          backdrop-filter: blur(20px);
          border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
          transition: all 0.3s ease;
        }

        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hover-glow:hover {
          box-shadow: 0 20px 40px ${darkMode 
            ? 'rgba(74, 222, 128, 0.3)' 
            : 'rgba(5, 150, 105, 0.3)'
          };
          transform: translateY(-5px);
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${darkMode 
            ? 'linear-gradient(45deg, rgba(74, 222, 128, 0.1), rgba(5, 150, 105, 0.1))' 
            : 'linear-gradient(45deg, rgba(5, 150, 105, 0.1), rgba(16, 185, 129, 0.1))'
          };
          border-radius: 1.5rem;
        }

        .theme-toggle {
          position: relative;
          width: 60px;
          height: 30px;
          background: ${darkMode ? '#1f2937' : '#e5e7eb'};
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .theme-toggle::before {
          content: '';
          position: absolute;
          top: 3px;
          left: ${darkMode ? '33px' : '3px'};
          width: 24px;
          height: 24px;
          background: ${darkMode ? '#fbbf24' : '#ffffff'};
          border-radius: 50%;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <div className={`min-h-screen transition-all duration-300 ${themeClasses.background}`}>
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 glassmorphism ${themeClasses.nav}`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
  {/* Company Logo Image */}
  <div className={`w-12 h-12 relative rounded-full overflow-hidden glassmorphism ${themeClasses.card}`}>
    <Image
      src="/logo.png" // make sure this file exists in /public
      alt="SK Naturalfarm Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
  <div className={`text-2xl font-black gradient-text`}>
    SK Naturalfarm
  </div>
</div>
              <div className="flex items-center space-x-8">
                <div className="hidden md:flex space-x-8">
                  <Link href="/" className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors font-medium`}>Home</Link>
                  <a href="#overview" className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors`}>Overview</a>
                  <a href="#video" className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors`}>Demo</a>
                  <a href="#features" className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors`}>Features</a>
                  <a href="#pricing" className={`${themeClasses.textSecondary} hover:${themeClasses.accent} transition-colors`}>Pricing</a>
                </div>
                
                {/* Theme Toggle */}
                <div className="flex items-center space-x-3">
                  <span className={`text-sm ${themeClasses.textSecondary}`}>
                    {darkMode ? '🌙' : '☀️'}
                  </span>
                  <div className="theme-toggle" onClick={toggleTheme}></div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="overview" className="pt-24 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className={`absolute top-20 left-10 w-2 h-2 ${darkMode ? 'bg-green-400' : 'bg-green-500'} rounded-full floating-animation`}></div>
            <div className={`absolute top-40 right-20 w-1 h-1 ${darkMode ? 'bg-green-400' : 'bg-green-500'} rounded-full floating-animation`} style={{animationDelay: '2s'}}></div>
            <div className={`absolute bottom-40 left-1/4 w-1.5 h-1.5 ${darkMode ? 'bg-green-400' : 'bg-green-500'} rounded-full floating-animation`} style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
                <h1 className={`text-6xl md:text-7xl font-black mb-4 gradient-text leading-tight`}>
                  Omega Core
                </h1>
                <p className={`text-xl ${themeClasses.textSecondary} mb-2`}>For Moderate Operations</p>
                <p className={`text-lg ${themeClasses.textTertiary} mb-8 leading-relaxed`}>
                  Experience reliable aerial technology with balanced performance, 
                  steady control, and versatile capabilities designed for efficient 
                  operations across various applications.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
  <Link href="https://x.com/Adil15433744?t=snvaXN5aoYEP-gsbl1t37g&s=09">
    <button className={`${themeClasses.button} px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105 hover:shadow-2xl`}>
      Get Started →
    </button>
  </Link>

  <Link href="https://www.youtube.com/@sknaturalfarm/featured">
    <button className={`glassmorphism ${themeClasses.buttonSecondary} ${themeClasses.text} px-8 py-4 rounded-full font-semibold hover-glow transition-all`}>
      Watch Demo
    </button>
  </Link>
</div>
              </div>

              <div className={`fade-in ${isVisible ? 'visible' : ''} relative`} style={{animationDelay: '0.3s'}}>
                <div className={`relative h-96 glassmorphism ${themeClasses.card} rounded-3xl overflow-hidden hover-glow transition-all duration-500`}>
                  <Image
                    src="/commercial-drones-hse-uav.png"
                    alt="Omega Core Drone - Reliable Performance"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                  <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-black/70 to-transparent' : 'bg-gradient-to-t from-gray-900/30 to-transparent'}`}></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>Balanced Design</h3>
                    <p className={themeClasses.textSecondary}>Built for reliable and efficient operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section id="video" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl font-black gradient-text mb-4`}>
                See Omega in Action
              </h2>
              <p className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
                Watch how Omega Core delivers reliable aerial operations with steady control
                and versatile capabilities
              </p>
            </div>

            <div className={`relative glassmorphism ${themeClasses.card} rounded-3xl overflow-hidden hover-glow transition-all duration-500`}>
              <div className="aspect-video relative">
                <video
                  className="w-full h-full object-cover"
                  poster="/omega2.jpg"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/drone5.mp4" type="video/mp4" />
                  <p className={`${themeClasses.text} p-8`}>
                    Your browser doesn&apos;t support video playback. 
                    <a href="/videos/drone5.mp4" className={`${themeClasses.accent} underline`}>
                      Download the video
                    </a>
                  </p>
                </video>
                <div className="video-overlay pointer-events-none"></div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className={`text-3xl font-black ${themeClasses.accent} mb-2`}>35min</div>
                    <p className={themeClasses.textSecondary}>Flight Duration</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-black ${themeClasses.accent} mb-2`}>15kg</div>
                    <p className={themeClasses.textSecondary}>Max Payload</p>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-black ${themeClasses.accent} mb-2`}>600m</div>
                    <p className={themeClasses.textSecondary}>Control Range</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl font-black gradient-text mb-4`}>
                Reliable Capabilities
              </h2>
              <p className={`text-xl ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
                Every feature engineered for consistent performance and operational versatility
              </p>
            </div>

            {/* Tab Navigation */}
            <div className={`flex flex-wrap justify-center mb-12 glassmorphism ${themeClasses.card} rounded-full p-2 max-w-2xl mx-auto`}>
              {['features', 'specs', 'applications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeTab === tab
                      ? `${themeClasses.button} text-white`
                      : `${themeClasses.textSecondary} hover:${themeClasses.text}`
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-96">
              {activeTab === 'features' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: '🎮',
                      title: 'Digital Access Control',
                      description: 'Secure digital interface with reliable flight control systems for consistent operations'
                    },
                    {
                      icon: '⏱️',
                      title: '35 Min Flight',
                      description: 'Extended battery performance optimized for moderate to long-duration missions'
                    },
                    {
                      icon: '💪',
                      title: '15kg Payload',
                      description: 'Enhanced lifting capacity suitable for various equipment and operational requirements'
                    },
                    {
                      icon: '📡',
                      title: '600m Range',
                      description: 'Extended operational range with stable communication and reliable data transmission'
                    }
                  ].map((feature, index) => (
                    <div key={index} className={`glassmorphism ${themeClasses.card} rounded-2xl p-6 hover-glow transition-all`}>
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className={`text-xl font-bold ${themeClasses.accent} mb-3`}>{feature.title}</h3>
                      <p className={`${themeClasses.textSecondary} leading-relaxed`}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'specs' && (
                <div className={`glassmorphism ${themeClasses.card} rounded-2xl p-8`}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className={`text-2xl font-bold ${themeClasses.accent} mb-6`}>Technical Specifications</h3>
                      <div className="space-y-4">
                        {[
                          ['Flight Time', '35 minutes'],
                          ['Maximum Range', '500-600 meters'],
                          ['Payload Capacity', 'Up to 15kg'],
                          ['Control Type', 'Digital Access Control'],
                          ['Build Quality', 'Reliable Grade'],
                          ['Warranty', '2 Year Coverage']
                        ].map(([label, value]) => (
                          <div key={label} className={`flex justify-between items-center py-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                            <span className={themeClasses.textSecondary}>{label}</span>
                            <span className={`font-bold ${themeClasses.accent}`}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`relative h-64 glassmorphism ${themeClasses.card} rounded-xl overflow-hidden`}>
                      <Image
                        src="/omega3.webp"
                        alt="Omega Core Technical Specs"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'applications' && (
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Agricultural Operations',
                      description: 'Reliable crop monitoring, field analysis, and agricultural support with moderate precision sensors',
                      image: '/agri_monitoring.webp'
                    },
                    {
                      title: 'General Surveillance',
                      description: 'Versatile monitoring operations with steady performance for various security applications',
                      image: '/security & Survillance.png'
                    },
                    {
                      title: 'Maintenance Support',
                      description: 'Infrastructure inspection and maintenance assistance with reliable operational capabilities',
                      image: '/ZHU-52.jpg'
                    }
                  ].map((app, index) => (
                    <div key={index} className={`glassmorphism ${themeClasses.card} rounded-2xl overflow-hidden hover-glow transition-all`}>
                      <div className="relative h-48">
                        <Image
                          src={app.image}
                          alt={app.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className={`text-xl font-bold ${themeClasses.accent} mb-3`}>{app.title}</h3>
                        <p className={`${themeClasses.textSecondary} leading-relaxed`}>{app.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Enhanced Pricing Section */}
        <section id="pricing" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl font-black gradient-text mb-4`}>
                Moderate Use Pricing
              </h2>
              <p className={`text-xl ${themeClasses.textSecondary}`}>
                Competitive, fixed-pay pricing for reliable performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`glassmorphism ${themeClasses.card} rounded-2xl p-8 hover-glow transition-all`}>
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${themeClasses.accent} mb-2`}>Agricultural Use</h3>
                  <div className={`text-4xl font-black gradient-text mb-2`}>₹925.19</div>
                  <p className={themeClasses.textSecondary}>Ideal for farm operations and crop management</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className={`flex items-center ${themeClasses.textSecondary}`}>
                    <span className="text-green-500 mr-3">✓</span>
                    Full Omega Core features
                  </li>
                  <li className={`flex items-center ${themeClasses.textSecondary}`}>
                    <span className="text-green-500 mr-3">✓</span>
                    Agricultural sensor package
                  </li>
                  <li className={`flex items-center ${themeClasses.textSecondary}`}>
                    <span className="text-green-500 mr-3">✓</span>
                    Crop monitoring software
                  </li>
                  <li className={`flex items-center ${themeClasses.textSecondary}`}>
                    <span className="text-green-500 mr-3">✓</span>
                    Standard technical support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
                  Choose Agricultural
                </button>
              </div>

              <div className={`glassmorphism ${themeClasses.card} rounded-2xl p-8 hover-glow transition-all relative`}>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className={`${themeClasses.button} px-4 py-1 rounded-full text-sm font-bold text-white`}>
                    POPULAR
                  </span>
                </div>
                <div className="text-center mb-6 mt-4">
                  <h3 className={`text-2xl font-bold ${themeClasses.accent} mb-2`}>General Operations</h3>
                  <div className={`text-4xl font-black gradient-text mb-2`}>₹875.19</div>
                  <p className={themeClasses.textSecondary}>Versatile package for various applications</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className={`flex items-center ${themeClasses.textSecondary}`}>
                    <span className="text-green-500 mr-3">✓</span>
                    Standard security features
                  </li>
                  <li className={`flex items-center ${themeClasses.textSecondary}`}>
                    <span className="text-green-500 mr-3">✓</span>
                    Multi-purpose surveillance tools
                  </li>
                  <li className={`flex items-center ${themeClasses.textSecondary}`}>
                    <span className="text-green-500 mr-3">✓</span>
                    Basic mission planning
                  </li>
                  <li className={`flex items-center ${themeClasses.textSecondary}`}>
                    <span className="text-green-500 mr-3">✓</span>
                    Regular support & training
                  </li>
                </ul>
                <button className={`w-full ${themeClasses.button} text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105`}>
                  Choose General
                </button>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className={themeClasses.textTertiary}>
                * Fixed pay model with transparent pricing. Includes 2-year warranty and reliable support.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <div className={`max-w-4xl mx-auto glassmorphism ${themeClasses.card} rounded-3xl p-12`}>
            <h2 className={`text-4xl font-black gradient-text mb-4`}>
              Ready to Launch Your Operations?
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} mb-8 max-w-2xl mx-auto`}>
              Join operators worldwide who rely on Omega Core for their everyday missions.
              Experience reliable aerial technology with balanced performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`${themeClasses.button} text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl`}>
                Let&apos;s launch it 🚀
              </button>
              <button className={`glassmorphism ${themeClasses.buttonSecondary} ${themeClasses.text} px-10 py-4 rounded-full font-semibold hover-glow transition-all`}>
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}