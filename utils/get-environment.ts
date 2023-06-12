import EnvOption from "./env-options";

const getEnvironment = () => {
  const env = process.env.NODE_ENV;

  if (env === EnvOption.Development) return EnvOption.Development;
  if (env === EnvOption.Production) return EnvOption.Production;
  return undefined;
};

export default getEnvironment;
