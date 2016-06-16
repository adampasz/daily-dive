import { Component, OnInit } from '@angular/core';
import {Engine} from './gl/engine';
import {IShaderProps} from './gl/shader';

@Component({
  selector: 'gl',
  template: `
  <h4>some cool web gl</h4>
  <canvas id="canvas" width="400" height="300"></canvas>
  `,
})
export class GLComponent implements OnInit {
  public static SQUARE = [
    0.5, 0.5, 0.0,
    -0.5, 0.5, 0.0,
    0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
  ];

  public static VARY_SQUARE_COLORS = [
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    0.0, 0.0, 0.0
  ];
  public static TRI_COLORS = [
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    1.0, 0.0, 0.0,
    0.0, 0.0, 1.0,
    1.0, 1.0, 1.0,
    0.0, 0.0, 1.0
  ];

  public static TRIANGLES = [
    //left
    -0.5, 0.5, 0.0,
    0.0, 0.0, 0.0,
    -0.5, -0.5, 0.0,
    //right
    0.5, 0.5, 0.0,
    0.0, 0.0, 0.0,
    0.5, -0.5, 0.0
  ];

  public static WHITE = [1.0, 1.0, 1.0, 1.0];
  public static RED = [1.0, 0.0, 0.0, 1.0];
  public static GREEN = [0.0, 1.0, 0.0, 1.0];
  public static BLUE = [0.0, 0.0, 1.0, 1.0];
  public static BLACK = [0.0, 0.0, 0.0, 1.0];
  engine = new Engine();

  ngOnInit() {
    let vertices = GLComponent.SQUARE;
    this.engine.initGL('canvas');
    this.engine.clearCanvas();
    let props = {
      // vertexShaderID: 'vs-2',
      // fragmentShaderID: 'fs-white',
      vertexShaderPath: '/app/gl/sl/vs-simple.glsl',
      fragmentShaderPath: '/app/gl/sl/fs-color.glsl',
    };
    let buffer = this.engine.createVertexBuffer(vertices);
    let shader = this.engine.createShader(props);
    // let r1 = this.engine.createRenderable(buffer, shader);
    // r1.draw(GLComponent.RED, vertices);
    let r2 = this.engine.createSprite(buffer, shader);
    r2.draw(GLComponent.BLACK, GLComponent.TRIANGLES, GLComponent.TRI_COLORS);
  }
}
