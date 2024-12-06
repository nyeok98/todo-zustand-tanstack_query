import { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        width: "20vw",
        height: "100%",
        marginTop: "5vh",
      }}
    >
      {children}
    </div>
  );
};
