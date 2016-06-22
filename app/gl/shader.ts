import {WebGLRenderingContext} from './specs/web-gl-rendering-context-base';
import { Observable }     from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {LoadShaderAsync} from './services/load-shader-async';

export class Shader {
  private program: WebGLProgram = null;
  private vertexShader: WebGLShader = null;
  private fragmentShader: WebGLShader = null;
  constructor(private loadShaderService: LoadShaderAsync, private gl: WebGLRenderingContext, public props: IShaderProps) {
  }

  // asynchronously loads vertex and fragment shader; links them to the GL conext
  init() {
    return Observable.create((observer: Observer<any>) => {
      this.loadShaderService.getShader(this.props.vertexShaderPath)
        .subscribe(
        vertexShaderSource => {
          observer.next('loaded ' + this.props.vertexShaderPath);
          this.loadShaderService.getShader(this.props.fragmentShaderPath)
            .subscribe(fragmentShaderSource => {
              observer.next('loaded ' + this.props.fragmentShaderPath);
              this.finishInit(vertexShaderSource, fragmentShaderSource);
              observer.complete();
            });
        });
    })
  }

  private finishInit(vertexShaderSource: string, fragmentShaderSource: string) {
    this.vertexShader = this.compileShader(vertexShaderSource, this.gl.VERTEX_SHADER);
    this.fragmentShader = this.compileShader(fragmentShaderSource, this.gl.FRAGMENT_SHADER);
    this.program = this.gl.createProgram();
    this.gl.attachShader(this.program, this.vertexShader);
    this.gl.attachShader(this.program, this.fragmentShader);
    this.gl.linkProgram(this.program);
    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      //TODO: Should throw error to observer?
      console.error('unable to link shader');
    }
    this.gl.useProgram(this.program);
  }

  private compileShader(source: string, shaderType: number): WebGLShader {
    let compiledShader = this.gl.createShader(shaderType);
    this.gl.shaderSource(compiledShader, source);
    this.gl.compileShader(compiledShader);

    if (!this.gl.getShaderParameter(compiledShader, this.gl.COMPILE_STATUS)) {
      console.error('shader compile error: ', this.gl.getShaderInfoLog(compiledShader));
    }
    return compiledShader;
  }

  // prepares shader for rendering
  activate(props: IActivationProps) {
    let attributePosition = this.gl.getAttribLocation(this.program, props.customAttributeName);
    this.gl.enableVertexAttribArray(attributePosition);
    this.gl.vertexAttribPointer(attributePosition, 3, this.gl.FLOAT, false, 0, 0);
    if (props.hasOwnProperty('uniformPixelColor')) {
      let uPixelColorLocation = this.gl.getUniformLocation(this.program, 'uPixelColor');
      this.gl.uniform4fv(uPixelColorLocation, props.uniformPixelColor);
    }
  }

  destroy() {
   this.gl.detachShader(this.program, this.vertexShader); 
   this.gl.detachShader(this.program, this.fragmentShader); 
   this.gl.deleteShader(this.vertexShader);
   this.gl.deleteShader(this.fragmentShader);
   this.gl.deleteProgram(this.program);
  }
}

export interface IActivationProps {
  customAttributeName?: string,
  uniformPixelColor?: number[],
  uniformTransform?: any
}

export interface IShaderProps {
  vertexShaderID?: string;
  fragmentShaderID?: string;
  vertexShaderPath?: string;
  fragmentShaderPath?: string;
}
