class AppURL {
  static Base = "http://127.0.0.1:8000";
  static BaseURL = `${this.Base}/api`;

  /**
   * CompileURL() v1
   * @param methodName The Name of the method or page after the domain {BaseURL}
   * @returns Full URL Domain + your page or method or url
   */
  static CompileURL = (methodName: string) => `${AppURL.BaseURL}/${methodName}`;

  static TestURL = AppURL.CompileURL("test");
}

export default AppURL;
