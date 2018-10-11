import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "../package.json";

export default [
  {
    input: "src/components/index.js",
    output: {
      name: "infinitec-ui",
      file: pkg.main,
      format: "cjs"
    },
    external: ["react", "prop-types", "@infinitecsolutions/semantic-ui-react"],
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
];
