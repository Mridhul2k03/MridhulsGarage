import axios from 'axios'

const commonApi = (reqHeader,reqMethod,url,reqBody)=>{
    const config={
        url:url,
        data:reqBody,
        method:reqMethod,
        headers:reqHeader?reqHeader:{'Content-Type':'application/json'}
    }
    return axios(config)
}
export default commonApi