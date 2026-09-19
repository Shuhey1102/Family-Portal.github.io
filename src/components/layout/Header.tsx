import "../../styles/common.css";
import HomeIcon from "../../assets/Home.png";
import AlertIcon from "../../assets/Alert.png";
import UserIcon from "../../assets/User.png";

export default function Header() {
  return (
    <header>
    <div  className="home-container">
      <a href="/">
        <input className="header-icon"  type="image" src={HomeIcon} alt="家のマーク" />
      </a>
    </div>
      <h1>My Home Portal</h1>
    <div className="alert-container">
      <a href="/">
        <input className="header-icon" type="image" src={AlertIcon} alt="通知のマーク" />
      </a>
    </div>
    <div className="user-container">
      <a href="/">
        <input id="user-icon" className="header-icon"  type="image" src={UserIcon} alt="ユーザーのマーク" />
      </a>
    </div>
    </header>
    
  );
}
