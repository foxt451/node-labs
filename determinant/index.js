function determinant(m) {
  if (m.length === 1) {
    return m[0][0];
  }
  if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  const firstRow = m.shift();
  let det = 0;
  for (let i = 0; i < firstRow.length; i++) {
    const minor = m.map((row) => row.slice(0, i).concat(row.slice(i + 1)));
    const coef = firstRow[i] * (-1) ** i;
    det += determinant(minor) * coef;
  }
  return det;
}
