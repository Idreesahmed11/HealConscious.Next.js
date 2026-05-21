'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


const heroImage = '/assets/Transparent-heal-conscious-image.png';

const ceoImg = '/assets/muqeet-dadabhoy-cofounder-ceo-of-heal-conscious.webp';
const cooImg = '/assets/saad-b.-murtaza-cofounder-coo-of-heal-conscious.webp';
const cfoImg = '/assets/woocommerce-placeholder.webp';
const cpoImg = '/assets/sana-fatima-chief-people-officer-of-heal-conscious.webp';
const ctoImg = '/assets/waleed-khan-chief-technology-officer-of-heal-conscious.webp';

const lenaImg = '/assets/woocommerce-placeholder.webp';
const talmudImg = '/assets/Talmu Bah.png';
const elliotImg = '/assets/Elliot Smith.png';
const fazeelaImg = '/assets/Fazeela Sayed.png';
const sanaAmjadImg = '/assets/fazeela-syed-psychology-resident-mental-health-coach-at-heal-conscious-4.png';
const tahreemImg = '/assets/Tahreem Asghar.png';


const values = [
  { icon: '◎', label: 'Honesty' },
  { icon: '✦', label: 'Transparency' },
  { icon: '◈', label: 'Resilience' },
];

const leadershipTeam = [
  { img: ceoImg, name: 'MD Dadabhoy', role: 'Chief Executive Officer | Co-Founder' },
  { img: cooImg, name: 'Saad B. Murtaza', role: 'Chief Operations Officer | Founder' },
  { img: cfoImg, name: 'Marla', role: 'Chief Finance Officer', placeholder: true },
  { img: cpoImg, name: 'Sana Fatima', role: 'Chief People Officer' },
  { img: ctoImg, name: 'Waleed Javed', role: 'Chief Technology Officer' },
];

const mentalHealthSquad = [
  { img: lenaImg, name: 'Lena Andres', role: 'Mental Health Coach – DR', placeholder: true },
  { img: talmudImg, name: 'Talmud Bah', role: 'Life Coach | Therapist – UK' },
  { img: elliotImg, name: 'Elliot Smith', role: 'Sports Psychologist – UK' },
  { img: fazeelaImg, name: 'Fazeela Syed', role: 'Psychology Resident – AJK' },
  { img: sanaAmjadImg, name: 'Sana Amjad', role: 'Clinical Psychologist – PK' },
  { img: tahreemImg, name: 'Tahreem Asghar', role: 'Mental Health Coach – PK' },
];


const AboutSection = () => {
  const router = useRouter();

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null, i: number) => {
    sectionRefs.current[i] = el;
  };

  return (
    <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden">


      <section className="relative bg-[#E9E9E9] overflow-hidden">
        <div
          className="pointer-events-none absolute -right-24 -top-24 w-[480px] h-[480px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4db8c0 0%, transparent 70%)' }}
        />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="z-10 text-left max-w-xl">
            <nav className="flex items-center flex-wrap gap-2 mb-5 text-[11px] font-bold tracking-widest uppercase text-gray-500">
              <button
                onClick={() => router.push('/')}
                className="hover:text-[#4db8c0] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
              >
                Home
              </button>
              <span className="text-gray-300">›</span>
              <span className="text-black">Who We Are?</span>
            </nav>
            <div className="w-10 h-[3px] bg-[#4db8c0] mb-4 rounded-full" />
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black uppercase text-black tracking-tight leading-[1.1]">
              Who<br />
              <span className="text-[#4db8c0]">We Are?</span>
            </h1>
            <p className="mt-4 text-gray-600 text-[14px] leading-relaxed max-w-sm">
              An alternate medicine and remedy hub focused on mental health, holistic living, and humanity-centered innovation.
            </p>
          </div>
          <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center lg:max-w-[50%] z-10">
            <img
              src={heroImage}
              alt="Careox — Heal Consciously"
              className="w-full h-auto object-contain max-h-[220px] lg:max-h-[280px] drop-shadow-md"
            />
          </div>
        </div>
      </section>

  
      <div className="w-full h-px bg-gray-200" />

      
      <main className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10 py-16 space-y-16">

        {/* About + Mission */}
        <section
          ref={(el) => addRef(el, 0)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-5 leading-snug">
              Heal Conscious
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Heal Conscious is an alternate medicine and remedy hub focusing on health, mental health and healthy holistic living
              for the new age problems rising with the rise of dot com bubble, social media, and AI advancements.
              Heal Conscious acts as a creative innovation hub that focuses on mental health along with quirky new innovations.
              As an alternate medicine and remedy hub that explores in modern and alternate medicine styles like,
              Yoga, Chinese psychology and medicine, Islamic psychology, Japanese psychology, etc.
              focusing on global future, and creating products for humanity.
            </p>
          </div>

          <div>
            <SectionLabel>Mission</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-5 leading-snug">
              Our Mission
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Our mission is to help the victims of shock bombarded population of the planet who need help coupe up in the 21st century when the information comes at the tips of your fingers. The constant bombardment from the internet, tv, newspapers and your human circles, through whats app and other messengers is crippling. Meaning making perspectives are usually lost and those living a life when it feels like you have been heating a stake daily for so long, you have actually forgotten the delight of having that sour first bite of an occasional stake. The idea is to bring that taste back.
            </p>
          </div>
        </section>


        <section
          ref={(el) => addRef(el, 1)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(28px)' }}
        >
          <div>
            <SectionLabel>Vision</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-5 leading-snug">
              Our Vision
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Leveraging the power of psychology and technology, our menthealthcare partner in a box is just a starter pack in the series of mentalhealth focused innovations to help users achieve better lifestyle. We think the day isn't far when the whole planet would understand the change we are going through, our historical presence and adapt a healthier mentalhealthcare routine for the future.
            </p>
          </div>

          <div>
            <SectionLabel>Values</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-black text-black mb-5 leading-snug">
              Our Values
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Values define who you truly are, and thus we opt, honesty. Our products are simple, easy to follow, no-hazard guides to help you rebuild your mind in a positive outlook.
            </p>
            <div className="flex flex-wrap gap-3">
              {values.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#4db8c0] hover:shadow-md transition-all duration-200"
                >
                  <span className="text-[#4db8c0] text-base">{icon}</span>
                  <span className="font-bold text-black text-[14px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      
      <div className="w-full h-px bg-gray-100" />

      
      <section
        ref={(el) => addRef(el, 2)}
        className="bg-white py-16 px-5 sm:px-8 transition-all duration-700"
        style={{ opacity: 0, transform: 'translateY(28px)' }}
      >
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-12">
            Team Behind Heal Conscious
          </h2>

          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 mb-10 justify-items-center">
            {leadershipTeam.slice(0, 4).map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>

        
          <div className="flex justify-center">
            <TeamCard {...leadershipTeam[4]} />
          </div>
        </div>
      </section>

      
      <div className="w-full h-px bg-gray-100" />

  
      <section
        ref={(el) => addRef(el, 3)}
        className="bg-white py-16 px-5 sm:px-8 transition-all duration-700"
        style={{ opacity: 0, transform: 'translateY(28px)' }}
      >
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionLabel>Specialists</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-12">
            Mental-Health Squad
          </h2>

        
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 mb-10 justify-items-center">
            {mentalHealthSquad.slice(0, 4).map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>

      
          <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20">
            {mentalHealthSquad.slice(4).map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};


const TeamCard = ({
  img,
  name,
  role,
  placeholder,
}: {
  img: string;
  name: string;
  role: string;
  placeholder?: boolean;
}) => (
  <div className="flex flex-col items-center group w-44">
    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-gray-100 group-hover:border-[#4db8c0] shadow-md transition-all duration-200">
      {placeholder ? (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      ) : (
        <img src={img} alt={name} className="w-full h-full object-cover" />
      )}
    </div>
    <p className="font-black text-black text-[13px] uppercase tracking-wide text-center leading-snug mb-1">
      {name}
    </p>
    <p className="text-gray-500 text-[12px] italic text-center leading-snug">{role}</p>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4db8c0] mb-2">
    {children}
  </p>
);

export default AboutSection;
