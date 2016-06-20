import {WebGLRenderingContext} from './specs/web-gl-rendering-context-base';
import {WebGLProgram} from './specs/web-gl-objects';
import {VertexBuffer} from './vertex-buffer';
import {Shader, IShaderProps} from './shader';
import {Sprite} from './sprite';


import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class Engine {
  gl: WebGLRenderingContext = null;

  initGL(canvasID:string) {
    let success = false;
    let context: any;
    var canvas = <HTMLCanvasElement> document.getElementById(canvasID);
    try {
      context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (context instanceof WebGLRenderingContext) {
        this.gl = context;
        this.gl.clearColor(0.0, 0.0, 0.5, 1.0);
        success = true;
      }
    } catch(e) {
    } 
    if (!success) { //Hook for 2D canvas fallback could go here. :)
      console.error('could not initialize webgl -- please try Firefoex or Chrome browser');
    }
  }
  clearCanvas() {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }
  createSprite(buffer:VertexBuffer, shader:Shader):Sprite {
    let ren = new Sprite(this.gl, buffer, shader);
    return ren;
  }

  createShader(callback: () => void, props:IShaderProps, loadShaderService:any):Shader {
    let shader = new Shader(loadShaderService, this.gl, props);
    shader.init().subscribe(
      {
       error: null,
       complete: callback
      }); 
    return shader;
  }

  createVertexBuffer(vertices:number[]): VertexBuffer
  {
    let vb = new VertexBuffer(this.gl);
    return vb;
  }
}
