function axios({url,method="GET",params={},data={}}){
    return new Promise((resolve,reject)=>{
        //处理params参数,例如{id:1,xxx:'abc'}
        let str=""
        Object.keys(params).forEach(key=>{
            str+=`${key}=${params[key]}&`
        })
        if(str)str.slice(0,-1)
        url=url+str

        const xhr=new XMLHttpRequest();
        xhr.open(method,url)
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status>=200&&xhr.status<300){
                    resolve({
                        status:xhr.status,
                        statusText:xhr.statusText,
                        data:xhr.response
                    })
                }else{
                    reject(new Error("请求失败，状态码："+xhr.status))
                }
            }
        }

        //处理method方法
        method=method.toUpperCase() //method转大写
        if(method=="GET"){
            xhr.send()
        }else if(method=="POST"||method=="PUT"||method=="DELETE"){
            //设置文件类型
            xhr.setRequestHeader("Content-Type","application/json")
            xhr.send(JSON.stringify(data))
        }
    })
}
/* 发送特定请求的静态方法 */
axios.get = function (url, options={}) {
    return axios(Object.assign(options, {url, method: 'GET'}))
}
axios.delete = function (url, options) {
    return axios(Object.assign(options, {url, method: 'DELETE'}))
}
axios.post = function (url, data, options) {
    return axios(Object.assign(options, {url, data, method: 'POST'}))
}
axios.put = function (url, data, options) {
    return axios(Object.assign(options, {url, data, method: 'PUT'}))
}
function general(url, message = "", times = 1){
    function inner(){
        axios.get(url).then(() =>{
            console.log(message)
        })
    }
    for(let i = 0; i < times; i++){
        taskList.push(inner)
    }
}
// 全局任务
const taskList=[]
let taskIndex = 0

// function general(url,message = "", times = 1){
//     function inner(){
//         let newWindow = window.open(url,url)
//         console.log('newWindow',newWindow)
//         console.log(message)
//         setTimeout(()=>{
//             newWindow.close()
//             newWindow = null
//         },3000)
//     }
//     for(let i=0;i<times;i++){
//         taskList.push(inner)
//     }
// }

// 配置
const config={
    // 徒弟
    apprentice:[1738978524, 1545682873, 1070639853],
    // 师傅
    master:1273036794,
    // 陌生人
    stranger:[188584100, 1421801427, 425766112]
}
const now = new Date()
// yyyy-MM-dd HH:mm:ss
const dd = now.getDay()
const HH = now.getHours() 
// 每日奖励
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=dailygift&op=draw&key=login','每日礼包')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=dailygift&op=draw&key=meridian','传功符礼包')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=dailygift&op=draw&key=daren','达人礼包')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=dailygift&op=draw&key=wuzitianshu','无字天书礼包')


// 门派邀请赛
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=exchange&subtype=2&type=1249&times=1&costtype=11','兑换一张门派战书',5)
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=secttournament&op=fight','挑战门派邀请赛',10)

// 门派
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=sect&op=trainingwithnpc','木桩训练')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=sect&op=trainingwithmember','同门切磋')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=sect&op=fumigatefreeincense','光明寺-普通香炉')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=exchange&subtype=2&type=1248&times=1&costtype=11','兑换一个门派高香')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=sect&op=fumigatepaidincense','光明寺-高香香炉')


// 六门会武
// 礼拜一到礼拜三
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=sectmelee&op=showscene&scene=1000','六门会武-初级试炼场')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=sectmelee&op=dotraining','挑战',5)

// 竞技场相关
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=arena&op=challenge','挑战一次竞技场',5)
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=arena&op=drawdaily','领取竞技场奖励')

// 仙武修真
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=immortals&op=visitimmortals&mountainId=2','寻访+敏捷')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=immortals&op=fightimmortals','挑战')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=immortals&op=visitimmortals&mountainId=2','寻访+敏捷')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=immortals&op=fightimmortals','挑战')

// 天界十二宫
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=zodiacdungeon&op=showautofightpage&scene_id=1011','天界12宫-双鱼（111-120)')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=zodiacdungeon&op=autofight&scene_id=1011&pay_recover_times=0','请猴王扫荡')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=zodiacdungeon&op=showresurrection&from=autofight','复活')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=zodiacdungeon&op=choosebuff&pay_index=0&free_index=1&from=autofight','选择菜菜的祝福')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=zodiacdungeon&op=backtolife&pay_index=0&free_index=1&from=autofight','确认复活')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=zodiacdungeon&op=autofight&scene_id=1011&pay_recover_times=0','请猴王扫荡')
// 师徒妻拜
// 徒弟
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&B_UID=0&sid=&channel=0&g_ut=1&cmd=exp','领取徒弟经验')
for(let i =0,n=config.apprentice.length;i<n;i++){
    general(`https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=${config.apprentice[i]}`,'挑战徒弟')
}
// 师傅
general(`https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=${config.master}`,'挑战师傅')

// 挑战3次陌生人
for(let i=0,n=config.stranger.length;i<n;i++){
    general(`https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=${config.stranger[i]}&page=1&type=9`,'挑战陌生人')
}

// 武林大会
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&B_UID=0&sid=&channel=0&g_ut=1&cmd=fastSignWulin&ifFirstSign=1','报名武林大会')

// 旅行
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=dreamtrip&sub=2','普通旅行一次',1)

// 历练
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=mappush&subtype=3&mapid=20&npcid=6394&pageid=2','历练-鹅王的试炼-全副武装的鹅王',3)
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=mappush&subtype=3&mapid=20&npcid=6393&pageid=2','历练-鹅王的试炼-鹅王分身三',3)
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=mappush&subtype=3&mapid=19&npcid=6374&pageid=2','历练-桃花剑冢-斗神剑气',3)
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=mappush&subtype=3&mapid=19&npcid=6373&pageid=2','历练-桃花剑冢-白龙三',3)

// 斗神塔
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=towerfight&type=7&confirm=1','斗神塔结束挑战')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=towerfight&type=1','自动挑战')

// 画卷迷踪
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=scroll_dungeon&op=fight&buff=0','准备完成进入战斗',10)

// 镖车
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=cargo&op=15','护送完成')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=cargo&op=16','领取奖励')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=cargo&op=7','护送押镖')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=cargo&op=8','刷新押镖',2)
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=cargo&op=6','启程护送')
// general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=cargo&op=3','刷新镖车列表')
// 乐斗好友

general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=33&page=1&type=1','金毛鹅王')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=16&page=1&type=1','乐斗程管')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=12&page=1&type=1','俊猴王')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=11&page=1&type=1','月敏妹妹')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=9&page=1&type=1','乐斗剑君')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=7&page=1&type=1','乐斗菜菜')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=151&page=1&type=1','乐斗小王子')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=1532502541','乐斗心魔')


/**
 * 帮派
 */
// 矿洞
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=factionmine&op=reward','领取矿洞奖励')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=factionmine&op=fight','挑战矿洞',3)
// 乐斗帮友
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=10&page=1&type=2','乐斗羊魔王')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=2&page=1&type=2','乐斗教主')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=3&page=1&type=2','乐斗帅帅')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=4&page=1&type=2','乐斗姜公')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=5&page=1&type=2','乐斗月璇姐')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=6&page=1&type=2','乐斗源大侠')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=14&page=1&type=2','乐斗马大师')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=19&page=1&type=2','乐斗邪神畅')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=fight&B_UID=155&page=1&type=2','乐斗一灯大师')
// 帮派任务
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=factionop&subtype=8&pageno=1&type=2','查看帮派要闻')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=factiontask&sub=3&id=16','领取查看帮派要闻奖励')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_sid=&cmd=factiontrain&type=2&id=2518&num=1&i_p_w=num%7C','帮派修炼真元护体一次')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=factiontask&sub=3&id=8','领取帮修奖励')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=oblation&id=3001&page=1','供奉一个小体力')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=factiontask&sub=3&id=1','领取帮派供奉奖励')

// 许愿
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=wish&sub=6','领取奖励')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=wish&sub=4','许愿')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=wish&sub=1','向月敏上香许愿')

// 历程分享
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=sharegame&subtype=6','一键分享')

// 任务
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&B_UID=0&sid=&channel=0&g_ut=1&cmd=task&sub=7','一键完成任务')


// 活跃度礼包
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&B_UID=0&sid=&channel=0&g_ut=1&cmd=liveness_getgiftbag&giftbagid=1&action=1','活跃小礼包')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&B_UID=0&sid=&channel=0&g_ut=1&cmd=liveness_getgiftbag&giftbagid=2&action=1','活跃中礼包')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&B_UID=0&sid=&channel=0&g_ut=1&cmd=liveness_getgiftbag&giftbagid=3&action=1','活跃大礼包')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&B_UID=0&sid=&channel=0&g_ut=1&cmd=liveness_getgiftbag&giftbagid=4&action=1','活跃终极礼包')
general('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&B_UID=0&sid=&channel=0&g_ut=1&cmd=factionop&subtype=18','帮派总活跃礼包')

// 最终执行
let taskTimer = setInterval(()=>{
    if(taskIndex == taskList.length){
        clearInterval(taskTimer)
        return 
    }
    taskList[taskIndex]()
    taskIndex++
},3000)