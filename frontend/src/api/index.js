export const url = "http://localhost:5000/api"

export const setheader = () =>{
    const header ={
        headers:{
            "x-auth-token" : localStorage.getItem("token")
        }
    }
    return header
}