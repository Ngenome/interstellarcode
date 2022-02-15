import Head from "next/head";
import Image from "next/image";
import InterfacesPage from "../components/interfaces";
import Popup from "../components/popup";
import Card from "../components/roundycards";
import SolutionPage from "../components/solutions";
import StackPage from "../components/stack";
import SupportPage from "../components/support";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div className="pagewrap">
      <Popup title="Test"/>
      <div className={styles.container}>
        <div className=" relative top-36">
          {" "}
          <span
            className={[
              "text-6xl font-abel ",
              styles.companyname,
            ].join(" ")}
          >
            Interstellar Code
          </span>
          <div className="text-white  mt-4   flex flex-row  justify-between">
            <div className="enclosure left-10  ">
              {" "}
              <p className="text-2xl font-alegreya">
                Taking your business next level
              </p>
              <p className="font-alegreya text-lg ">
                with the next level web and mobile apps
              </p>
            </div>
            <button className=" bg-gradient-to-r from-blue-500 to-pink-500  rounded-lg h-fit  w-fit p-1.5  mr-32">
              Get your app
            </button>
          </div>
          <div className="roundy_cards ml-5 mr-3 mt-24 flex flex-row justify-around ">
            <Card name="iOS development" color="pink" />{" "}
            <Card name="Android development" color="purple" />
            <Card name="Web development" color="blue" />
          </div>
        </div>
      </div>
      <SolutionPage />
      <InterfacesPage />
      <SupportPage />
      <StackPage/>
    </div>
  );
}
