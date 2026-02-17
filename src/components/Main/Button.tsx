import { Link } from "react-router-dom";
import icon from "../../assets/icons/ui/arrow.svg";

type ButtonProps = {
  content: string;
  link: string;
  external?: boolean;
};

const Button = ({ content, link, external = false }: ButtonProps) => {
  const classes =
    "inline-flex mx-auto items-center gap-2 rounded-2xl bg-slate-700 px-6 py-2 text-white font-medium shadow-lg transition-all duration-300 hover:bg-gray-800 hover:translate-x-1";

  const ButtonContent = (
    <>
      <span>{content}</span>
      <img src={icon} alt="" aria-hidden="true" className="w-5 h-5 invert" />
    </>
  );

  return external ? (
    <a href={link} className={classes} target="_blank" rel="noreferrer">
      {ButtonContent}
    </a>
  ) : (
    <Link to={link} className={classes}>
      {ButtonContent}
    </Link>
  );
};

export default Button;
