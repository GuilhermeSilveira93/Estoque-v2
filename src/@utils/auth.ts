export const isTokenExpired = (exp: number) => {
  const clockTimestap: number = Math.floor(Date.now() / 1000)
  return clockTimestap > exp
}
