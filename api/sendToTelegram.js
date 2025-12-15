// api/send-to-telegram.js (Vercel serverless function)
import axios from 'axios';

/**
 * @param {import('@vercel/node').VercelRequest} req
 * @param {import('@vercel/node').VercelResponse} res
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    return res.status(500).json({ success: false, error: 'Server configuration error' });
  }

  const telegramMessage = `
📩 Новое сообщение из портфолио!

От: ${name}
Email: ${email}

Тема: ${subject}

Сообщение:
${message}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: telegramMessage,
    });
    return res.status(200).json({ success: true, message: 'Сообщение отправлено в Telegram!' });
  } catch (err) {
    console.error('Error sending to Telegram:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}