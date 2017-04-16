'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    //GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from './GPUImageFilter';

export const GPUImage3x3TextureSamplingVertShaderString = `
attribute vec2 position;

varying vec2 v_texCoord;
varying vec2 v_texCoord_lt;
varying vec2 v_texCoord_t;
varying vec2 v_texCoord_rt;
varying vec2 v_texCoord_l;
varying vec2 v_texCoord_r;
varying vec2 v_texCoord_lb;
varying vec2 v_texCoord_b;
varying vec2 v_texCoord_rb;

uniform float u_texel_width;
uniform float u_texel_height;

void main() {
    vec2 hStep   = vec2(u_texel_width, 0.0);
    vec2 vStep   = vec2(0.0, u_texel_height);
    vec2 hvStep  = vec2(u_texel_width, u_texel_height);
    vec2 _hvStep = vec2(u_texel_width, -u_texel_height);

    gl_Position = vec4(position, 0.0, 1.0);
    v_texCoord = vec2(0.5, 0.5) * (position + vec2(1.0, 1.0));

    v_texCoord_l  = v_texCoord - hStep;
    v_texCoord_r  = v_texCoord + hStep;
    v_texCoord_t  = v_texCoord - vStep;
    v_texCoord_b  = v_texCoord + vStep;

    v_texCoord_lt = v_texCoord - hvStep;
    v_texCoord_rb = v_texCoord + hvStep;
    v_texCoord_lb = v_texCoord - _hvStep;
    v_texCoord_rt = v_texCoord + _hvStep;
}
`;

export const GPUImage3x3TextureSamplingFragShaderPredefine = `
varying vec2 v_texCoord_lt;
varying vec2 v_texCoord_t;
varying vec2 v_texCoord_rt;
varying vec2 v_texCoord_l;
varying vec2 v_texCoord_r;
varying vec2 v_texCoord_lb;
varying vec2 v_texCoord_b;
varying vec2 v_texCoord_rb;
`;

export const GPUImage3x3TextureSamplingFilter = GL.createComponent(
    ({ children, frag, texelWidth, texelHeight, uniforms }) => {
        return (
            <GPUImageFilter
                vert={GPUImage3x3TextureSamplingVertShaderString}
                frag={frag}
                uniforms={{
                    u_texel_width: texelWidth,
                    u_texel_height: texelHeight,
                    ...uniforms,
                }}>
                {children}
            </GPUImageFilter>
        );
    }
);