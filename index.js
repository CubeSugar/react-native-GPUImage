'use strict';

// Filters
import {GPUImageFilter}                                 from './framework/Filters/GPUImageFilter';
import {GPUImageTwoInputFilter}                         from './framework/Filters/GPUImageTwoInputFilter';
import {GPUImage3x3TextureSamplingFilter}               from './framework/Filters/GPUImage3x3TextureSamplingFilter';

// Blends
import {GPUImageSourceOverBlendFilter}                  from './framework/Filters/Blends/GPUImageSourceOverBlendFilter';
import {GPUImageColorBurnBlendFilter}                   from './framework/Filters/Blends/GPUImageColorBurnBlendFilter';
import {GPUImageColorDodgeBlendFilter}                  from './framework/Filters/Blends/GPUImageColorDodgeBlendFilter';
import {GPUImageDarkenBlendFilter}                      from './framework/Filters/Blends/GPUImageDarkenBlendFilter';
import {GPUImageDifferenceBlendFilter}                  from './framework/Filters/Blends/GPUImageDifferenceBlendFilter';
import {GPUImageDissolveBlendFilter}                    from './framework/Filters/Blends/GPUImageDissolveBlendFilter';
import {GPUImageExclusionBlendFilter}                   from './framework/Filters/Blends/GPUImageExclusionBlendFilter';
import {GPUImageHardLightBlendFilter}                   from './framework/Filters/Blends/GPUImageHardLightBlendFilter';
import {GPUImageSoftLightBlendFilter}                   from './framework/Filters/Blends/GPUImageSoftLightBlendFilter';
import {GPUImageLightenBlendFilter}                     from './framework/Filters/Blends/GPUImageLightenBlendFilter';
import {GPUImageAddBlendFilter}                         from './framework/Filters/Blends/GPUImageAddBlendFilter';
import {GPUImageSubtractBlendFilter}                    from './framework/Filters/Blends/GPUImageSubtractBlendFilter';
import {GPUImageDivideBlendFilter}                      from './framework/Filters/Blends/GPUImageDivideBlendFilter';
import {GPUImageMultiplyBlendFilter}                    from './framework/Filters/Blends/GPUImageMultiplyBlendFilter';
import {GPUImageOverlayBlendFilter}                     from './framework/Filters/Blends/GPUImageOverlayBlendFilter';
import {GPUImageScreenBlendFilter}                      from './framework/Filters/Blends/GPUImageScreenBlendFilter';
import {GPUImageChromaKeyBlendFilter}                   from './framework/Filters/Blends/GPUImageChromaKeyBlendFilter';
import {GPUImageAlphaBlendFilter}                       from './framework/Filters/Blends/GPUImageAlphaBlendFilter';
import {GPUImageNormalBlendFilter}                      from './framework/Filters/Blends/GPUImageNormalBlendFilter';
import {GPUImageColorBlendFilter}                       from './framework/Filters/Blends/GPUImageColorBlendFilter';
import {GPUImageHueBlendFilter}                         from './framework/Filters/Blends/GPUImageHueBlendFilter';
import {GPUImageSaturationBlendFilter}                  from './framework/Filters/Blends/GPUImageSaturationBlendFilter';
import {GPUImageLuminosityBlendFilter}                  from './framework/Filters/Blends/GPUImageLuminosityBlendFilter';
import {GPUImageLinearBurnBlendFilter}                  from './framework/Filters/Blends/GPUImageLinearBurnBlendFilter';
import {GPUImageMaskFilter}                             from './framework/Filters/Blends/GPUImageMaskFilter';

// Color
import {GPUImageGrayscaleFilter}                        from './framework/Filters/ColorProcessing/GPUImageGrayscaleFilter';
import {GPUImageColorInvertFilter}                      from './framework/Filters/ColorProcessing/GPUImageColorInvertFilter';
import {GPUImageLuminanceThresholdFilter}               from './framework/Filters/ColorProcessing/GPUImageLuminanceThresholdFilter';
import {GPUImageBrightnessFilter}                       from './framework/Filters/ColorProcessing/GPUImageBrightnessFilter';
import {GPUImageContrastFilter}                         from './framework/Filters/ColorProcessing/GPUImageContrastFilter';
import {GPUImageSaturationFilter}                       from './framework/Filters/ColorProcessing/GPUImageSaturationFilter';
import {GPUImageGammaFilter}                            from './framework/Filters/ColorProcessing/GPUImageGammaFilter';
import {GPUImageColorMatrixFilter}                      from './framework/Filters/ColorProcessing/GPUImageColorMatrixFilter';
import {GPUImageRGBFilter}                              from './framework/Filters/ColorProcessing/GPUImageRGBFilter';

// Effects
import {GPUImagePixelateFilter}                         from './framework/Filters/Effects/GPUImagePixelateFilter';
import {GPUImagePixelatePositionFilter}                 from './framework/Filters/Effects/GPUImagePixelatePositionFilter';
import {GPUImagePolarPixelateFilter}                    from './framework/Filters/Effects/GPUImagePolarPixelateFilter';
import {GPUImagePolkaDotFilter}                         from './framework/Filters/Effects/GPUImagePolkaDotFilter';
import {GPUImageHalftoneFilter}                         from './framework/Filters/Effects/GPUImageHalftoneFilter';
import {GPUImageCrosshatchFilter}                       from './framework/Filters/Effects/GPUImageCrosshatchFilter';
import {GPUImageSketchFilter}                           from './framework/Filters/Effects/GPUImageSketchFilter';
import {GPUImageThresholdSketchFilter}                  from './framework/Filters/Effects/GPUImageThresholdSketchFilter';
import {GPUImageEmbossFilter}                           from './framework/Filters/Effects/GPUImageEmbossFilter';
import {GPUImageToonFilter}                             from './framework/Filters/Effects/GPUImageToonFilter';
import {GPUImageVignetteFilter}                         from './framework/Filters/Effects/GPUImageVignetteFilter';

// Image
import {GPUImage3x3ConvolutionFilter}                   from './framework/Filters/ImageProcessing/GPUImage3x3ConvolutionFilter';
import {GPUImageSobelEdgeDetectionFilter}               from './framework/Filters/ImageProcessing/GPUImageSobelEdgeDetectionFilter';
import {GPUImageThresholdEdgeDetectionFilter}           from './framework/Filters/ImageProcessing/GPUImageThresholdEdgeDetectionFilter';
import {GPUImageSingleComponentGaussianBlurFilter}      from './framework/Filters/ImageProcessing/GPUImageSingleComponentGaussianBlurFilter';
import {GPUImageDirectionalSobelEdgeDetectionFilter}    from './framework/Filters/ImageProcessing/GPUImageDirectionalSobelEdgeDetectionFilter';
import {GPUImageDirectionalNonMaximumSuppressionFilter} from './framework/Filters/ImageProcessing/GPUImageDirectionalNonMaximumSuppressionFilter';
import {GPUImageWeakPixelInclusionFilter}               from './framework/Filters/ImageProcessing/GPUImageWeakPixelInclusionFilter';
import {GPUImageCannyEdgeDetectionFilter}               from './framework/Filters/ImageProcessing/GPUImageCannyEdgeDetectionFilter';
import {GPUImageLocalBinaryPatternFilter}               from './framework/Filters/ImageProcessing/GPUImageLocalBinaryPatternFilter';
import {GPUImageColorLocalBinaryPatternFilter}          from './framework/Filters/ImageProcessing/GPUImageColorLocalBinaryPatternFilter';

export {
    GPUImageFilter,
    GPUImageTwoInputFilter,
    GPUImage3x3TextureSamplingFilter,

    GPUImageSourceOverBlendFilter,
    GPUImageColorBurnBlendFilter,
    GPUImageColorDodgeBlendFilter,
    GPUImageDarkenBlendFilter,
    GPUImageDifferenceBlendFilter,
    GPUImageDissolveBlendFilter,
    GPUImageExclusionBlendFilter,
    GPUImageHardLightBlendFilter,
    GPUImageSoftLightBlendFilter,
    GPUImageLightenBlendFilter,
    GPUImageAddBlendFilter,
    GPUImageSubtractBlendFilter,
    GPUImageDivideBlendFilter,
    GPUImageMultiplyBlendFilter,
    GPUImageOverlayBlendFilter,
    GPUImageScreenBlendFilter,
    GPUImageChromaKeyBlendFilter,
    GPUImageAlphaBlendFilter,
    GPUImageNormalBlendFilter,
    GPUImageColorBlendFilter,
    GPUImageHueBlendFilter,
    GPUImageSaturationBlendFilter,
    GPUImageLuminosityBlendFilter,
    GPUImageLinearBurnBlendFilter,
    GPUImageMaskFilter,

    GPUImageGrayscaleFilter,
    GPUImageColorInvertFilter,
    GPUImageLuminanceThresholdFilter,
    GPUImageBrightnessFilter,
    GPUImageContrastFilter,
    GPUImageSaturationFilter,
    GPUImageGammaFilter,
    GPUImageColorMatrixFilter,
    GPUImageRGBFilter,

    GPUImagePixelateFilter,
    GPUImagePixelatePositionFilter,
    GPUImagePolarPixelateFilter,
    GPUImagePolkaDotFilter,
    GPUImageHalftoneFilter,
    GPUImageCrosshatchFilter,
    GPUImageSketchFilter,
    GPUImageThresholdSketchFilter,
    GPUImageEmbossFilter,
    GPUImageToonFilter,
    GPUImageVignetteFilter,

    GPUImage3x3ConvolutionFilter,
    GPUImageSobelEdgeDetectionFilter,
    GPUImageThresholdEdgeDetectionFilter,
    GPUImageSingleComponentGaussianBlurFilter,
    GPUImageDirectionalSobelEdgeDetectionFilter,
    GPUImageDirectionalNonMaximumSuppressionFilter,
    GPUImageWeakPixelInclusionFilter,
    GPUImageCannyEdgeDetectionFilter,
    GPUImageLocalBinaryPatternFilter,
    GPUImageColorLocalBinaryPatternFilter,
}
