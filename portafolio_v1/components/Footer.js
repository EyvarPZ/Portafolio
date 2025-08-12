function Footer() {
  try {
    const currentYear = new Date().getFullYear();

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <footer className="py-6 px-4 border-t border-gray-800" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {currentYear} Eyvar Adriel Pérez. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-green-300 transition-colors">
                <i data-lucide="linkedin" className="w-5 h-5"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-green-300 transition-colors">
                <i data-lucide="github" className="w-5 h-5"></i>
              </a>
              <a href="mailto:eyvar.perez@example.com"
                 className="text-gray-400 hover:text-green-300 transition-colors">
                <i data-lucide="mail" className="w-5 h-5"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
  }
}
