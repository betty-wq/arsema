const React = require('react');
const Layout = require('./Layout.jsx')

class Baptism extends React.Component {
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
                                <p class="memp">የክርስትና አገልግሎት መጠየቂያ ቅፅ</p>
                                <p class="memp">Baptismal Service Application form</p>
                           <form action="mailto:Admin@arsemakirkoseotc.org" method="post" enctype="text/plain">
                                Baptism <input type="checkbox" name="Baptism" required></input><br/>
                                Applicant name / የአመልካች ስም<br/>
                                <input class="form-group form-control" type="text" name="applicant name" placeholder="applicant name"></input><br/>
                                Address / አድራሻ<br/>
                                <input class="form-group form-control" type="text" name="address" placeholder="address"></input><br/>
                                Telephone / ስልክ ቁጥር<br/>
                                <input class="form-group form-control" type="tel" name="phone"
                                required placeholder="phone number"></input><br/>
                                E-mail address / ኢሜል አድራሻ<br/>
                                <input class="form-group form-control" type="text" name="e-mail" placeholder="e-mail"></input><br/>
                                <p class="bapt">ክርስትና ስለሚቀበለው ሰው መረጃ / Information on a person to be baptized</p><br/>
                                Name / ሙሉ ስም<br/>
                                <input class="form-group form-control" type="text" name="name" placeholder="name"></input><br/>
                                Date of birth / የትውልድ ቀን <input type="date" id="start" name="date of birth" value="2020-10-01" min="2019-01-01" max="2030-12-31" required></input><br/>
                                Date of baptism / የጥምቀት ቀን <input type="date" id="start" name="date of baptism" value="2020-10-01" min="2019-01-01" max="2030-12-31" required></input><br/>
                                Sex / ፆታ <input type="checkbox" name="male"></input> ወንድ / Male <input type="checkbox" name="female"></input> ሴት / Female <br/>
                                Mother's name / የእናት ሥም<br/>
                                <input class="form-group form-control" type="text" name="mother's name" placeholder="mother's name"></input><br/>
                                Father's name / የአባት ሥም<br/>
                                <input class="form-group form-control" type="text" name="father's name" placeholder="father's name"></input><br/>
                                God father / Mother name / የክርስትና አባት / እናት ሥም<br/>
                                <input class="form-group form-control" type="text" name="God father / mother's name" placeholder="God father / mother's name"></input><br/>
                                Signature / ፊርማ<input class="form-group form-control" type="text" name="signature" id="signature" placeholder="your name"></input> Date / ቀን <input type="date" id="start" name="today's date" value="2020-10-01" min="2019-01-01" max="2030-12-31" required></input><br/>
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

module.exports = Baptism
