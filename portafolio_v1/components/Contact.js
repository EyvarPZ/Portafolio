function Contact() {
  try {
    const socialLinks = [
      { name: 'Email', url: 'mailto:eyvar.perez@example.com', icon: 'mail' },
      { name: 'LinkedIn', url: '#', icon: 'linkedin' },
      { name: 'GitHub', url: '#', icon: 'github' },
      { name: 'LeetCode', url: '#', icon: 'code' }
    ];

    return (
      <section id="contact" className="section-spacing" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">Ponte en Contacto</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-8 text-green-300">Enviar Mensaje</h3>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Tu Nombre"
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-600 text-white focus:border-green-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Tu Email"
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-600 text-white focus:border-green-400 focus:outline-none"
                />
                <textarea
                  placeholder="Tu Mensaje"
                  rows="5"
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-600 text-white focus:border-green-400 focus:outline-none"
                ></textarea>
                <button className="w-full py-4 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-400 transition-all duration-300">
                  Enviar Mensaje
                </button>
              </form>
            </div>
            
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-8 text-green-300">Conéctate Conmigo</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 glassmorphism rounded-lg lofi-card"
                  >
                    <i data-lucide={link.icon} className="w-6 h-6 text-green-300 mr-4"></i>
                    <span className="text-white font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    reportError(error);
  }
}
