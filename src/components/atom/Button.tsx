interface ButtonProps extends React.ComponentProps<"button"> {
  text: string;
  onClick?: () => void;
}

export function Button({ text }: ButtonProps) {
  return (
    <button className="btn btn-primary w-full rounded-full">{text}</button>
  );
}
