export default interface IConfig {
  port : string;
  mongoURL : string;
  key: string
}
export interface IDisplay {
  error: string
  message: string
  status: number
  timestamp: Date
}
