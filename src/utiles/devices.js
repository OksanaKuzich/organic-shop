const size = {
  mobile: '768px',
  mobileOnly: '768px',
  tabletOnly: '1279px',
  tablet: '1280px',
  beforeDesktop: '1919px',
  desktop: '1920px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,

  beforeTablet: `(max-width: ${size.tabletOnly})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `(min-width:${size.tablet}) and (max-width:${size.beforeDesktop})`,

  beforeDesktop: `(max-width: ${size.beforeDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

// how to use:
// @media ${device.tablet} {}
