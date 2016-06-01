import {WebGLRenderingContext} from './specs/web-gl-rendering-context-base';
import {WebGLBuffer} from './specs/web-gl-objects';

export class VertexBuffer {
  buffer: WebGLBuffer = null;
  gl: WebGLRenderingContext;

  constructor(gl:WebGLRenderingContext) {
    this.gl = gl;
    this.buffer = this.gl.createBuffer();
  }

  init(vertices:number[]) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
  }

}
