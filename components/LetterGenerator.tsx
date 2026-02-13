
import React, { useState } from 'react';
import { Sparkles, Send, RefreshCw } from 'lucide-react';
import { generateLoveLetter } from '../services/geminiService';
import { LoveLetterParams } from '../types';

const LetterGenerator: React.FC = () => {
  const [params, setParams] = useState<LoveLetterParams>({
    herName: '',
    favoriteMemory: '',
    vibe: 'cute'
  });
  const [letter, setLetter] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!params.herName) return;
    setLoading(true);
    const result = await generateLoveLetter(params);
    setLetter(result);
    setLoading(false);
  };

  return (
    <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-rose-50 border-t-rose-200 transition-all">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-amber-400" />
        <h3 className="text-2xl font-serif-elegant text-rose-900">Bestie Love Letter</h3>
      </div>

      {!letter ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-rose-700 mb-1">Bestie's Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-xl border border-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white/50"
              placeholder="Who is your soulmate friend?"
              value={params.herName}
              onChange={e => setParams({ ...params, herName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-rose-700 mb-1">A Special Bestie Memory</label>
            <textarea
              className="w-full px-4 py-2 rounded-xl border border-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white/50 h-24"
              placeholder="e.g., that time we laughed until we cried..."
              value={params.favoriteMemory}
              onChange={e => setParams({ ...params, favoriteMemory: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-rose-700 mb-1">Letter Vibe</label>
            <div className="flex flex-wrap gap-2">
              {(['cute', 'funny', 'poetic', 'deep'] as const).map(v => (
                <button
                  key={v}
                  onClick={() => setParams({ ...params, vibe: v })}
                  className={`px-4 py-1.5 rounded-full text-sm capitalize transition-all ${
                    params.vibe === v ? 'bg-rose-500 text-white shadow-md' : 'bg-rose-50 text-rose-500 hover:bg-rose-100'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleGenerate}
            disabled={loading || !params.herName}
            className="w-full py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-rose-300 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <RefreshCw className="animate-spin" /> : <Send size={18} />}
            {loading ? 'Consulting the friendship stars...' : 'Generate Bestie Letter'}
          </button>
        </div>
      ) : (
        <div className="animate-in fade-in duration-700">
          <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 whitespace-pre-wrap font-romantic text-xl leading-relaxed text-rose-800">
            {letter}
          </div>
          <button
            onClick={() => setLetter('')}
            className="mt-6 text-rose-400 hover:text-rose-600 text-sm font-medium flex items-center gap-1 mx-auto"
          >
            <RefreshCw size={14} /> Write another one
          </button>
        </div>
      )}
    </div>
  );
};

export default LetterGenerator;
