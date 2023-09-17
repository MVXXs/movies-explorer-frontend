export default function durationMath(min) {
    const minutes = min % 60;
    const hour = Math.floor(min / 60);
    return hour ? `${hour}ч ${minutes}м` : `${minutes}м`;
};