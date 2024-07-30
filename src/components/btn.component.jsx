import styles from "./btn.module.css"

const cn = (...rest) => rest.join(" ")

const Btn = ({ children, isPrimary, ...delegated }) => (
  <button
    // biome-ignore lint/correctness/noChildrenProp: <explanation>
    children={children}
    type="button"
    className={cn(styles.btn, isPrimary ? styles.isPrimary : "")}
    {...delegated}
  />
)

export default Btn
