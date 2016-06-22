import {GLenum} from './web-gl-enums';

// https://www.khronos.org/registry/webgl/specs/latest/1.0/
//TODO: figure out if/how to add 2.0 interface
export interface WebGLRenderingContext {
  /* ClearBufferMask */
  DEPTH_BUFFER_BIT: GLenum;
  STENCIL_BUFFER_BIT: GLenum;
  COLOR_BUFFER_BIT: GLenum;

  /* BeginMode */
  POINTS: GLenum;
  LINES: GLenum;
  LINE_LOOP: GLenum;
  LINE_STRIP: GLenum;
  TRIANGLES: GLenum;
  TRIANGLE_STRIP: GLenum;
  TRIANGLE_FAN: GLenum;

  /* AlphaFunction (not supported in ES20) */
  /*      NEVER */
  /*      LESS */
  /*      EQUAL */
  /*      LEQUAL */
  /*      GREATER */
  /*      NOTEQUAL */
  /*      GEQUAL */
  /*      ALWAYS */

  /* BlendingFactorDest */
  ZERO: GLenum;
  ONE: GLenum;
  SRC_COLOR: GLenum;
  ONE_MINUS_SRC_COLOR: GLenum;
  SRC_ALPHA: GLenum;
  ONE_MINUS_SRC_ALPHA: GLenum;
  DST_ALPHA: GLenum;
  ONE_MINUS_DST_ALPHA: GLenum;

  /* BlendingFactorSrc */
  /*      ZERO */
  /*      ONE */
  DST_COLOR: GLenum;
  ONE_MINUS_DST_COLOR: GLenum;
  SRC_ALPHA_SATURATE: GLenum;
  /*      SRC_ALPHA */
  /*      ONE_MINUS_SRC_ALPHA */
  /*      DST_ALPHA */
  /*      ONE_MINUS_DST_ALPHA */

  /* BlendEquationSeparate */
  FUNC_ADD: GLenum;
  BLEND_EQUATION: GLenum;
  BLEND_EQUATION_RGB: GLenum; /* same as BLEND_EQUATION */
  BLEND_EQUATION_ALPHA: GLenum;

  /* BlendSubtract */
  FUNC_SUBTRACT: GLenum;
  FUNC_REVERSE_SUBTRACT: GLenum;

  /* Separate Blend Functions */
  BLEND_DST_RGB: GLenum;
  BLEND_SRC_RGB: GLenum;
  BLEND_DST_ALPHA: GLenum;
  BLEND_SRC_ALPHA: GLenum;
  CONSTANT_COLOR: GLenum;
  ONE_MINUS_CONSTANT_COLOR: GLenum;
  CONSTANT_ALPHA: GLenum;
  ONE_MINUS_CONSTANT_ALPHA: GLenum;
  BLEND_COLOR: GLenum;

  /* Buffer Objects */
  ARRAY_BUFFER: GLenum;
  ELEMENT_ARRAY_BUFFER: GLenum;
  ARRAY_BUFFER_BINDING: GLenum;
  ELEMENT_ARRAY_BUFFER_BINDING: GLenum;

  STREAM_DRAW: GLenum;
  STATIC_DRAW: GLenum;
  DYNAMIC_DRAW: GLenum;

  BUFFER_SIZE: GLenum;
  BUFFER_USAGE: GLenum;

  CURRENT_VERTEX_ATTRIB: GLenum;

  /* CullFaceMode */
  FRONT: GLenum;
  BACK: GLenum;
  FRONT_AND_BACK: GLenum;

  /* DepthFunction */
  /*      NEVER */
  /*      LESS */
  /*      EQUAL */
  /*      LEQUAL */
  /*      GREATER */
  /*      NOTEQUAL */
  /*      GEQUAL */
  /*      ALWAYS */

  /* EnableCap */
  /* TEXTURE_2D */
  CULL_FACE: GLenum;
  BLEND: GLenum;
  DITHER: GLenum;
  STENCIL_TEST: GLenum;
  DEPTH_TEST: GLenum;
  SCISSOR_TEST: GLenum;
  POLYGON_OFFSET_FILL: GLenum;
  SAMPLE_ALPHA_TO_COVERAGE: GLenum;
  SAMPLE_COVERAGE: GLenum;

  /* ErrorCode */
  NO_ERROR: GLenum;
  INVALID_ENUM: GLenum;
  INVALID_VALUE: GLenum;
  INVALID_OPERATION: GLenum;
  OUT_OF_MEMORY: GLenum;

  /* FrontFaceDirection */
  CW: GLenum;
  CCW: GLenum;

  /* GetPName */
  LINE_WIDTH: GLenum;
  ALIASED_POINT_SIZE_RANGE: GLenum;
  ALIASED_LINE_WIDTH_RANGE: GLenum;
  CULL_FACE_MODE: GLenum;
  FRONT_FACE: GLenum;
  DEPTH_RANGE: GLenum;
  DEPTH_WRITEMASK: GLenum;
  DEPTH_CLEAR_VALUE: GLenum;
  DEPTH_FUNC: GLenum;
  STENCIL_CLEAR_VALUE: GLenum;
  STENCIL_FUNC: GLenum;
  STENCIL_FAIL: GLenum;
  STENCIL_PASS_DEPTH_FAIL: GLenum;
  STENCIL_PASS_DEPTH_PASS: GLenum;
  STENCIL_REF: GLenum;
  STENCIL_VALUE_MASK: GLenum;
  STENCIL_WRITEMASK: GLenum;
  STENCIL_BACK_FUNC: GLenum;
  STENCIL_BACK_FAIL: GLenum;
  STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
  STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
  STENCIL_BACK_REF: GLenum;
  STENCIL_BACK_VALUE_MASK: GLenum;
  STENCIL_BACK_WRITEMASK: GLenum;
  VIEWPORT: GLenum;
  SCISSOR_BOX: GLenum;
  /*      SCISSOR_TEST */
  COLOR_CLEAR_VALUE: GLenum;
  COLOR_WRITEMASK: GLenum;
  UNPACK_ALIGNMENT: GLenum;
  PACK_ALIGNMENT: GLenum;
  MAX_TEXTURE_SIZE: GLenum;
  MAX_VIEWPORT_DIMS: GLenum;
  SUBPIXEL_BITS: GLenum;
  RED_BITS: GLenum;
  GREEN_BITS: GLenum;
  BLUE_BITS: GLenum;
  ALPHA_BITS: GLenum;
  DEPTH_BITS: GLenum;
  STENCIL_BITS: GLenum;
  POLYGON_OFFSET_UNITS: GLenum;
  /*      POLYGON_OFFSET_FILL */
  POLYGON_OFFSET_FACTOR: GLenum;
  TEXTURE_BINDING_2D: GLenum;
  SAMPLE_BUFFERS: GLenum;
  SAMPLES: GLenum;
  SAMPLE_COVERAGE_VALUE: GLenum;
  SAMPLE_COVERAGE_INVERT: GLenum;

  /* GetTextureParameter */
  /*      TEXTURE_MAG_FILTER */
  /*      TEXTURE_MIN_FILTER */
  /*      TEXTURE_WRAP_S */
  /*      TEXTURE_WRAP_T */

  COMPRESSED_TEXTURE_FORMATS: GLenum;

  /* HintMode */
  DONT_CARE: GLenum;
  FASTEST: GLenum;
  NICEST: GLenum;

  /* HintTarget */
  GENERATE_MIPMAP_HINT: GLenum;

  /* DataType */
  BYTE: GLenum;
  UNSIGNED_BYTE: GLenum;
  SHORT: GLenum;
  UNSIGNED_SHORT: GLenum;
  INT: GLenum;
  UNSIGNED_INT: GLenum;
  FLOAT: GLenum;

  /* PixelFormat */
  DEPTH_COMPONENT: GLenum;
  ALPHA: GLenum;
  RGB: GLenum;
  RGBA: GLenum;
  LUMINANCE: GLenum;
  LUMINANCE_ALPHA: GLenum;

  /* PixelType */
  /*      UNSIGNED_BYTE */
  UNSIGNED_SHORT_4_4_4_4: GLenum;
  UNSIGNED_SHORT_5_5_5_1: GLenum;
  UNSIGNED_SHORT_5_6_5: GLenum;

  /* Shaders */
  FRAGMENT_SHADER: GLenum;
  VERTEX_SHADER: GLenum;
  MAX_VERTEX_ATTRIBS: GLenum;
  MAX_VERTEX_UNIFORM_VECTORS: GLenum;
  MAX_VARYING_VECTORS: GLenum;
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
  MAX_TEXTURE_IMAGE_UNITS: GLenum;
  MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
  SHADER_TYPE: GLenum;
  DELETE_STATUS: GLenum;
  LINK_STATUS: GLenum;
  VALIDATE_STATUS: GLenum;
  ATTACHED_SHADERS: GLenum;
  ACTIVE_UNIFORMS: GLenum;
  ACTIVE_ATTRIBUTES: GLenum;
  SHADING_LANGUAGE_VERSION: GLenum;
  CURRENT_PROGRAM: GLenum;

  /* StencilFunction */
  NEVER: GLenum;
  LESS: GLenum;
  EQUAL: GLenum;
  LEQUAL: GLenum;
  GREATER: GLenum;
  NOTEQUAL: GLenum;
  GEQUAL: GLenum;
  ALWAYS: GLenum;

  /* StencilOp */
  /*      ZERO */
  KEEP: GLenum;
  REPLACE: GLenum;
  INCR: GLenum;
  DECR: GLenum;
  INVERT: GLenum;
  INCR_WRAP: GLenum;
  DECR_WRAP: GLenum;

  /* StringName */
  VENDOR: GLenum;
  RENDERER: GLenum;
  VERSION: GLenum;

  /* TextureMagFilter */
  NEAREST: GLenum;
  LINEAR: GLenum;

  /* TextureMinFilter */
  /*      NEAREST */
  /*      LINEAR */
  NEAREST_MIPMAP_NEAREST: GLenum;
  LINEAR_MIPMAP_NEAREST: GLenum;
  NEAREST_MIPMAP_LINEAR: GLenum;
  LINEAR_MIPMAP_LINEAR: GLenum;

  /* TextureParameterName */
  TEXTURE_MAG_FILTER: GLenum;
  TEXTURE_MIN_FILTER: GLenum;
  TEXTURE_WRAP_S: GLenum;
  TEXTURE_WRAP_T: GLenum;

  /* TextureTarget */
  TEXTURE_2D: GLenum;
  TEXTURE: GLenum;

  TEXTURE_CUBE_MAP: GLenum;
  TEXTURE_BINDING_CUBE_MAP: GLenum;
  TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
  TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
  TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
  TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
  TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
  TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
  MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;

  /* TextureUnit */
  TEXTURE0: GLenum;
  TEXTURE1: GLenum;
  TEXTURE2: GLenum;
  TEXTURE3: GLenum;
  TEXTURE4: GLenum;
  TEXTURE5: GLenum;
  TEXTURE6: GLenum;
  TEXTURE7: GLenum;
  TEXTURE8: GLenum;
  TEXTURE9: GLenum;
  TEXTURE10: GLenum;
  TEXTURE11: GLenum;
  TEXTURE12: GLenum;
  TEXTURE13: GLenum;
  TEXTURE14: GLenum;
  TEXTURE15: GLenum;
  TEXTURE16: GLenum;
  TEXTURE17: GLenum;
  TEXTURE18: GLenum;
  TEXTURE19: GLenum;
  TEXTURE20: GLenum;
  TEXTURE21: GLenum;
  TEXTURE22: GLenum;
  TEXTURE23: GLenum;
  TEXTURE24: GLenum;
  TEXTURE25: GLenum;
  TEXTURE26: GLenum;
  TEXTURE27: GLenum;
  TEXTURE28: GLenum;
  TEXTURE29: GLenum;
  TEXTURE30: GLenum;
  TEXTURE31: GLenum;
  ACTIVE_TEXTURE: GLenum;

  /* TextureWrapMode */
  REPEAT: GLenum;
  CLAMP_TO_EDGE: GLenum;
  MIRRORED_REPEAT: GLenum;

  /* Uniform Types */
  FLOAT_VEC2: GLenum;
  FLOAT_VEC3: GLenum;
  FLOAT_VEC4: GLenum;
  INT_VEC2: GLenum;
  INT_VEC3: GLenum;
  INT_VEC4: GLenum;
  BOOL: GLenum;
  BOOL_VEC2: GLenum;
  BOOL_VEC3: GLenum;
  BOOL_VEC4: GLenum;
  FLOAT_MAT2: GLenum;
  FLOAT_MAT3: GLenum;
  FLOAT_MAT4: GLenum;
  SAMPLER_2D: GLenum;
  SAMPLER_CUBE: GLenum;

  /* Vertex Arrays */
  VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
  VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
  VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
  VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
  VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
  VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;

  /* Read Format */
  IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
  IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;

  /* Shader Source */
  COMPILE_STATUS: GLenum;

  /* Shader Precision-Specified Types */
  LOW_FLOAT: GLenum;
  MEDIUM_FLOAT: GLenum;
  HIGH_FLOAT: GLenum;
  LOW_INT: GLenum;
  MEDIUM_INT: GLenum;
  HIGH_INT: GLenum;

  /* Framebuffer Object. */
  FRAMEBUFFER: GLenum;
  RENDERBUFFER: GLenum;

  RGBA4: GLenum;
  RGB5_A1: GLenum;
  RGB565: GLenum;
  DEPTH_COMPONENT16: GLenum;
  STENCIL_INDEX: GLenum;
  STENCIL_INDEX8: GLenum;
  DEPTH_STENCIL: GLenum;

  RENDERBUFFER_WIDTH: GLenum;
  RENDERBUFFER_HEIGHT: GLenum;
  RENDERBUFFER_INTERNAL_FORMAT: GLenum;
  RENDERBUFFER_RED_SIZE: GLenum;
  RENDERBUFFER_GREEN_SIZE: GLenum;
  RENDERBUFFER_BLUE_SIZE: GLenum;
  RENDERBUFFER_ALPHA_SIZE: GLenum;
  RENDERBUFFER_DEPTH_SIZE: GLenum;
  RENDERBUFFER_STENCIL_SIZE: GLenum;

  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;

  COLOR_ATTACHMENT0: GLenum;
  DEPTH_ATTACHMENT: GLenum;
  STENCIL_ATTACHMENT: GLenum;
  DEPTH_STENCIL_ATTACHMENT: GLenum;

  NONE: GLenum;

  FRAMEBUFFER_COMPLETE: GLenum;
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
  FRAMEBUFFER_UNSUPPORTED: GLenum;

  FRAMEBUFFER_BINDING: GLenum;
  RENDERBUFFER_BINDING: GLenum;
  MAX_RENDERBUFFER_SIZE: GLenum;

  INVALID_FRAMEBUFFER_OPERATION: GLenum;

  /* WebGL-specific enums */
  UNPACK_FLIP_Y_WEBGL: GLenum;
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
  CONTEXT_LOST_WEBGL: GLenum;
  UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
  BROWSER_DEFAULT_WEBGL: GLenum;

  /* METHODS */
  //TODO: Fill in remaining methods
  attachShader(program: WebGLProgram, shader: WebGLShader): void;
  bindBuffer(target: GLenum, buffer: WebGLBuffer): void; // target = ELEMENT_|ARRAY_BUFFER; only 1 buffer is bound at a time to gl
  bufferData(target: GLenum, size: any, usage: GLenum): void; //pass data into bound buffer; usage = STATIC|DYNAMIC|STREAM_DRAW
  clear(mask: number): void;
  clearColor(red: number, green: number, blue: number, alpha: number): void;
  compileShader(shader: WebGLShader): void;

  createBuffer(): WebGLBuffer;
  // createFrameBuffer(): WebGLFramebuffer; //TODO: Not supported?
  createProgram(): WebGLProgram;
  createShader(type: GLenum): WebGLShader;
  createTexture(): WebGLTexture;
  deleteBuffer(buffer: WebGLBuffer): void;
  deleteProgram(program: WebGLProgram): void;
  deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void;
  deleteShader(shader: WebGLShader): void;
  detachShader(program: WebGLProgram, shader: WebGLShader): void;


  drawArrays(mode: GLenum, first: number, count: number): void;
  enableVertexAttribArray(index: number): void; //enable sending array data to an attribute; use getAttribLocation to get index
  getAttribLocation(progra: WebGLProgram, name: string): number;
  getProgramParameter(program: WebGLProgram, pname: number): any;
  getShaderInfoLog(shader: WebGLShader): string;
  getShaderParameter(shader: WebGLShader, pname: number): any;
  getUniformLocation(program: WebGLProgram, name:String): WebGLUniformLocation;
  linkProgram(program: WebGLProgram): void;

  shaderSource(shader: WebGLShader, source: string): void;
  uniform4fv(location: WebGLUniformLocation, v: number[]):void;
  useProgram(program: WebGLProgram): void;

  vertexAttribPointer(index: number, size: number, type: GLenum, normalized: boolean, stride: number, offset: number): void; //"explain data format to shader
  viewport(x: number, y: number, width: number, height: number): void;

}
