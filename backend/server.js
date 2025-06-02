const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const OpenAI = require('openai'); // ✅ Updated import

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Initialize OpenAI with new SDK format
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ✅ OpenAI summarization endpoint
app.post('/api/summarize/openai', async (req, res) => {
  const { text, model } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant that summarizes text clearly and concisely.' },
        { role: 'user', content: `Summarize this:\n${text}` }
      ],
      max_tokens: 300,
    });
    res.json({ summary: response.choices[0].message.content });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'OpenAI summarization failed.' });
  }
});

// ✅ HuggingFace summarization endpoint
app.post('/api/summarize/hf', async (req, res) => {
  const { text, model } = req.body;
  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      { inputs: text },
      {
        headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` }
      }
    );
    const summary = response.data[0]?.summary_text || 'No summary returned.';
    res.json({ summary });
  } catch (e) {
    console.error(e.response?.data || e.message);
    res.status(500).json({ error: 'HuggingFace summarization failed.' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
