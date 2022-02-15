import styles from "../styles/Stack.module.css";
import Stacks from "./stacks";
import TechIcon from "./techicon";

export default function StackPage() {
  return (
    <div className={[" h-screen", styles.container].join(" ")}>
      <div className={styles.intermediate}><img src="/stackwave.svg" className=" object-cover w-screen" alt="" /></div>
      <div className=" ">
        <div className=" w-full  h-fit">
          <span
            className={[
              " text-3xl bg-gradient-to-r from-yellow-500 to-pink-500 text-center  relative left-24 font-alegreya font-bold ",
              styles.gradientText,
            ].join(" ")}
          >
            Choose your favorite tech stack
          </span>
        </div>
        <div className="wrap_details items-center align-middle mt-20">
          <div className="fwrap flex flex-row">
            {" "}
            <div className="details ml-16">
              <p
                className={[
                  "text-white  font-alegreya   font-light",
                  styles.maintext,
                ].join(" ")}
              >
                Having a team with proficient knowledge in different frameworks
                <br />
                and languages, you can choose which tech stack you wish us to
                <br />
                use to make your app. In case your’re not sure of which stack to
                <br />
                use, we will choose one for you based on the need of your app as
                <br />
                well as your plan
              </p>

              <button className=" bg-gradient-to-r from-purple-500 to-yellow-500  rounded-md h-fit py-1 px-4  w-fit   relative  left-0 mt-10 text-white mr-2">
                Choose your stack
              </button>
            </div>
          </div>
          <Stacks />
        </div>
      </div>
    </div>
  );
}
