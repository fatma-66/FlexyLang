import { animated, useSpring } from "@react-spring/web";
import person from "../../assets/images/person2.png";
const MovingPersons = () => {
  const styles = useSpring({
    from: { transform: "translateX(-100px)" },
    to: { transform: "translateX(100vw)" },
    config: { mass: 1, tension: 170, friction: 26 },
    loop: true,
  });
  return (
    <>
      <animated.img
        src={person}
        style={styles}
        className="absolute top-10 w-2/5"
      />
    </>
  );
};

export default MovingPersons;
