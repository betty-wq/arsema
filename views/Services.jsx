const React = require('react');
const Layout = require('./Layout.jsx')

class Services extends React.Component {
    render() {
        return(
            <Layout>
                <html>
                <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes"/>
                </head>
            <div class="mainpage">
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
                    <div class="service">
                    <img id="upper_left" class="rounded float-left" src="https://afanoromobatch.files.wordpress.com/2017/01/saint-arsema.jpg?w=168&h=224"></img>
                    <img id="upper_right" class="rounded float-right" src="https://telegra.ph/file/7b1b9e3fc418d124792df.jpg"></img>
                            <div class="service_div">
                                <p>If you would like to get one of the following services you can fill out the form below and send it directly to our email address.</p>
                                <p>ከዚህ በታች ያለዉን ፎርም በመሙላት ቀጥታ ወደ ኢሜላችን መላክ ትችላላችሁ።</p>
                            <ul class="service_ul">
                                <li>
                                    <a href="/logs/Membership"><img src="https://i.imgur.com/ucD49LN.jpg" width="50"></img></a>
                                    <a href="/logs/Membership">Membership form</a></li>
                                <li>
                                <a href="/logs/Baptism"><img src="https://i.imgur.com/ucD49LN.jpg" width="50"></img></a>
                                    <a href="/logs/Baptism">Baptismal service request form</a></li>
                                <li>
                                <a href="/logs/Wedding"><img src="https://i.imgur.com/ucD49LN.jpg" width="50"></img></a>
                                    <a href="/logs/Wedding">Wedding service request form</a></li>
                            </ul>
                            <p>Other Services We Give</p>
                            <p>ሌሎች የምንሰጣቸው አገልግሎቶች</p>
                            <ul class="service_ul2">
                                <li>Sunday School</li>
                                <li>Funeral Prayer</li>
                            </ul>
                            </div>
                    </div>
                    </div>
                </html>
            </Layout>
        )
    }
}

module.exports = Services