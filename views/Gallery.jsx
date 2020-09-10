const React = require('react');
const Layout = require('./Layout.jsx')

class Gallery extends React.Component {
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

    <div class="slider">
         <span id="slide-1"></span>
         <span id="slide-2"></span>
          <span id="slide-3"></span>
          <span id="slide-4"></span>
          <span id="slide-5"></span>
          <span id="slide-6"></span>
          <span id="slide-7"></span>
          <span id="slide-8"></span>
         <span id="slide-9"></span>
         <span id="slide-10"></span>
          <span id="slide-11"></span>
          <span id="slide-12"></span>
         <span id="slide-13"></span>
          <span id="slide-14"></span>
          <span id="slide-15"></span>
          <span id="slide-16"></span>
          <span id="slide-17"></span>
         <span id="slide-18"></span>
          <span id="slide-19"></span>
          <span id="slide-20"></span>
          <span id="slide-21"></span>
      
      <div class="image-container">
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/p720x720/43321013_989626261229767_7569700574380163072_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=BO50hoMK2XMAX8TdcYf&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=578a8f353a763e58bf296fd1df97d3ea&oe=5F5E85FE' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/12191331_437810056411393_3196548130845384991_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=xO6RkO6qYgAAX-mhTbh&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=8cabd4dd399980267be6f2a0b3d30d18&oe=5F5FEB4A' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/12189379_437809656411433_6513020218615971873_o.jpg?_nc_cat=108&_nc_sid=e007fa&_nc_ohc=JZwtHTm8pRcAX8Jvg1t&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=a58bca58d347d51135262572b729a54a&oe=5F60126E' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/21728883_746064812252581_6052365180939704078_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=xEy2SEKMahwAX-OfsR4&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=e0c88cc1ddce0ed8b61fc13c8e2c3f76&oe=5F5F09B6' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/21731730_746063728919356_7762122539528787199_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=EuqtXc0WMosAX9E2nl_&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=e557364e29950bc3a7b9326ca8f66245&oe=5F5F1286'class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/21743639_746063588919370_3348721550131980207_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=9PvMWM2Ek18AX9PBYBU&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=ce6c58241cf036932fa0f37871c6ba47&oe=5F61111A' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12359860_447623105430088_4366988943972057919_n.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=_fgJxbOcmtIAX8p1mJv&_nc_oc=AQll55aVszdu3-XVt83sjHiK4SyqHwNwq3-Fcw-8LvJmt1_vPZp4CFAWxFaqSxdYUI-F6mpOz5GaExzEY1RP3ldW&_nc_ht=scontent-iad3-1.xx&oh=5d48531f149e12e7383ee08e6743acec&oe=5F60E7C0' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/22382178_759296514262744_8347741549898011033_o.jpg?_nc_cat=104&_nc_sid=e007fa&_nc_ohc=YWWBV58bm0EAX_C-EW0&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=d769c2b64e77789503a87035eb0bb33e&oe=5F602D19' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/21728623_746065915585804_7168712193659538470_o.jpg?_nc_cat=108&_nc_sid=e007fa&_nc_ohc=CataK_eONEIAX-URdtN&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=b47c4d3772bfe342a741e700b5c0c8b6&oe=5F616635' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/s960x960/12191119_437808969744835_1870062648950342398_o.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_ohc=_5aRI4dvNWUAX9Rbmjh&_nc_ht=scontent-iad3-1.xx&_nc_tp=7&oh=dfbe3f587037195032b8639fb7987842&oe=5F60DD28' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/12182723_437804633078602_4268277664911769920_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=CRCqdNVRGYkAX9cBn6l&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=ecbecea8862b5c92b44e8927bc976310&oe=5F5FD98A' class="slide" width="500" height="300" ></img>
        <img src='https://i.imgur.com/AzhY565.png' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/12189445_437805069745225_1592691257865860578_o.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=6gBaMFJN-cMAX8HQxcQ&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=d215928db11725e9a7fc69905eaf39b7&oe=5F61DA17' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/12140142_437808486411550_411440853408762008_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=8FMP8VP6i9EAX8W9wWX&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=6adcfa0f5f78c6f41b58a1664af5d257&oe=5F5F307C' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/11222999_437803663078699_4673764723858209166_o.jpg?_nc_cat=108&_nc_sid=e007fa&_nc_ohc=ryM3ZXsyuikAX9RfcvO&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=1f08714ba8eee9f0baa484405b9617ff&oe=5F5F1FA0' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/12191236_437804386411960_8837329951756733982_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=yfqb9gL-UwAAX-XlDEr&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=1064f08ccd2b564c0c191db7b115a480&oe=5F6189F2' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/905555_437803983078667_8291944330661472497_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=MxhFBenO108AX_lTTPY&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=bf4fdf9e78ebc1b4d7976e7c0ac3ff13&oe=5F5F4E57' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/12185043_437803943078671_4398595640064279611_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=T2Mk5dJrkVQAX825Aoi&_nc_oc=AQnyrAlpMEJxvmj68xOW-C1rRGPyfrJD17HlAEIwpu8H6AtZ7cc6CTGdDRuBPyvABiJg035TkRk8fKWqPnhQ7Dih&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=36ab34527a1d0102f6c29c24ac4f64a3&oe=5F606A16' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/12185137_437803583078707_2357020144585409218_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=KPyphEITy9sAX8zHq4R&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=13197c10f7bf7a79467f07a3f385b31e&oe=5F60FC82' class="slide" width="500" height="300" ></img>
        <img src='https://i.imgur.com/c77xpmQ.png' class="slide" width="500" height="300" ></img>
        <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-0/p640x640/12052432_437808483078217_3170612978098723687_o.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_ohc=_mBHci0QctoAX-Nyc2G&_nc_oc=AQkTL8ORXHPK-luMWy36tFKF5uydPvPEaze5z62rjjDbrLPqRZOyl695Uouknxw5vprx1ARwr9U_f4y1g7uCmuPG&_nc_ht=scontent-iad3-1.xx&_nc_tp=6&oh=2d9b6f627ee99a8348e0d122fe97206a&oe=5F5FB5C7' class="slide" width="500" height="300" ></img>
      </div>
      <div class="buttons">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
        <a href="#slide-4"></a>
        <a href="#slide-5"></a>
        <a href="#slide-6"></a>
        <a href="#slide-7"></a>
        <a href="#slide-8"></a>
        <a href="#slide-9"></a>
        <a href="#slide-10"></a>
        <a href="#slide-11"></a>
        <a href="#slide-12"></a>
        <a href="#slide-13"></a>
        <a href="#slide-14"></a>
        <a href="#slide-15"></a>
        <a href="#slide-16"></a>
        <a href="#slide-17"></a>
        <a href="#slide-18"></a>
        <a href="#slide-19"></a>
        <a href="#slide-20"></a>
        <a href="#slide-21"></a>
      </div>
      
    </div>      
    <p class="ams ag">ተጨማሪ ምስሎችን ለመመልከት የፌስቡክ ገፃችንን ይጎብኙ</p> 
                </div>
            </Layout>
        )
    }
}

module.exports = Gallery