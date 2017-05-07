# [WIP] react-native-GPUImage

![](https://img.shields.io/badge/license-MIT-000000.svg)
[![npm](https://img.shields.io/npm/dm/wj-react-native-gpuimage.svg)](https://www.npmjs.com/package/wj-react-native-gpuimage)
[![npm](https://img.shields.io/npm/v/wj-react-native-gpuimage.svg)](https://www.npmjs.com/package/wj-react-native-gpuimage)
![](https://img.shields.io/badge/platform-react--native-brightgreen.svg)

GPUImage Component for React Native

Inspired by [GPUImage](https://github.com/BradLarson/GPUImage) and [GPUImage for Android](https://github.com/CyberAgent/android-gpuimage)

[SHOWCASE](#user-content-showcase)

## DEPENDENCIES

- React-Native > 0.40
- gl-react
- gl-react-native

## DOC 

### INSTALL

1. `npm i gl-react --save`
2. `npm i gl-react-native --save`
3. `npm i gl-react-image --save` [optional, but recommanded]
4. `npm i wj-react-native-gpuimage --save`
5. edit file *android/src/main/java/com/projectseptember/RNGL/RNGLContext.java* in *node_module/gl-react-native/* as showed in [NOTE](#user-content-note) part

### USAGE

* BASIC

```
import * as GPUImage from "wj-react-native-gpuimage";

...

render() {
    return (
        <Surface width={300} height={300}>
             <GPUImage.GPUImageColorInvertFilter>
                 <GLImage
                     source={{url: "https://avatars3.githubusercontent.com/u/3667305?v=3&s=460", width: 300, height: 300}}
                     resizeMode="stretch"
                 />
             </GPUImage.GPUImageColorInvertFilter>
        </Surface>
    );
}
...
```

* CUSTOM SHADER

```
import * as GPUImage from "wj-react-native-gpuimage";
...
render() {
    return (
        <GPUImage.GPUImageFilter
             frag={`
precision highp float;
varying vec2 v_texCoord;
uniform float u_red;
void main() {
    gl_FragColor = vec4(u_red, v_texCoord.x, v_texCoord.y, 1.0);
}
             `}
             uniforms={{
                 u_red: 0.5,
             }}
        >
        </GPUImage.GPUImageFilter>
    );
}
...
```

* GROUP

```
import * as GPUImage from "wj-react-native-gpuimage";
...
render() {
    return (
        <Surface width={300} height={300}>
             <GPUImage.GPUImageColorInvertFilter>
                 <GPUImage.GPUImageHalftoneFilter fractionalWidthOfPixel={0.2}>
                     <GLImage
                         source={{url: "https://avatars3.githubusercontent.com/u/3667305?v=3&s=460", width: 300, height: 300}}
                         resizeMode="stretch"
                     />
                 </GPUImage.GPUImageHalftoneFilter>
             </GPUImage.GPUImageColorInvertFilter>
        </Surface>
    );
}
...
```

Check [example](https://github.com/CubeSugar/react-native-GPUImage/tree/master/example) for more details.

1. `cd example`
2. `npm install`
3. edit *RNGLContext.java*
4. `react-native run-android` or `react-native run-ios`

## NOTE
- vertex shader support for Android

```
// gl-react-native proj
// android/src/main/java/com/projectseptember/RNGL/RNGLContext.java
public void addShader (final Integer id, final ReadableMap config, final Callback onCompile) {
    final String frag = config.getString("frag");
    final String name = config.getString("name");
    //shaders.put(id, new GLShaderData(name, STATIC_VERT, frag));
    String vert = STATIC_VERT;
    if (config.hasKey("vert")) {
        vert = config.getString("vert");
    }
    shaders.put(id, new GLShaderData(name, vert, frag));
    if (onCompile != null) {
        onCompileCallbacks.put(id, onCompile);
    }
}
```

## SHOWCASE

![PixelateEffect](https://github.com/CubeSugar/react-native-GPUImage/blob/master/example/showcase/pixelate.png?raw=true)
![HalftoonEffect](https://github.com/CubeSugar/react-native-GPUImage/blob/master/example/showcase/halftoon.png?raw=true)
![PolkaDotEffect](https://github.com/CubeSugar/react-native-GPUImage/blob/master/example/showcase/polkadot.png?raw=true)
![VignetteEffect](https://github.com/CubeSugar/react-native-GPUImage/blob/master/example/showcase/vignette.png?raw=true)
![CannyEdgeDetect](https://github.com/CubeSugar/react-native-GPUImage/blob/master/example/showcase/cannyedgedetection.png?raw=true)

## PROGRESS

#### Filters
- [x] GPUImageFilter
- [x] GPUImageTwoInputFilter
- [x] GPUImage3x3TextureSamplingFilter

#### Color processing
- [x] GPUImageBrightnessFilter
- [ ] GPUImageLevelsFilter
- [ ] GPUImageExposureFilter
- [x] GPUImageContrastFilter
- [x] GPUImageSaturationFilter
- [x] GPUImageGammaFilter
- [x] GPUImageColorMatrixFilter
- [x] GPUImageRGBFilter
- [ ] GPUImageHSBFilter
- [ ] GPUImageHueFilter
- [x] GPUImageColorInvertFilter
- [x] GPUImageGrayscaleFilter
- [x] GPUImageLuminanceThresholdFilter

#### Image processing
- [x] GPUImage3x3ConvolutionFilter
- [x] GPUImageLocalBinaryPatternFilter
- [x] GPUImageColorLocalBinaryPatternFilter
- [x] GPUImageSobelEdgeDetectionFilter
- [x] GPUImageThresholdEdgeDetectionFilter
- [x] GPUImageDirectionalSobelEdgeDetectionFilter
- [x] GPUImageDirectionalNonMaximumSuppressionFilter
- [x] GPUImageWeakPixelInclusionFilter
- [x] GPUImageCannyEdgeDetectionFilter

#### Blends
- [x] GPUImageSourceOverBlendFilter
- [x] GPUImageColorBurnBlendFilter
- [x] GPUImageColorDodgeBlendFilter
- [x] GPUImageDarkenBlendFilter
- [x] GPUImageDifferenceBlendFilter
- [x] GPUImageDissolveBlendFilter
- [x] GPUImageExclusionBlendFilter
- [x] GPUImageHardLightBlendFilter
- [x] GPUImageSoftLightBlendFilter
- [x] GPUImageLightenBlendFilter
- [x] GPUImageAddBlendFilter
- [x] GPUImageSubstractBlendFilter
- [x] GPUImageDivideBlendFilter
- [x] GPUImageMultiplyBlendFilter
- [x] GPUImageOverlayBlendFilter
- [x] GPUImageScreenBlendFilter
- [x] GPUImageChromaKeyBlendFilter
- [x] GPUImageAlphaBlendFilter
- [x] GPUImageNormalBlendFilter
- [x] GPUImageColorBlendFilter
- [x] GPUImageHueBlendFilter
- [x] GPUImageSaturationBlendFilter
- [x] GPUImageLuminosityBlendFilter
- [x] GPUImageLinearBurnBlendFilter
- [x] GPUImageMaskFilter

#### Effects
- [x] GPUImagePixellateFilter
- [x] GPUImagePolarPixellateFilter
- [x] GPUImagePixellatePositionFilter
- [x] GPUImagePolkaDotFilter
- [x] GPUImageHalftoneFilter
- [x] GPUImageCrosshatchFilter
- [x] GPUImageSketchFilter
- [x] GPUImageThresholdSketchFilter
- [x] GPUImageEmbossFilter
- [x] GPUImageToonFilter
- [x] GPUImageVignetteFilter