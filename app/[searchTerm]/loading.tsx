import styles from './styleLoading.module.css'

export default function loading() {
  return (
    <main className=" mx-auto max-w-lg p-1 min-h-screen shadow-2xl rounded-xl">
      <div className={styles.loading_position}>
        <div className={styles.lds_ripple}>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  )
}
