function Education() {
  try {
    return (
      <section id="education" className="py-20 px-6" data-name="education" data-file="components/Education.js">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 lofi-text">Educación</h2>
          
          <div className="glassmorphism p-8 rounded-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full glassmorphism flex items-center justify-center neon-glow">
              <i data-lucide="graduation-cap" className="w-10 h-10 text-cyan-400"></i>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Licenciatura en Tecnologías de la Información en los Negocios
            </h3>
            <p className="text-green-300 mb-2">Universidad Simón Bolívar</p>
            <p className="text-gray-400">En curso</p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Education component error:', error);
    reportError(error);
  }
}
