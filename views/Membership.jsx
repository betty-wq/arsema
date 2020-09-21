const React = require('react')
const Layout = require('./Layout.jsx')

class Membership extends React.Component {
    render(){
        return(
            <Layout>
            <html>
                <head>
                <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes"/>
                </head>
            <div>
                <h1>Hello</h1>
                <object data="file:///Users/bettybeshah/Downloads/%E1%8B%A8%E1%8A%A0%E1%89%A3%E1%88%8D%E1%8A%90%E1%89%B5%20%E1%89%85%E1%8D%85%20inword-%20updated%20042019%20(1).pdf" width="100%" height="100%" type="application/x-pdf">
                    <a href="file:///Users/bettybeshah/Downloads/%E1%8B%A8%E1%8A%A0%E1%89%A3%E1%88%8D%E1%8A%90%E1%89%B5%20%E1%89%85%E1%8D%85%20inword-%20updated%20042019%20(1).pdf">file</a>
                    </object>
                
            </div>
            </html>
            </Layout>
        )
    }
}

module.exports = Membership