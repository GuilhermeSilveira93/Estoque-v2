import en from './src/@constants/idioma/en.json'

type Messages = typeof en

declare global {
  // eslint-disable-next-line no-unused-vars
  interface IntlMessages extends Messages {}
}
