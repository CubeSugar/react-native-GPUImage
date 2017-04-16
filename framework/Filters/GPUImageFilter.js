'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

export const GPUImageVertShaderString = `
attribute vec2 position;
varying vec2 v_texCoord;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
    v_texCoord  = vec2(0.5) * (position + vec2(1.0));
}
`;


export const GPUImageFragShaderPredefineString = `
precision highp float;
varying vec2 v_texCoord;
uniform sampler2D u_texture_0;
`;

export const GPUImageFragShaderString = GPUImageFragShaderPredefineString + `
void main() {
    gl_FragColor = texture2D(u_texture_0, v_texCoord);
}
`;

export const GPUImageFilter = GL.createComponent(
    ({children, vert, frag, uniforms})=>{
        return (
            <GL.Node
                shader={{
                    vert: vert || GPUImageVertShaderString,
                    frag: frag || GPUImageFragShaderString,
                }}
                uniforms={{
                    u_texture_0: children,
                    ...uniforms
                }}
            />
        );
    }
);

