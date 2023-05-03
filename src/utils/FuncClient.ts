class FuncClient {
  checkNull = (str: string) => {
    if (str === null || str === undefined || str === '') {
      return true;
    }
    return false;
  };
}

export default new FuncClient();
