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
// 全局任务
const taskList=[]
let taskIndex = 0

function addTask(task,times=1){
    for(let i = 0 ; i < times ; i ++){
        taskList.push(task) 
    }
}

// function interval(time=1000,times=1,fn){
//     let count = times
//     let timer = setInterval(()=>{
//         fn()
//         count--
//         if(count == 0){
//             timer = null
//         }
//     },time)
// }

// 挑战竞技场
function arena_fight(){
    axios.get('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=arena&op=challenge').then(()=>{
        console.log('挑战一次')
    })
}
// 挑战5次竞技场
addTask(arena_fight,5)

// 领取竞技场奖励
function arena_reward(){
    axios.get('https://dld.qzapp.z.qq.com/qpet/cgi-bin/phonepk?zapp_uin=&sid=&channel=0&g_ut=1&cmd=arena&op=drawdaily').then(()=>{
        console.log('领取竞技场奖励')
    })
}
addTask(arena_reward)

let taskTimer = setInterval(()=>{
    if(taskIndex == taskList.length){
        clearInterval(taskTimer)
    }
    taskList[taskIndex]()
    taskIndex++
},1000)