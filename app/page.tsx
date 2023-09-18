import Header from "./header";
import Item from "./item";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="max-w-[1360px] mx-auto px-[40px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <Item
            src="item1"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            src="item2"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            src="item3"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            src="item4"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            src="item5"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            src="item6"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            src="item7"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            src="item8"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
        </div>
        <Link className="block text-center text-xl py-10" href="#">
          View More
        </Link>
        <div className="lg:flex lg:justify-between pb-5">
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
          <p className="text-sm">
            &copy; Furniture Design
          </p>
        </div>
      </main>
    </>
  );
}
