const React = require('react');
const Layout = require('./Layout.jsx')

class Contact extends React.Component {
    render() {
        return(
            <Layout>
                <html>
                <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes"/>
                </head>
                <div class="contactainer">
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
                <div class="contact">
                   <h1 class="contitle">Kidist Arsema Wà-Kidus Kirkos Ethiopian Orthodox Tewàhedo Church</h1>
                   <p class="con">6301 Beulah St.</p>
                   <p class="con">Alexandria, VA</p>
                   <p class="con">22315</p>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.2029241049668!2d-77.1477295843978!3d38.781982161343606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b27c5498da75%3A0x868f03e11374c227!2s6301%20Beulah%20St%2C%20Franconia%2C%20VA%2022310!5e0!3m2!1sen!2sus!4v1598980643778!5m2!1sen!2sus" width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                   <h2 class="contactmail">Mailing Address</h2>
                   <p class="con">7308 Glendower Ct.</p>
                   <p class="con">Springfield, VA</p>
                   <p class="con">22153</p>
                   <h3 class="more">For more information</h3>
                   <p class="con"><a href="mailto:Admin@arsemakirkoseotc.org? subject=subject text">Admin@arsemakirkoseotc.org</a></p>
                   <p class="con"><a href="tel:+1-571-565-7931">+1 571-565-7931</a></p>
                </div>
                </div>
                </html>
                </Layout>
        )
    }
}

module.exports = Contact