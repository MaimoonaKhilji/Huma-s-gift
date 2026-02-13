
export interface Memory {
  id: string;
  url: string;
  caption: string;
}

export interface LoveLetterParams {
  herName: string;
  favoriteMemory: string;
  vibe: 'poetic' | 'funny' | 'deep' | 'cute';
}
