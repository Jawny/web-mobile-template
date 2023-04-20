import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { Capacitor } from "@capacitor/core";
import { IDeviceInfo } from "interfaces";

export const DeviceContext = createContext<IDeviceInfo | null>(null);

export const useDeviceContext = () => useContext(DeviceContext);

export const DeviceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [device, setDevice] = useState<IDeviceInfo | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const platform: string = Capacitor.getPlatform();

        switch (platform) {
          case "ios":
            setDevice({ platform: "ios" });
            break;
          case "android":
            setDevice({ platform: "android" });
            break;
          case "web":
            setDevice({ platform: "web" });
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
};
