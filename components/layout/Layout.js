// ===== style-jsx ===== //
import Head from "next/head";

import Header from "../header/Header";
import NavBar from "../navbar/Navbar";

import "./Layout.scss";
import "../index.scss";

import navButtons from "../../config/buttons";

const Layout = props => {
  const appTitle = `> HIRO DELIVERY`;

  return (
    <div className="Layout">
      <Head>
        <title>HIRO DELIVERY</title>
      </Head>

      <Header appTitle={appTitle} />

      <div className="Content">{props.children}</div>

      <NavBar navButtons={navButtons} />
    </div>
  );
};

export default Layout;

// ===== style object ===== //

// import Header from "./Header";
// import NavBar from "./NavBar";
// import Head from "next/head";

// const layoutStyle = {
//   display: "flex",
//   flexDirection: "column",
//   height: "100%",
//   width: "100%"
// };

// const contentStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column"
// };

// const Layout = props => (
//   <div className="Layout" style={layoutStyle}>

//     <Head>
//       <title>WHATABYTE</title>
//     </Head>
    
//     <Header />

//     <div className="Content" style={contentStyle}>
//       {props.children}
//     </div>

//     <NavBar />
    
//   </div>
// );

// export default Layout;