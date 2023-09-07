 
const express = require('express');
const app = express();
const port = 25461;

///get.php?username=emanuel&password=emanuel&type=m3u_plus&output=mpegts
/*app.get('/get.php?username', function (req, res) {
    res.download('lista.m3u8');
});
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
*/


// Ruta para /get.php
app.get('/get.php', (req, res) => {
  const { username, password, type, output } = req.query;

  // Verificar los parámetros de consulta (username, password, type, output)
  if (!username || !password || !type || !output) {
    return res.status(400).json({ error: 'Faltan parámetros obligatorios.' });
  }

  // Supongamos que aquí generamos el contenido del archivo M3U8
  const m3u8Content = `
  #EXTM3U
  #EXTINF:-1,Willax HD
  https://ott1.hdlatam.tv/live_abr/Stream2/playlist.m3u8
  
  #EXTINF:-1,Latina HD
  https://ott2.hdlatam.tv/live_abr/Stream13/playlist.m3u8
  
  #EXTINF:-1,BHTv
  https://ott2.hdlatam.tv/live_abr/Stream13/playlist.m3u8
  
  #EXTINF:-1,América HD
  https://ott2.hdlatam.tv/live_abr/Stream25/playlist.m3u8
  
  #EXTINF:-1,Panamericana HD
  https://ott1.hdlatam.tv/live_abr/Stream3/playlist.m3u8
  
  #EXTINF:-1,Exitosa HD
  https://ott1.hdlatam.tv/live_abr/Stream5/playlist.m3u8
  
  #EXTINF:-1,Exitosa HD
  https://ott1.hdlatam.tv/live/TVPERU_SD/playlist.m3u8
  
  #EXTINF:-1,ATV+NOTICIAS
  https://ott1.hdlatam.tv/live_abr/Stream12/playlist.m3u8
  
  #EXTINF:-1,ATV HD
  https://ott2.hdlatam.tv/live_abr/Stream17/playlist.m3u8
  
  #EXTINF:-1,La Tele HD
  https://ott2.hdlatam.tv/live_abr/Stream15/playlist.m3u8
  
  #EXTINF:-1,Viva TV
  https://ott1.hdlatam.tv/live_abr/Stream11/playlist.m3u8
  
  `;

  // Configurar la respuesta como un archivo M3U8
  
  res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
  res.setHeader('Content-Disposition', `attachment; filename=tv_channels_${username}_plus.m3u8`);
  res.send(m3u8Content);
});

// Puerto en el que se ejecutará la API

app.listen(port, () => {
  console.log(`La API está escuchando en el puerto ${port}`);
});
