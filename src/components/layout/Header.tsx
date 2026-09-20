import "../../styles/common.css";
import Avatar from '@mui/material/Avatar';

export default function Header() {

  return (
    <header>
      <div  className="home-container">
        <a href="/">
          <input className="menu-icon"  type="image" src="/icons/Home.png" alt="家のマーク" />
        </a>
      </div>
        <h1>My Home Portal</h1>
      <div className="alert-container">
        <a href="/notice">
          <input className="menu-icon" type="image" src="/icons/Alert.png" alt="通知のマーク" />
        </a>
      </div>
      {/* <div className="user-container">
        <a href="/">
          <input id="user-icon" className="menu-icon"  type="image" src="/icons/User.png" alt="ユーザーのマーク" />
        </a>
      </div> */}
      {/*Todo 認証したユーザ情報を基に、表示する*/} 
      <a href="/users?userId=1">
        <Avatar alt="Cindy Baker" src="/users/Shuhey.png" />
      </a>
    </header>
    
  );
}
