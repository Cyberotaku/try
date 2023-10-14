import request from "./request";

export default class cancelTeam{
    static async cancelteam(data:{
        user_name:string,
        team_name:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"del",
            url:"team/deleteteam",
            data:data,
        });
    }
}  