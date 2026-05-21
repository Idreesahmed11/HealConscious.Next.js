'use client';

import Image from 'next/image';

const img1 = '/assets/Heal-Conscious-Careox-Change-Management-768x846.png';
const img2 = '/assets/Heal-Conscious-Careox-Stress-Management-768x693.png';
const img3 = '/assets/Heal-Conscious-Careox-Anxiety-Management-768x709.png';
const img4 = '/assets/Heal-Conscious-Careox-Mental-Fortification-768x606.png';

const CareoxSection = () => {
  const data = [
    {
      img: img1,
      title: "Change Management",
      desc: "Some people do realise that something in their life needs to change – but don't know where to start or how to do it right. Careox helps you take control back.",
      width: 768,
      height: 846,
    },
    {
      img: img2,
      title: "Stress Management",
      desc: "Feeling stressed, and struggling with negative thought patterns or feel overwhelmed with things going around you, Careox helps you manage, in just 2 hours a day.",
      width: 768,
      height: 693,
    },
    {
      img: img3,
      title: "Anxiety Management",
      desc: "Social Anxiety is often stemmed in low self-esteem as a result of your experiences in early life. Careox offers a mix of practices and exercises to put you up on your feet.",
      width: 768,
      height: 709,
    },
    {
      img: img4,
      title: "Mental Fortification",
      desc: "Steroids can get you a heavy physical outlook and a fully functional brain chemistry but it only goes so far, Careox helps you fortify your mind for perfect maintenance.",
      width: 768,
      height: 606,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-14">
          Who is Careox for?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="relative w-full mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareoxSection;
