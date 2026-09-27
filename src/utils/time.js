export function toMinutes(time){
    const timeParts  = time.split(":")
    const total = (Number(timeParts[0]) * 60) + Number(timeParts[1])

    return total

}