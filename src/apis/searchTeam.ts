import request from "./request";

export default class searchteam{
    static async getTeamInformation(data:{
        name:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"get",
            url:"api/teaminformation",
            data:data,
        });
    }
}