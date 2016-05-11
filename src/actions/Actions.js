import d3 from 'd3';

export function getRegions() {
    return (dispatch)=> {
        dispatch({
            type: 'SET_REGIONS_REQUEST',
            payload: 'Загрузка...'
        });
        dispatch({
            type: 'SET_REGIONS_SUCCESS',
            payload: (()=>{
                let regs = [];
                console.log(__dirname);
                d3.tsv('/static/russia-region-names.tsv',(data)=>{
                    regs = data;
                });
                return regs;
            })()
        });
        dispatch({
            type: 'SET_REGIONS_FAILURE',
            payload: 'Нет данных'
        });
    }
}