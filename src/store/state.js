var defaultZone = "三民區"

try {
    if (localStorage.zone) {
        defaultZone = localStorage.zone
    }
}catch (e) {

}

export default {
    zone: defaultZone
}