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
                    <ul class="dropdown navig">
                        SERVICES
                        <li class="dropdown-content">
                            <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=31c58ce3dd&attid=0.1&permmsgid=msg-f:1677469260532796062&th=17479167a3b1ca9e&view=att&disp=inline&realattid=f_kex372kh0&sadnir=2&saddbat=ANGjdJ_xjTLDmTTIhhDBY5EtyNNMiF1R2IT94_bkXx2YsBkgO3_HhI0zhQiCFpqzGFHBSRqIlcN-SPZXOlNmvliWyFjF2gtb9VRsyxMWWyZpCi68Ihp4ugMfORpCH8udZXM-5tY9oPRFfTXsaVm2UdFsolSkhlen1sHqKURcva5Ie2761XJQQQWs3r3dr6WAHhAjwJxnRh1X586mNUHcuDDzm7V597GHDwVxZc_YVkJd13v4WfDTNe84n0c1nVQABFrl0qpOaanmWqDq19CJrUXUpPC1stDNrlhgDwZS45qjG8nwL52m5nYtSXz9TBlAY1FiP-GjIyOW-2H4yd9xbwspY8Z6QZPjvSVXANv1Vd-t3VObVhevea2LUm0ta7n9AJuGaYqon_Q0q5EvdcozwY_bEaP7edvwS53B2gzBlJGBCEJPcNezutG5rA9BUTjBP7oXbt1RJNU8Wi9s2uldRCMNO-i04xLXZoune1-I6smPF4sER4v3keIIxD_q9LCh4ejfBCos3G1U1YFuN8THsPrRiFJJhC6aYXhkFWZYVct7wXHKjugh5TnsC3R0-94hSH8AeZTvVaoi7wfO0EYju5fzVZBtz5otTN3oJwlLDHiPWihxb_bye-f_lpy_6_wECcqOr3EyZTipe16nYzkhitG2u97MPjvhvCcm0aJsQ2tVHJ8gUuxVnk5VByn-mM0" type="application/x-google-chrome-pdf">MEMBERSHIP</a>
                        </li>
                    </ul>
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