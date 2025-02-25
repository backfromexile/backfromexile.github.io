import{w as ln,c as H}from"./path-CbwjOpE9.js";import{B as rn,D as M,E as D,F as an,G as y,H as on,I as j,J as _,K as un,L as t,M as sn,N as tn,O as fn}from"./index-c7PSqJWs.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,O,E,v,A,J,r){var q=O-l,i=E-h,n=J-v,m=r-A,a=m*q-n*i;if(!(a*a<y))return a=(n*(h-A)-m*(l-v))/a,[l+a*q,h+a*i]}function W(l,h,O,E,v,A,J){var r=l-O,q=h-E,i=(J?A:-A)/j(r*r+q*q),n=i*q,m=-i*r,a=l+n,s=h+m,f=O+n,c=E+m,K=(a+f)/2,o=(s+c)/2,p=f-a,g=c-s,R=p*p+g*g,T=v-A,P=a*c-f*s,B=(g<0?-1:1)*j(tn(0,T*T*R-P*P)),F=(P*g-p*B)/R,G=(-P*p-g*B)/R,w=(P*g+p*B)/R,d=(-P*p+g*B)/R,x=F-K,e=G-o,u=w-K,L=d-o;return x*x+e*e>u*u+L*L&&(F=w,G=d),{cx:F,cy:G,x01:-n,y01:-m,x11:F*(v/T-1),y11:G*(v/T-1)}}function vn(){var l=cn,h=yn,O=H(0),E=null,v=gn,A=mn,J=pn,r=null,q=ln(i);function i(){var n,m,a=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=A.apply(this,arguments)-an,K=un(c-f),o=c>f;if(r||(r=n=q()),s<a&&(m=s,s=a,a=m),!(s>y))r.moveTo(0,0);else if(K>on-y)r.moveTo(s*M(f),s*D(f)),r.arc(0,0,s,f,c,!o),a>y&&(r.moveTo(a*M(c),a*D(c)),r.arc(0,0,a,c,f,o));else{var p=f,g=c,R=f,T=c,P=K,B=K,F=J.apply(this,arguments)/2,G=F>y&&(E?+E.apply(this,arguments):j(a*a+s*s)),w=_(un(s-a)/2,+O.apply(this,arguments)),d=w,x=w,e,u;if(G>y){var L=sn(G/a*D(F)),z=sn(G/s*D(F));(P-=L*2)>y?(L*=o?1:-1,R+=L,T-=L):(P=0,R=T=(f+c)/2),(B-=z*2)>y?(z*=o?1:-1,p+=z,g-=z):(B=0,p=g=(f+c)/2)}var N=s*M(p),S=s*D(p),C=a*M(T),Q=a*D(T);if(w>y){var U=s*M(g),V=s*D(g),X=a*M(R),Y=a*D(R),I;if(K<rn)if(I=dn(N,S,X,Y,U,V,C,Q)){var Z=N-I[0],$=S-I[1],k=U-I[0],b=V-I[1],nn=1/D(fn((Z*k+$*b)/(j(Z*Z+$*$)*j(k*k+b*b)))/2),en=j(I[0]*I[0]+I[1]*I[1]);d=_(w,(a-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}B>y?x>y?(e=W(X,Y,N,S,s,x,o),u=W(U,V,C,Q,s,x,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),r.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(r.moveTo(N,S),r.arc(0,0,s,p,g,!o)):r.moveTo(N,S),!(a>y)||!(P>y)?r.lineTo(C,Q):d>y?(e=W(C,Q,U,V,a,-d,o),u=W(N,S,X,Y,a,-d,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,a,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),r.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):r.arc(0,0,a,T,R,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[M(m)*n,D(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:H(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:H(+n),i):h},i.cornerRadius=function(n){return arguments.length?(O=typeof n=="function"?n:H(+n),i):O},i.padRadius=function(n){return arguments.length?(E=n==null?null:typeof n=="function"?n:H(+n),i):E},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:H(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:H(+n),i):A},i.padAngle=function(n){return arguments.length?(J=typeof n=="function"?n:H(+n),i):J},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as a};
