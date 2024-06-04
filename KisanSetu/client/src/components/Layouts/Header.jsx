import { useState } from "react";
import "./Header.css";
import showSuggestions from "../../util/showsuggestion";
import kishansetulogo from "../../assets/images/KisanSetuLogo.svg";
const subnavbar = [
  {
    title: "All",
    link: "All",
  },
  {
    title: "Today's Fresh",
    link: "TodaysFresh",
  },
  {
    title: "Vegatables",
    link: "Veg",
  },
  {
    title: "Fruits",
    link: "Fruits",
  },
  {
    title: "Dry Fruits",
    link: "Dryfruits",
  },
];

function Header({ currentPage, handleCurrentPage }) {
  const [category, setCategory] = useState("All");
  const [suggestions, setSuggestions] = useState([]);
  let isLogin = false;

  function searchHandler(e) {
    console.log(e.target.value);
    setSuggestions(() => {
      return showSuggestions(e.target.value, category);
    });
  }

  function categoryHandler(e) {
    setCategory(e.target.value);
  }

  return (
    <>
      <header>
        <nav id="navbar">
          <img  src={kishansetulogo} 
                alt="logo" 
                id="brandlogo" />
          <div>
            <form action="" id="searchbar">
              <select id="category" 
                      name="category" 
                      onChange={categoryHandler}>
                <option value="All">All</option>
                <option value="veg">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="dryfruits">Dry Fruits</option>
              </select>

              <div className="searchsuggestions">
                <input
                  type="text"
                  id="searchBar"
                  placeholder="Search.."
                  onKeyUp={searchHandler}
                />
                <div id="suggestions">
                  {suggestions?.map((suggestion, index) => (
                    <div key={index}>{suggestion}</div>
                  ))}
                </div>
              </div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.8em"
                  height="1.8em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#FBFADA"
                    d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div id="navbuttons">
            {isLogin && (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FBFADA"
                      d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FBFADA"
                      d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                    />
                  </svg>
                </button>
              </>
            )}
            {!isLogin && (
              <>
                <button
                  id="loginBtn"
                  onClick={() => handleCurrentPage("Login")}
                >
                  Login
                </button>
                <button
                  id="registerBtn"
                  onClick={() => handleCurrentPage("Register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </nav>
        <div id="subnavbar">
          {subnavbar.map((sn) => (
            <button
              id={currentPage === sn.link ? "subnavbaractivebtn" : undefined}
              key={sn.link}
              onClick={() => handleCurrentPage(sn.link)}
            >
              {sn.title}
            </button>
          ))}
        </div>
      </header>
    </>
  );
}

export default Header;
