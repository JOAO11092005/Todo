import IconSun from '/images/icon-sun.svg';
import MoonIcon from '/images/icon-moon.svg';

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroImage: 'bg-light',
            backgroundColor: 'bg-neutral-light-grayish-blue',
            textColor: 'text-neutral-very-dark-grayish-blue'
        },
        todo: {
            backgroundColor: 'bg-neutral-very-light-grayish-blue',
            borderColor: 'border-neutral-very-dark-grayish-blue-1',
            textColor: 'text-neutral-very-dark-grayish-blue-1'
        },
        icon: MoonIcon
    },
    dark: {
        name: 'dark',
        layout: {
            heroImage: 'bg-dark',
            backgroundColor: 'bg-neutral-very-dark-blue',
            textColor: 'text-neutral-very-dark-grayish-blue'
        },
        todo: {
            backgroundColor: 'bg-neutral-very-dark-desaturated-blue',
            borderColor: 'border-neutral-very-dark-grayish-blue',
            textColor: 'text-neutral-light-grayish-blue'
        },
        icon: IconSun
    }
}