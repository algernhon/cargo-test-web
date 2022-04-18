import Head from 'next/head'

export default function HeadNext() {
    return (
        <Head>
            <title>Cargo Test Web</title>
            <meta name="description" content="App réalisée pour le test technique de la société Cargo" />
            <link rel="icon" href="/favicon.ico" />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "Organization",
                    "name": "Centrakor",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "url": "https://www.centrakor.com",
                        "email": "pj.subervie@gmail.com",
                        "contactType": "Developper",
                        "contactOption": "TollFree"
                    }
                }) }} />
        </Head>
    )
}