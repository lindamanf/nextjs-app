import Head from "next/head"
import styles from "./layout.module.scss"
import Link from "next/link"

export const siteTitle = "Next.js App"

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js App</title>
        <link ref="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="description" content="Site for Next.js App" />
      </Head>
      <header className={styles.header}>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
