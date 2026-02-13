
import React, { useState } from 'react';
import { Heart, Gift, Star, Users, ChevronDown, Sparkles, Quote, Smile, PenTool } from 'lucide-react';
import HeartBackground from './components/HeartBackground';
import ValentineRequest from './components/ValentineRequest';
import LetterGenerator from './components/LetterGenerator';

const App: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const handleYes = () => {
    setAccepted(true);
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    script.onload = () => {
      // @ts-ignore
      window.confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff69b4', '#ffffff', '#ffd700']
      });
    };
    document.body.appendChild(script);
  };

  const scrollToLetters = () => {
    const element = document.getElementById('letter-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative text-slate-800 selection:bg-rose-200">
      <HeartBackground />
      
      {/* Scrollable Main Content */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
          <header className="space-y-6 animate-in fade-in zoom-in duration-1000">
            <div className="flex justify-center">
               <div className="p-4 bg-white/50 rounded-full backdrop-blur-sm border border-rose-100 shadow-xl shadow-rose-100/20">
                 <Users className="w-10 h-10 text-rose-500" />
               </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-romantic text-rose-600 font-bold drop-shadow-sm">
              Hey Huma!
            </h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-serif-elegant italic text-rose-800/70 max-w-2xl mx-auto leading-relaxed">
                "A best friend is like a four-leaf clover: hard to find and lucky to have."
              </p>
              <p className="text-xs font-black text-rose-400 uppercase tracking-[0.3em] pt-4">
                From Mona with all the love 💖
              </p>
            </div>
          </header>

          {/* Floating indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronDown className="text-rose-300 w-8 h-8" />
          </div>
        </section>

        {/* VALENTINE REQUEST SECTION */}
        <section className="py-24 px-4 flex flex-col items-center">
          <div className="max-w-4xl w-full">
            {!accepted ? (
              <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                <ValentineRequest onYes={handleYes} />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white p-12 rounded-[3rem] shadow-2xl shadow-rose-200 animate-in zoom-in duration-500 flex flex-col items-center gap-6 text-center border-4 border-white/20">
                <div className="bg-white/20 p-4 rounded-full">
                  <Star className="fill-white w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-serif-elegant">Huma is My Valentine! ✨</h2>
                <p className="text-xl text-rose-100 max-w-md italic">
                  "You're officially my favorite person. Let's make this day about the best kind of love: US."
                </p>
                <button 
                  onClick={scrollToLetters}
                  className="mt-4 px-8 py-3 bg-white text-rose-600 rounded-full font-bold shadow-lg hover:bg-rose-50 transition-colors"
                >
                  Read Your Letters 💌
                </button>
              </div>
            )}
          </div>
        </section>

        {/* HARD-CODED COLLAGE SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
               <h2 className="text-4xl font-romantic text-rose-600 mb-2">The Huma Collection</h2>
               <p className="text-slate-500 italic">Four ways to say I love you, bestie...</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CUTE */}
              <div className="bg-rose-50/80 p-8 rounded-3xl border-2 border-dashed border-rose-200 shadow-lg transform -rotate-1 hover:rotate-0 transition-all">
                <div className="flex items-center gap-2 mb-4 text-rose-500">
                  <Sparkles size={18} />
                  <span className="font-bold uppercase tracking-widest text-xs">The Cute One</span>
                </div>
                <p className="font-romantic text-2xl text-rose-800 leading-relaxed">
                  Dearest Huma,<br/><br/>
                  If friendship was a candy, you’d be the sweetest one in the jar! 🍬 You make everything better just by being there. Thank you for being the soulmate who gets all my weirdness. Stay sparkly! ✨💖
                </p>
              </div>

              {/* FUNNY */}
              <div className="bg-amber-50/80 p-8 rounded-3xl border-2 border-dashed border-amber-200 shadow-lg transform rotate-1 hover:rotate-0 transition-all">
                <div className="flex items-center gap-2 mb-4 text-amber-500">
                  <Smile size={18} />
                  <span className="font-bold uppercase tracking-widest text-xs">The Funny One</span>
                </div>
                <p className="font-serif-elegant italic text-lg text-amber-900 leading-relaxed">
                  Hey Huma! 👯‍♀️<br/><br/>
                  Happy Valentine's to the person who knows too many of my secrets for me to ever let go. I'm pretty sure we're legally married at this point anyway. Thanks for not judging my 3 AM snacks or my life choices. You're the best! 🍕🤣
                </p>
              </div>

              {/* POETIC */}
              <div className="bg-purple-50/80 p-8 rounded-3xl border-2 border-dashed border-purple-200 shadow-lg transform rotate-1 hover:rotate-0 transition-all">
                <div className="flex items-center gap-2 mb-4 text-purple-500">
                  <PenTool size={18} />
                  <span className="font-bold uppercase tracking-widest text-xs">The Poetic One</span>
                </div>
                <p className="font-romantic text-2xl text-purple-800 leading-relaxed">
                  Huma,<br/><br/>
                  Like a soft breeze in a quiet garden, your friendship brings peace to my soul. 🌸 You are the colors in my grey days and the melody in my silence. Our bond is a masterpiece written in the stars. 🌌💜
                </p>
              </div>

              {/* DEEP */}
              <div className="bg-emerald-50/80 p-8 rounded-3xl border-2 border-dashed border-emerald-200 shadow-lg transform -rotate-1 hover:rotate-0 transition-all">
                <div className="flex items-center gap-2 mb-4 text-emerald-600">
                  <Quote size={18} />
                  <span className="font-bold uppercase tracking-widest text-xs">The Deep One</span>
                </div>
                <p className="font-serif-elegant text-lg text-emerald-900 leading-relaxed">
                  To Huma,<br/><br/>
                  There are people who pass through your life, and then there are people who anchor you. You are my anchor. Thank you for holding me steady through every storm. I am a better person because I have you by my side. Forever grateful. 🌿💎
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI LETTER GENERATOR SECTION */}
        <section id="letter-section" className="py-32 px-4 bg-gradient-to-b from-transparent to-rose-100/30">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block p-3 bg-rose-100 rounded-2xl text-rose-500 mb-2">
                <Gift className="w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-romantic text-rose-600">The Bestie AI Lab</h2>
              <p className="text-slate-500 font-medium">
                Want more? Let the stars generate a unique new message just for Huma!
              </p>
            </div>
            
            <div className="shadow-2xl shadow-rose-200/50">
              <LetterGenerator />
            </div>

            {/* Footer-like message */}
            <div className="pt-20 pb-10 text-center">
              <div className="flex justify-center gap-2 mb-4">
                <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
              </div>
              <p className="text-sm font-bold text-rose-300 uppercase tracking-widest">
                Forever & Always • Mona & Huma
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Static Decorative Elements */}
      <div className="fixed top-10 right-10 animate-pulse hidden md:block">
        <Star className="text-rose-200 w-8 h-8 fill-rose-100" />
      </div>
      <div className="fixed top-1/2 left-10 animate-pulse delay-700 hidden md:block">
        <Star className="text-rose-200 w-4 h-4 fill-rose-100" />
      </div>
    </div>
  );
};

export default App;
