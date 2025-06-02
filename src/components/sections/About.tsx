import React from 'react';
import { GraduationCap, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="card bg-black/80 backdrop-blur-sm mb-8">
              <p className="text-gray-300 text-lg mb-6">
                I'm a Computer Science student at Mohan Babu University, specializing in full-stack development and AI solutions. With a strong foundation in modern web technologies, I focus on creating responsive and user-friendly applications.
              </p>
              <p className="text-gray-300 text-lg">
                I'm passionate about <span className="text-purple-400 font-semibold">solving real-world problems through code</span> and constantly exploring new technologies. Currently diving deep into <span className="text-purple-400 font-semibold">cloud computing</span>, <span className="text-purple-400 font-semibold">AI integration</span>, and <span className="text-purple-400 font-semibold">modern web frameworks</span>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="card bg-black/80 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl mr-4">
                    <GraduationCap size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Education</h3>
                    <p className="text-gray-400">B.Tech in Computer Science</p>
                    <p className="text-purple-500 text-sm">Mohan Babu University — 2025 CGPA-8.29</p>
                  </div>
                </div>
              </div>

              <div className="card bg-black/80 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl mr-4">
                    <Lightbulb size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">Interests</h3>
                    <p className="text-gray-400">UI Design, Machine Learning, Cloud Computing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-purple-500/30 mx-auto">
                <img 
                  src="./1000040829-01.jpeg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;