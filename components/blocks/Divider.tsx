interface DividerProps {
  direction?: "left" | "center";
}

export default function Divider({ direction = "center" }: DividerProps) {
  return (
    <div
      // eslint-disable-next-line
      className={`h-[2px] max-w-20 w-full ${
        direction === "center" ? "mx-auto" : ""
        // eslint-disable-next-line
      } bg-jasperOrange my-4`}
    />
  );
}
