import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "",
    img: "",
    desc: "lorem",
  },
  {
    id: 2,
    title: "",
    img: "",
    desc: "lorem",
  },
  {
    id: 3,
    title: "",
    img: "",
    desc: "lorem",
  },
  {
    id: 4,
    title: "",
    img: "",
    desc: "lorem",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1> Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

const portfolio = () => {
  return <div className="portfolio">portfolio</div>;
};

export default portfolio;
