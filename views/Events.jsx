const React = require('react');
const Layout = require('./Layout.jsx')

class Events extends React.Component {
    render() {
        return(
            <Layout>
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
            </Layout>
            )

        }
    }
    
    module.exports = Events