export default {
    changeZone (state,zone) {

        state.zone = zone;

        try {
            localStorage.zone = zone;
        }catch (e) {}
    }
    
}