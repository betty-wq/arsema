const React = require('react')

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes"/>
                <link rel="stylesheet" href="/style.css"></link>
                
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Markazi+Text&display=swap" rel="stylesheet"/>  
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"/> 
                <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap" rel="stylesheet"/> 
                
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <title>St. Arsema Church</title>
                </head>
                <body>
                    <div class="navi">
                    <div class="head">
                    <img class="churchlogo" src="https://i.imgur.com/Y9nxzum.jpg width:100%;"></img>
                    <h1 class="header">ቅድስት አርሴማ ወ ቅዱስ ቂርቆስ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስትያን</h1>
                <h1 class="header">Kidist Arsema Wà-Kidus Kirkos Ethiopian Orthodox Tewàhedo Church</h1>
                </div>
                      <h1>{this.props.name}</h1>
                      <main>
                          {this.props.children}
                      </main>
                      <footer class="footer">
                      <p class="cons"><a href="tel:+1-571-565-7931">+1 571-565-7931</a></p>
                      <p class="cons"><a href="mailto:Admin@arsemakirkoseotc.org? subject=subject text">Admin@arsemakirkoseotc.org</a></p>
                          <div>
                          <a href="https://www.facebook.com/Kidist-Arsema-wa-Kidus-Kirkos-EOTC-361541617371571/" class="fa fa-facebook"></a>
                          <a href="https://www.youtube.com/channel/UCUZymDgWY4FhYGZEWyf6aQQ/videos" class="fa fa-youtube"></a>
                          <a href="https://www.instagram.com/kidistarsemawa/?hl=en" class="fa fa-instagram"></a>
                              </div>
                      <div class="foot">Copyright © 2020 . St. Arsema Ethiopian Orthodox Church . Designed by Bethlehem Beshah</div>
                      </footer>
                    </div>
                    </body>
            </html>
        )
    }
}

module.exports = Layout