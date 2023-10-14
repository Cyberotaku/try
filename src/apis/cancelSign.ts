import request from "./request";

export default class chexiao{
    static async cancelSign(data:{
        team_name:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"post",
            url:"team/cancle",
            data:data,
        });
    }
}  //用于团队报名