'use client';

import Link from 'next/link';
import { usePathname  } from 'next/navigation';

export default function NavBar() {
    const pathname  = usePathname();
    return (
        <nav>
            <Link href="/" legacyBehavior>
                <a className={pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a className={pathname === "/about" ? "active" : ""}>About</a>
            </Link>
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration:none;
                }
                .active {
                    color: yellow;
                }
            `}</style>
        </nav>
    );
}

