import styles from "./index.module.scss";
import bell from "../images/icons/bell.svg";

const Header = () => {
	return (
		<header>
			<div className={styles.mojo}>
				<div className={styles.mojoText}>
					<h3>Hey Lukasz!</h3>
					<h4>Stay Motivated</h4>
				</div>
				<div className={styles.bell}>
					<img
						src={bell}
						alt="Bell"
					/>
				</div>
			</div>
			<h1>You're almost there!</h1>
		</header>
	);
};

export default Header;
