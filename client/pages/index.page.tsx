import styles from './index.module.css';
import SightseeingMap from './sightseeingMap/index.page';

const Home = () => {
  return (
    // <Layout
    //   render={(user) => (
    //     <div className={styles.container}>
    //       <div className={styles.title}>Hello {user.signInName}!</div>
    //       <TaskList />
    //     </div>
    //   )}
    // />
    <div className={styles.container}>
      <SightseeingMap />
    </div>
  );
};

export default Home;
