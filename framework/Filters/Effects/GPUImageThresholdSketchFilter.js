'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageColorInvertFilter
} from '../ColorProcessing/GPUImageColorInvertFilter';
import {
    GPUImageThresholdEdgeDetectionFilter
} from '../ImageProcessing/GPUImageThresholdEdgeDetectionFilter';

export const GPUImageThresholdSketchFilter = GL.createComponent(
    ({children, texelWidth, texelHeight, edgeStrength, threshold})=>{
        return(
            <GPUImageColorInvertFilter>
                <GPUImageThresholdEdgeDetectionFilter texelWidth={texelWidth}
                                                 texelHeight={texelHeight}
                                                edgeStrength={edgeStrength}
                                                   threshold={threshold}>
                    {children}
                </GPUImageThresholdEdgeDetectionFilter>
            </GPUImageColorInvertFilter>
        );
    }
);