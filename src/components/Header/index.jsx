import styles from "./index.module.scss";
import bell from "../images/icons/bell.svg";
import mojotodos from "../images/mojotodos.jpg";

const Header = () => {
	return (
		<header>
			<div className={styles.mojo}>
				<div className={styles.mojoText}>
					<div className={styles.mojoImg}>
						<img
							src={mojotodos}
							alt="Mojo"
						/>
					</div>
					<div className={styles.mojoHeading}>
						<h3>Hey Lukasz!</h3>
						<h4>Stay Motivated 🔥 </h4>
					</div>
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
