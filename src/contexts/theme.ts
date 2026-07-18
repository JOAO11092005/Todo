import IconSun from '/images/icon-sun.svg';
import MoonIcon from '/images/icon-moon.svg';

export const theme = {
    light: {
        name: 'light',
        layout: {
            backgroundColor: 'bg-neutral-very-light-grayish-blue',
            textColor: 'text-neutral-very-dark-grayish-blue'
        },
        todo: {
            backgroundColor: 'bg-neutral-very-light-grayish-blue',
            borderColor: 'border-neutral-very-light-grayish-blue',
            textColor: 'text-neutral-very-dark-grayish-blue'
        },
        icon: IconSun
    },
    dark: {
        name: 'dark',
        layout: {
            backgroundColor: 'bg-neutral-very-dark-blue',
            textColor: 'text-neutral-light-grayish-blue-dark'
        },
        todo: {
            backgroundColor: 'bg-neutral-very-darl-desaturated-blue',
            borderColor: 'border-neutral-very-dark-grayish-blue-dark',
            textColor: 'text-neutral-light-graish-blue-dark'
        },
        icon: MoonIcon
    }
}