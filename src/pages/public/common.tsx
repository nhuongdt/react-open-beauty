export const GuidEmpty = '00000000-0000-0000-0000-000000000000';
export const strToEnglish = (word: string) => {
  if (!word) return '';
  let str = word.trim();
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/^\\-+|\\-+$/g, '');

  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư

  return str;
};

export const getFirstLetter = (str = '') => {
  return str
    ?.match(/(?<=(\s|^))[a-z]/gi)
    ?.join('')
    ?.toUpperCase();
};

export const Remove_LastComma = (str: string) => {
  if (str !== null && str !== undefined && str.length > 1) {
    return str.replace(/(^[,\s]+)|([,\s]+$)/g, '');
  } else {
    return '';
  }
};

export const checkNull = (input: string) => {
  return input === null || input === undefined || input.toString().replace(/\s+/g, '') === '';
};

export const formatNumberToFloat = (objVal: any) => {
  if (objVal === undefined || objVal === null) {
    return 0;
  } else {
    const value = parseFloat(objVal.toString().replace(/,/g, ''));
    if (isNaN(value)) {
      return 0;
    } else {
      return value;
    }
  }
};

export const formatNumber = (number: string | number) => {
  if (number === undefined || number === null) {
    return 0;
  } else {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
