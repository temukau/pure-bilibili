export const NumberUtil = {
  /**
   * 数字转中文
   * @param num 数字
   * @return {string} 10000 => 1万
   * @example 10000 => 1万
   */
  numToChinese(num: number): string {
    if (!num) {
      return null
    }
    if (num < 10000) {
      return num.toString()
    } else {
      return (num / 10000).toFixed(1) + '万'
    }
  }
}
