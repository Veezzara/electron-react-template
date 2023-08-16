import EnvOption from "./env-options";

const getEnvironment = () => {
  const env = process.env.NODE_ENV;

  const envOptions = Object.values(EnvOption);

  for (let i = 0; i < envOptions.length; ++i) {
    const option = envOptions[i];
    if (env === option) return option;
  }

  return undefined;
};

export default getEnvironment;
