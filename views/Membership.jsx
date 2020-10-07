const React = require('react');
const Layout = require('./Layout.jsx')

class Membership extends React.Component {
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
                <div class="member">
                    <img id="upper_left" class="rounded float-left" src="https://afanoromobatch.files.wordpress.com/2017/01/saint-arsema.jpg?w=168&h=224"></img>
                    <img id="upper_right" class="rounded float-right" src="https://i.imgur.com/BCvUJWP.gif"></img>
                    <p class="memp">የመካነ ሰማዕት ቅድስት አርሴማ ወቅዱስ ቂርቆስ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ
                     ቤተክርስቲያን</p>
                     <p class="memp">Mekane Semait Kidist Arsema Wa’ Kidus Kirkos Ethiopian Orthodox Church</p>
                    <p class="memp">የአባልነት መመዝገቢያ ቅፅ</p>
                    <p class="memp">Membership form</p>
                <form action="mailto:Admin@arsemakirkoseotc.org" method="post" enctype="text/plain">
                     Membership <input type="checkbox" name="membership" required></input><br/>
                     Name / ሙሉ ስም<br/>
                    <input class="form-group form-control" type="text" name="name" placeholder="name"></input><br/>
                    Baptism Name / ክርስትና ስም<br/>
                    <input class="form-group form-control" type="text" name="baptism name" placeholder="baptism name"></input><br/>
                    Address / አድራሻ<br/>
                    <input class="form-group form-control" type="text" name="address" placeholder="address"></input><br/>
                    Telephone / ስልክ ቁጥር<br/>
                    <input class="form-group form-control" type="tel" name="phone"
                      required placeholder="phone number"></input><br/>
                     E-mail address / ኢሜል አድራሻ<br/>
                     <input class="form-group form-control" type="text" name="e-mail" placeholder="e-mail"></input><br/>
                     Monthly Contribution / ወርሃዊ መዋጮ <br/>
                     $20 <input type="checkbox" name="$20"></input><br/> 
                     $25 <input type="checkbox" name="$25"></input><br/> 
                     $30 <input type="checkbox" name="$30"></input><br/>
                     $35 <input type="checkbox" name="$35"></input><br/> 
                     $40 <input type="checkbox" name="$40"></input><br/> 
                     $50 <input type="checkbox" name="$50"></input><br/> 
                     $100 <input type="checkbox" name="$100"></input><br/> 
                     ሌላ <input type="number" name="other"></input><br/>
                     Payment method / የሚጠቀሙበት መንገድ <br/>
                     በጥሬ ገንዘብ / Cash <input type="checkbox" name="cash"></input><br/> 
                     በቼክ / Check <input type="checkbox" name="check"></input><br/> 
                     በክሬዲት ካርድ / Credit Card <input type="checkbox" name="card"></input><br/> 
                     በባንክ ቀጥታ / Direct Deposit <input type="checkbox" name="direct"></input><br/>
                     Area of profession or service you would like to take part / ሌላ አስተፅዋፅኦ ሊያደርጉ የሚፈልጉበት የአገልግሎት ዘርፍ<br/>
                     <input class="form-group form-control" type="text" name="other" placeholder="other"></input><br/>
                     Signature / ፊርማ<input class="form-group form-control" type="text" name="signature" id="signature" placeholder="your name"></input> Date / ቀን <input type="date" id="start" name="today's date" value="2020-10-01" min="2019-01-01" max="2030-12-31" required ></input><br/>
                     <input type="submit" value="Send"></input>
                     <input type="reset" value="Reset"></input>
                 </form>
                 <p class="memp">6701 Franconia Rd. Alexandria, VA 22310 Tel: 202 680 4182 Email: Karsemachurch@gmail.com Like us on facebook: Kidist Arsema-wa Kirkos Eotc</p>
                </div>
            </div>
            </html>
        </Layout>
        )
    }
}

module.exports = Membership