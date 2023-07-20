import styles from './styleLoading.module.css'

export const loading = () => {
  return (
    <main className="bg-slate-200 mx-auto max-w-lg p-1 min-h-screen">
      <div className={styles.loading_position}>
        <div className={styles.lds_ripple}>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  )
}

export default loading
