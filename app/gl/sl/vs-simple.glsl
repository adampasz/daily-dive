attribute vec3 aVertexPosition;

/* attribute uModelTransform */
void main(void) {
  /* gl_PointSize = uModelTransform; */
  gl_PointSize = 5.0;
  gl_Position = vec4(aVertexPosition, 1.0);
}
