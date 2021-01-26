import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head >
                    <meta name="author" content="Erik Hirsch"/>
                    <meta name="description" content="Hello, my name is Erik Hirsch and this is my portfolio webpage that provides a platform to display previous and current projects as well as the associated skills."/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument