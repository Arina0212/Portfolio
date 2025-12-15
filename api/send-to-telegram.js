// api/send-to-telegram.js
const axios = require('axios'); // Убедитесь, что axios установлен!

module.exports = async (req, res) => {
  // Разрешаем только POST-запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Настраиваем CORS заголовки
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  try {
    const { name, email, subject, message } = req.body;

    // Получаем секреты из переменных окружения Vercel
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // Проверяем, что они существуют
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('ERROR: Missing Telegram credentials in environment variables.');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error. Missing API keys.'
      });
    }

    // Форматируем сообщение
    const telegramMessage = `
📩 *Новое сообщение из портфолио!*

*От:* ${name}
*Email:* ${email}

*Тема:* ${subject}

*Сообщение:*
${message}
    `;

    // Отправляем в Telegram
    const telegramResponse = await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }
    );

    // Успешный ответ
    console.log('SUCCESS: Message sent to Telegram:', telegramResponse.data);
    return res.status(200).json({
      success: true,
      message: 'Notification sent successfully!'
    });

  } catch (error) {
    // Логируем любую ошибку
    console.error('FUNCTION ERROR:', error.message, error.response?.data);
    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
};