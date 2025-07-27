import {
  GoogleGenAI,
} from '@google/genai';

const chatSession = async (prompt: string) => {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY,
  });
  const config = {
  };
  const model = 'learnlm-2.0-flash-experimental';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  
  let result = '';
  for await (const chunk of response) {
    result += chunk.text;
  }
  
  return result;
};

export default chatSession;