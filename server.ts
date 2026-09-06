import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy initialization of Gemini client
function getGenAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY environment variable is not set.");
  }
  return new GoogleGenAI({
    apiKey: apiKey || "dummy-key",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// --- API ROUTES ---

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "E-Lawyers Academy API", time: new Date().toISOString() });
});

// 1. AI Legal Learning Assistant
app.post("/api/ai/legal-assistant", async (req, res) => {
  try {
    const { question, context } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Question is required." });
    }

    const ai = getGenAI();
    const systemPrompt = `You are the E-Lawyers Academy AI Legal & Tax Assistant, specialized in Bangladesh Laws, Tax Regulations, and Legal Compliance.
Your knowledge covers:
- Income Tax Act 2023 & NBR e-Return Rules
- Value Added Tax (VAT) & Supplementary Duty Act 2012 & Mushak Forms (6.1, 6.3, 9.1)
- RJSC Company Registration & Corporate Filings
- Bangladesh Bar Council & High Court Enrollment Examination preparation
- Legal Drafting, Civil & Criminal Procedure Codes

Instructions:
- Provide accurate, practical, and clear explanations in professional Bengali & English.
- Use legal section citations where relevant (e.g., Section 272 Income Tax Act 2023, Rule 47 of VAT Rules).
- Provide step-by-step examples and reference relevant E-Lawyers Academy modules when helpful.`;

    const userPrompt = context
      ? `User context: ${context}\n\nStudent Question: ${question}`
      : `Student Question: ${question}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.3,
      },
    });

    const answer = response.text || "Sorry, I could not generate an answer at this time.";
    return res.json({ answer });
  } catch (err: any) {
    console.error("AI Assistant Error:", err);
    return res.status(500).json({
      error: "Failed to generate AI response. Please ensure GEMINI_API_KEY is configured.",
      details: err?.message,
    });
  }
});

// 2. AI Quiz Generator for Instructors
app.post("/api/ai/generate-quiz", async (req, res) => {
  try {
    const { topic, numQuestions = 5, difficulty = "Intermediate" } = req.body;
    if (!topic) {
      return res.status(400).json({ error: "Topic is required." });
    }

    const ai = getGenAI();
    const prompt = `Generate ${numQuestions} multiple choice questions (MCQs) for a course quiz on the topic: "${topic}". Difficulty level: ${difficulty}. 
Focus on practical Bangladesh law, tax rules, or corporate compliance. Include 4 options per question, mark the correct index (0-3), and provide a concise explanation citing law or section.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert Bangladesh Legal Education Exam Author. Return strictly JSON following the required schema.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            quizTitle: { type: Type.STRING },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  questionText: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  correctIndex: { type: Type.INTEGER },
                  explanation: { type: Type.STRING },
                },
                required: ["id", "questionText", "options", "correctIndex", "explanation"],
              },
            },
          },
          required: ["quizTitle", "questions"],
        },
      },
    });

    const quizData = JSON.parse(response.text || "{}");
    return res.json(quizData);
  } catch (err: any) {
    console.error("AI Quiz Generator Error:", err);
    return res.status(500).json({
      error: "Failed to auto-generate quiz. Please try again.",
      details: err?.message,
    });
  }
});

// 3. AI Personal Learning Roadmap Generator
app.post("/api/ai/generate-roadmap", async (req, res) => {
  try {
    const { profession, careerGoal, completedTopics } = req.body;
    const ai = getGenAI();

    const prompt = `Create a step-by-step personalized career & learning roadmap for a Bangladesh legal or tax learner.
User Role: ${profession || "Law Student / Trainee"}
Target Goal: ${careerGoal || "Pass High Court Exam & VAT Practitioner License"}
Already Completed: ${completedTopics?.join(", ") || "None"}

Generate a structured roadmap with milestone steps, recommended academy courses, estimated completion times, and essential skills to master.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            overview: { type: Type.STRING },
            estimatedMonths: { type: Type.INTEGER },
            milestones: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  stepNumber: { type: Type.INTEGER },
                  stageName: { type: Type.STRING },
                  description: { type: Type.STRING },
                  suggestedCourses: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  keyOutcome: { type: Type.STRING },
                },
                required: ["stepNumber", "stageName", "description", "suggestedCourses", "keyOutcome"],
              },
            },
          },
          required: ["title", "overview", "estimatedMonths", "milestones"],
        },
      },
    });

    const roadmapData = JSON.parse(response.text || "{}");
    return res.json(roadmapData);
  } catch (err: any) {
    console.error("AI Roadmap Error:", err);
    return res.status(500).json({
      error: "Failed to generate personal roadmap.",
      details: err?.message,
    });
  }
});

// 4. Payment Gateway Simulation Endpoint
app.post("/api/payments/checkout", (req, res) => {
  const { courseId, courseTitle, amount, paymentMethod, mobileNumber, txnId } = req.body;

  if (!courseId || !amount || !paymentMethod) {
    return res.status(400).json({ error: "Missing checkout information." });
  }

  // Simulate automated local gateway payment approval
  const transactionId = txnId || `TXN-${paymentMethod.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
  const enrollmentDate = new Date().toISOString();

  return res.json({
    success: true,
    status: "PAID",
    transactionId,
    courseId,
    courseTitle,
    amount,
    paymentMethod,
    mobileNumber: mobileNumber || "01711000000",
    message: `Payment of ৳${amount} via ${paymentMethod} was successful. Enrollment activated!`,
    enrollmentDate,
  });
});

// --- VITE MIDDLEWARE & STATIC SERVING ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[E-Lawyers Academy] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
