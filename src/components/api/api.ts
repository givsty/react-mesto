import { useEffect } from "react"
import type { Method } from "../types/types"

interface apiProps {
  method: Method
}

//TODO доделать
export const api = ({method}: apiProps) => {
  const config = {
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-mag-4",
    headers: {
      authorization: "561bff47-1094-4520-9c65-f40457c0b35c",
      "Content-Type": "application/json",
    },
  };

  const getResponseData = (result: Response)=>{
    result ? result.json() : Promise.reject(`Ошибка`) 
  }

  useEffect(()=>{
    switch (method) {
      case 'GET':
        fetch(`${config.baseUrl}/cards`).then((result)=>{
          getResponseData(result)
        }).catch((error)=>{
          console.log(error)
        })
      break
      case 'POST':
  
      default:
        break;
    }
  }, [])
 
}
