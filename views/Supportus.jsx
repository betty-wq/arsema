const React = require('react');
const Layout = require('./Layout.jsx')

class Supportus extends React.Component {
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
                <div class="pd">
                   
                   <p class="ams">"ይህንም እላለሁ። በጥቂት የሚዘራ በጥቂት ደግሞ ያጭዳል፥ በበረከትም የሚዘራ በበረከት ደግሞ ያጭዳል። እግዚአብሔር በደስታ የሚሰጠውን ይወዳልና እያንዳንዱ በልቡ እንዳሰበ ይስጥ፥ በኀዘን ወይም በግድ አይደለም። በተነ፥ ለምስኪኖች ሰጠ፥ ጽድቁ ለዘላለም ይኖራል ተብሎ እንደ ተጻፈ፥ እግዚአብሔር፥ ሁልጊዜ በነገር ሁሉ ብቃትን ሁሉ አግኝታችሁ ለበጎ ሥራ ሁሉ ትበዙ ዘንድ፥ ጸጋን ሁሉ ሊያበዛላችሁ ይችላል። ለዘሪ ዘርን ለመብላትም እንጀራን በብዙ የሚሰጥ እርሱም የምትዘሩትን ዘር ይሰጣችኋል ያበረክትላችሁማል፥ የጽድቃችሁንም ፍሬ ያሳድጋል፤ በእኛ በኩል ለእግዚአብሔር የምስጋና ምክንያት የሚሆነውን ልግስና ሁሉ እንድታሳዩ በሁሉ ነገር ባለ ጠጎች ትሆናላችሁ። የዚህ ረድኤት አገልግሎት ለቅዱሳን የሚጎድላቸውን በሙሉ የሚሰጥ ብቻ አይደለምና፥ ነገር ግን ደግሞ በብዙ ምስጋና ለእግዚአብሔር ይበዛል፤ "2ኛ ወደ ቆሮንቶስ ሰዎች 9:6-12</p>
                   <p>"Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. 7 Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. 8 And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work. 9 As it is written:" 2 Corinthians 9:6-12</p>
                   <div class="text-center">
                      <div class="bss">
                      <p class="ss">For direct deposit</p>
                       <p class="ams ss">ገንዘቡን ቀጥታ ወደ ባንክ ለማስገባት ይህን ይጠቀሙ</p>
                       
                       <p>Bank name: TD Bank</p>
                       <p>Account Name: M.S. Arsema EOTC</p>
                       <p>Account Number: 4316972846</p>
                       </div>
                       <div class="bssu">
                           <p class="ss">If you would like to send check</p>
                           <p class="ams ss">በቼክ ለመላክ</p>
                           <p>Payable to: St. Arsema EOTC</p>
                           <p>Address: 7308 Glendower Ct. Springfield, VA 22153</p>
                       </div>
                   <button class="bs">
                   <p>To send fund through PayPal:</p>
                       <a class="sb" href="https://www.paypal.com/biz/fund?id=D3VWRYR924UK2">
                   <img src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_cc_147x47.png" alt="Donate Button with Credit Cards" /></a></button>
                   </div>
                   <p class="ams">ገቢው ለቤተክርስትያን ግንባታ የሚውል ነው።</p>
                   <p>The Donation will be used for the construction of St. Archema Church.</p>
                </div>
                </div>
                </html>
                </Layout>
        )
    }
}

module.exports = Supportus