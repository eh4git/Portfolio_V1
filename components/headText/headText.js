import React from "react"
import Head from 'next/head'

export default function HeadText({ title }) {
    return (
        <Head>
            <title>Erik Hirsch - {title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}