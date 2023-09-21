import Link from "next/link";

export default function Footer() {
    return (
      <div className="lg:flex lg:justify-between pb-5 max-w-[1360px] mx-auto px-[40px]">
        <ul className="flex pb-2">
          <li>
            <Link className="pr-10" href="#">
              INSTAGRAM
            </Link>
          </li>
          <li>
            <Link className="pr-10" href="#">
              TWITTER
            </Link>
          </li>
          <li>
            <Link href="#">FACEBOOK</Link>
          </li>
        </ul>
        <p className="text-sm">&copy; Furniture Design</p>
      </div>
    );
}