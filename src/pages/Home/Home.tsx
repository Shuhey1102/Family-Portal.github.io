import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <>
        <Header></Header>
        <div className="content-container">
          <Sidebar></Sidebar>
          <div>
              <h1>ホーム</h1>
          </div>
        </div>
        <Footer></Footer>
    </>
  );
}