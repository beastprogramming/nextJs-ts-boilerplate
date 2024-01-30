import { SystemStyleObject, Theme } from '@mui/system';
import { DeepReadonly } from '@noob/types';

export const Styles = {
    sidebar: (theme: DeepReadonly<Theme>): SystemStyleObject => ({
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '320px',
        },
    }),
    sidebarLabel: {
        marginBottom: '.5rem',
        padding: '0 1rem',
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        fontWeight: '600',
        letterSpacing: '-.025em',
        backgroundColor: 'transparent',
        fontFamily: 'Inter',
    },
    menuItem: {
        fontFamily: 'Inter',
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        borderRadius: 'calc(0.5rem - 2px)',
        marginTop: 'calc(.25rem * calc(1 - 0))',
        marginBottom: 'calc(.25rem * 0)',
        fontSize: '.875rem',
        fontWeight: '500',
        transitionProperty: 'color,background-color,border-color,text-decoration-color,fill,stroke',
        transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
        transitionDuration: '.15s',
        '&:focus-visible': {
            outline: 'none',
            ring: '1px solid #d4d4d8',
        },
        '&:disabled': {
            pointerEvents: 'none',
            opacity: '0.5',
        },
        background: 'transparent',
        color: '#27272a',
        boxShadow: '0 0 #0000,0 0 #0000,0 0 #0000, #0000,0 1px 2px 0 rgba(0,0,0,.05)',
        '&:hover': {
            background: '#e4e4e4',
            opacity: '0.8',
        },
        height: '2.25rem',
        padding: '.5rem 1rem',
        width: '100%',
        justifyContent: 'start',
        '&.open': {
            background: '#e4e4e4',
        },
    },
};
