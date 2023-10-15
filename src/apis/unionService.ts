import request from "./request";

export default class service{
    static async joinTeam(data:{
        team_name:string,
        password:string,
        user_account:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"post",
            url:"jointeam",
            data:data,
        });
    } //加入团队

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
    }//取消报名

    static async deleteTeam(data:{
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
    }//解散团队

    static async update(data:{
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
    }//更新团队信息

    static async signUp(data:{
        team_name:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"post",
            url:"api/team/appliciation",
            data:data,
        });
    }//团队报名

    static async deleteTeammate(data:{
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
    }//踢人

    static async teamInformation(data:{
        account:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"get",
            url:"api/teaminformation",
            data:data,
        });
    }//查看团队信息

    static async createTeam(data:{
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
    }//创建团队
}  