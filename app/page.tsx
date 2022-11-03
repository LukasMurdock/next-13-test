import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>Tests</h1>
            <ul>
                <li>
                    <Link href="/server?test=">Server component</Link>
                </li>
                <li>
                    <Link href="/client/nowork/?test=">Client component</Link>
                </li>
                <li>
                    <Link href="/client/work/?test=">
                        Client component that calls <code>useSearchParams</code>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
