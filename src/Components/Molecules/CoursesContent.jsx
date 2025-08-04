import Divider from "../Atoms/Divider";
import coursesIcon from "../../assets/images/courses.gif"
import logo3 from "../../assets/images/logo3.png"
import CoursesCard from "../Atoms/CoursesCard";

function CoursesContent() {
  return (
    <>
      <div className="mt-[730px]  ">
        <Divider/>
     <div className="flex flex-row items-center pt-10">
        <img src={coursesIcon} className="w-1/4"/>
        <h1 className="text-orange-400 text-[100px] font-bold ">Courses</h1>
     </div>
     <div className="grid md:grid-cols-3 gap-3 mx-10 ">
<CoursesCard src={logo3} TopicContent="English "/>
<CoursesCard src={logo3} TopicContent="French "/>
<CoursesCard src={logo3} TopicContent="Spanich "/>
     </div>
      </div>
    </>
  );
}

export default CoursesContent;
