function Projects() {
  try {
    const projects = [
      { title: 'Asistente Chatbot IA', description: 'Inteligencia artificial conversacional' },
      { title: 'Modelo de Predicción ML', description: 'Predicciones basadas en datos' },
      { title: 'Dashboard de Visualización', description: 'Insights interactivos de datos' },
      { title: 'Web Scraper en Python', description: 'Recolección automatizada de datos' }
    ];

    return (
      <section id="projects" className="section-spacing" data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">Proyectos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glassmorphism content-box lofi-card text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full glassmorphism flex items-center justify-center lofi-glow">
                  <i data-lucide="code" className="w-8 h-8 text-green-300"></i>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-spacing">
                  {project.description}
                </p>
                
                <p className="text-green-300 font-medium">
                  Próximamente
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    reportError(error);
  }
}
