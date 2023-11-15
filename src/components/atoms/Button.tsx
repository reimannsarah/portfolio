interface Button {
  children: string;
}

const Button: React.FC<Button> = ({children}) => {
  return (
    <div className="button">
      <button>{children}</button>
    </div>
  )
}

export default Button;