uniform vec2 iResolution;
uniform vec2 mouse;
uniform float smallestRatio;
uniform float s;
uniform float c;
#define iter 10
#define a 3.

/*
I created this shader via ShaderToy and imported it into here by setting
up appropriate conversions for ShaderToy's uniforms to the standard OpenGL ones
*Note: Since writing above, i've changed some things to attempt to optimize it

If you're interested, here's a link to an older version of the shader:
https://www.shadertoy.com/view/WfGBDK
*/

float plot(vec2 st, float y) {
    y-= st.y;
    return smoothstep( 1., 0., abs(y)/(a*fwidth(y)) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = (2.0*fragCoord.xy -iResolution.xy)*smallestRatio;

    float m = 0.;
    float radialDistort = 3.5/length(uv-mouse);
    
    for (int i = 0; i < iter; i++) {
        float fi = float(i);
        float wset = 0.5*(sin(uv.x*fi)*c + cos(uv.x*fi)*s + 5.)/(max(radialDistort, fi)+5.)+2.*fi/float(iter)-1.;
        m += plot(uv, wset);
    }

    fragColor = m * vec4(fragCoord.x/iResolution.x, (uv.y+1.)/2., 0., m) + vec4(0., 0., m*radialDistort*0.1, 0.); 
}

void main()
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}