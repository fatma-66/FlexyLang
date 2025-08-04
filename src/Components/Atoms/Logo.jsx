
import logo from "../../assets/images/logo3.jpg";
import "animate.css";
function Logo() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-6 px-6">
        <img src={logo} alt="" className="w-28 object-contain rounded-full shadow-md" />
       
      </div>
    </>
  );
}

export default Logo;
