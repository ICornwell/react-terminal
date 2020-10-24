import styles from "../index.scss";

export default class Utils {
  static getCSSVariable(name: string) : string {
    const style = document.querySelector(`#${styles.terminalContainer}`)
    if (style)
      return getComputedStyle(
        style
      ).getPropertyValue(name)
    else
        return ""
  }
}
