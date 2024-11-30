import { AiOutlineLoading } from "react-icons/ai";
import styles from "./Spinner.module.css";

type Props = {
  width?: string;
  height?: string;
  color?: string;
};

export default function Spinner({ width, height, color }: Props) {
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
    >
      <AiOutlineLoading className={styles.loading} color={color} />
    </div>
  );
}
