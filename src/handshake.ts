function getParticipants(handshakes: number): number {
  const min = Math.ceil((1 + Math.sqrt(1 + 8 * handshakes)) / 2);
  return min;
}

console.log(getParticipants(6))
