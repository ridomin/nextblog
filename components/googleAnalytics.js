import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('UA-66818411-6')
}

export const logPageView = () => {
  if (typeof window !== 'undefined') {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
}
