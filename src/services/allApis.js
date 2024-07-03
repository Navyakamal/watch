import { BaseUrl } from "./baseUrl";
import { commonApi } from "./commonApi";

//register
export const registerApi=async(bodyData)=>{
   return await commonApi('POST',`${BaseUrl}/user/register`,bodyData)
}

//login
export const loginApi=async(bodyData)=>{
    return await commonApi('POST',`${BaseUrl}/user/login`,bodyData)
 }

 //add movie
 export const addMovieApi=async(bodyData,headerData)=>{
   return await commonApi('POST',`${BaseUrl}/admin/add-movie`,bodyData,headerData)
}
