function Experience() {
  try {
    return (
      <section id="experience" className="py-20 px-6" data-name="experience" data-file="components/Experience.js">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 lofi-text">Experiencia</h2>
          
          <div className="glassmorphism p-8 rounded-2xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center neon-glow flex-shrink-0">
                <i data-lucide="briefcase" className="w-6 h-6 text-cyan-400"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Estudiante Universitario</h3>
                <p className="text-green-300 mb-2">2024 – Presente</p>
                <p className="text-gray-300">
                  Desarrollando habilidades en tecnologías de la información aplicadas a los negocios,
                  construyendo una base sólida en programación y análisis de sistemas empresariales.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-400">
              <p>Más experiencias próximamente...</p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    reportError(error);
  }
}
