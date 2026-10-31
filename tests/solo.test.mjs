import assert from 'node:assert/strict';
import {create,intent} from '../lib/game.ts';
const r=create('SOLO');const p=r.players[0];const now=Date.now();intent(r,p,{type:'bots'},now);intent(r,p,{type:'start'},now);intent(r,p,{type:'promise',round:0,value:'wait'},now+1);assert.equal(r.round,0);assert.ok(r.players.filter(x=>x.bot).every(x=>!x.action));intent(r,p,{type:'act',round:0,value:'wait'},now+2);assert.equal(r.round,1);assert.equal(r.ledger.filter(x=>x.text.includes('(companion) committed')).length,3);console.log('PASS solo advances after accepted action, not promise selection');
