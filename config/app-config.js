/**
 * Konfiguracja aplikacji NIEMIECKI
 * Backend: Nele2
 */
const appConfig = {
  api: {
    baseUrl: "https://nele2-backend.onrender.com",
    timeout: 70000
  }
};

if (typeof window !== "undefined") {
  window.appConfig = appConfig;
  window.NELE_API_BASE = appConfig.api.baseUrl;
}
