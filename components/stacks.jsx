import styles from "../styles/Stack.module.css";
import TechIcon from "./techicon";
export default function Stacks() {
  return (
    <div className="mt-10 ">
      <div className=" w-full  h-fit ">
        <span
          className={[
            " text-3xl bg-gradient-to-r from-yellow-500 to-pink-500 text-center mx-4  relative left-64 font-alegreya font-bold ",
            styles.gradientText,
          ].join(" ")}
        >
          Supported technologies
        </span>
      </div>
      <div className="flex flex-col flex-wrap">
        <div className={styles.stackwrapper}>
          <TechIcon source="/tech/react.svg" />
          <TechIcon source="/tech/nextjs.svg" />
          <TechIcon source="/tech/vue.svg" />
          <TechIcon source="/tech/nuxtjs.svg" />
        </div>
        <div className={styles.stackwrapper}>
          <TechIcon source="/tech/strapi.svg" />
          <TechIcon source="/tech/django.svg" />
          <TechIcon source="/tech/rails.svg" />
          <TechIcon source="/tech/laravel.svg" />
        </div>
        <div className={styles.stackwrapper}>
          <TechIcon source="/tech/reactnative.svg" />
          <TechIcon source="/tech/flutter.svg" />
          <TechIcon source="/tech/xcode.svg" />
          <TechIcon source="/tech/androidstudio.svg" />
        </div>
      </div>
    </div>
  );
}
