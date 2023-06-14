const versionsExposes = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
};

export default versionsExposes;
export type versionsExposesType = typeof versionsExposes;
