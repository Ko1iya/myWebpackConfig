import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import buildWebpack from "./config/build/buildWebpack"
import { BuildOptions, BuildPaths } from "./config/build/types/types"
import path from "path"

type Mode = "production" | "development"

interface EnvVariables {
  mode: Mode
  port: number
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
  }

  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode,
    paths,
  })
}
