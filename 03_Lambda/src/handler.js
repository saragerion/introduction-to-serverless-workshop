const serenaGifs = [
    'https://media.giphy.com/media/u3xrWx0ni9EZy/giphy.gif',
    'https://media.giphy.com/media/l41YvkBOHfmsU6Gas/giphy.gif',
    'https://media.giphy.com/media/11ijruGYTIsSxG/giphy.gif',
    'https://media.giphy.com/media/XoH4V2Qb0Scg0/giphy.gif',
    'https://media.giphy.com/media/l0ExbLIvrI5VD58D6/giphy.gif',
    'https://media.giphy.com/media/OQNPbOj5QQcFy/giphy.gif',
    'https://media.giphy.com/media/911Uzl1kdKnJu/giphy.gif'
];

const getHtml = () => {
    const serenaGifURL = serenaGifs[Math.floor(Math.random() * serenaGifs.length)];

    return `<html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <style>
                        html, body, #container {
                            height: 100%;
                        }
                        #container {
                            width: 100%;
                            position: relative;
                            background-color: #000;
                        }
                        #container > img.img-logo {
                            width: 40px;
                            max-width: 100px;
                            position: absolute;
                            top: 20px;
                            left: 20px;
                            margin: auto;
                        }
                        #container > img.img-gif {
                            width: 100%;
                            max-width: 500px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            margin: auto;
                        }
                        #container p {
                            width: 100%;
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: 89px;
                            margin: auto;
                            color: #f8fc00;
                            text-transform: uppercase;
                            font-family: Arial, serif;
                            text-align: center;
                            font-size: 60px;
                        }
                    </style>
                </head>
                <body>
                    <div id="container">
                        <img class="img-logo" src="https://d1sgwhnao7452x.cloudfront.net/dazn_light.png" alt="DAZN logo">
                        <img class="img-gif" src="${ serenaGifURL }" alt="Serena Williams">
                        <p>Change the game</p>
                    </div>
                </body>
            </html>`;
};

exports.handler = async () => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: getHtml(),
    };
};
