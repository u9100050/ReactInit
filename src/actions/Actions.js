import d3 from 'd3';
import '../data/russia-region-names.tsv'

export function getRegions() {
    return (dispatch)=> {
        dispatch({
            type: 'SET_REGIONS_REQUEST',
            payload: 'Загрузка...'
        });
        d3.tsv('/static/russia-region-names.tsv', (data)=> {
            if (data.length) {
                dispatch({
                    type: 'SET_REGIONS_SUCCESS',
                    payload: data
                })
            } else {
                dispatch({
                    type: 'SET_REGIONS_FAILURE',
                    payload: 'Нет данных'
                })
            }
        });
    }
}

export function changeFilter(value) {
    return (dispatch)=> {
        let searchString = new String(value);
        let regs = [];
        searchString = searchString.trim().toLowerCase();
        if (searchString.length) {
            d3.tsv('/static/russia-region-names.tsv', (data)=> {
                regs = data.filter((d)=> {
                    return d.RegName.toLowerCase().match(searchString)
                });
                dispatch({
                    type: 'SET_FILTER',
                    payload: regs
                });
            })
        }else{
            d3.tsv('/static/russia-region-names.tsv', (data)=> {
                if (data.length) {
                    dispatch({
                        type: 'SET_REGIONS_SUCCESS',
                        payload: data
                    })
                } else {
                    dispatch({
                        type: 'SET_REGIONS_FAILURE',
                        payload: 'Нет данных'
                    })
                }
            });
        }
    }
}