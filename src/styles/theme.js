const colors = {
  white: '#FFFFFF',
  lightGray: '#969FAD',
  gray: '#7C8798',
  darkGray: '#262E38',
  orange: '#FC7614',
  softBlue: '#262E38',
  darkBlue: '#181E27',
};

const typography = {
  heading: `
  color: ${colors.white};
  font-weight: bold;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
  `,
  text: `
  color: ${colors.gray};
  font-weight: regular;
  font-size: 15px;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
  `,
};

const gradients = {
  dark: 'radial-gradient(98.96% 98.96% at 50% 0%, #262E38 0%, #181E27 100%)',
};

const layout = {
  center: `
  display: flex;
  justify-content: center;
  align-items: center;
  `,
};

export { colors, typography, gradients, layout };
