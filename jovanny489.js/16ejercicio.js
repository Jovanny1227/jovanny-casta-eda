let a = parseFloat(prompt("Introduce el valor de a :"));

let b = parseFloat(prompt("Introduce el valor de b :"));

let c = parseFloat(prompt("Introduce el valor de c :"));

let discriminante = b * b - 4 * a * c;

if (discriminante > 0) {
  let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  alert(`Las soluciones son reales y distintas:`);
  alert(`x1 =`, x1);
  alert(`x2 =`, x2);
} else if (discriminante === 0) {
  let x = -b / (2 * a);
  alert(`La solución es real y única:`);
  alert(`x =`, x);
} else {
  alert(`No hay soluciones reales (el discriminante es negativo).`);
}
