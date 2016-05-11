import d3 from 'd3';
import '../data/russia-region-names.tsv'

export function getRegions() {
    return (dispatch)=> {
        dispatch({
            type: 'SET_REGIONS_REQUEST',
            payload: 'Загрузка...'
        });
        d3.tsv('/static/russia-region-names.tsv',(data)=>{
            if (data.length){
                dispatch({
                    type: 'SET_REGIONS_SUCCESS',
                    payload: data
                })
            }else {
                dispatch({
                    type: 'SET_REGIONS_FAILURE',
                    payload: 'Нет данных'
                })
            }
        });
    }
}