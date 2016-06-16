import {WebGLRenderingContext} from './specs/web-gl-rendering-context-base';
import { Observable }     from 'rxjs/Observable';
import {LoadShaderService} from './load-shader.service';

export class Shader {
  simpleShader: WebGLShader = null;
  gl: WebGLRenderingContext = null;
  constructor(private loadShaderService: LoadShaderService) {
  }
  loadShaderByID(id: string): string {
    let shaderText = document.getElementById(id);
    return shaderText.firstChild.textContent;
  }
  loadShaderByPath(path: string): Observable<string> {
    return this.loadShaderService.getShader(path);
  }
  loadShaderByPath_Old(path: string): string{
    let request: XMLHttpRequest = new XMLHttpRequest();
    request.open('GET', path, false);
    try {
      request.send();
    } catch (e) {
      console.error('failed to load shader:', path);
      return null;
    }
    let source: string = request.responseText;
    if (source === null) {
      console.error('failed to load:', path);
      return null;
    }
    return source;
  }

  compileShader(source: string, shaderType: number): WebGLShader {
    let compiledShader = this.gl.createShader(shaderType);
    this.gl.shaderSource(compiledShader, source);
    this.gl.compileShader(compiledShader);

    if (!this.gl.getShaderParameter(compiledShader, this.gl.COMPILE_STATUS)) {
      console.error('shader compile error: ', this.gl.getShaderInfoLog(compiledShader));
    }
    return compiledShader;
  }

  init(callback: any, gl: WebGLRenderingContext, props: IShaderProps) {
    this.gl = gl;
    var obj = this;
    //let vertexShaderSource = this.loadShaderByID(props.vertexShaderID);
    this.loadShaderByPath(props.vertexShaderPath)
    .subscribe(function(payload){
      console.log(payload)

      obj.loadShaderByPath(props.fragmentShaderPath).subscribe(function(p2:any) {
        console.log(p2);
        obj.finishInit(payload, p2);
        callback();
      });

    });
    //let fragmentShaderSource = this.loadShaderByID(props.fragmentShaderID);
  }

  private finishInit(vertexShaderSource:string, fragmentShaderSource:string) {
    var vertexShader = this.compileShader(vertexShaderSource, this.gl.VERTEX_SHADER);
    var fragmentShader = this.compileShader(fragmentShaderSource, this.gl.FRAGMENT_SHADER);
    this.simpleShader = this.gl.createProgram();
    this.gl.attachShader(this.simpleShader, vertexShader);
    this.gl.attachShader(this.simpleShader, fragmentShader);
    this.gl.linkProgram(this.simpleShader);
    if (!this.gl.getProgramParameter(this.simpleShader, this.gl.LINK_STATUS)) {
      console.error('unable to link shader');
    }
    this.gl.useProgram(this.simpleShader);
  }

  activate(props: IActivationProps) {
    let attributePosition = this.gl.getAttribLocation(this.simpleShader, props.customAttributeName);
    this.gl.enableVertexAttribArray(attributePosition);
    this.gl.vertexAttribPointer(attributePosition, 3, this.gl.FLOAT, false, 0, 0);
    if (props.hasOwnProperty('uniformPixelColor')) {
      let uPixelColorLocation = this.gl.getUniformLocation(this.simpleShader, 'uPixelColor');
      this.gl.uniform4fv(uPixelColorLocation, props.uniformPixelColor);
    }
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
