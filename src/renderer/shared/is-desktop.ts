const isDesktop = (
  bridge: Exposes | undefined = undefined,
): bridge is Exposes => bridge !== undefined;

export default isDesktop;
