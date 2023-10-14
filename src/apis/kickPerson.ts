import request from "./request";

export default class kickPerson{
    static async kickperson(data:{
        user_name:string,
        team_name:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"del",
            url:"team/deleteteammate",
            data:data,
        });
    }
}  