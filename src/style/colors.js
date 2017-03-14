import BaseConvert from 'all-your-base';

const Colors = {
  // DARKS
  dark10: '#20303C',
  dark20: '#43515C',
  dark30: '#66737C',
  dark40: '#858F96',
  dark50: '#A3ABB0',
  dark60: '#C2C7CB',
  dark70: '#E0E3E5',
  dark80: '#F2F4F5',
  // BLUES
  blue10: '#3182C8',
  blue20: '#4196E0',
  blue30: '#459FED',
  blue40: '#4EB7F5',
  blue50: '#7FCCF7',
  blue60: '#B2E0FA',
  blue70: '#D3EDFF',
  blue80: '#EAF7FF',
  // CYANS
  cyan10: '#00AAAF',
  cyan20: '#32BABC',
  cyan30: '#3CC7C5',
  cyan40: '#64D4D2',
  cyan50: '#8BDFDD',
  cyan60: '#B1E9E9',
  cyan70: '#D8F4F4',
  cyan80: '#EBF9F9',
  // GREENS
  green10: '#00A65F',
  green20: '#32B76C',
  green30: '#65C888',
  green40: '#84D3A0',
  green50: '#A3DEB8',
  green60: '#C1E9CF',
  green70: '#E8F7EF',
  green80: '#F3FBF7',
  // YELLOWS
  yellow10: '#E2902B',
  yellow20: '#FAA030',
  yellow30: '#FAAD4D',
  yellow40: '#FBBD71',
  yellow50: '#FCCE94',
  yellow60: '#FDDEB8',
  yellow70: '#FEEFDB',
  yellow80: '#FEF7ED',
  // ORANGES
  orange10: '#D9644A',
  orange20: '#E66A4E',
  orange30: '#F27052',
  orange40: '#F37E63',
  orange50: '#F7A997',
  orange60: '#FAC6BA',
  orange70: '#FCE2DC',
  orange80: '#FEF0ED',
  // REDS
  red10: '#CF262F',
  red20: '#EE2C38',
  red30: '#F2564D',
  red40: '#F57871',
  red50: '#F79A94',
  red60: '#FABBB8',
  red70: '#FCDDDB',
  red80: '#FEEEED',
  // PURPLES
  purple10: '#8B1079',
  purple20: '#A0138E',
  purple30: '#B13DAC',
  purple40: '#C164BD',
  purple50: '#D08BCD',
  purple60: '#E0B1DE',
  purple70: '#EFD8EE',
  purple80: '#F7EBF7',
  // VIOLETS
  violet10: '#48217B',
  violet20: '#733CA6',
  violet30: '#733CA6',
  violet40: '#8F63B8',
  violet50: '#AB8ACA',
  violet60: '#C7B1DB',
  violet70: '#E3D8ED',
  violet80: '#F1EBF6',
  // WHITES
  white: '#ffffff',
  black: '#000000',
};

Colors.alpha = (color, opacity = 1) => {
  if (isNaN(opacity) || opacity > 1 || opacity < 0) {
    return color;
  }
  let alpha = Math.round(opacity * 255);
  alpha = BaseConvert.decToHex(alpha);
  alpha = String(`00${alpha}`).slice(-2);
  return `${color}${alpha}`;
};

export default Colors;
