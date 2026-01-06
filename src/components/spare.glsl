const float iter = 5.;
const float a = 20.;

float plot(vec2 st, float y){
  return 1.-abs((y-st.y)*a);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = (2.0*fragCoord.xy -iResolution.xy)/min(iResolution.x, iResolution.y);
    vec2 mouse = (2.0*iMouse.xy -iResolution.xy)/min(iResolution.x, iResolution.y);
    fragColor *= 0.;
 
   float m = 0.;
   float wset;
   float radialDistort = 0.1*(max(1.-(length(uv-mouse)), 0.01));
   
   for (float i = 1.; i < iter + 1.; i++) {
       wset = 0.3*sin(iTime+i*uv.x)/radialDistort;
       // m = min(m, abs(wset)/fwidth(wset));
       // fragColor += clamp(vec4(fragCoord, 0., 0) * plot(fragCoord, wset), 0.0, 1.0);
       m += clamp(plot(uv, wset), 0.0, 1.0);
   }
   fragColor = m * vec4(uv, 1.0, m) / 0.1*(max(1.-(length(uv-mouse)), 0.01));
   fragColor *= smoothstep(0.0, 1.0, m);
}