import Header from "../header";
import Footer from "../footer";

export default function Detail() {
  return (
    <div>
      <Header></Header>
      <main className="max-w-[1360px] mx-auto px-[40px]">
        <div className="max-w-[800px]">
          <h2 className="pb-10">About</h2>
          <p className="pb-10">
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキ
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキ
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキ
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキ テキストテキストテキスト
          </p>
          <p className="pb-10">
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキ
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキ
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキ
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキ テキストテキストテキスト
          </p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
