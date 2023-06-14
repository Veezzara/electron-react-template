type versionsExposesType =
  import("../main/exposes/versions").versionsExposesType;
type credentialsExposesType =
  import("../main/exposes/credentials-expose").credentialsExposesType;

declare const versions: versionsType;
declare const credentialsService: credentialsExposesType;
