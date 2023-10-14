import request from "./request";

export default class setteam{
    static async signUp(data:{
        team_name:string,
        leader_name:string, 
        number:number,
        password:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"post",
            url:"api/createteam",
            data:data,
        });
    }
}  //用于团队建立