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