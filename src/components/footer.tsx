import Link from './link'
import ICP from './icp'


export default function Footer () {
    return (
        <div className="footer z-10 flex w-full sm:block md:flex justify-center text-sm p-3">
            <div>
                <span>Copyright &copy;2020-2021 &nbsp;</span>
                <strong>
                    <a href="https://blog.wrz8.com">Blog</a><span> |</span>
                    <span className="text-red-500">
                        <span>&nbsp;</span>
                        <Link href="/about">About</Link>
                    </span>
                    <span>.</span>
                </strong>
            </div>
            <div className="hidden sm:block">
                <span>
                    <span>&nbsp;Built with &nbsp;</span>
                    <a className="text-red-500" href="http://nextjs.org">Next.js🔥</a>
                    <span>.&nbsp;</span>
                </span>
                <ICP />
            </div>
        </div>
    )
}