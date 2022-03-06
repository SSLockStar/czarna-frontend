class AlertService {
  constructor() { }

  /**
   * 
   * @param {*} title 
   * @param {*} text 
   */
  showToast({method, type, title, text}) {
    const options = {
      toast: true,
      position: "top-end",
      icon: type,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
    };

    options['title'] = title;
    if (text) options['text'] = text;

    method(options);
  }
}

export default new AlertService();