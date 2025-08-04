const Menu = ({toggleMenu}) => {
  let menuButton = "≡";

  return (
    <button className={"menu-button icon hide"} onClick={toggleMenu} style={{ fontSize: "1.8rem" }}>
      {menuButton}
    </button>
  );
};

export default Menu;
