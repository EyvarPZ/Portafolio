function App() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <div className="App" data-name="app" data-file="app.js">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
