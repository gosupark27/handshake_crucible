// Server timestamps determine outcomes; monotonic elapsed time only drives display.
export function remainingSeconds(anchor:{serverNow:number;localNow:number;deadline:number},localNow:number){
  return Math.max(0,Math.ceil((anchor.deadline-anchor.serverNow-Math.max(0,localNow-anchor.localNow))/1000));
}
