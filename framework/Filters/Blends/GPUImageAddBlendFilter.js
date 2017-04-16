'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageTwoInputFragShaderPredefineString, 
    GPUImageTwoInputFilter,
} from '../GPUImageTwoInputFilter';

const GPUImageAddBlendFragShaderString = GPUImageTwoInputFragShaderPredefineString + `
void main() {
    vec4 base = texture2D(u_texture_0, v_texCoord);
    vec4 overlay;
    if (u_texture_1_samplingScale > 1.0) {
        overlay = texture2D(u_texture_1, fract(v_texCoord * u_texture_1_samplingScale));
    } else {
        overlay = texture2D(u_texture_1, v_texCoord);
    }

    mediump float r;
    if (overlay.r * base.a + base.r * overlay.a >= overlay.a * base.a) {
      r = overlay.a * base.a + overlay.r * (1.0 - base.a) + base.r * (1.0 - overlay.a);
    } else {
      r = overlay.r + base.r;
    }

    mediump float g;
    if (overlay.g * base.a + base.g * overlay.a >= overlay.a * base.a) {
      g = overlay.a * base.a + overlay.g * (1.0 - base.a) + base.g * (1.0 - overlay.a);
    } else {
      g = overlay.g + base.g;
    }

    mediump float b;
    if (overlay.b * base.a + base.b * overlay.a >= overlay.a * base.a) {
      b = overlay.a * base.a + overlay.b * (1.0 - base.a) + base.b * (1.0 - overlay.a);
    } else {
      b = overlay.b + base.b;
    }

    mediump float a = overlay.a + base.a - overlay.a * base.a;
   
	gl_FragColor = vec4(r, g, b, a);
}
`;

export const GPUImageAddBlendFilter = GL.createComponent(
    ({ children, input2nd, input2ndScale}) => {
        return (
            <GPUImageTwoInputFilter
                frag={GPUImageAddBlendFragShaderString}
                input2nd={input2nd}
                input2ndScale={input2ndScale}>
                {children}
            </GPUImageTwoInputFilter>
        );
    }, {
        defaultProps: {
            input2ndScale: 1.0,
        }
    }
);