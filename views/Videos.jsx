const React = require('react');
const Layout = require('./Layout.jsx')

class Videos extends React.Component {
    render() {
        return(
            <Layout>
                <html>
                <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes"/>
                </head>
                <div class="VC">
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
                    <li class="navig"><a class="english" href="/logs/Gallery">GALLERY</a>
                    <a class="amharic" href="/logs/Gallery">ምስል ክምችት</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Services">SERVICES</a>
                    <a class="amharic" href="/logs/Services">የምንሰጣቸዉ አገልግሎቶች</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Contact">CONTACT</a>
                    <a class="amharic" href="/logs/Contact">ያግኙን</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Supportus">SUPPORT US</a>
                    <a class="amharic" href="/logs/Supportus">ድጋፍ መስጫ</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Volunteer">VOLUNTEER</a>
                    <a class="amharic" href="/logs/Volunteer">ነፃ አገልግሎት መስጫ</a>
                    </li>
                </ul>
                </nav>
      <div class="v1">
          <p><a href="https://www.facebook.com/361541617371571/videos/135829757860666">"I have no one to help me" John 5:7</a></p>
      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F361541617371571%2Fvideos%2F135829757860666%2F&show_text=0&width=560" width="700" height="315" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
      <p><a href="https://www.facebook.com/100009225130963/videos/2679619172355561">"አታመንዝር" ስምንተኛ ትዕዛዝ</a></p>
      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F100009225130963%2Fvideos%2F2679619172355561%2F&show_text=0&width=560" width="700" height="314" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
      <p><a href="https://www.facebook.com/100009225130963/videos/2702749450042533">Fruits of Arsema and Kirkos EOTC</a></p>
      
      <p class="pv">ተጨማሪ ቪዲዮችን ለመመልከት የፌስቡክ ገፃችንን ይመልከቱ<a href="https://www.youtube.com/channel/UCUZymDgWY4FhYGZEWyf6aQQ/videos" class="fa fa-youtube"></a></p>
      </div>  
              </div>
              </html>
            </Layout>
        )
    }
}

module.exports = Videos