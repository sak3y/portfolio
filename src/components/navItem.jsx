const Link = ({ title, icon, href, label, target, className, as = "a", onClick }) => {
  const classes = `${className} icon`;

  if (as === "button") {
    return (
      <button className={classes} aria-label={label} onClick={onClick}>
        <i className={icon}></i>
        <span> {title}</span>
      </button>
    );
  }

  return (
    <a href={href} className={classes} target={target} aria-label={label}>
      <i className={icon}></i>
      <span> {title}</span>
    </a>
  );
};

export default Link;