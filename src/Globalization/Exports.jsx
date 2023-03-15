import ChooseLocale from './Locale/Choose'
import LocaleField from './Locale/Field'
import Locales from './Locale/List'
import TranslateIcon from '@mui/icons-material/Translate'
import Translations from './Translation/List'

const GlobalizationRoutes = [
    {
        path: "/locales",
        component: Locales
    },
    {
        path: "/translations",
        component: Translations
    }
]

const GlobalizationMenu = [
    {
        title: "Globalization",
        icon: TranslateIcon,
        children: [
            {
                title: "Locales",
                url: "/locales"
            },
            {
                title: "Translations",
                url: "/translations"
            }
        ]
    }
]

export { ChooseLocale }
export { GlobalizationMenu }
export { GlobalizationRoutes }
export { Locales }
export { Translations }
export { LocaleField }
