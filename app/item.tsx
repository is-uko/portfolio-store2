import Image from "next/image"

type Props = {
  src: string;
  title: string;
  price: number;
};

export default function Item({ src, title, price }:Props) {
    return(
        <div>
            <Image src={"/img/" + src + ".jpg"} alt="" width={500} height={500}></Image>
            <p>{title}</p>
            <p>{"¥" + price + " +tax"}</p>
        </div>
    );
}