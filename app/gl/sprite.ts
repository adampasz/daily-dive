import { WebGLRenderingContext } from './specs/web-gl-rendering-context-base';
import { Shader } from './shader';
import { VertexBuffer } from './vertex-buffer';
export class Sprite {

  shader: Shader;
  buffer: VertexBuffer;
  gl: WebGLRenderingContext;

  constructor(gl: WebGLRenderingContext, buffer: VertexBuffer, shader: Shader) {
    this.gl = gl;
    this.shader = shader;
    this.buffer = buffer;
  }

  draw(color: number[], vertices: number[], colors: number[]) {
    this.buffer.init(vertices);
    this.shader.activate({
      customAttributeName: 'aVertexPosition',
      uniformPixelColor: [0.0, 0.0, 1.0, 1.0],
    });
    // this.buffer.init(colors);
    // this.shader.activate('aVertexColor');

    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, vertices.length / 3);
  }

}
