const React = require('react');
const Layout = require('./Layout.jsx')

class Gallery extends React.Component {
    render() {
        return(
            <Layout>
                <html>
                <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes"/>
                </head>
                <div>
                <nav>
                <ul class="navi">
                    <li class="navig"><a class="english" href="/logs">HOME</a>
                    <a class="amharic" href="/logs">መግቢያ</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Aboutus">ABOUT US</a>
                    <a class="amharic" href="/logs/Aboutus">ስለ እኛ</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Events">EVENTS</a>
                    <a class="amharic" href="/logs/Events">ክስተቶች</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Gallery">PHOTOS</a>
                    <a class="amharic" href="/logs/Gallery">ምስሎች</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Videos">VIDEO</a>
                    <a class="amharic" href="/logs/Videos">ቪዲዮ</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Contact">CONTACT</a>
                    <a class="amharic" href="/logs/Contact">ያግኙን</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Supportus">SUPPORT US</a>
                    <a class="amharic" href="/logs/Supportus">ድጋፍ መስጫ</a>
                    </li>
                </ul>
                </nav>

                <div class="images">
                    <div class="image">
                    <img src='https://i.imgur.com/AzhY565.png' width="100%" height="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/jUREyjq.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/ZPoBT6m.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/3X9jscb.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/FW9Jiri.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/Fi0ZJZE.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/tHXGWZA.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/daOZHQh.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/O7CMB3B.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/xLv2CxU.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/ABXOPPn.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/fOzs6kQ.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/PUbknnV.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/uPTdWIZ.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/CR8MBWo.jpg' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/9CWEK5D.jpg' width="100%"/>
                    </div>
                    <div class="image">
                        <img src="https://i.imgur.com/IPKtQpY.jpg" width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/c77xpmQ.png' width="100%"/>
                    </div>
                    <div class="image">
                    <img src='https://i.imgur.com/yaGsTjD.jpg' width="100%"/>
                    </div>
                    <div class="image">
                        <img src="https://i.imgur.com/CT9WwPu.jpg" width="100%"/>
                    </div>
               </div>
      
               <button class="ams ag"><a href="https://www.facebook.com/pg/Kidist-Arsema-wa-Kidus-Kirkos-EOTC-361541617371571/photos/?ref=page_internal">ተጨማሪ ምስሎችን ለመመልከት ይህንን ይጫኑ</a></button> 
    
                </div>
                </html>
            </Layout>
        )
    }
}

module.exports = Gallery