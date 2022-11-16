const deadLine = '2022-11-30';
function getTimeRemaining(endDate) {
    const timeNow = Date.now();
    const endTime = new Date(endDate).getTime();
    const remnantTime = endTime - timeNow;
    const days = Math.floor(remnantTime / 1000 / 60 / 60 / 24);
    const hours = Math.floor((remnantTime / 1000 / 60 / 60 % 24));
    const minutes = Math.floor((remnantTime / 1000 / 60 % 60));
    const seconds = Math.floor((remnantTime / 1000 % 60));
    return {remnantTime, days, hours, minutes, seconds,};
}
const timerObject = getTimeRemaining(deadLine);