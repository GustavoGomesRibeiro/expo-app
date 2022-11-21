import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colorsDefault: {
            primaryBackground: string,
            secondaryBackground: string,
        },
        textDefault: {
            txtPrimary: string,
        },
        colorsButton: {
            btnDefault: string,
            btnUser: string,
            btnEstablishment: string,
        },
        fonts_poppins: {
            regular: string,
            strong: string,
            primaryColor: string,
            secondaryColor: string,
        },
        fonts_archivo: {
            regular: string,
            strong: string,
            primaryColor: string,
            secondaryColor: string,
        },
    }
}