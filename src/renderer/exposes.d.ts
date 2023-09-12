type ExposesType = import("../main/exposes/index").ExposesType;

declare global {
  type Exposes = ExposesType;

  interface Window {
    bridge: Exposes | undefined;
  }
}

export {};
