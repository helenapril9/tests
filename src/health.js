export function checkHealth(health) {
  let result = 0;
  if (health < 15) {
    result = 'critical';
  }
  if (health >= 15 && health < 50) {
    result = 'wounded';
  }
  if (health >= 50) {
    result = 'healthy';
  }
  return result;
}
