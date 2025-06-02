# Battle of the LLMs: Summarizer Showdown

A web app to compare summaries from different language models (LLMs), both closed-source and open-source, side-by-side. Users can input long texts, get summaries, rate each model on clarity, accuracy, and conciseness, and see an overall comparison report.

## Features

- Select any combination of closed-source and open-source LLMs
- Input or upload long-form text for summarization
- View summaries side-by-side
- Rate each summary by clarity, accuracy, conciseness
- Overall report card with average scores and preference

## Tech Stack

- Frontend: ReactJS, Axios, React-Select, Recharts
- Backend: Node.js, Express, OpenAI API, HuggingFace Inference API
- Styling: CSS

## Setup & Run Locally

### Backend
Navigate to backend folder:
   ```bash
   cd backend
   ```
Install dependencies:
```bash
npm install
```
Create .env file with your API keys:
```bash
OPENAI_API_KEY=your_openai_key_here
HF_API_KEY=your_huggingface_key_here
```
Run backend server:
```bash
node server.js
```
### Frontend

Navigate to frontend folder:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
Run frontend app:
```bash
npm start
```
Open http://localhost:3000 in your browser

Usage
Select models from dropdowns
Paste or upload text to summarize
Click Compare Summaries
View results side-by-side
Rate each summary and see comparison charts

## Project Screenshots
1. ![image](https://github.com/user-attachments/assets/1b243250-441c-4ada-af23-3c389d574a33)
2. ![image](https://github.com/user-attachments/assets/184d5185-83ac-4ca0-8e73-e86a249a3079)

