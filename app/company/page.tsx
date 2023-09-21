import Header from "../header";
import Footer from "../footer";

export default function Company() {
  return (
    <div>
      <Header></Header>
      <div className="max-w-[1360px] mx-auto px-[40px]">
        <div className="max-w-[600px] pb-10">
          <h2 className="pb-4">Company</h2>
          <table className="w-full mb-4">
            <tr className="border-b-2">
              <td className="py-4">
                <p className="pb-2">社名</p>
                <p>株式会社ファニチャーデザイン</p>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="py-4">
                <p className="pb-2">住所</p>
                <p>〒107-0062 東京都港区南青山1丁目</p>
                <p>xxxxxx</p>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="py-4">
                <p className="pb-2">設立</p>
                <p>XXXX年XX月</p>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="py-4">
                <p className="pb-2">資本金</p>
                <p>XXXX万円</p>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="py-4">
                <p className="pb-2">従業員数</p>
                <p>XX名</p>
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <p className="pb-2">事業内容</p>
                <p>家具、インテリアの企画・生産</p>
                <p>家具、インテリアの販売</p>
                <p>店舗の企画・デザイン・設計</p>
              </td>
            </tr>
          </table>
          <iframe
            className="w-full grayscale"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2916154954455!2d139.72304042696456!3d35.669820922591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c820ac932eb%3A0xc68079dd10afd971!2z44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1695271181626!5m2!1sja!2sjp"
            width="450"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
