const React = require('react');
const Layout = require('./Layout.jsx')

class Events extends React.Component {
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
                    <ul class="dropdown navig">
                        SERVICES
                        <li class="dropdown-content">
                            <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=31c58ce3dd&attid=0.1&permmsgid=msg-f:1677469260532796062&th=17479167a3b1ca9e&view=att&disp=inline&realattid=f_kex372kh0&sadnir=2&saddbat=ANGjdJ_xjTLDmTTIhhDBY5EtyNNMiF1R2IT94_bkXx2YsBkgO3_HhI0zhQiCFpqzGFHBSRqIlcN-SPZXOlNmvliWyFjF2gtb9VRsyxMWWyZpCi68Ihp4ugMfORpCH8udZXM-5tY9oPRFfTXsaVm2UdFsolSkhlen1sHqKURcva5Ie2761XJQQQWs3r3dr6WAHhAjwJxnRh1X586mNUHcuDDzm7V597GHDwVxZc_YVkJd13v4WfDTNe84n0c1nVQABFrl0qpOaanmWqDq19CJrUXUpPC1stDNrlhgDwZS45qjG8nwL52m5nYtSXz9TBlAY1FiP-GjIyOW-2H4yd9xbwspY8Z6QZPjvSVXANv1Vd-t3VObVhevea2LUm0ta7n9AJuGaYqon_Q0q5EvdcozwY_bEaP7edvwS53B2gzBlJGBCEJPcNezutG5rA9BUTjBP7oXbt1RJNU8Wi9s2uldRCMNO-i04xLXZoune1-I6smPF4sER4v3keIIxD_q9LCh4ejfBCos3G1U1YFuN8THsPrRiFJJhC6aYXhkFWZYVct7wXHKjugh5TnsC3R0-94hSH8AeZTvVaoi7wfO0EYju5fzVZBtz5otTN3oJwlLDHiPWihxb_bye-f_lpy_6_wECcqOr3EyZTipe16nYzkhitG2u97MPjvhvCcm0aJsQ2tVHJ8gUuxVnk5VByn-mM0" type="application/x-google-chrome-pdf">MEMBERSHIP</a>
                        </li>
                    </ul>
                </ul>
                </nav>
                </div>
                <div class="events">
                    <h1 class="eventstitle">Our Weekly Online Live Sermon Schedule</h1>
                    <table class="table">
                        <tr>
                            <th class="heads">Days</th>
                            <th class="heads">Service</th>
                            <th class="heads">Start</th>
                            <th class="heads">End</th>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>Amharic Sermon</td>
                            <td>2:30 pm</td>
                            <td>4:00 pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>English Sermon</td>
                            <td>4:30 pm</td>
                            <td>6:00 pm</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>Evening Prayers In Amharic</td>
                            <td>7:00 pm</td>
                            <td>8:00 pm</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>Amharic Sermon</td>
                            <td>2:30 pm</td>
                            <td>4:00 pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>Amharic Sermon</td>
                            <td>2:30 pm</td>
                            <td>4:00 pm</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Sunday Morning Liturgy and Prayers</td>
                            <td>7:00 am</td>
                            <td>10:30 am</td>
                        </tr>
                    </table>
                    <p class="eventlink">Our Facebook Channel for a live stream of services can be found <a class="EL" href="https://www.facebook.com/Kidist-Arsema-wa-Kidus-Kirkos-EOTC-361541617371571/">here.</a></p>
                    <p class="eventlink">ቀጥታ የምናስተላልፋቸውን ፕሮግራሞች ለመከታተል <a class="EL" href="https://www.facebook.com/Kidist-Arsema-wa-Kidus-Kirkos-EOTC-361541617371571/">ይህን ይጫኑ</a></p>
                    <iframe src="https://calendar.google.com/calendar/embed?src=arsemakidist11%40gmail.com&ctz=America%2FNew_York" width="800" height="600" frameborder="0" scrolling="yes"></iframe>
                </div>
                </html>
            </Layout>
            )

        }
    }
    
    module.exports = Events