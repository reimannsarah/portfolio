import logo from '../../assets/imgs/logo_name.png'

const Footer = () => {
  return (
    <div className='footer'>
      <p>&#xa9; Sarah Reimann</p>
      <div className='logo-icons'>
        <div className='icons'>
          <div className='icon'></div>
          <div className='icon'></div>
          <div className='icon'></div>
        </div>
        <img src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default Footer;