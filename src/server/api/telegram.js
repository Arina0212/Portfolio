const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/send-to-telegram', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Получаем из переменных окружения Vercel
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({ 
        success: false, 
        error: 'Server configuration error' 
      });
    }

    const telegramMessage = `
📩 Новое сообщение из портфолио!

От: ${name}
Email: ${email}

Тема: ${subject}

Сообщение:
${message}
    `;

    const response = await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: telegramMessage,
      }
    );

    res.json({ 
      success: true, 
      message: 'Сообщение отправлено в Telegram!' 
    });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

module.exports = router;
