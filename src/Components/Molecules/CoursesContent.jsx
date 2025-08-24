import Divider from "../Atoms/Divider";
import coursesIcon from "../../assets/images/courses.gif";
import logo3 from "../../assets/images/logo3.png";
import CoursesCard from "../Atoms/CoursesCard";
import MainTitle from "../Atoms/MainTitle";


function CoursesContent() {
  return (
    <>
      <div className="mt-[730px]  mb-10 ">
        <Divider />
       <MainTitle src={coursesIcon} title="Courses" classes="w-1/6 object-contain" />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mx-10 ">
          <CoursesCard src={logo3} TopicContent="English " />
          <CoursesCard src={logo3} TopicContent="French " />
          <CoursesCard src={logo3} TopicContent="Spanich " />
        </div>
      </div>
    </>
  );
}

export default CoursesContent;
