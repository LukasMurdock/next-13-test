/**
 * `<a>` is purposefully used over `<Link>` here to only load `useSearchParams` on `/client/work`
 */
export function TestLinkSection() {
    return (
        <section>
            <h1>Tests</h1>
            <ul>
                <li>
                    <a href="/server?test=">Server component</a>
                </li>
                <li>
                    <a href="/client/nowork/?test=">Client component</a>
                </li>
                <li>
                    <a href="/client/work/?test=">
                        Client component that calls <code>useSearchParams</code>
                    </a>
                </li>
            </ul>
        </section>
    )
}
