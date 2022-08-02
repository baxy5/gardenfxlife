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
    </div>
  );
}
