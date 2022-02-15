import styles from "../styles/Interfaces.module.css";

export default function InterfacesPage() {
  return (
    <div
      className={["h-screen  relative bg-gray-900", styles.container].join(" ")}
    >
      <div className="bg-black w-full h-fit">
        {" "}
        <span
          className={[
            " text-3xl bg-gradient-to-r from-blue-600 to-orange-600 font-alegreya font-bold ",
            styles.gradientText,
          ].join(" ")}
        >
          Beautiful interfaces. Smooth Functionality
        </span>
      </div>
      <div className="wrap_details items-center align-middle mt-20">
        <div className="details ml-16">
          <p
            className={[
              "text-white  font-alegreya   font-light",
              styles.maintext,
            ].join(" ")}
          >
            Get a beautiful app or website with all the functionality you <br/>need
            to run your business smoothly without any stress
          </p>

          <button className=" bg-gradient-to-r from-blue-500 to-green-500 text-lg  rounded-sm h-fit py-1 px-4  w-fit   relative  left-40 top-64 text-white mr-32">
            At a glance
          </button>
        </div>
      </div>
    </div>
  );
}
