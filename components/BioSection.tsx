import React from 'react';

const BioSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Text Content - Modeled after the screenshot */}
          <div className="w-full md:w-1/2 order-2 md:order-1 pt-8">
            <div className="mb-2">
                <span className="font-display text-xs md:text-sm tracking-[0.2em] text-stone-500 font-semibold uppercase">
                    Introduction
                </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6 leading-tight">
              The Art of Presence
            </h2>
            
            <div className="w-12 h-1 bg-champagne-500 mb-10"></div>

            <div className="prose prose-stone prose-lg">
                <p className="text-stone-600 font-sans leading-relaxed mb-6 drop-cap text-lg">
                    Building a refined personal brand requires correcting the subtle errors that inevitably arise in our daily interactions. 
                    The state of the art is <strong>authentic presence</strong>, which encodes your values redundantly across every gesture and word.
                </p>
                
                <p className="text-stone-600 font-sans leading-relaxed mb-6">
                    However, interpreting the social signals of the modern world—a task called "decoding"—is a massive challenge. 
                    Complex social dynamics often confuse standard approaches. 
                    <strong>LUMINA</strong> uses proven methodologies to refine these complex patterns directly, 
                    achieving results far beyond standard coaching.
                </p>

                <p className="text-stone-800 font-serif italic text-xl mt-8 pl-6 border-l-4 border-champagne-500">
                    "True empowerment begins when you know who you are — and express it with clarity, grace, and quiet strength."
                </p>
            </div>
          </div>

           {/* Image Side */}
           <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Elena Vance - Founder" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                   <p className="text-white font-serif text-2xl italic">Elena Vance</p>
                   <p className="text-stone-300 font-display text-xs tracking-widest uppercase mt-1">Founder & Lead Coach</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BioSection;