import './globals.css';
export const metadata={title:'Handshake Crucible — Play together',description:'A multiplayer game of intention, sacrifice and trust.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><link rel="stylesheet" href="/theme.css"/><script src="/theme.js"/></head><body>{children}</body></html>}
