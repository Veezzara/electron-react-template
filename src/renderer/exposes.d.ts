type versionsExposesType =
  import("../main/exposes/versions").versionsExposesType;
type credentialsExposesType =
  import("../main/exposes/credentials-expose").credentialsExposesType;
type apiClientExposeType =
  import("../main/exposes/api-client-expose").apiClientExposeType;

declare const versions: versionsType;
declare const credentialsService: credentialsExposesType;
declare const apiClient: apiClientExposeType;
