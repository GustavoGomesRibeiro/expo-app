import { DefaultTheme } from './styles.d';
import 'styled-components';
import theme from '../assets/global/theme'

declare module 'styled-components' {

    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType{}
}