export function toMinutes(time){
    const timeParts  = time.split(":")
    const total = (Number(timeParts[0]) * 60) + Number(timeParts[1])

    return total

}

export function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60)       // whole hours
    const rest = minutes % 60     // leftover minutes
    
    if (hours === 0) {
        return `${minutes}`          // e.g. "30 min"
    }
    
    return `${hours} h ${rest}`
}