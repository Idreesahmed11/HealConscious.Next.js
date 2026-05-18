'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./ExpertSection.css";

const LenaVideo = '/assets/LenaSequence-01-1.mp4';
const TalmudVideo = '/assets/Talmud-BahSequence-01_16.mp4';
const loginImg = '/assets/Careox-Connect-Mobile-App-Screens-300x275.png';
const TestimonialVideo1 = '/assets/testimonial1.mp4.mp4';
const TestimonialVideo2 = '/assets/testimonial2.mp4.mp4';
const TestimonialVideo3 = '/assets/testimonial3.mp4.mp4';
const LenaAndres = '/assets/Lena Andres.webp';
const TalmuBah = '/assets/Talmu Bah.png';
const ElliotSmith = '/assets/Elliot Smith.png';
const FazeelaSayed = '/assets/Fazeela Sayed.png';
const TahreemAsghar = '/assets/Tahreem Asghar.png';

const faqs = [
  {
    question: "What if I have questions after I buy Careox?",
    answer:
      "You'll have direct access to our Connect App, where our mental health support team is ready to answer your questions, guide you through the program and make sure you never feel alone on your journey.",
  },
  {
    question: "Is my information safe and private on the connect app?",
    answer:
      "Yes, your data is protected with secure compliant systems. Only you have access to your personal progress records.",
  },
  {
    question: "Can family members or friends join my Connect app journey?",
    answer:
      "Yes, you can invite loved ones to join, so they can support your progress and encourage healthy conversations about mental well-being.",
  },
  {
    question: "What if I feel like a week is boring?",
    answer:
      "Each week has its own theme and following that is important to healing. The second week may feel like a dip. Its designed to be such to test your low and build your high. Keep going, resilience is the key.",
  },
];

const LazyVideo = ({ src, className, style }) => {
  const [playing, setPlaying] = useState(false);

  if (!playing) {
    return (
      <div
        onClick={() => setPlaying(true)}
        style={{
          position: 'relative',
          background: '#111',
          cursor: 'pointer',
          borderRadius: '8px',
          overflow: 'hidden',
          width: '100%',
          height: style?.height || '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
        className={className}
      >
      
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#333">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <p style={{ position: 'absolute', bottom: 10, color: '#aaa', fontSize: 12 }}>Click to play</p>
      </div>
    );
  }

  return (
    <video
      controls
      autoPlay
      className={className}
      style={style}
      preload="none"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

const ExpertSection = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="expert-section">
        <div className="expert-text">
          <p className="expert-tag">4 week program to rewire your brain</p>
          <h2 className="expert-heading">A Word From Our Experts.</h2>
          <p className="expert-desc">
            Careox has earned praise from experts across psychology, mental
            wellness, and holistic care. Our 4-week program is backed by
            research and trusted by professionals who prioritize results.
          </p>
          <button className="expert-btn" onClick={() => router.push("/about")}>
            Discover More
          </button>
        </div>
        <div className="expert-videos">
          
          <LazyVideo src={LenaVideo} />
          <LazyVideo src={TalmudVideo} />
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-left">
          <p className="faq-tag">Ask the expert!</p>
          <h2 className="faq-heading">
            Got Questions? <br /> Fret not!
          </h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
              >
                <button className="faq-question" onClick={() => toggle(index)}>
                  <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
                  <span>{faq.question}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-right">
          <div className="faq-image">
            
            <img src={loginImg} alt="Login Screen" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          What People Say About Us
        </h2>
        <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {[TestimonialVideo1, TestimonialVideo2, TestimonialVideo3].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md bg-black">
          
                <LazyVideo
                  src={src}
                  className="w-full object-cover"
                  style={{ height: 'clamp(150px, 30vw, 480px)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <p className="team-tag">Our Team</p>
        <h2 className="team-heading">Mental healthcare squad</h2>
        <p className="team-desc">
          Compassionate experts dedicated to guiding you on your journey to mental and emotional well-being.
        </p>

        <div className="team-grid team-grid-3">
          <div className="team-card">
            <div className="team-img-circle">
              
              <img src={LenaAndres} alt="Lena Andres" loading="lazy" />
            </div>
            <h3 className="team-name">LenaAndres</h3>
            <p className="team-role">Coach | CIO – DR</p>
          </div>

          <div className="team-card">
            <div className="team-img-circle">
              <img src={TalmuBah} alt="Talmud Bah" loading="lazy" />
            </div>
            <h3 className="team-name">Talmud Bah</h3>
            <p className="team-role">Life Coach | Therapist – UK</p>
          </div>

          <div className="team-card">
            <div className="team-img-circle">
              <img src={ElliotSmith} alt="Elliot Smith" loading="lazy" />
            </div>
            <h3 className="team-name">Elliot Smith</h3>
            <p className="team-role">Sports Psychologist – UK</p>
          </div>
        </div>

        <div className="team-grid team-grid-2">
          <div className="team-card">
            <div className="team-img-circle">
              <img src={FazeelaSayed} alt="Fazeela Syed" loading="lazy" />
            </div>
            <h3 className="team-name">Fazeela Syed</h3>
            <p className="team-role">Psychology Resident – AJK</p>
          </div>

          <div className="team-card">
            <div className="team-img-circle">
              <img src={TahreemAsghar} alt="Tahreem Asghar" loading="lazy" />
            </div>
            <h3 className="team-name">Tahreem Asghar</h3>
            <p className="team-role">Mental Health Coach – PK</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertSection;
