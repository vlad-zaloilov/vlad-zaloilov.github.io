uniform vec2 iResolution;
uniform vec3 iMouse;
uniform float iTime;
uniform float iTimeDelta;
/*
I created this shader via ShaderToy and imported it into here by setting
up appropriate conversions for ShaderToy's uniforms to the standard OpenGL ones

If you're interested, here's a link to an older version of the shader:
https://www.shadertoy.com/view/w3BfDd

TODO: Optimize shader, and figure out how to implement passthrough alpha transparency
Also, fix dynamic resizing
*/

float a = 0.005;
float b = 0.;
float c = 5.;

const int iter = 5;


float plot(vec2 st, float y, vec2 mouse){
  return min(floor((y)/(st.y)), 1.);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    vec2 mouse = iMouse.xy/iResolution.xy;

    vec2 uv = fragCoord/iResolution.xy;
    float wset[iter];
    
    for (int i = 0; i < iter; i++) {
        wset[i] = 0.3*sin(((float(i+5))*uv.x+iTime))*length(uv.x - mouse.x)+0.5;
    }
    
    
    float wplot[iter];
    float wplotcomplement[iter];
    
    for (int i = 0; i < iter; i++) {
        wplot[i] = plot(uv, wset[i]+a, mouse);
        wplotcomplement[i] = plot(uv, wset[i]-a, mouse);
    }
    
    float render = 0.;
    
    for (int i = 1; i < iter; i++) {
        render += (wplot[i]-wplotcomplement[i]);
    }
    
    vec3 hue = vec3(b, b, b) + vec3(uv.x, uv.y, 0.);
    
	vec3 colour = vec3(0., 0., 0.);
    
    for (int i = 0; i < iter; i++) {
        colour += hue*(wplot[i]-wplotcomplement[i]);
    }

    fragColor = vec4(colour, 1.0);
}

void main()
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}