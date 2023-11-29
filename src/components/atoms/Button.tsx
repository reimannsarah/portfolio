interface Button {
  children: string;
  onClick: () => void;
}

const Button: React.FC<Button> = ({children, onClick}) => {
  return (
    <button className="button" onClick={onClick}>{children}</button>
  )
}

export default Button;