import "../../styles/common.css";
import CallenderIcon from "../../assets/Callender.png";
import ShoppingIcon from "../../assets/Shopping.png";
import AnimalIcon from "../../assets/Animal.png";
import FinanceIcon from "../../assets/Finance.png";
import AlertIcon from "../../assets/Alert.png";
import SettingIcon from "../../assets/Setting.png";
import UserIcon from "../../assets/User.png";


export default function Sidebar() {
  return (
    <aside className="sidebar">

    <a href="/"  className="side-item">
        <input className="menu-icon" type="image" src={CallenderIcon} alt="カレンダーのマーク" />
        <section>カレンダー</section>
    </a>
    <a href="/"  className="side-item">
        <input className="menu-icon" type="image" src={ShoppingIcon} alt="買い物リストのマーク" />
        <section>買い物リスト</section>
    </a>
    <a href="/"  className="side-item">
        <input className="menu-icon" type="image" src={AnimalIcon} alt="ペットのマーク" />
        <section>ペット</section>
    </a>
    <a href="/"  className="side-item">
        <input className="menu-icon" type="image" src={FinanceIcon} alt="お金関連のマーク" />
        <section>お金関連</section>
    </a>
    <a href="/"  className="side-item">
        <input className="menu-icon" type="image" src={AlertIcon} alt="通知のマーク" />
        <section>お知らせ</section>
    </a>
    <a href="/"  className="side-item">
        <input className="menu-icon" type="image" src={UserIcon} alt="ユーザのマーク" />
        <section>ユーザ管理</section>
    </a>
    <a href="/"  className="side-item">
        <input className="menu-icon" type="image" src={SettingIcon} alt="設定のマーク" />
        <section>設定</section>
    </a>

    </aside>
    
  );
}