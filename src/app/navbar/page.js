'use client';

import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import styles from "./Navbar.module.css";

export default function NavBar() {
    const pathname  = usePathname();
    return (
        <nav>
            <Link href="/" legacyBehavior>
                <a className={[styles.link, pathname === '/' ? styles.active : ''].join(" ")}>Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
                <a className={[styles.link, pathname === '/about' ? styles.active : ''].join(" ")}>about</a>
            </Link>
        </nav>
    );
}

