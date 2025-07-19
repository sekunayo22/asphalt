import { css } from "@emotion/react";

// Z-index values
export const zIndexValues = {
    alert: 70,
    fillPage: 60,
    modal: 50,
    dropdownMenu: 40,
    navigation: 30,
    underlay: 20,
    overlay: 10,
    normal: 5,
    behind: -1,
    upper: 1,
  } as const;
  
  // Media query breakpoints
  const breakpoints = {
    mobileScreen: '768px',
    tabletScreen: '1024px',
    mediumScreen: '1300px',
  } as const;
  
  export const mediaQueries = {
    mobileScreen: `@media only screen and (max-width: ${breakpoints.mobileScreen})`,
    tabletScreen: `@media (min-width: ${breakpoints.mobileScreen}) and (max-width: ${breakpoints.tabletScreen})`,
    mediumScreen: `@media (min-width: ${breakpoints.mobileScreen}) and (max-width: ${breakpoints.mediumScreen})`,
    mobileTabletScreen: `@media only screen and (max-width: ${breakpoints.tabletScreen})`,
    responsive: `@media only screen and (min-width: ${breakpoints.mobileScreen})`,
    desktopScreen: `@media only screen and (min-width: ${breakpoints.tabletScreen})`,
  };
  
  // Position mixins
  export const positionAbsoluteCenter = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  } as const;
  
  export const positionFixedCenter = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  } as const;

  export const borderRadiusCss = css`
  border-radius: 8px;
`;

export const boxShadowCss = css`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const transitionCss = css`
  transition: all 0.3s ease;
`;

export const hoverScaleCss = css`
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const fadeInUpCss = css`
  animation: fadeInUp 0.6s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const slideInLeftCss = css`
  animation: slideInLeft 0.6s ease-out;
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const slideInRightCss = css`
  animation: slideInRight 0.6s ease-out;
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

  export const filter = (value: string) => ({
    filter: value,
    webkitFilter: value,
  });
  
  // Utility mixins
  export const transition = {
    transition: 'all 0.3s ease-out',
    webkitTransition: 'all 0.3s ease-out',
    mozTransition: 'all 0.3s ease-out',
    msTransition: 'all 0.3s ease-out',
    oTransition: 'all 0.3s ease-out',
  } as const;
  
  export const clipText = (maxLine: number) => ({
    display: '-webkit-box',
    webkitLineClamp: maxLine,
    webkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    }) as const;
  
  export const scrollbarShow = (
    barWidth: string,
    borderWidth: string,
    barColor: string,
    radius: string,
    trackBg: string,
    thumbBg: string
  ) => ({
    '-ms-overflow-style': 'block',
    '&::-webkit-scrollbar': {
      width: barWidth,
      border: `${borderWidth} solid ${barColor}`,
      borderRadius: radius,
      display: 'block',
      'WebkitBorderRadius': radius,
      'MozBorderRadius': radius,
      'MsBorderRadius': radius,
      'OBorderRadius': radius,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '0',
      backgroundColor: trackBg,
      'WebkitBorderRadius': '0',
      'MozBorderRadius': '0',
      'MsBorderRadius': '0',
      'OBorderRadius': '0',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: thumbBg,
    },
  });
  
  export const verticalLine = (width: string, color: string, type: string, height: string) => ({
    borderRight: `${width} ${type} ${color}`,
    height: height,
  });
  
  export const horizontalLine = (height: string, type: string, color: string, width: string) => ({
    borderTop: `${height} ${type} ${color}`,
    width: width,
  });

  export const hideScrollbar = {
    '::-webkit-scrollbar': {
      width: '0em',
      height: '0em',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
    },
  } as const;
  
  export const customScrollbar = {
    '::-webkit-scrollbar': {
      height: '1rem',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#a3a6b7',
      borderColor: '#a3a6b7',
      borderRadius: '9999px',
      borderWidth: '1px',
      border: '4px solid transparent',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
      borderRadius: '9999px',
    },
  } as const;

    export const customScrollbarThin = {
    '&::-webkit-scrollbar': {
      height: '1rem',
      // width: 0.3rem;
    },
  
    '&::-webkit-scrollbar-thumb': {
      '--tw-border-opacity': '1',
      backgroundColor: '#a3a6b7',
      borderColor: '#a3a6b7',
      borderRadius: '9999px',
      borderWidth: '1px',
      border: '4px solid transparent',
  
      '&:hover': {
        backgroundColor: '#a3a6b7',
      },
    },
  
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#d9d9d9',
      borderRadius: '9999px',
    }   
  } as const;
  
  // Animation keyframes
  export const slideInBottom = {
    '@keyframes slideInBottom': {
      from: {
        transform: 'translateY(100%)',
      },
      to: {
        transform: 'translateY(0)',
      },
    },
  } as const;

  export const slideInLeft = {
    '@keyframes slideInLeft': {
      from: {
        transform: 'translateX(100%)',
      },
      to: {
        transform: 'translateX(0)',
      },
    },
  } as const;
  
  export const popUpAnimation = {
    '@keyframes popUpAnimation': {
      from: {
        transform: 'scale(0)',
      },    
      to: {
        transform: 'scale(100%)',
      }
    }
  } as const;
  
  export const slideDownAnimation = {
    '@keyframes slideDownAnimation': {
      from: {
        transform: 'translateY(0)',
      },
      to: {
        transform: 'translateY(100%)',
      },
    },
  } as const;

  export const shimmer = {
    backgroundImage: 'linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px)',
    backgroundSize: '200% 100%',
    animation: 'shine 1s infinite linear',
    '@keyframes shine': {
      '0%': {
        backgroundPosition: '100% 0',
        opacity: 0.4,
      },
      '40%': {
        opacity: 0.8,
      },
      '100%': {
        backgroundPosition: '-100% 0',
        opacity: 0.4,
      },
    },
  } as const;
  
  export const backgroundShimmer = (backgroundColor: string) => ({
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: backgroundColor,
      animation: 'homepageShimmer 2s infinite',
    },
    '@keyframes homepageShimmer': {
      '0%': {
        left: '-100%',
      },
      '100%': {
        left: '100%',
      },
    },
  });