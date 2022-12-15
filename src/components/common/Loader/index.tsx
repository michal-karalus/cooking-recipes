import styles from './Loader.module.scss'

function Loader() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loader
