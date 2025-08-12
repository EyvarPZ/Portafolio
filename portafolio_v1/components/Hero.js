function Hero() {
  try {
    const [typedText, setTypedText] = React.useState('');
    const fullText = "Especialista en TI | Estudiante Universitario | Entusiasta de la Tecnología";
    
    React.useEffect(() => {
      let currentIndex = 0;
      const typeTimer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setTimeout(() => {
            currentIndex = 0;
            setTypedText('');
          }, 3000);
        }
      }, 100);
      
      return () => clearInterval(typeTimer);
    }, []);

    return (
      <section id="home" className="min-h-screen flex items-center justify-center" data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto px-8 text-center">
          <div className="floating mb-12">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full glassmorphism flex items-center justify-center lofi-glow">
              <i data-lucide="brain" className="w-20 h-20 text-green-300"></i>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 lofi-text fade-in">
            Hola, soy Eyvar
          </h1>
          
          <div className="mb-6">
            <p className="text-xl md:text-2xl text-green-200 typing-animation min-h-[32px]">
              {typedText}
            </p>
          </div>
          
          <div className="mb-12">
            <p className="text-lg max-w-3xl mx-auto text-gray-300 text-spacing">
              Estudiante de Tecnologías de la Información en los Negocios en la Universidad Simón Bolívar,
              explorando el fascinante mundo de la tecnología y su aplicación en los negocios.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-green-500/80 text-white rounded-lg font-medium hover:bg-green-400 transition-all duration-300">
              Descargar CV
            </button>
            <button className="px-8 py-4 glassmorphism text-green-200 rounded-lg font-medium lofi-card">
              Contáctame
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
  }
}
