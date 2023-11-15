interface Button {
  children: string;
}

const Button: React.FC<Button> = ({children}) => {
  return (
    <div>
      <button className="button">{children}</button>
    </div>
  )
}

export default Button;