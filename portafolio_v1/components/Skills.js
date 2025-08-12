function Skills() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    
    const technicalSkills = [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'Java', level: 70 }
    ];
    
    const tools = [
      'Git & GitHub', 'VS Code', 'Azure Cloud', 
      'Google Cloud', 'Video Editing'
    ];

    React.useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <section id="skills" className="section-spacing" data-name="skills" data-file="components/Skills.js">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 lofi-text">Habilidades y Herramientas</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-8 text-green-300">Habilidades Técnicas</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-green-300 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glassmorphism content-box lofi-card">
              <h3 className="text-2xl font-semibold mb-8 text-green-300">Herramientas y Plataformas</h3>
              <div className="grid grid-cols-1 gap-4">
                {tools.map((tool) => (
                  <div key={tool} className="glassmorphism p-4 rounded-lg text-center">
                    <span className="text-gray-300 font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    reportError(error);
  }
}
