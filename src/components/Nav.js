import styles from './Nav.module.css';
import {Link} from "react-router-dom";
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

export default function Nav(){

    const { logout } = useLogout();
    const { user } = useAuthContext();

    return(
        <nav className={styles.nav}>
            <h1 className={styles.title}>기록하기</h1>
            <ul className={styles.list_nav}>
                {!user ?
                    <>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/signup">가입하기</Link></li>
                    </> :
                    <li>
                        <span style={{color: "#fff"}}><strong style={{fontSize: "20px"}}>{user.displayName}</strong>님, 안녕하세요</span>
                        <button type="button" onClick={logout}>로그아웃</button>
                    </li>
                }
            </ul>
        </nav>
    )
}