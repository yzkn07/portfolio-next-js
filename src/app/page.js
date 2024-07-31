import Image from "next/image";
import Myprojects from "./Myprojects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="container">
        <div className="col1">
          <div className="bio">
            <h1>Biyografi</h1>
            <p>
              Akdeniz Üniversitesi Tıp Fakültesi'nden 2019 yılında mezun oldum.
              <br /> 4 yıl pratisyen hekim olarak çalıştıktan sonra 2024 yılında
              Şişli Hamidiye Etfal Eğitim Araştırma Hastanesi'nde Aile Hekimliği
              ihtisasına başladım. Lise yıllarında kendi kendime öğrenmeye
              çalıştığım web geliştirme konusuna uzunca bir süreden sonra tekrar
              ilgi duymaya başladım.Şu an kendimi Frontend Web teknolojileri
              konusunda geliştirmeye çalışıyorum.
            </p>
          </div>

          <div className="skills">
            <h1>Yeteneklerim</h1>
            <div className="icons">
              <div className="icon">
                <i className="fa-brands fa-html5 fa-2xl" style={{ color: "#ff8000" }} />
                <h6>HTML5</h6>
              </div>
              <div className="icon">
                <i className="fa-brands fa-css3-alt fa-2xl" style={{ color: "#00b7ff" }} />
                <h6>CSS</h6>
              </div>
              <div className="icon">
                <i className="fa-brands fa-bootstrap fa-2xl" style={{ color: "#c500fb" }} />
                <h6>Bootstrap</h6>
              </div>
              <div className="icon">
                <i className="fa-brands fa-square-js fa-2xl" style={{ color: "#ffd500" }} />
                <h6>JavaScript</h6>
              </div>
              <div className="icon">
                <i className="fa-brands fa-react fa-2xl" style={{ color: "rgb(88,196,220)" }} />
                <h6>React</h6>
              </div>
              <div className="icon">
                <i className="fa-solid fa-bolt fa-2xl" style={{ color: "rgb(62,207,142)" }} />
                <h6>Supabase</h6>
              </div>
            </div>
          </div>

          <Myprojects />
        </div>

        <div className="col2">
          <div className="profile-img">
            <Image src="/ben.jpeg" alt="" width={500} height={500} />
          </div>

          <div className="profile-text">
            <h3>Mehmet Ali Yazkan</h3>
            <h5>Frontend Web Developer</h5>
            <a href="mailto:mehmetali.1992@hotmail.com">
              e-posta iletişimi için tıklayın.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
