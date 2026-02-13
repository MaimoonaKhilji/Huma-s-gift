
import { GoogleGenAI } from "@google/genai";
import { LoveLetterParams } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLoveLetter = async (params: LoveLetterParams): Promise<string> => {
  const { herName, favoriteMemory, vibe } = params;
  
  const prompt = `Write a super cute, lovey-dovey Valentine's letter for a BEST FRIEND named ${herName}. 
    The sender is Mona. We are both girls and best friends (platonic soulmates). 
    Mention this favorite memory: "${favoriteMemory}". 
    The tone should be ${vibe} and very affectionate. 
    Talk about how much she means to me as my bestie and why she's my favorite human. 
    Keep it heartfelt, unique, and beautiful. Format with line breaks and lots of sweet emojis.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text || "My heart is too full for words right now... (Error generating letter)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Even AI can't describe how much I love you, bestie! (Try again in a moment!)";
  }
};
