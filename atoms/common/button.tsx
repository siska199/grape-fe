import { motion } from "framer-motion";

type TProps = {
  onClick : ()=>void;
  customeStyle : string;
  name : string;
}

const Button = (props: TProps) => {
  const {onClick, customeStyle, name} = props
  return (
    <motion.button whileTap={{scale:0.9}} onClick={onClick} className={`text-sm h-[2rem] px-4 ${customeStyle}`}>{name.toUpperCase()}</motion.button>
    )
}

export default Button