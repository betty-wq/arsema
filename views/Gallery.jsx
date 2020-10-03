const React = require('react');
const Layout = require('./Layout.jsx');


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
                <div class="gallery_main">
                <div class="gallery_card">
                    <a href="/logs/Photo">
                    <img src="https://thumbs.dreamstime.com/b/black-icon-camera-cartoon-vintage-vector-graphic-sdesign-93594588.jpg"></img>
                    </a>
                </div>
                <div class="gallery_card">
                    <a href="/logs/Videos">
                    <img src="https://www.netclipart.com/pp/m/176-1769148_btsmoviemaking-com-clip-art-old-film-camera.png"></img>
                    </a>
                </div>
                </div>
                </html>
                </Layout>
        )
    }
}

module.exports = Gallery