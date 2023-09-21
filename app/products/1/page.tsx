import Header from "../../header";
import Item from "../../item";
import Link from "next/link";
import Footer from "../../footer";

export default function Products1() {
  return (
    <>
      <Header></Header>
      <main className="max-w-[1360px] mx-auto px-[40px]">
        <h2 className="text-2xl pb-10">Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <Item
            href="/products/detail/1"
            src="item1"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/2"
            src="item2"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/3"
            src="item3"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/4"
            src="item4"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/5"
            src="item5"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/6"
            src="item6"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/7"
            src="item7"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/8"
            src="item8"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/9"
            src="item9"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/10"
            src="item10"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/11"
            src="item11"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/12"
            src="item12"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
        </div>
        <div className="w-10 mx-auto flex justify-between py-5">
          <p className="text-xl pr-5">1</p>
          <Link className="text-xl" href="2">
            2
          </Link>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
