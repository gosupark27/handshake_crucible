'use client';
import {useEffect,useState} from 'react';
export default function ThemePicker(){const [choice,setChoice]=useState('system');useEffect(()=>{setChoice((window as any).handshakeTheme?.get()||'system')},[]);function choose(value:string){setChoice(value);(window as any).handshakeTheme?.set(value)}return <fieldset className="theme-picker"><legend>Appearance</legend>{['system','light','dark'].map(value=><button key={value} type="button" aria-pressed={choice===value} onClick={()=>choose(value)}>{value[0].toUpperCase()+value.slice(1)}</button>)}</fieldset>}
