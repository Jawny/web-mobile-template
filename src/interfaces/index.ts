import { User } from "firebase/auth";
export interface IDeviceInfo {
  platform: "web" | "ios" | "android";
}

export interface IAuthContextValue {
  user: User | null;
  loading: boolean;
}
