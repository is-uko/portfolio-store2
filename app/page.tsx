import Header from "./header";
import Item from "./item";
import Link from "next/link";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="max-w-[1360px] mx-auto px-[40px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <Item
            href="products/detail/1"
            src="item1"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="products/detail/2"
            src="item2"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="products/detail/3"
            src="item3"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="products/detail/4"
            src="item4"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="products/detail/5"
            src="item5"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="products/detail/6"
            src="item6"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="products/detail/7"
            src="item7"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="products/detail/8"
            src="item8"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
        </div>
        <Link className="block text-center text-xl py-10" href="products/1">
          View More
        </Link>
      </main>
      <Footer></Footer>
    </>
  );
}
