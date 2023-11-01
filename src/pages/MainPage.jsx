import { Link } from "react-router-dom";
import MainTitle from "../components/main/MainTitle";
import styles from "../App.module.css";

const MainPage = () => {
    return (
        <div className={styles.layout}>
            <MainTitle/>
            <Link to="/question" className={styles.square_button}>
                시작하기
            </Link>
        </div>
    )
}

export default MainPage;