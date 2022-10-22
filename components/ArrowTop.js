import { FaCaretUp } from "react-icons/fa"
import Link from "next/link"

export default function ArrowTop () {
    return (
        <Link href='#top'>
            <a className="icon__top">
                <FaCaretUp />
            </a>
        </Link>
    )
}