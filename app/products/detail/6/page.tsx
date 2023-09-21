import Header from "../../../header";
import Footer from "../../../footer";
import Image from "next/image";
import Link from "next/link";

export default function Detail() {
  return (
    <div>
      <Header></Header>
      <main className="max-w-[1360px] mx-auto px-[40px]">
        <div className="max-w-[800px]">
          <h2 className="pb-10">プロダクトタイトル</h2>
          <div className="lg:flex lg:justify-between">
            <Image
              className="pr-10 pb-10 object-contain object-top"
              src="/img/item6.jpg"
              alt=""
              width={400}
              height={400}
            ></Image>
            <div>
              <p className="pb-5">
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキスト
              </p>
              <p className="pb-5">
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキスト
              </p>
              <p className="pb-5">¥99,999 +tax</p>
              <table>
                <tr>
                  <td>SIZE：</td>
                  <td>W999 x D999 x H999</td>
                </tr>
                <tr>
                  <td>COLOR：</td>
                  <td>テキスト</td>
                </tr>
                <tr>
                  <td>MATERIAL：</td>
                  <td>テキストテキストテキスト</td>
                </tr>
              </table>
              <Link className="block text-center py-16" href="/products/1">
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
