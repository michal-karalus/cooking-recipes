import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <span>Application is using&nbsp;</span>
        <a
          className={styles.link}
          href="https://spoonacular.com/food-api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spoonacular API&nbsp;
        </a>
        <span>to provide recipes data.</span>
      </div>
    </footer>
  )
}

export default Footer
