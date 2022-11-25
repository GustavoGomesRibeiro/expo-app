import { DefaultTheme } from './styles.d';
import 'styled-components';
import { Light, Dark } from '../assets/global/theme'

declare module 'styled-components' {

    type ThemeTypeLight = typeof Light;
    type ThemeTypeDark = typeof Dark;

    export interface DefaultTheme extends ThemeTypeLight,ThemeTypeDark {}
}