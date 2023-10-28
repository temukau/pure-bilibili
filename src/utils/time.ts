export const Time = {

    /**
     * Converts seconds to time ago format
     *
     * @param timestamp {number} seconds
     * @return {string} time ago format
     *
     * @example
     * secondsToAgo(60) // return '1分钟前'
     */
    timeStampToAgo(timestamp: number): string {
        const now = Date.now();
        const seconds = Math.floor((now - timestamp * 1000) / 1000);
        if (seconds < 60) {
            return `${seconds}秒前`;
        }
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) {
            return `${minutes}分钟前`;
        }
        const hours = Math.floor(minutes / 60);
        if (hours < 24) {
            return `${hours}小时前`;
        }
        const days = Math.floor(hours / 24);
        if (days < 30) {
            return `${days}天前`;
        }
        const months = Math.floor(days / 30);
        if (months < 12) {
            return `${months}月前`;
        }
        const years = Math.floor(months / 12);
        return `${years}年前`;
    },

    /**
     * Converts seconds to time format
     *
     * @param duration {number} seconds
     * @returns {string} time format
     *
     * @example
     * secondsToTime(60) // return '01:00'
     * secondsToTime(90) // return '01:30'
     */
    secondsToTime(duration: number): string {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);

        const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutesStr}:${secondsStr}`;
    }

}