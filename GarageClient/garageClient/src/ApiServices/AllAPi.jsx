import commonApi from "./CommonApi";

export const getCustomers=()=>{
    return commonApi('','GET','http://127.0.0.1:8000/customer/','')
}
export const addCustomer=(headers,data)=>{
    return commonApi(headers,'POST','http://127.0.0.1:8000/customer/',data)
}
export const listServices=(id)=>{
    return commonApi('','GET',`http://127.0.0.1:8000/customer/${id}/`,'')
}
export const addService=(id,data)=>{
    return commonApi('','POST',`http://127.0.0.1:8000/customer/${id}/addService/`,data)
}