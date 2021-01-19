import Link from 'next/link'
import styles from 'src/styles/404.module.scss'
export default function FourOhFour() {
  const goBack = () => history.back()
  return (
    <div className="bg-smoke font-art w-screen h-screen flex justify-center items-center">
      <div className="overflow-hidden py-8 px-4">
        <div className="text-center text-xs">Error</div>
        <div className={styles.numbers}>
          <div className={styles.number}>
            <div className={styles.four}></div>
          </div>
          <div className={styles.number}>
            <div className={styles.zero}><span></span></div>
          </div>
          <div className={styles.number}>
            <div className={styles.four}></div>
          </div>
        </div>
        <div className={styles.text}>
          <p>Looks like you got lost... Or we trying to confuse you... </p>
          <p>
            Let us bring you at <span className="underline"><Link href="/">home</Link></span> or <a className="cursor-pointer underline" onClick={goBack}>back.</a></p>
        </div>
        <div className={styles['sleep-walker']}>
          <div className={styles.man}>
            <div className={styles.head}></div>
            <div className={styles.torso}>
              <div className={styles['arm-a']}></div>
              <div className={styles['arm-b']}></div>
            </div>
            <div className={styles.legs}>
              <div className={styles['leg-a']}></div>
              <div className={styles['leg-b']}></div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}