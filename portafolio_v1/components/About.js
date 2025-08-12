function About() {
  try {
    return (
      <section id="about" className="section-spacing" data-name="about" data-file="components/About.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">Acerca de Mí</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glassmorphism content-box lofi-card">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full glassmorphism flex items-center justify-center lofi-glow">
                  <i data-lucide="user" className="w-16 h-16 text-green-300"></i>
                </div>
                <h3 className="text-2xl font-semibold text-green-200">Perfil Profesional</h3>
              </div>
            </div>
            
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-6 text-green-300">Mi Trayectoria</h3>
              
              <p className="text-gray-300 text-spacing">
                Apasionado por la tecnología y los negocios con una profunda curiosidad por 
                cómo la tecnología puede transformar el mundo empresarial. Actualmente 
                estudiando Licenciatura en Tecnologías de la Información en los Negocios.
              </p>
              
              <p className="text-gray-300 text-spacing">
                Especializado en múltiples lenguajes de programación incluyendo Python, C++, 
                HTML y SQL. Participando activamente en desafíos de programación competitiva 
                en plataformas como HackerRank, LeetCode y SkillRack.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <i data-lucide="map-pin" className="w-5 h-5 text-green-300 mr-4"></i>
                  <span className="text-gray-300">Ciudad de México, México</span>
                </div>
                <div className="flex items-center">
                  <i data-lucide="graduation-cap" className="w-5 h-5 text-green-300 mr-4"></i>
                  <span className="text-gray-300">Lic. TI en Negocios - Universidad Simón Bolívar</span>
                </div>
                <div className="flex items-center">
                  <i data-lucide="briefcase" className="w-5 h-5 text-green-300 mr-4"></i>
                  <span className="text-gray-300">Estudiante Universitario</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    reportError(error);
  }
}
