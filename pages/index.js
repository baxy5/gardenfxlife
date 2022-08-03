import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.hero_bg}></div>

      <div className="bg-[#121212] text-white flex justify-center text-center items-center p-2 md:p-10">
        <div className="md:w-2/4">
          <h1 className="text-5xl my-5">Röviden amit tudni kell rólam.</h1>
          <p className="text-lg">
            Csabának hívnak, 17 éves vagyok és 2 éve Forexezek! 15 évesen
            kezdtem bele ebbe az egészbe. Nagyon kis bénácska voltam! Soha nem
            hittem magamban mert mindig buktam és nem sok profitom volt. De
            ahogy teltek múltak a hónapok egyre jobban ment ez az egész. 16
            évesen már elég szépen profitáltam napi 100-200$ Nagyon sok
            tanulással eljutottam arra a szintre hogy most 17 éves fejjel napi
            több ezer $ profitálok! Nagyon nagy tervek vannak a közel jövőben.
            Segíteni szeretnék neked is felépíteni a saját karriered!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-none md:grid-cols-2 gap-0 text-center text-white lg:px-40 lg:py-10 m-2">
        <div className="bg-[#121212] text-start py-10 px-10 lg:py-40 lg:px-20">
          <h1 className="text-4xl md:text-5xl">Tanfolyam</h1>
          <p className="text-lg md:text-lg mt-10">
            Ha érdekel a tanfolyam akkor úgy lehet fizetni hogy a
            <b> PayPal címemre </b>
            külditek az összeget:
            <br />
            <b>
              desingglow105@gmail.com <br /> Ár: 75$
            </b>
            <br />
            Ha elküldet, discordon küld el nekem az utalást! <b>sqcsaba#3521</b>
          </p>
        </div>
        <div className="bg-black flex justify-center items-center p-10 h-96 md:min-h-full">
          <h1 className="text-5xl lg:text-8xl">
            Tan<span className="text-[#3872C3]">folyam</span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-none md:grid-cols-2 gap-0 text-center text-white lg:px-40 lg:py-10 m-2">
        <div className="bg-black flex justify-center items-center p-10 h-96 md:min-h-full">
          <h1 className="text-5xl lg:text-8xl">
            V.I.P<span className="text-[#3872C3]"> Signal</span>
          </h1>
        </div>
        <div className="bg-[#121212] text-start py-10 px-10 lg:py-40 lg:px-20">
          <h1 className="text-4xl md:text-5xl">Tanfolyam</h1>
          <p className="text-lg md:text-lg mt-10">
            Ha érdekel a <b>Telegram V.I.P Csoport</b> akkor úgy lehet fizetni
            hogy a<b> PayPal címemre </b>
            külditek az összeget:
            <br />
            <b>
              desingglow105@gmail.com <br /> Ár: 75$/hó
            </b>
            <br />
            Ha elküldet, discordon küld el nekem az utalást! <b>sqcsaba#3521</b>
          </p>
        </div>
      </div>
    </div>
  );
}
