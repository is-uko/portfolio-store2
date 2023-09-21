import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  src: string;
  title: string;
  price: number;
};

export default function Item({ href, src, title, price }: Props) {
  return (
    <Link className="hover:opacity-50 duration-500" href={href}>
      <Image
        src={"/img/" + src + ".jpg"}
        alt=""
        width={500}
        height={500}
      ></Image>
      <p>{title}</p>
      <p>{"¥" + price.toLocaleString() + " +tax"}</p>
    </Link>
  );
}
