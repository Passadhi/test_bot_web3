const express = require('express');
var exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const { request } = require('express');
const TelegramBot = require('node-telegram-bot-api');
const { Telegraf } = require('telegraf');
// let botToken = '7436762406:AAHlkeqMQdalXJ3-OICv-Xw6Qc24faD8DQ0';
// const bot = new TelegramBot('7436762406:AAHlkeqMQdalXJ3-OICv-Xw6Qc24faD8DQ0', { polling: false });
token = '7436762406:AAHlkeqMQdalXJ3-OICv-Xw6Qc24faD8DQ0';
const bot = new Telegraf(token);



const app = express();

var exphbs  = require('express-handlebars');
app.set('view engine', 'hbs');


const port = 3000;
let botToken = '7436762406:AAHlkeqMQdalXJ3-OICv-Xw6Qc24faD8DQ0';

app.get('/', (request, response) => {
    // response.redirect('/info?name=Vladimir')
    // console.log(req,res)
    response.render('index')
})

// app.use(bodyParser.json());



app.use(express.json());

app.post('/send-message', (req, res) => {
  
    // const username = req.body.username; // Получаем @username пользователя
    const username = 'schuikin'; // Получаем @username пользователя
    const message = req.body.message; // Получаем сообщение для отправки
    console.log(message)

    bot.telegram.sendMessage(1046852462, message)
.then(() => console.log('Message sent successfully'))
.catch(error => console.log('Error sending message: ' + error));
});

// bot.launch();





// app.post('/send-message', (req, res) => {
 
//     const {  message } = req.body;
//     console.log({  message })

//     bot.sendMessage("@schuikin", message)
//         .then(() => res.send('Message sent successfully'))
//         .catch(error => res.status(500).send('Error sending message: ' + error));
// });


// app.post('/send-message', (req, res) => {
//     const { message } = req.body;
//     console.log( req.body)
//     const botToken = 'YOUR_TELEGRAM_BOT_TOKEN_HERE';
//     const chatId = 'YOUR_TELEGRAM_CHAT_ID_HERE';

//     const url = `https://api.telegram.org/7436762406:AAHlkeqMQdalXJ3-OICv-Xw6Qc24faD8DQ0/sendMessage?chat_id=@schuikin&text=${message}`

//     fetch(url, { method: 'GET' })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         if (data.ok) {
//             res.status(200).json({ success: true });
//         } else {
//             res.status(500).json({ error: 'Failed to send message' });
//         }
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//         res.status(500).json({ error: 'Failed to send message' });
//     });

    
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});