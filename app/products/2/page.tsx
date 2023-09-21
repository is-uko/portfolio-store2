import Header from "../../header";
import Item from "../../item";
import Link from "next/link";
import Footer from "../../footer";

export default function Products2() {
  return (
    <>
      <Header></Header>
      <main className="max-w-[1360px] mx-auto px-[40px]">
        <h2 className="text-2xl pb-10">Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <Item
            href="/products/detail/13"
            src="item13"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/14"
            src="item14"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/15"
            src="item15"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
          <Item
            href="/products/detail/16"
            src="item16"
            title="プロダクトタイトルプロダクトタイトル"
            price={99999}
          ></Item>
        </div>
        <div className="w-10 mx-auto flex justify-between py-5">
          <Link className="text-xl pr-5" href="1">
            1
          </Link>
          <p className="text-xl">2</p>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
