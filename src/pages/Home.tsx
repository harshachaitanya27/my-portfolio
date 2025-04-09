import React, { useEffect, useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import ReactFullpage from '@fullpage/react-fullpage';
import FrontImage from '/images/harsha-normal.jpg';
import GhibliImage from '/images/harsha-ghibli.png';
import ExperienceCarousel from '../pages/ExperienceCarousel';


export default function Home() {
  const [quote, setQuote] = useState('');
  const [beamCount, setBeamCount] = useState(15);
  const [beams, setBeams] = useState([]);
  const [visible, setVisible] = useState(false);
  const [chaos, setChaos] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const chaosSound = useRef(null);
  const calmSound = useRef(null);

  const quotes = [
    "Training models is easy. Explaining them? Not so much.",
    "Overfitting is just your model loving the data a bit too much.",
    "In a world full of data, be the algorithm.",
    "Prompt engineering: the new wizardry.",
    "I don't always use AI, but when I do, I fine-tune it.",
    "Trust the process — especially the gradient descent one.",
    "Debugging neural nets at 3AM builds character."
  ];

  const randomColor = () => {
    const neonColors = ['#00FFFF', '#39FF14', '#FF00FF', '#FF5F1F', '#00FFEF', '#A020F0'];
    return neonColors[Math.floor(Math.random() * neonColors.length)];
  };

  useEffect(() => {
    const dailyQuote = quotes[new Date().getDate() % quotes.length];
    setQuote(dailyQuote);
    generateBeams(beamCount);
  }, []);

  const generateBeams = (count) => {
    const newBeams = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      color: randomColor()
    }));
    setBeams(newBeams);
  };

  const toggleChaos = () => {
    if (!chaos) {
      generateBeams(beamCount);
      setVisible(true);
      chaosSound.current?.play();
    } else {
      setVisible(false);
      calmSound.current?.play();
    }
    setChaos(!chaos);
  };

  return (
    <>
      <audio ref={chaosSound} src="/sounds/chaos.mp3" preload="auto" />
      <audio ref={calmSound} src="/sounds/calm.mp3" preload="auto" />

      <ReactFullpage
        scrollingSpeed={1000}
        navigation
        afterLoad={(origin, destination) => {
          if (destination.index === 1) setAboutVisible(true);
          if (destination.index === 2) setExperienceVisible(true);
        }}
        render={() => (
          <ReactFullpage.Wrapper>
            {visible && (
              <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-100`}>
                {beams.map((beam) => (
                  <div
                    key={beam.id}
                    className="laser-beam"
                    style={{
                      left: `${beam.left}%`,
                      backgroundColor: beam.color,
                      animationDelay: `${beam.delay}s`
                    }}
                  ></div>
                ))}
              </div>
            )}
            {/* HERO SECTION */}
            <div className="section bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative">
              <section id="hero" className="snap-start relative h-screen min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black">
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="absolute w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <motion.h1
                    className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-8 text-center text-white leading-tight"
                    style={{ textShadow: '0 0 18px rgba(216, 115, 255, 0.85)' }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Typewriter
                      words={["Hi, I'm Sri Harsha, Nimmagadda.", "AI Engineer | AWS Certified | Curious Human"]}
                      cursor={true}
                      cursorStyle="_"
                      typeSpeed={60}
                      deleteSpeed={30}
                      delaySpeed={1500}
                      loop={false}
                    />
                  </motion.h1>

                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-center text-gray-300 mb-10 leading-relaxed font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    I’m an engineer, a maker, and a dreamer. I build, break, and rebuild. From AI models to Arduino, I’m always in creation mode.
                  </motion.p>

                  <motion.p
                    className="text-lg sm:text-xl text-center italic mb-12 text-lime-300 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    {quote}
                  </motion.p>

                  <motion.div
                    whileHover={{ scale: 0.95 }}
                    className="w-full flex justify-center mb-10"
                  >
                    <button
                      onClick={toggleChaos}
                      className="bg-gradient-to-r from-lime-400 to-yellow-400 text-black px-6 py-3 rounded-full font-bold shadow-xl hover:bg-yellow-300 hover:text-black hover:ring-4 hover:ring-lime-300 hover:ring-offset-2 hover:ring-offset-black transition-all duration-300"
                    >
                      {chaos ? 'Restore Sanity 🧘' : 'Unleash Chaos 🌀'}
                    </button>
                  </motion.div>
                </div>
              </section>
            </div>

            {/* ABOUT ME SECTION */}
            <div className="section bg-gradient-to-b from-black via-gray-900 to-gray-800 px-8 md:px-20 py-16">
              <motion.div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
                <motion.h2
                  className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-10 border-b-4 border-lime-400 pb-2"
                  animate={aboutVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{ textShadow: '0 0 15px rgba(132, 255, 148, 0.85)', letterSpacing: '1px', textAlign: 'center' }}
                >
                  About Me
                </motion.h2>

                <motion.div
                  className="image-center-wrapper mb-10"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={aboutVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <img src={FrontImage} alt="Sri Harsha" className="flip-card-front rounded-lg w-52 h-52 object-cover shadow-xl" />
                      <img src={GhibliImage} alt="Ghibli Sri Harsha" className="flip-card-back rounded-lg w-52 h-52 object-cover shadow-xl" />
                    </div>
                  </div>
                </motion.div>

                <motion.p
                  className="text-lg md:text-xl leading-relaxed text-[#e0e0e0] px-6 md:px-14 mb-6"
                  animate={aboutVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                  style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'justify', lineHeight: '1.9rem', textShadow: '0 0 6px rgba(255,255,255,0.1)' }}
                  dangerouslySetInnerHTML={{ __html: `I'm a <span class="font-semibold text-[#E6FFE5]">Machine Learning and Generative AI Engineer</span> with hands-on experience deploying intelligent systems using <span class="text-[#7FFFD4] font-medium">AWS</span>, <span class="text-[#7FFFD4] font-medium">CrewAI</span>, and state-of-the-art <span class="text-[#7FFFD4] font-medium">LLMs</span>. At Cloud OU, I led multiple initiatives to fine-tune <span class="text-[#B388FF] font-medium">LLaMA 3</span>, <span class="text-[#B388FF] font-medium">GPT-4o</span>, and build interactive <span class="text-[#FFB6C1] font-medium">LangGraph</span> and <span class="text-[#FFB6C1] font-medium">PydanticAI</span> agent workflows for real-time applications. At <span class="text-[#00FFC6] font-semibold">Consello Technologies</span>, I engineered an end-to-end <span class="text-[#C2FFAD]">HR automation system</span> using <span class="text-[#B0FFFF]">Django</span> and <span class="text-[#B0FFFF]">AWS RDS</span>, successfully managing employee onboarding, timesheets, and leave tracking with secure role-based access. I’m <span class="text-[#B0FFB0] font-semibold">AWS Certified</span> (Solutions Architect – Associate) and have completed DeepLearning.ai’s Generative AI specialization. My projects include <span class="text-[#FFD580]">hybrid recommendation engines</span>, <span class="text-[#FFD580]">personalized course generators</span>, and <span class="text-[#FFD580]">LangGraph-based game builders</span>. I actively study <span class="text-[#80FFEA]">foundational and production-ready data science</span> concepts through books like "<span class="text-[#C5E1A5]">Data Science from Scratch</span>" and courses on <span class="text-[#B2EBF2]">MLOps</span>, <span class="text-[#B2EBF2]">AWS Lambda</span>, and <span class="text-[#B2EBF2]">Sagemaker</span>. I thrive at the intersection of infrastructure, intelligence, and innovation.` }}
                />

                {/* Connect with Me */}
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-lime-400 mt-14 mb-6 border-b-2 border-lime-300 pb-2"
                  animate={aboutVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{ textShadow: '0 0 12px rgba(132, 255, 148, 0.7)', textAlign: 'center' }}
                >
                  Connect with Me
                </motion.h2>

                <motion.div
                  className="mt-6 flex flex-wrap gap-10 justify-center items-center text-3xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ textAlign: 'center' }}
                >
                  <a href="https://www.linkedin.com/in/hnimm" target="_blank" rel="noopener noreferrer" className="text-[#7dd3fc] hover:text-white transition duration-300 drop-shadow-[0_0_12px_rgba(125,211,252,0.7)] hover:scale-110" title="LinkedIn" style={{ padding: 20, color: 'rgba(43, 108, 219, 0.9)', textShadow: ' 0 0 20px rgba(84, 183, 244, 0.9)' }}>
                    <FaLinkedin size={42} />
                  </a>
                  <a href="https://github.com/hnimm" target="_blank" rel="noopener noreferrer" className="text-[#7dd3fc] hover:text-white transition duration-300 drop-shadow-[0_0_12px_rgba(125,211,252,0.7)] hover:scale-110" title="GitHub" style={{ padding: 20, color: 'rgba(147, 84, 218, 0.93)' }}>
                    <FaGithub size={42} />
                  </a>
                  <a href="mailto:hnimm2001@gmail.com" className="text-[#7dd3fc] hover:text-white transition duration-300 drop-shadow-[0_0_12px_rgba(125,211,252,0.7)] hover:scale-110" title="Email" style={{ padding: 20, color: 'rgba(20, 137, 164, 0.9)' }}>
                    <FaEnvelope size={40} />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          {/* EXPERIENCE SECTION */}
          <div className="section bg-black">
            <ExperienceCarousel experienceVisible={experienceVisible} />
          </div>

          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}
