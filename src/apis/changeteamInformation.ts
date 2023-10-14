import request from "./request";

export default class changeInfo{
    static async kickperson(data:{
        password:string,
        repassword:string,
        team_name:string,
        number:number,
        originteamname:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"put",
            url:"team/update",
            data:data,
        });
    }
}  