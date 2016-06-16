import {WebGLRenderingContext} from './specs/web-gl-rendering-context-base';
import {LoadShaderService} from './load-shader.service';

export class Shader {
  simpleShader: WebGLShader = null;
  gl: WebGLRenderingContext = null;
  constructor( private loadShaderService: LoadShaderService) {
  }
  loadShaderByID(id: string): string {
    let shaderText = document.getElementById(id);
    return shaderText.firstChild.textContent;
  }
  loadShaderByPath(path: string): string {
    this.loadShaderService.getShader(path).subscribe(
      function(payload:string) {
      }
    );

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

  init(gl: WebGLRenderingContext, props: IShaderProps) {
    this.gl = gl;
    //let vertexShaderSource = this.loadShaderByID(props.vertexShaderID);
    let vertexShaderSource = this.loadShaderByPath(props.vertexShaderPath);
    //let fragmentShaderSource = this.loadShaderByID(props.fragmentShaderID);
    let fragmentShaderSource = this.loadShaderByPath(props.fragmentShaderPath);

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
