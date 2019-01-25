import { Router , Request , Response , NextFunction} from 'express'
export default function  successHandler(message : string , data) {
  return {
    message: message || "no message",
    data: data || {
      name : "Varun",
      id: 2444,
      maritalStatus: "Unmarried"
    }
  }
}
