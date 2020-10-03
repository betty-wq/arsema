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
                    <li class="navig"><a class="english" href="/logs/Gallery">GALLERY</a>
                    <a class="amharic" href="/logs/Gallery">ምስል ክምችት</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Contact">CONTACT</a>
                    <a class="amharic" href="/logs/Contact">ያግኙን</a>
                    </li>
                    <li class="navig"><a class="english" href="/logs/Supportus">SUPPORT US</a>
                    <a class="amharic" href="/logs/Supportus">ድጋፍ መስጫ</a>
                    </li>
                    
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
                    <h2 class="eventh2">ሌሎች መረጃዎች</h2>
                    <ul class="eventul">
                        <li><a href="http://apps.eotcmk.org/gitsawe/Feasts.aspx">በዓላት እና አጽዋማት</a></li>
                    </ul>
                </div>
                </html>
            </Layout>
            )

        }
    }
    
    module.exports = Events