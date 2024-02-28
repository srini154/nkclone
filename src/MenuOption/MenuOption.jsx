import React, { useState } from "react";
import "./MenuOption.css";
import { MenuItems } from "../Constants";
import { Link } from "react-router-dom";

function MenuOption() {
  const [open, setOpen] = useState(null);
  const openmenu = (index) => {
    setOpen(index);
  };
  const closemenu = () => {
    setOpen(null);
  };
  return (
    <div>
      {MenuItems.map((e, index) => (
        <div
          key={index}
          onMouseEnter={() => openmenu(index)}
          //   onMouseLeave={closemenu}
          className="Menuitems-dropdown"
        >
          {e.name}

          {open === index && (
            <div
              className="dropdown-menu"
              //   onMouseEnter={() => openmenu(index)}
              onMouseLeave={closemenu}
            >
              <ul className="ul-menu-dropdown">
                {e.category.map((menu, innerIndex) => (
                  <div key={innerIndex} style={{ paddingRight: "25px" }}>
                    <h3 className="categoryName">
                      {menu.categoryName}

                      <ul className="ul-list-menu-dropdown">
                        {menu.categoryitems.map((item, i) => (
                          <Link
                            key={i}
                            to={`/${item}`}
                            style={{ textDecoration: "none" }}
                          >
                            <li className="list-dropdown">{item} </li>
                          </Link>
                        ))}
                      </ul>
                    </h3>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuOption;
