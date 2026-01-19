uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
/*
I created this shader via ShaderToy and imported it into here by setting
up appropriate conversions for ShaderToy's uniforms to the standard OpenGL ones

If you're interested, here's a link to the shader:
https://www.shadertoy.com/view/WfGBDK
*/

const float iter = 10.;
const float a = 3.;

float plot(vec2 st, float y){
    y-= st.y;
    return smoothstep( 1., 0., (abs(y)/fwidth(y))/a );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float smallestRatio = 1./min(iResolution.x, iResolution.y);

    vec2 uv = (2.0*fragCoord.xy -iResolution.xy)*smallestRatio;
    vec2 mouse = (2.0*iMouse.xy-iResolution.xy)*smallestRatio;

    fragColor *= 0.;

    float m = 0.;
    float wset;
    float dist = length(uv-mouse);
    float radialDistort = 0.5/dist;
    
    for (float i = 1.; i < iter; i++) {
        wset = 0.5*(sin((uv.x*i)+iTime)+i)/(max((i*radialDistort), i)+5.)+0.5*i/iter-0.9;
        // m = min(m, abs(wset)/fwidth(wset));
        // fragColor += clamp(vec4(fragCoord, 0., 0) * plot(fragCoord, wset), 0.0, 1.0);
        m += clamp(plot(uv, wset), 0.0, 1.0);
    }

    fragColor = m * vec4(fragCoord.x/iResolution.x, (uv.y+1.)/2., 0., m) + vec4(0., 0., m*radialDistort, 0.); 
}

void main()
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}