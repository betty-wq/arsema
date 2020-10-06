const React = require('react');
const Layout = require('./Layout.jsx')

class Wedding extends React.Component {
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
                    
                </ul>
                </nav>
                <div class="member">
                    <img id="upper_left" class="rounded float-left" src="https://afanoromobatch.files.wordpress.com/2017/01/saint-arsema.jpg?w=168&h=224"></img>
                    <img id="upper_right" class="rounded float-right" src="https://i.imgur.com/BCvUJWP.gif"></img>
                    <p class="memp">የመካነ ሰማዕት ቅድስት አርሴማ ወቅዱስ ቂርቆስ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ
                     ቤተክርስቲያን</p>
                     <p class="memp">Mekane Semait Kidist Arsema Wa’ Kidus Kirkos Ethiopian Orthodox Church</p>
                    <p class="memp">የጋብቻ አገልግሎት መጠየቂያ ቅፅ</p>
                    <p class="memp">Wedding Service Application Form</p>
                <form action="mailto:Admin@arsemakirkoseotc.org" method="post" enctype="text/plain">
                     Wedding <input type="checkbox" name="membership" required></input><br/>
                     Applicant name / የአመልካች ሥም<br/>
                    <input class="from-group form-control" type="text" name="applicant name" placeholder="applicant name" size="80"></input><br/>
                    Address / አድራሻ<br/>
                    <input class="from-group form-control" type="text" name="address" placeholder="address" size="80"></input><br/>
                    Telephone / ስልክ ቁጥር<br/>
                    <input class="from-group form-control" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required placeholder="phone number" size="80"></input><br/>
                     E-mail address / ኢሜል አድራሻ<br/>
                     <input class="from-group form-control" type="text" name="e-mail" placeholder="e-mail" size="80"></input><br/>
                     Spritual Father Name / የንሰሐ አባት ስም<br/>
                     <input class="from-group form-control" type="text" name="spritual father name" placeholder="spritual father name" size="80"></input><br/>
                     Date of service / የአገልግሎቱ ቀን <input type="date" id="start" name="date of service" value="2020-10-01" min="2019-01-01" max="2030-12-31" required size="80"></input><br/>
                     Intended prayer location / አገልግሎቱ የተጠየቀበት ቦታ <input type="checkbox" name="Inside the church"></input> ቤተ ክርስቲያን ውስጥ / Inside the church <input type="checkbox" name="female"></input> ሌላ ቦታ / Other Location__Address / አድራሻ<br/>
                    <input class="from-group form-control" type="text" name="address" placeholder="address" size="80"></input><br/>
                     <p class="wed">በሙሽሪት የሚሞላ / To be filled by bride</p>
                     Name / ሙሉ ስም<br/>
                    <input class="from-group form-control" type="text" name="bride name" placeholder="bride name" size="80"></input><br/>
                    Date of birth / የትውልድ ቀን
                    <input type="date" id="start" name="date of birth" value="2020-10-01" min="1900-01-01" max="2030-12-31" required size="80"></input><br/>
                    Place of birth / የትውልድ ቦታ<br/>
                    <input class="from-group form-control" type="text" name="place of birth" placeholder="place of birth" size="80"></input><br/>
                    Baptismal name / የክርስትና ሥም<br/>
                    <input class="from-group form-control" type="text" name="baptismal name" placeholder="baptismal name" size="80"></input><br/>
                    Nationality / ዜግነት<br/>
                    <input class="from-group form-control" type="text" name="nationality" placeholder="nationality" size="80"></input><br/>
                    <p class="wed">በሙሽራው የሚሞላ / To be filled by bride groom</p>
                     Name / ሙሉ ስም<br/>
                    <input class="from-group form-control" type="text" name="bride groom name" placeholder="bride groom name" size="80"></input><br/>
                    Date of birth / የትውልድ ቀን
                    <input type="date" id="start" name="date of birth" value="2020-10-01" min="1900-01-01" max="2030-12-31" required size="80"></input><br/>
                    Place of birth / የትውልድ ቦታ<br/>
                    <input class="from-group form-control" type="text" name="place of birth" placeholder="place of birth" size="80"></input><br/>
                    Baptismal name / የክርስትና ሥም<br/>
                    <input class="from-group form-control" type="text" name="baptismal name" placeholder="baptismal name" size="80"></input><br/>
                    Nationality / ዜግነት<br/>
                    <input class="from-group form-control" type="text" name="nationality" placeholder="nationality" size="80"></input><br/>
                    Aditional information on the service / ስለ አገልግሎቱ ተጨማሪ መረጃ<br/>
                    <input class="from-group form-control" type="text" name="additional info" placeholder="additional info" size="80"></input><br/>
                    Signature / ፊርማ<input class="from-group form-control" type="text" name="signature" id="signature" placeholder="your name" size="80"></input><br/>
                     Date / ቀን <input type="date" id="start" name="today's date" value="2020-10-01" min="2019-01-01" max="2030-12-31" required size="80"></input><br/>
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

module.exports = Wedding