// write and export your action creator function here
export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS'})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(resp => {
            return resp.json()
        }).then(respJSON => {
            // console.log(respJSON.images)
            dispatch({ type: 'ADD_CATS', cats: respJSON.images })
        })
    }
}