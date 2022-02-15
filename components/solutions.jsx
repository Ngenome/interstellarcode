import styles from "../styles/Solutions.module.css"

export default function SolutionPage(){
    return (
      <div className={["h-screen   bg-gray-900", styles.container].join(" ")}>
        <div className="bg-black w-full h-fit">
          {" "}
          <span
            className={[
              " text-3xl bg-gradient-to-r from-yellow-500 to-purple-600 font-alegreya font-bold ",
              styles.gradientText,
            ].join(" ")}
          >
            Creative software solutions. Affordable pricing
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
            We the team at interstellar code care about your business. With<br/>
            various plans , we can make and have your web or mobile up running<br/>
            and you dont have to pay everything at once. Just at your pace.
          </p>

          <button className=" bg-gradient-to-r from-blue-500 to-pink-500  rounded-sm h-fit py-1 px-4  w-fit  relative   left-40 top-32 text-white">
            Choose your plan
          </button>
        </div></div>
      </div>
    );
}