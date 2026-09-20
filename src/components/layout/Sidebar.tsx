import "../../styles/common.css";
import sidemenus from "../../data/sidemenu.json";

export default function Sidebar() {
  return (
    <aside className="sidebar">

        {
            sidemenus.filter((item) => item.onSidebar)
                     .map((item)=>(
                <a href={item.path}  className="side-item">
                    <input className="menu-icon" type="image" src={item.icon} alt={item.label} />
                    <section>{item.label}</section>
                </a>            
            ))
        }
    </aside>
    
  );
}