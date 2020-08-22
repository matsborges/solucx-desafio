import {http} from "./config";

export default {
    listar:(filtro, page) => {
        const params = {};
        if(filtro.id) params.id = filtro.id;
        if(filtro.name) params.name_like = filtro.name;
        if(filtro.status) params.status = filtro.status;
        if(filtro.fly == "ida"){
            params.fly_gte = 0
            params.fly_lte = 50
        }
        if(filtro.fly == "volta"){
            params.fly_gte = 51
            params.fly_lte = 100
        }

        params._page = page;
        params._limit = filtro.limit;
        params._sort = filtro.sort;
        params._order = filtro.order;
        return http.get("/",{
           params:params
       })
    },

    detalhes:(id) => {
        return http.get("/" + id);
    }
}