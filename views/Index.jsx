const React = require('react');
const Layout = require('./Layout.jsx')

class Index extends React.Component {
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
                <div class="welcometitle">
                    <img class="cross" src="https://i.imgur.com/qzcLHTn.png"></img>
                <h1 class=" animated bounce infinite">እንኳን ደህና መጡ</h1>
                <h1 class="welcomeh">Welcome!</h1>
                <p>We are an Ethiopian Orthodox Church located in Alexandria Virginia. please visit our about us page to learn more.</p>
                </div>
                <div class="welcome">
                <img class="welcomeimage" src="https://i.pinimg.com/736x/ae/ae/ee/aeaeee67cd894c08b1b7b057413a75a1.jpg"></img>
                <div class="welcometext">
                    <h2 class="welcomehead">ቅድስት አርሴማ</h2>
                    <p class="mainam">ቅድስት አርሴማ ፣ ሂርፕሲም (አርሜኒያዊት) እንዲሁም ሪሂፕሲም ፣ ሪፕሲም ፣ አርብሲማ ወይም አርሴማ ተብላ የምትጠራ ሮማዊ መሰረት ያላት ሰማዕት ነበረች። እርሷ እና ባልደረቦችዋ የሰማዕትነት አክሊል የተቀዳጁ የመጀመሪያዎቹ የአርሜንያ ሰማዕታት እንደሆኑ ተደርገው ይታያሉ ።</p>
                    <p class="mainam">እናታችን ከአባቷ ከቅዱስ ቴዎድሮስና ከእናቷ ቅድስት አትናሲያ በስዕለት ተወለደች ። ቤተሰቦቿ እግዚአብሔርን በቅንነት ያገለግሉ ከነበሩ ከከበሩ ካህናት ወገን እንደነበሩ የገድሏ መጽሐፍ ይነግረናል ። ሰማዕቷ ቅድስት አርሴማ ቅዱሳት መጻሕፍትን ከቤተሰቦቿ በሚገባ የተማረች፤ የተማረችውንም በተግባር የተረጎመች፤ 
                        በጸሎት ሕይወት የምትተጋ ከቅዱሳት አንስት አንዷ ናት ።</p>
                        <h2 class="welcomehead">ገድልዋ እደሚያስረዳው</h2>
                    <p class="mainam">ድንግል እናታችን ቅድስት አርሴማን በምን እንመስላታለን? እርሷ በአድማስ ላይ ተቀምጦ እንደሚያበራ እንቁ ናትና ክብሯ ብዙ ነው ። 
                        መድኃኒታችን ክርስቶስ በወንጌል እንዳለው "በተራራ ላይ ያለች ከተማ ልትሠወር አይቻላትምና ።" የሰማዕቷ ሕይወት በፊታችን እንደ ብርሃን ተገልጦ ይታያል ። ቅድስት አርሴማ እንደ ልጅ ወላጆቿን በመታዘዝ ደስ ያሰኘች ቡርክት ናት ። 
                        ቅድስት አርሴማ ይሕ ቀረሽ የማይሏት ውብ ናት ። ቅድስት አርሴማ ድንግል ናት ። ቅድስት አርሴማ ባሕታዊት ጻድቅ ናት ። ቅድስት አርሴማ ኃያል ሰማዕት ናት ። ይሕስ እንደ ምን ነው ቢሉ፦ አበው በትውፊት እንደ ነገሩን ቅዱስ ጐርጐርዮስ የታላቋ ሰማዕት ቅድስት አርሴማ ትልቅ ወንድም ነው ። 
                        በዜና ሰማዕታት ተጽፎ እንደሚገኘው በዚያ የመከራ ዘመን ቅዱስ ጐርጐርዮስ ሦስት ኃላፊነቶች ነበሩበት ።</p>
                        <li>፩.ቅድስት አርሴማን ጨምሮ ደናግሉን ማጽናት ።</li>
                        <li>፪.ትምህርተ ቤተ ክርስቲያንን በሚገባ ማጥናት ።</li>
                        <li>፫.የሚመጣውን መከራ ለመቀበል ራሱን ማዘጋጀት ።</li>
                    <p class="mainam">ቅዱሱ ሦስቱንም ኃላፊነቶች በሚገባ በመወጣቱ ከራሱ አልፎ ለሌሎቹ አርአያ መሆን ቻለ ። ያቺን ንጽሕት አርበኛ ቅድስት አርሴማንም አጽንቶ የደናግሉ መሪ አደረጋት ። መከራው በጣም ገፍቶ እስከ መጣበት ጊዜ ድረስ በአንድ የደናግል ገዳም ውስጥ ሆነው ይጸልዩ፣ ይጾሙ ፣ ገዳማዊ ሥራንም ይሠሩ ነበር ። 
                        ለዚህም ነው ቅድስት አርሴማና ቅዱስ ጐርጐርዮስ ጻድቃን የምንላቸው ። በኋላ ግን ማኅደረ ሰይጣን ዲዮቅልጢያኖስ በመልኳ ተማርኮ ቅድስት አርሴማን ካላገባሁ በማለቱ ቅዱስ ጐርጐርዮስ ድንግሏን አርሴማን ጨምሮ መቶ ሃያ ሰባት ክርስቲያኖችን ይዞ ወደ አርማንያ ተሰደደ ። በአርማንያም በአንድ ገዳም ውስጥ ተደብቀው በጾምና በጸሎት ለጥቂት ጊዜ ቆዩ፤ ነገር ግን ረሃብ ፈጃቸው ። 
                        የሚላስ የሚቀመስ ነገር በአካባቢው ባለ መኖሩ ቅዱስ ጐርጐርዮስ ወደ ከተማ ለመውጣት ተገደደ ። በዚያም በድርጣድስ ቤተ መንግስት ውስጥ ባርነት ተቀጠረ ። በሚያገኛት ገንዘብም ወገኖቹን ይረዳ ነበር። መከራው ግን አለቀቃቸውም ። ርጉም ዲዮቅልጢያኖስ ቅዱሳኑ ወደ አርማንያ መሔዳቸውን ስለ ሰማ ይዞ እንዲልክለት ድርጣድስን ላከበት ። ድርጥዳስ ግን ለራሱ ፈለጋት ።</p>
                      <details>
                      <summary>Read more/less</summary>
                      
                    <h2 class="welcomehead">የሰማዕትነትዋ መነሻ</h2>
                    <p class="mainam">ይቺ ታላቅ ሰማዕት በነበረችበት ዘመን በአርመን የነገሠው አረማዊ ንጉሥ ይኸው ድርጣድስ ይባላል፡፡ ይህ ንጉሥ እግዚአብሔር አምላክ በሙሴ ላይ አድሮ "ቀልጠው የተሠሩትን የአማልክት ምስሎች ለአንተ አታድርግ" ብሎ የተናገረውን በመቃወም ለጣዖት የሚሰግድ ፀሐይንም ያመልክ ነበር ዘጸ.፴፬ ቁ.፲፯ ፡፡ 
                        በዘመኑ የነበሩ ክርስቲያኖችን "እኔ ለማመልከው "አምላክ" ወይም ጣዖት መስገድ አለባችሁ ፤ ይህን የማታደርጉ ከሆነ ትእዛዜን ጥሳችኋልና መከራ ይጸናባችኋል" የሚል ዐዋጅ በማውጣት ክርስቲያኖች ለስቃይ እዲጋፈጡ ሆነ ፡፡ ጨካኙ ንጉሥ ድርጣድስ ይህን ትእዛዙን ባለማክበራቸው መከራና ስቃይ ያደረሰባቸው ክርስቲያኖች ቁጥራቸው ፻፳፯ ነበር ።</p>
                    <h2 class="welcomehead">የቅድስት አርሴማ ውሳኔ</h2>
                    <p class="mainam">ቅድስት አርሴማም ይህን አይታ ከክርስቲያን ወገኖችዋ ጋር ወግና ስለክርስቶስ መመስከር ጀመረች ። የንጉሡም አገልጋይ በደም ግባቷና በንግግሯ ማማር ተደንቆ በዚች በፈቃዷ ሰማዕትነትን ልትቀበል በወደደች ሴት ምንም ሊያደርግባት ስላልወደደ ወደ ንጉሡ ወደ ድርጣድስ ከሃያ ሰባቱ ክርስቲያኖች ጋር ወሰዳት ፡፡ 
                        ንጉሡም ብዙ የተነገረላትን ወጣት ሲያይ በውበቷና በንግግሯ ተማርኮ ለዓለማዊ ደስታውና ፍላጎቱ ተመኛት ፡፡ ሚስት ትሆነው ዘንድ አብዝቶ ተማጸናት ፡፡ እጅ መንሻና ማታለየ የዚህን ዓለም ወርቅና ብር አቀረበላት ፡፡ ቅድስት አርሴማ ግን መልክ ረጋፊ ፤ የዚህ ዓለም ሀብትም ከንቱ እንደሆነ ስለምታውቅ በዓላማዋ ጸናች! ንጉሡንም "እኔ የንጉሥ ክርስቶስ ሙሽራ እንጂ የዚህን ዓለም አላፊ ጠፊ የሆነውን ገንዘብና ደስታ የምሻ አይደለሁም ፡፡" በማለት መለሰችለት ፡፡</p>
                    <h2 class="welcomehead">የንጉሡም መልስና ዕድሉ</h2>
                    <p class="mainam">ይህን በሰማ ጊዜ ሊያስፈራራትም ሞከረ ። ዓይኑዋ አያየ ደናግሉን ጨፈጨፋቸው ። ኣልሳካልህ ቢለው በኣደባባይ በግድ ሊያገባት ቢሞከር እጁን ጠምዝዛ በሰው ሁሉ ፊት መሬት ላይ ጣለችው ። እጅግ ስላፈረ ኣስገረፋት ኣሰቃያት ኣይኑዋንም አወጣ ። በመጨረሻም አንገቱዋን አስቆርጦ ከሰማዕታቱ ጋር ተራራ ላይ ጣላት ። ከነገሩ ሁሉ በህዋላ ድርጣድስና ባለምዋሎቹ ለኣደን በሔዱበት እርኩስ መንፈስ ወደ ኣውሬነት ቀየራቸው ። የንጉሱ እንሰሳ (አውሬ) መሆን በአርሜኒያ ታላቅ ድንጋጤ ፈጠረ ። 
                        የንጉሡ እህት ስታለቅስ በራዕይ ተገልጾላት " ጎርጎሪዮስን ከተቀበረበት ካላወጣቹህ አትድኑም " ኣለቻቸው ። ወዲያውም ቆፍረው አወጡት ። ቅዱሱ እንደወጣ ዕረፍት አልፈለገም ፣ ለአስራ አምስት ዓመታት ቀባሪ አጥቶ የተበተነውን የቅድስት አርሴማና የ ሰማዕታቱን አጽም ሰብስቦ በክብር አኖረው ።ድርጣድስና ባለምዋሎቾንም ወደ በርሃ ሔዶ ፈወሳቸው ።
                      የቅድስት አርሴማ አጽም በአስራ አራተኛው ክፍለ ዘመን ከሌሎች ሰማዕታት አጽም ጋር ወደ ኢትዮጵያ እንደመጣ አባቶቻችን በትውፊት ይናገራሉ ።</p>
                      </details>
                    </div>
                    </div>
                <div class="welcome">
                <img class="welcomeimage" src="https://i.pinimg.com/736x/ae/ae/ee/aeaeee67cd894c08b1b7b057413a75a1.jpg"></img>
                <div class="welcometext">
                    <h2 class="welcomehead">St. Arsema</h2>
                <p>St. Rhipsime (Armenian:Հռիփսիմէ, died c. 290), also called Hripsime, Ripsime, Ripsima or Arsema, was a martyr of Roman origin; she and her companions in martyrdom are venerated as the first Christian martyrs of Armenia. 
                    In the Orthodox Churches, her feast day is September 30.</p>
                   <h2 class="welcomehead">Vita</h2>
                <p>According to legend, Rhipsime was possibly of noble birth. She belonged to a community of virgins in Rome, numbering 35 under the leadership of Gayane. She was known to be extremely beautiful, and attracted the notice of Diocletian. 
                    To avoid his advances she, along with her community, 
                    fled the city, going first to Alexandria before settling in Vagharshapat. The varying accounts of her martyrdom diverge at this point. One story indicates that Rhipsime again was noticed for her beauty, this time by King Tiridates III, 
                    who proceeded to pursue her. Upon being brought before him, 
                    she refused his advances and was punished by being roasted alive. Gayane was then put to death by Tiridates' soldiers, as were all the members of her community except for Nune (or Marine), who was later a missionary in Georgia and, as St. Nino, 
                    is praised as the founder of the Church of Georgia.</p>

                 
                    <details>
                    <summary>Read more/less</summary>
                    <p>Another version of the saint's Acts indicates that, upon discovering Rhipsime's whereabouts, Diocletian sent a letter to Tiridates insisting that he either send her back or take her for himself. 
                     The king's servants found her among her companions, here described as nuns, and urged that she follow his wishes. 
                     She responded that she could not marry as she was betrothed to Jesus Christ, as were the others. At this, a voice from heaven was heard, saying, "Be brave and fear not, for I am with you".
                     Upon this, Tiridates ordered that Rhipsime be tortured; her tongue was cut out, her stomach cut open, and she was blinded before being killed. 
                     Her body was then cut into pieces. Inspired by her example, Gayane and two other nuns gave themselves over to similar treatment before being beheaded. 
                     The rest of the community was put to the sword, their bodies thrown to the beasts to be eaten. Supposedly, Tiridates and his soldiers were then punished by God for their actions; 
                     the soldiers were beset by devils, and began to act like wild animals, running through the forests, gnawing at themselves, and tearing their clothes. 
                     The legend states that the King was turned into a wild boar for his actions, and had to be saved by the intervention of Gregory the Enlightener. Like many early saints, 
                     these accounts can no longer be verified independently, leading many to believe that while certain key elements may be true, other accounts have been fictionalized to one degree or another.</p>

                <p>St. Hripsime Church in Echmiadzin (formerly known as Vagharshapat) is dedicated to Rhipsime; the current structure was consecrated in 618, and contains her tomb in the catacombs beneath the building. 
                    According to legend, Christ designated the spot for the shrine by descending from heaven in a shaft of light and smiting the ground with a golden hammer until the earth shook. Some of the saint's relics, 
                    along with items relating to Tiridates and Gregory the Enlightener, were pillaged by Persians during an invasion in 1604, but were restored in 1638. In the Catholic tradition, Rhipsime and her companions are commemorated with a feast day of September 29;
                     the Orthodox Church in America commemorates them on September 30.
                     The Armenian Apostolic Church remembers Rhipsime and her companions on June 4; Gayane and her companions are commemorated separately, on June 5.</p>

                <p>Saint Rhipsime is known as "Arsema" in the Ethiopian Orthodox Tewahedo Church and there are a number of churches in her name found in Ethiopia. Among the churches, the oldest one which is found in one of the islands of Lake Tana is known for its miracles. 
                    There are also many old paintings in the church portraying how she was killed by Tiridates III (named as Dirtados by Ethiopians) and how the cruel king was changed into a bear after killing her. There is annual pilgrimage by Ethiopian Christians to this church in January. 
                    There are also Christian songs that praise her name. Her story is told in the Ethiopian Synaxarium on Mäskäräm 29. </p>
                     </details>
                    </div>
                    </div>
                    <div class="welcome">
                        <img class="welcomeimage" src="https://telegra.ph/file/7b1b9e3fc418d124792df.jpg"></img>
                    <div class="welcometext">
                     <h2 class="welcomehead">ቅዱስ ቂርቆስ እና ቅድስት እየሉጣ</h2>
                     <p class="mainam">በመጽሐፈ ስንክሳር፣ በድርሳነ ገብርኤል እና በገድለ ቂርቆስ ወኢየሉጣ እንደ ተመዘገበው ሐምሌ ፲፱ ቀን ቅዱስ ቂርቆስ እና ቅድስት ኢየሉጣ በሰማዕትነት መከራ የተቀበሉበት፤ ስማቸውን የሚጠሩ፣ ዝክራቸውንም የሚዘክሩ ምእመናን ይቅርታን፣ ምሕረትን እንደሚያገኙ ጌታችን አምላካችንና መድኀኒታችን ኢየሱስ ክርስቶስ ለእነዚህ ቅዱሳን ቃል ኪዳን የሰጠበት ቀን ነው፡፡ መልአኩ ቅዱስ ገብርኤል ከእግዚአብሔር ዘንድ ተልኮ የተራዳቸውም በዚሁ ዕለት ነው፡፡</p>
                     <p class="mainam">ቅድስት ኢየሉጣ በሮም ግዛት በሚገኝ አንጌቤን በሚባል አገር በፈሪሃ እግዚአብሔር፣ በክርስትና ሃይማኖት እና በበጎ ምግባር ጸንታ ትኖር የነበረች ደግ ሴት ናት፡፡ በሥርዓት ያሳደገችው ቂርቆስ የሚባል ሕፃን ልጅም ነበራት፡፡ ይህቺ ቅድስት የዘመኑን አረማዊ መኰንን እለእስክንድሮስን በመፍራቷ ከልጇ ጋር ከሮም ወደ ጠርሴስ በተሰደደች ጊዜ መኰንኑ እነርሱ ከሚገኙበት አገር ገብቶ ክርስቲያኖችን እያሳደደ መግደል ጀመረ፡፡ 
                     የንጉሡ ወታደሮችም እግዚአብሔርን እንዲክዱ፤ ለጣዖት እንዲሰግዱ ቅድስት ኢየሉጣንና ቅዱስ ቂርቆስን አስፈራሯቸው፡፡ ቅዱሳኑ ግን ሃይማኖታቸውን ለመለወጥ ፈቃደኛ አልኾኑም ነበር፡፡ በዚህም መኰንኑ ተቈጥቶ በዓይንና በአፍንጫቸው ውስጥ ጨውና ሰናፍጭ በመጨመር፤ በጋሉ የብረት ችንካሮች በመቸንከርና መላ ሰውነታቸውን በመብሳት በብዙ ዓይነት መሣሪያ አሠቃያቸው፡፡ እግዚአብሔርም የጋሉ ብረቶችን እንደ ውኀ ያቀዘቅዝላቸው፤ ሥቃያቸውንም ያቀልላቸው ነበር፡፡</p>
                     <p class="mainam">በሌላ ጊዜም በገመድ አሳሥሮ ንጉሡ ሲያስጨንቃቸው ከቆየ በኋላ ራሳቸውን ከቆዳቸው ጋር አስላጭቶ እሳት አነደደባቸው፡፡ ዳግመኛም ከትከሻቸው እስከ እግራቸው ድረስ በሚደርሱ ችንካሮች ቸነከራቸው፡፡ በዚህ ጊዜ የእግዚአብሔር መልአክ ቅዱስ ገብርኤል ከእግዚአብሔር ዘንድ ተልኮ ከሥቃያቸው አድኗቸዋል፡፡ አሁንም ቀኑን ሙሉ በልዩ ልዩ የሥቃይ መሣሪያዎች ቢያስጨንቃቸውም የእግዚአብሔር ኃይልና የቅዱስ ገብርኤል ተራዳኢነት አልተለያቸውም ነበርና ምንም ዓይነት ጉዳት አልደረሰባቸውም፡፡ 
                     እንደ ገናም በመጋዝ ሰንጥቀው በብረት ምጣድ በቆሏቸው ጊዜ ጌታችን ከሞት አነሣቸውና በመኰንኑ ፊት ድንቅ ተአምራትን አደረጉ፡፡ ከተአምራቱ መካከልም ሕፃኑ ቅዱስ ቂርቆስ የመኰንኑን ጫማ በጸሎት ወደ በሬነት እንዲቀየር ማድረጉ ተጠቃሽ ሲኾን፣ መኰንኑ በተአምራቱ ተቈጥቶ የቅዱስ ቂርቆስን ምላስ አስቈርጦታል፤ ጌታችንም ምላሱን አድኖለታል፡፡</p>
                     <details>
                     <summary>Read more/less</summary>
                      <p class="mainam">ዳግመኛም በፈላ የጋን ውኀ ውስጥ ቅዱሳን ቂርቆስና ኢየሉጣን ሊጨምሯቸው ሲሉ ቅድስት ኢየሉጣ በፈራች ጊዜ ቅዱስ ቂርቆስ ‹‹እናቴ ሆይ አትፍሪ፤ አናንያ፣ ዓዛርያና ሚሳኤልን ከእሳት ነበልባል ያዳናቸው እግዚአብሔር እኛንም ከዚህ የፈላ ውኀ ያድነናል›› እያለ ያረጋጋትና በተጋድሎዋ እንድትጸና ወደ እግዚአብሔር ይጸልይላት ነበር፡፡ ከዚህ በኋላ ተያይዘው ወደ ጋኑ ውስጥ ገቡ፡፡ ያ ውኀም እንደ ውርጭ ቀዘቀዘ፡፡ ደግሞም ወታደሮቹ መንኰራኵር ባለበት የብረት ምጣድ ውስጥ አስገብተው ሥጋቸው እስኪቈራረጥ ድረስ በጎተቷቸው ጊዜ ቅዱስ ገብርኤል አድኗቸዋል፡፡ በመጨረሻም ከእግዚአብሔር ቃል ኪዳን ተቀብለው በመንፈቀ ሌሊት አንገታቸውን ተቈርጠው በሰማዕትነት ዐርፈዋል፡፡ እስከ ሞት ድረስ በታመኑበት ተጋድሏቸውም ከእግዚአብሔር ዘንድ የሕይወትን አክሊል ተቀብለዋል፡፡
                       </p>
                       <p class="mainam">በአጠቃላይ ቅዱስ ቂርቆስና ቅድስት ኢየሉጣ የዚህን ዓለም ጣዕም በመናቅ ‹‹ሞት ቢኾን፣ ሕይወትም ቢኾን፣ መላእክትም ቢኾኑ፣ ግዛትም ቢኾን፣ ያለውም ቢኾን፣ የሚመጣውም ቢኾን፣ ኃይላትም ቢኾኑ፣ ከፍታም ቢኾን፣ ዝቅታም ቢኾን፣ ልዩ ፍጥረትም ቢኾን በክርስቶስ ኢየሱስ በጌታችን ካለ ከእግዚአብሔር ፍቅር ሊለየን እንዳይችል ተረድቼአለሁ፤›› (ሮሜ. ፰፥፴፰-፴፱) በማለት ቅዱስ ጳውሎስ የተናገረውን ቃል በተግባር በማሳየት ለክርስቶስ ፍቅር ሲሉ ራሳቸውን ለመከራና ለሞት አሳልፈው ሰጥተዋል፡፡ ቅዱሳኑ ተጋድሏቸውን እስኪፈጽሙ ድረስም ቅዱስ ገብርኤል አልተለያቸውም፡፡ በቅዱስ ገብርኤል ተራዳኢነት ቅድስት ኢየሉጣና ቅዱስ ቂርቆስ ብቻ ሳይኾኑ ብዙ ምእመናንም ተጠቅመዋል፡፡ ስሙ በሚጠራባቸው ገዳማትና አድባራት መልአኩ የሚያደርጋቸው ድንቅ ድንቅ ተአምራት ለዚህ ማስረጃዎች ናቸው፡፡ ይህም ቅዱሳን መላእክት በእግዚአብሔር ስም መከራ የሚቀበሉ ምእመናንን እንደሚጠብቁና ከልዩ ልዩ ደዌ እንደሚፈውሱ የሚያስረዳ ታሪክ ነው፡፡</p>
                      </details>
                    </div>
                    </div>
                    <div class="welcome">
                    <img class="welcomeimage" src="https://telegra.ph/file/7b1b9e3fc418d124792df.jpg"></img>
                    <div class="welcometext">
                    <h2 class="welcomehead">St. Kirkos and St. Yelutha</h2> 
                    <p>According to the Synopsis, by Gabriel, and by St. Kirkos, St. Kirkos and st. Yelutha suffered martyrdom on July 7; It is the day when our Lord and Savior Jesus Christ promised these saints that those who call on their names and commemorate them will receive forgiveness and mercy. It was on this day that the angel St. Gabriel was sent by God to help them. In today's episode, we briefly remind you of the martyrdom of St. Kirkos and St. Julius:</p>
                    <p>St. Yelutha was a virtuous woman who lived in the Roman province of Angeben in the fear of God, Christianity, and morality. She also had a baby boy named Kirkos, whom she raised in an orderly manner. Fearing Alexander, the pagan ruler of his day, she fled from Rome to Tarsus with her son, and the officer entered the country and began persecuting and killing Christians. And the soldiers of the king, that they may deny God; They threatened St. Yelutha and St. Kirkos to worship idols. But the saints refused to change their religion. At this the officer became angry and added salt and mustard to their eyes and nose. He tortured them with various weapons, nailed them with hot iron nails and pierced their whole body. 
                        And he made the molten brass like the waters of a brook; It eased their pain.</p>
                        <details>
                     <summary>Read more/less</summary>
                     <p>Another time, the king was harassing them with a rope, and he shaved their head with their skin and set them on fire. He nailed them again with nails from their shoulders to their feet. At this time, God's angel St. Gabriel was sent by God to save them from their suffering. He still tormented them all day with various weapons of torment, but they were not harmed by the power of God and the help of St. Gabriel. Our Lord raised them from the dead, and they performed great miracles in the presence of the officer. One of the miracles was that the infant St. Kirkos turned the officer's shoes into a bull in prayer, and the officer became angry at the miracles and cut off the tongue of St. Kirkos; Our Lord saved his tongue.</p>
                    <p>Once again, when St. Yelutha was afraid, St. Kirkos said, "Mother, do not be afraid." God, who saved Ananias, Azariah, and Mishael from the flames, will save us from this boiling water. ”He reassured her and prayed to God that she would persevere in her struggle. After that, they joined together and entered the tank. That water was as cold as ice. And when the soldiers put them in an iron pan and dragged them until their flesh was cut off, St. Gabriel saved them. Finally, they received a promise from God that they were beheaded in the middle of the night and martyred. They received the crown of life from God in their faithful struggle until death.</p>
                    <p>In general, St. Kirkos and St. Yelutha despised the taste of this world and said, They put themselves in the place of suffering and death for the love of Christ, putting into practice the words of St. Paul: (Romans 3: 1-8). St. Gabriel did not leave them until the saints had finished their struggle. With the help of St. Gabriel, not only St. Yelutha and St. Kirkos, but also many believers benefited. The miracles performed by the angel in the monasteries and churches that bear his name are proof of this. This is a story of how holy angels protect believers who suffer in God's name and heal them of various ailments.</p>
                    </details>        
                    </div>
                    </div>
            </div>
            </html>
            </Layout>
            )

        }
    }
    
    module.exports = Index