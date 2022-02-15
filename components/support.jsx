import styles from "../styles/Support.module.css";

export default function SupportPage() {
  return (
    <div
      className={["h-screen  relative bg-gray-900", styles.container].join(" ")}
    >
      <div className="bg-black w-full  h-fit">
        {" "}
        <span
          className={[
            " text-3xl bg-gradient-to-r text-white text-center  relative left-24 font-alegreya font-bold ",
            ,
          ].join(" ")}
        >
Full 24 hr support for you our customer
        </span>
      </div>
      <div className="wrap_details items-center align-middle mt-20">
          <div className="fwrap flex flex-row">        <div className="details ml-16">
          <p
            className={[
              "text-white  font-alegreya   font-light",
              styles.maintext,
            ].join(" ")}
          >
            We the team at interstellar code care about your business. With
            <br />
            various plans , we can make and have your web or mobile up running
            <br />
            and you dont have to pay everything at once. Just at your pace.
          </p>

          <button className=" bg-gradient-to-r from-purple-500 to-yellow-500  rounded-md h-fit py-1 px-4  w-fit     left-40 top-64 text-white mr-32">
            Choose your plan
          </button></div>
          <div className={["relative top-20  ", styles.clock].join(" ")}>
            <img src="/supportclock.svg" className={[" ", styles.clocksvg].join(" ")} alt="" />

          </div>
        </div>
      </div>
      
    </div>
  );
}
