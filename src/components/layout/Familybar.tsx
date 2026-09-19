import "../../styles/common.css";
import UserIcon from "../../assets/User.png";


export default function Familybar() {
  return (
    <aside className="familybar">

        <a href="/"  className="side-item">
            <input className="menu-icon" type="image" src={UserIcon} alt="ユーザのマーク" />
            <section>ユーザ管理</section>
        </a>
    </aside>
    
  );
}