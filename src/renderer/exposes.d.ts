type VersionsExposesType =
  import("../main/exposes/versions").VersionsExposesType;
type CredentialsExposesType =
  import("../main/exposes/credentials-expose").CredentialsExposesType;
type ApiClientExposeType =
  import("../main/exposes/api-client-expose").ApiClientExposeType;

declare const versions: versionsType;
declare const credentialsService: CredentialsExposesType;
declare const apiClient: ApiClientExposeType;
